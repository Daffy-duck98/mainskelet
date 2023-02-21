const React = require('react');
const Layout = require('./Layout');

function Login({}) {
  return (
    <Layout>
      <form action="/login" method="post" id="login_forma">
        <div>
          <p className="tex">Логин</p>
          <input type="text" name="login" />
        </div>
        <div>
          <p className="tex">Пароль</p>
          <input type="password" name="password" />
        </div>
        <div className="send">
          <button type="submit">Отправить</button>
        </div>
        <p className="tex" id="message" />
      </form>
    </Layout>
  );
}
module.exports = Login;
