
import React from 'react';
import ImgProfile from '../component/ImgProfile';
import MockupData from '../helper/MockupData';
import CssBaseline from '@material-ui/core/CssBaseline';
import {useStylesProfile} from '../utils/UtilsFunc';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Job from '../component/JobApplied';
import 'react-tabs/style/react-tabs.css';
import JobList from "../component/dashboard/JobList";
import Applicants from "../component/dashboard/Applicants";
import CompanyProfile from "../component/HrProfile";
import AccountProfileDetails from "../component/dashboard/HrProfileDetail";

export default function HrProfile () {
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
    );

    return (
        <React.Fragment>
            <CssBaseline />
            <main className={classes.layout}>
                <div className="container">
                    <div className="main-body">
                        <div className="gutters-sm row" >
                            <div className="col-md-4 mb-3">
                                <ImgProfile fullname = {profile.fullname} address = {profile.address}/>
                                <div className="gutters-sm row" style={{marginLeft: "-8px",marginRight: "-8px"}}>
                                </div>
                            </div>
                            <div className="col-md-8">

                                <div className="card mb-3" style={{ minHeight: '300px'}}>
                                    <Tabs>
                                        <TabList style={{display:'flex'}}>
                                            <Tab>Hồ sơ</Tab>
                                            <Tab>Bài đăng</Tab>
                                            <Tab>Duyệt hồ sơ</Tab>
                                            <Tab>Thông tin công ty</Tab>
                                        </TabList>
                                        <TabPanel>
                                            {showEdit ? <Edit/> : <Show/>}
                                        </TabPanel>
                                        <TabPanel>
                                            <JobList sx={{ height: '100%' }} />
                                        </TabPanel>
                                        <TabPanel>
                                            <Applicants />
                                        </TabPanel>
                                        <TabPanel>
                                            <CompanyProfile/>
                                            <AccountProfileDetails />
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