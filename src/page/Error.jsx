import React from 'react';

export default class Job extends React.Component {

  render() {
    document.title = "404 Page"

    return (
      <div className="error-page">
        <div className="row">
          <div className="col-md-4 align-self-center">
          </div>
          <div className="col-md-4 align-self-center">
            <h1>404</h1>
            <h2>Không truy cập được.</h2>
            <p>Trang bạn tìm không tồn tại.
              Hãy kiểm tra lại mình đã nhập đúng URL, hoặc nhấn vào button để quay về trang chủ.
            </p>
            <form action="/">
              <button className="btn green">HOME</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}