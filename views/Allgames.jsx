const React = require('react');
const Layout = require('./Layout');

function Allgames({ games }) {
  return (
    <div className="cardGame">
      <div>
        <h3>{games.title}</h3>
      </div>
      <div className="game-img">
        <img src={games.img} alt="logo" />
      </div>
      <div className="description">{games.description}</div>
    </div>
  );
}
module.exports = Allgames;
