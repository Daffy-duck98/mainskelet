const React = require('react');
const Layout = require('./Layout');

function Signup({}) {
  return (
    <Layout>
      <form action="/signup" method="post" id="signup_forma">
        <div>
          <p className="tex">Имя пользователя</p>
          <input type="text" name="name" placeholder="  Name" />
        </div>
        <div>
          <p className="tex">Логин</p>
          <input type="text" name="login" placeholder="  LogIn" />
        </div>
        <div className="mb-3">
          <p className="tex">Адрес электронной почты</p>
          <input type="email" name="email" placeholder="  Email" />
        </div>
        <div>
          <p className="tex">Пароль</p>
          <input type="password" name="password" placeholder="  password" />
        </div>
        <div>
          <p className="tex">Введите еще раз пароль</p>
          <input
            type="password"
            name="password2"
            placeholder="  repeat password"
          />
        </div>
        <div className="send">
          <button type="submit">Отправить</button>
        </div>
        <p className="tex" id="message" />
      </form>
    </Layout>
  );
}

module.exports = Signup;
