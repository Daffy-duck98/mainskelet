const React = require('react');
const Layout = require('./Layout');

function Main({ title, user }) {
  return <Layout title={title} user={user} />;
}
module.exports = Main;
