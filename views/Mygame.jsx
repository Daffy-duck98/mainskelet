const React = require('react');

function Mygame({ games, user }) {
  return (
    <div>
      <h3>{games.title}</h3>
      <div className="block_img">
        <img src={games.img} alt="logo" />
      </div>
      <h6>{games.description}</h6>

      {user && user.id === games.user_id && (
        <div className="upDel">
          <a
            href={`/updateform/${games.id}`}
            className="update"
            data-id={games.id}
          >
            update
          </a>
          <a
            href={`/mylibrary/${games.id}`}
            className="delete"
            data-id={games.id}
          >
            delete
          </a>
        </div>
      )}
    </div>
  );
}

module.exports = Mygame;
