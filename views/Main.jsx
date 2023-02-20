const React = require('react');
const Layout = require('./Layout');
const Allgames = require('./Allgames');

function Main({ title, user, games = [] }) {
  return (
    <Layout title={title} user={user}>
      <div className="myGames">
        {games.map((game) => (
          <Allgames key={game.id} games={game} />
        ))}
      </div>
    </Layout>
  );
}
module.exports = Main;
