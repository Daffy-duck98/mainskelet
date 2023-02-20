const React = require('react');

function Mygame({ games, user }) {
  return (
    <div className="cardGame">
      <div>
        <h3>{games.title}</h3>
      </div>
      <div className="game-img">
        <img src={games.img} alt="logo" />
      </div>
      <div className="description">{games.description}</div>

      {user && user.id === games.user_id && (
        <div>
          <button>
            <a href={`/edit/${games.id}`} data-id={games.id}>
              update
            </a>
          </button>
          <button>
            <a
              href={`/mygames/${games.id}`}
              data-id={games.id}
              className="delete"
            >
              delete
            </a>
          </button>
        </div>
      )}
    </div>
  );
}

module.exports = Mygame;
