import pool from "../data/db/connection.js";
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

const JWT_SECRET = "your_jwt_secret";

const getUsers = (request, response) => {
  pool.query('SELECT * FROM users ORDER BY id ASC', (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

const getUserById = (request, response) => {
  const id = parseInt(request.params.id)

  pool.query('SELECT * FROM users WHERE id = $1', [id], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}


const createUser = (request, response) => {
const { name, email, password } = request.body

// Modificar la consulta para incluir 'password'
pool.query( 'INSERT INTO users (name, email, password) VALUES ($1, $2, $3) RETURNING *',  [name, email, password], (error, results) => {
  if (error) { 
    throw error
  }
  response.status(201).send(`User added with ID: ${results.rows[0].id}`)
  })
}

const updateUser = (request, response) => { 
  const id = parseInt(request.params.id)
  const { name, email, password } = request.body
pool.query( 'UPDATE users SET name = $1, email = $2, password = $3 WHERE id = $4', [name, email, password, id], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).send(`User modified with ID: ${id}`) 
    })
}

const deleteUser = (request, response) => {
  const id = parseInt(request.params.id)

  pool.query('DELETE FROM users WHERE id = $1', [id], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).send(`User deleted with ID: ${id}`)
  })
}

const signIn = async (req, res) => {
    const { email, password } = req.body;

    try {
        const results = await pool.query('SELECT id, email, password FROM users WHERE email = $1', [email]);
        
        if (results.rows.length === 0) {
            return res.status(404).json({ message: "User not found" });
        }
        const user = results.rows[0];
        const isPasswordValid = await bcrypt.compare(password, user.password);
        
        if (!isPasswordValid) {
            return res.status(400).json({ message: "Invalid credentials" });
        }
        const token = jwt.sign({ id: user.id }, JWT_SECRET, { expiresIn: "1h" });
        res.status(200).json({ token });

    } catch (error) {
        console.error("Error during sign-in:", error);
        res.status(500).json({ message: "Internal server error" });
    }
};
export default {
  getUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
  signIn
}