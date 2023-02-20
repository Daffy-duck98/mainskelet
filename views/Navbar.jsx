const React = require('react');

function Navbar({ user }) {
  return (
    <div className="navbar">
      <div className="box">
        <a href="/">HOME</a>
      </div>
      {user ? (
        <div className="navbar-box">
          <div className="box box-name">
            <h2>Welocom, {user.name}</h2>
          </div>
          <div className="box">
            <a href="/mygames">My Games</a>
          </div>
          <div className="box">
            <a href="/logout">Log Out</a>
          </div>
        </div>
      ) : (
        <div className="navbar-box">
          <div className="box">
            <a href="/signup">Sign Up</a>
          </div>
          <div className="box">
            <a href="/login">Log In</a>
          </div>
        </div>
      )}
    </div>
  );
}

module.exports = Navbar;
