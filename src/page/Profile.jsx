
import React from 'react';
import ImgProfile from '../component/ImgProfile';
import MockupData from '../helper/MockupData';

export default function Profile () {
    let profile = MockupData.student_user;
   
    document.title = "Hồ sơ";

    const [showEdit,setShowEdit] = React.useState(false);
    const onClickEdit = () => setShowEdit(true);
    function onClickSave(){    
        setShowEdit(false);
    }
    
    const Show = () => (
        <div className="card mb-3">
                <div className="card-body">
                <div className="row">
                        <div className="col-sm-3">
                            <h6 className="mb-0">Họ tên</h6>
                        </div>
                        <div className="col-sm-9 text-secondary">
                        <input type="text" class="form-control input_profile" disabled defaultValue={profile.fullname}/>
                        
                        </div>
                    </div>
                    <hr/>
                    <div className="row">
                        <div className="col-sm-3">
                            <h6 className="mb-0">Email</h6>
                        </div>
                        <div className="col-sm-9 text-secondary">
                        <input type="text" class="form-control input_profile" disabled defaultValue={profile.email}/>
                        </div>
                    </div>
                    <hr/>
                    <div className="row">
                        <div className="col-sm-3">
                            <h6 className="mb-0">Số điện thoại</h6>
                        </div>
                        <div className="col-sm-9 text-secondary">
                        <input type="text" class="form-control input_profile" disabled defaultValue={profile.phone}/>
                        </div>
                    </div>
                    <hr/>
                    <div className="row">
                        <div className="col-sm-3">
                            <h6 className="mb-0">Địa chỉ</h6>
                        </div>
                        <div className="col-sm-9 text-secondary">
                        <input type="text" class="form-control input_profile" disabled defaultValue={profile.address}/>
                            
                        </div>
                    </div>
                    <hr/>
                    <div className="row">
                        <div className="col-sm-3">
                            <h6 className="mb-0">Ngoại Ngữ</h6>
                        </div>
                        <div className="col-sm-9 text-secondary">
                        <input type="text" class="form-control input_profile" disabled defaultValue={profile.languages}/>
                            
                        </div>
                    </div>
                    <hr/>
                    <div className="row">
                        <div className="col-sm-3">
                            <h6 className="mb-0">Thông tin chung</h6>
                        </div>
                        <div className="col-sm-9 text-secondary">
                        <textarea type="text" class="form-control input_profile" disabled defaultValue={profile.about} rows="7"/>
                            
                        </div>
                    </div>
                    <hr/>
                    <div className="row">
                        <div className="col-sm-12">
                            <a className="btn btn-info " target="__blank" onClick={onClickEdit}>Edit</a>
                        </div>
                    </div>
                </div>
            
            </div>
    );

    const Edit = () => (
        <div className="card mb-3">
                <div className="card-body">
                    <div className="row">
                        <div className="col-sm-3">
                            <h6 className="mb-0">Họ tên</h6>
                        </div>
                        <div className="col-sm-9 text-secondary">
                        <input type="text" class="form-control"  required defaultValue={profile.fullname}/>
                        
                        </div>
                    </div>
                    <hr/>
                    <div className="row">
                        <div className="col-sm-3">
                            <h6 className="mb-0">Email</h6>
                        </div>
                        <div className="col-sm-9 text-secondary">
                        <input type="text" class="form-control" required defaultValue={profile.email}/>
                        </div>
                    </div>
                    <hr/>
                    <div className="row">
                        <div className="col-sm-3">
                            <h6 className="mb-0">Số điện thoại</h6>
                        </div>
                        <div className="col-sm-9 text-secondary">
                        <input type="text" class="form-control" required defaultValue={profile.phone}/>
                        </div>
                    </div>
                    <hr/>
                    <div className="row">
                        <div className="col-sm-3">
                            <h6 className="mb-0">Địa chỉ</h6>
                        </div>
                        <div className="col-sm-9 text-secondary">
                        <input type="text" class="form-control" required defaultValue={profile.address}/>
                            
                        </div>
                    </div>
                    <hr/> <div className="row">
                        <div className="col-sm-3">
                            <h6 className="mb-0">Ngoại Ngữ</h6>
                        </div>
                        <div className="col-sm-9 text-secondary">
                        <input type="text" class="form-control"  defaultValue={profile.languages}/>
                            
                        </div>
                    </div>
                    <hr/>
                    <div className="row">
                        <div className="col-sm-3">
                            <h6 className="mb-0">Thông tin chung</h6>
                        </div>
                        <div className="col-sm-9 text-secondary">
                        <textarea type="text" class="form-control" defaultValue={profile.about} rows="7"/>
                            
                        </div>
                    </div>
                    <hr/>
                    <div class="row">
                        <div className="col-sm-12">
                            <a className="btn btn-primary " target="__blank" onClick={onClickSave}>Save Changes</a>
                        </div>
                    </div>
                </div>
            
            </div>
    );

    return (
        <div className="container">
            <div className="main-body">
            <div className="gutters-sm row" >
            <div className="col-md-4 mb-3">
              <ImgProfile fullname = {profile.fullname} address = {profile.address}/>
             <div className="gutters-sm row" style={{marginLeft: "-8px",marginRight: "-8px"}}>
                <div className="col-sm-6 mb-3">
                  <div className="card h-100">
                    <div className="card-body">
                      <h6 className="d-flex align-items-center mb-3"><i className="material-icons text-info mr-2">Công việc đã ứng tuyển</i></h6>
                      <h6>12</h6>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 mb-3">
                  <div className="card h-100">
                    <div className="card-body">
                    <h6 className="d-flex align-items-center mb-3"><i className="material-icons text-info mr-2">Công việc đã được chấp nhận</i></h6>
                      <h6>2</h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-8">
              
                  {showEdit ? <Edit/> : <Show/>}
                  
            </div>
          </div>

        </div>
    </div>

    );
    
}