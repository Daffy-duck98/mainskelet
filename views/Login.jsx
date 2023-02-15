const React = require('react');
const Layout = require('./Layout');

function Login({}) {
  return (
    <Layout>
      <form action="/login" method="post" id="login_forma">
        <p id="message" />
        <div className="mb-3">
          <label className="form-label">Логин</label>
          <input type="text" name="login" className="form-control" />
        </div>
        <div className="mb-3">
          <label className="form-label">Пароль</label>
          <input type="password" name="password" className="form-control" />
        </div>
        <button type="submit" className="btn btn-primary">
          Отправить
        </button>
      </form>
    </Layout>
  );
}
module.exports = Login;
