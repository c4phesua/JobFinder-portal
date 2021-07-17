
import React from 'react';
import ImgProfile from '../../component/ImgProfile';
import CssBaseline from '@material-ui/core/CssBaseline';
import { useStylesProfile } from '../../utils/UtilsFunc';
import 'react-tabs/style/react-tabs.css';

export default function StudentDetail({ student }) {



  const classes = useStylesProfile();


  return (
    <React.Fragment>
      <CssBaseline />
      <main className={classes.layout}>
        <div className="container">
          <div className="main-body">
            <div className="gutters-sm row" >
              <div className="col-md-4 mb-3">
                <ImgProfile fullname={student.fullname} address={student.address} />
              </div>
              <div className="col-md-8">

                <div className="card mb-3" style={{ minHeight: '300px' }}>
                  <div className="card-body">
                    <div className="row">
                      <div className="col-sm-3">
                        <h6 className="mb-0">Họ tên</h6>
                      </div>

                      <div class="col-sm-9 text-secondary">
                        {student.fullname}
                      </div>
                    </div>
                    <hr />
                    <div className="row">
                      <div className="col-sm-3">
                        <h6 className="mb-0">Email</h6>
                      </div>
                      <div className="col-sm-9 text-secondary">
                        {student.email}
                      </div>
                    </div>
                    <hr />
                    <div className="row">
                      <div className="col-sm-3">
                        <h6 className="mb-0">Số điện thoại</h6>
                      </div>
                      <div className="col-sm-9 text-secondary">
                        {student.phone}
                      </div>
                    </div>
                    <hr />
                    <div className="row">
                      <div className="col-sm-3">
                        <h6 className="mb-0">Địa chỉ</h6>
                      </div>
                      <div className="col-sm-9 text-secondary">
                        {student.address}

                      </div>
                    </div>
                    <hr />
                    <div className="row">
                      <div className="col-sm-3">
                        <h6 className="mb-0">Trường Đại Học</h6>
                      </div>
                      <div className="col-sm-9 text-secondary">
                        {student.school}
                      </div>
                    </div>
                    <hr />
                    <div className="row">
                      <div className="col-sm-3">
                        <h6 className="mb-0">Chuyên ngành</h6>
                      </div>
                      <div className="col-sm-9 text-secondary">

                      </div>
                    </div>
                    <hr />
                    <div className="row">
                      <div className="col-sm-3">
                        <h6 className="mb-0">Ngoại Ngữ</h6>
                      </div>
                      <div className="col-sm-9 text-secondary">
                        {student.languages}

                      </div>
                    </div>
                    <hr />
                    <div className="row">
                      <div className="col-sm-3">
                        <h6 className="mb-0">Thông tin chung</h6>
                      </div>
                      <div className="col-sm-9 text-secondary">

                      </div>
                    </div>
                  </div>

                </div>
              </div>

            </div>

          </div>

        </div>
      </main>
    </React.Fragment>
  );

}