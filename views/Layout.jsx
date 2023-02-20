const React = require('react');
const Navbar = require('./Navbar');

function Layout({ title, children, user }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <title>{title}</title>
        <link rel="stylesheet" href="/styles/style.css" />
        <script defer src="/scripts/login.js" />
        <script defer src="/scripts/signup.js" />
        <script defer src="/scripts/edit.js" />
        <script defer src="/scripts/add.js" />
        <script defer src="/scripts/delete.js" />
      </head>
      <body>
        <Navbar user={user} />
        {children}
      </body>
    </html>
  );
}

module.exports = Layout;
