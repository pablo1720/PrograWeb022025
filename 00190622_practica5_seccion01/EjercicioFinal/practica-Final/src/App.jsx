import CardSoccerPlayer from './Components/CardSoccerPlayer.jsx';
import { soccerPlayer } from './Data/soccerPlayer.js';

function App() {
  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h1>Jugadores de futbol Profesionales</h1>
      {soccerPlayer.map((soccerPlayer, index) => (
        <CardSoccerPlayer
          key={index}
          name={soccerPlayer.name}
          image={soccerPlayer.image}
          profession={soccerPlayer.profession}
          awards={soccerPlayer.awards}
          discoveries={soccerPlayer.discoveries}
        />
      ))}
    </div>
  );
}

export default App;
