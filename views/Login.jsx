const React = require('react');
const Layout = require('./Layout');

function Login({}) {
  return (
    <Layout>
      <form action="/login" method="post" id="login_forma">
        <p id="message" />
        <div>
          <label>Логин</label>
          <input type="text" name="login" />
        </div>
        <div>
          <label>Пароль</label>
          <input type="password" name="password" />
        </div>
        <button type="submit">Отправить</button>
      </form>
    </Layout>
  );
}
module.exports = Login;
