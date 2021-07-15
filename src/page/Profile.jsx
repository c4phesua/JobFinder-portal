
import React from 'react';
import ImgProfile from '../component/ImgProfile';
import MockupData from '../helper/MockupData';
import CssBaseline from '@material-ui/core/CssBaseline';
import {useStylesProfile} from '../utils/UtilsFunc';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Job from '../component/JobApplied';
import JobApprove from '../component/JobApproved';
import 'react-tabs/style/react-tabs.css';

export default function Profile () {
    let profile = MockupData.student_user;
   
    document.title = `JobFinder - ${profile.fullname}`;

    const [showEdit,setShowEdit] = React.useState(false);
    const onClickEdit = () => setShowEdit(true);
    function onClickSave(){    
        setShowEdit(false);
    }

    const renderJob = (job) => {
        return (
          <Job job = { job } />
          
        );
      }
      const renderJobApprove = (job) => {
        return (
          <JobApprove job = { job } />
          
        );
      }
    
    const classes = useStylesProfile();
    
    const Show = () => (
        
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
                            <h6 className="mb-0">Trường Đại Học</h6>
                        </div>
                        <div className="col-sm-9 text-secondary">
                        <input type="text" class="form-control input_profile" disabled defaultValue=""/>
                            
                        </div>
                    </div>
                    <hr/>
                    <div className="row">
                        <div className="col-sm-3">
                            <h6 className="mb-0">Chuyên ngành</h6>
                        </div>
                        <div className="col-sm-9 text-secondary">
                        <input type="text" class="form-control input_profile" disabled defaultValue=""/>
                            
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
            
    );

    const Edit = () => (
        
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
                    <hr/>
                    <div className="row">
                        <div className="col-sm-3">
                            <h6 className="mb-0">Trường Đại Học</h6>
                        </div>
                        <div className="col-sm-9 text-secondary">
                        <input type="text" class="form-control" required defaultValue=""/>
                            
                        </div>
                    </div>
                    <hr/>
                    <div className="row">
                        <div className="col-sm-3">
                            <h6 className="mb-0">Chuyên ngành</h6>
                        </div>
                        <div className="col-sm-9 text-secondary">
                        <input type="text" class="form-control" required defaultValue=""/>
                            
                        </div>
                    </div>
                    <hr/>
                     <div className="row">
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
    );

    return (
        <React.Fragment>
        <CssBaseline />
        <main className={classes.layout}>
        <div className="container" style={{padding:"0px"}}>
            <div className="main-body">
            <div className="gutters-sm row" >
            <div className="col-md-4 mb-3">
              <ImgProfile fullname = {profile.fullname} address = {profile.address}/>
             <div className="gutters-sm row" style={{marginLeft: "-8px",marginRight: "-8px"}}>
                <div className="col-sm-6 mb-3">
                  <div className="card h-100">
                    <div className="card-body">
                      <h6 className="d-flex align-items-center mb-3" style={{color: "green"}}>Công việc đã ứng tuyển</h6>
                      <h6>{profile.job_applied.length}</h6>
                    </div>
                  </div>
                </div>

                <div className="col-sm-6 mb-3">
                  <div className="card h-100">
                    <div className="card-body">
                    <h6 className="d-flex align-items-center mb-3" style={{color: "orange"}}>Nhà tuyển dụng đã xem</h6>
                      <h6>1</h6>
                    </div>
                  </div>
                </div>
              </div>
              <div className="gutters-sm row" style={{marginLeft: "-8px",marginRight: "-8px"}}>
                  
                <div className="col-sm-3 mb-3">
                </div>
                <div className="col-sm-6 mb-3">
                  <div className="card h-100">
                    <div className="card-body">
                      <h6 className="d-flex align-items-center mb-3" style={{color: "blue"}}>Công việc đã được nhận</h6>
                      <h6>{profile.job_approve.length}</h6>
                    </div>
                  </div>
                </div>
                <div className="col-sm-3 mb-3">
                </div>
              </div>
            </div>
                <div className="col-md-8">
                    
         <div className="card mb-3" style={{ minHeight: '35rem'}}>
            <Tabs>
                <TabList style={{display:'flex'}}>
                    <Tab>Đã ứng tuyển</Tab>
                    <Tab>Đã được nhận</Tab>
                    <Tab>Hồ sơ</Tab>
                </TabList> 
                <TabPanel>
                {
                    profile.job_applied.map((job) => {
                        return renderJob(job);
                    }) 
                }
                </TabPanel>
                <TabPanel>
                {
                    profile.job_approve.map((job) => {
                        return renderJobApprove(job);
                    })
                }
                </TabPanel>
                <TabPanel>
                    {showEdit ? <Edit/> : <Show/>}
                </TabPanel>
                </Tabs>
                </div>
                </div>
            
            </div>
            
          </div>

    </div>
    </main>
    </React.Fragment>
    );
    
}