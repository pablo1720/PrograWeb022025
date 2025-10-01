import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {getImageUrl} from './utils.js';

function Avatar({ person, size}){
  return(
    <img
    className="avatar"
    src={getImageUrl(person)}
    alt={person.name}
    width={size}
    height={size}
    />
  );
}

export default function Profile() {
  return(
    <div>
      <Avatar
      size={100}
      person={{
        name:'Katusuko Surahashi',
        imageId: 'Yge0qp2'
      }}
      />
      <Avatar
      size={80}
      person={{
        name:'Aklily Lemma',
        imageId: 'OkS67lh'
      }}
      />
      <Avatar
      size={500}
      person={{
        name:'Lin Lanying',
        imageId: '1bX5QH8'
      }}
      />
      </div>
  );
}

