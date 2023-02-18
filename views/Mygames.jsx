const React = require('react');
const Layout = require('./Layout');
const Mygame = require('./Mygame');

function Mygames({ title, user, games }) {
  return (
    <Layout title={title} user={user}>
      <div className="allGames">
        {games.map((game) => (
          <Mygame key={game.id} games={game} user={user} />
        ))}
      </div>
    </Layout>
  );
}

module.exports = Mygames;
