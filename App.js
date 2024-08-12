import React from 'react';
import { useSelector } from 'react-redux';
import Login from './components/Login';
import Game from './components/Game';
import Leaderboard from './components/Leaderboard';

function App() {
  const user = useSelector((state) => state.game.user);

  return (
    <div className="App">
      {user ? (
        <>
          <Game />
          <Leaderboard />
        </>
      ) : (
        <Login />
      )}
    </div>
  );
}

export default App;
