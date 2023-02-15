const React = require('react');
const Layout = require('./Layout');

function Signup({}) {
  return (
    <Layout>
      <form action="/signup" method="post" id="signup_forma">
        <div className="mb-3">
          <label className="form-label">Имя пользователя</label>
          <input
            type="text"
            name="name"
            className="form-control"
            id="exampleInputEmail1"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Логин</label>
          <input type="text" name="login" className="form-control" />
        </div>
        <div className="mb-3">
          <label className="form-label">Адрес электронной почты</label>
          <input type="email" name="email" className="form-control" />
        </div>
        <div className="mb-3">
          <label className="form-label">Пароль</label>
          <input type="password" name="password" className="form-control" />
        </div>
        <div className="mb-3">
          <label className="form-label">Введите еще раз пароль</label>
          <input type="password" name="password2" className="form-control" />
        </div>
        <button type="submit" className="btn btn-primary">
          Отправить
        </button>
        <p id="message" />
      </form>
    </Layout>
  );
}

module.exports = Signup;
