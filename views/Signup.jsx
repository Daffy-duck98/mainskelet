const React = require('react');
const Layout = require('./Layout');

function Signup({}) {
  return (
    <Layout>
      <form action="/signup" method="post" id="signup_forma">
        <div>
          <label>Имя пользователя</label>
          <input type="text" name="name" id="exampleInputEmail1" />
        </div>
        <div>
          <label>Логин</label>
          <input type="text" name="login" />
        </div>
        <div className="mb-3">
          <label>Адрес электронной почты</label>
          <input type="email" name="email" />
        </div>
        <div>
          <label>Пароль</label>
          <input type="password" name="password" />
        </div>
        <div>
          <label>Введите еще раз пароль</label>
          <input type="password" name="password2" />
        </div>
        <button type="submit">Отправить</button>
        <p id="message" />
      </form>
    </Layout>
  );
}

module.exports = Signup;
