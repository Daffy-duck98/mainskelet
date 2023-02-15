const React = require('react');

function Navbar({ user }) {
  return (
    <ul className="nav justify-content-center">
      <li className="nav-item">
        <a className="nav-link" href="/">
          HOME
        </a>
      </li>
      {user ? (
        <>
          <li>
            <p>
              <h1>Welocom, {user.name}</h1>
            </p>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/logout">
              Log Out
            </a>
          </li>
        </>
      ) : (
        <>
          <li className="nav-item">
            <a className="nav-link" href="/signup">
              Sign Up
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/login">
              Log In
            </a>
          </li>
        </>
      )}
    </ul>
  );
}

module.exports = Navbar;
