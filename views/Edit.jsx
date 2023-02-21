const React = require('react');
const Layout = require('./Layout');

function Edit({ title, user, games = [] }) {
  return (
    <Layout title={title} user={user}>
      <div className="edit">
        <form action={`/edit/${games.id}`} id="edit_forma">
          <div>
            <input type="text" name="title" defaultValue={games.title} />
          </div>
          <div>
            <input type="text" name="img" defaultValue={games.img} />
          </div>
          <div>
            <input
              type="text"
              name="description"
              defaultValue={games.description}
            />
          </div>
          <div className="btn-send">
            <button type="submit">Send</button>
          </div>
        </form>
      </div>
    </Layout>
  );
}

module.exports = Edit;
