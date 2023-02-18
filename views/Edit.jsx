const React = require('react');
const Layout = require('./Layout');

function Edit({ title, user, games }) {
  return (
    <Layout title={title} user={user}>
      <div>
        <form action={`/edit/${games.id}`} id="edit_forma">
          <div>
            <input
              type="text"
              name="title"
              defaultValue={games.title}
              placeholder="title"
            />
          </div>
          <div>
            <input
              type="text"
              name="img"
              defaultValue={games.img}
              placeholder="img"
            />
          </div>
          <div>
            <input
              type="text"
              name="description"
              defaultValue={games.description}
              placeholder="description"
            />
          </div>
          <button type="submit">Send</button>
        </form>
      </div>
    </Layout>
  );
}

module.exports = Edit;
