const React = require('react');
const Layout = require('./Layout');
const Mygame = require('./Mygame');

function Mygames({ title, user, games = [] }) {
  return (
    <Layout title={title} user={user}>
      <div className="addForm">
        <form action="/mygames" method="post" id="add_forma">
          <div>
            <input type="text" name="title" placeholder="   title" />
            <input type="text" name="img" placeholder="  img" />
            <input type="text" name="description" placeholder="  description" />
          </div>
          <div className="btn-add">
            <button>Add</button>
          </div>
        </form>
      </div>
      <div className="myGames">
        {games.map((game) => (
          <Mygame key={game.id} games={game} user={user} />
        ))}
      </div>
    </Layout>
  );
}

module.exports = Mygames;
