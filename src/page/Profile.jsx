
import React from 'react';
import ImgProfile from '../component/ImgProfile';
import MockupData from '../helper/MockupData';
import CssBaseline from '@material-ui/core/CssBaseline';
import {useStylesProfile} from '../utils/UtilsFunc';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Job from '../component/JobApplied';
import JobApprove from '../component/JobApproved';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Box from "@material-ui/core/Box";
import { Dialog,
    DialogActions,
    DialogContent, Button} from '@material-ui/core';
import InputGroup from 'react-bootstrap/InputGroup';
import 'react-tabs/style/react-tabs.css';

export default function Profile () {
    let profile = MockupData.student_user;
   
    document.title = `JobFinder - ${profile.fullname}`;

    const [showEdit,setShowEdit] = React.useState(false);
    const [validated, setValidated] = React.useState(false);


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
    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }
        setValidated(true);
      };
      const handleClickOpenCreate = () => {
        setShowEdit(true);
    };

    const handleCloseCreate = () => {
        setShowEdit(false);
    };
    const handleCloseCreateSummit = () => {
        if(validated)
            setShowEdit(false);
    };
    
    const classes = useStylesProfile();
    
    const Show = () => (
                <div className="card-body">
                <div className="Row"></div>
                <div className="row">
                        <div className="col-sm-3">
                            <Box fontWeight="fontWeightBold">
                            H??? t??n<label style={{color:"red"}}> *</label>
                            </Box>
                        </div>
                        <div className="col-sm-9 text-secondary">
                        {profile.fullname}

                        
                        </div>
                    </div>
                    <hr/>
                    <div className="row">
                        <div className="col-sm-3">
                            <Box fontWeight="fontWeightBold">
                            Email<label style={{color:"red"}}> *</label>
                            </Box>
                        </div>
                        <div className="col-sm-9 text-secondary">
                        {profile.email}
                        </div>
                    </div>
                    <hr/>
                    <div className="row">
                        <div className="col-sm-3">
                            <Box fontWeight="fontWeightBold">
                            S??? ??i???n tho???i<label style={{color:"red"}}> *</label>
                            </Box>
                        </div>
                        <div className="col-sm-9 text-secondary">
                        {profile.phone}
                        </div>
                    </div>
                    <hr/>
                    <div className="row">
                        <div className="col-sm-3">
                             <Box fontWeight="fontWeightBold">
                            ?????a ch???<label style={{color:"red"}}> *</label>
                            </Box>
                        </div>
                        <div className="col-sm-9 text-secondary">
                        {profile.address} 
                            
                        </div>
                    </div>
                    <hr/>
                    <div className="row">
                        <div className="col-sm-3">
                            <Box fontWeight="fontWeightBold">
                            Tr?????ng ?????i H???c
                            </Box>
                        </div>
                        <div className="col-sm-9 text-secondary">
                            
                        </div>
                    </div>
                    <hr/>
                    <div className="row">
                        <div className="col-sm-3">
                           <Box fontWeight="fontWeightBold">
                            Chuy??n ng??nh
                            </Box>
                        </div>
                        <div className="col-sm-9 text-secondary">
                            
                        </div>
                    </div>
                    <hr/>
                    <div className="row">
                        <div className="col-sm-3">
                             <Box fontWeight="fontWeightBold">
                            Ngo???i Ng???
                            </Box>
                        </div>
                        <div className="col-sm-9 text-secondary">
                        {profile.languages}
                            
                        </div>
                    </div>
                    <hr/>
                    <div className="row">
                        <div className="col-sm-3">
                            
                        <Box fontWeight="fontWeightBold">
                            Th??ng tin chung
                            </Box>
                        </div>
                        <div className="col-sm-9 text-secondary" style={{minHeight:'5rem',fontWeight:'bold'}}>

                             {profile.about}
                            
                        </div>
                    </div>
                    <hr/>
                    <div className="row">
                        <div className="col-sm-12">
                            <a className="btn btn-info " target="__blank" onClick={handleClickOpenCreate}>S???a th??ng tin</a>
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
                      <h6 className="d-flex align-items-center mb-3" style={{color: "green"}}>C??ng vi???c ???? ???ng tuy???n</h6>
                      <h6>{profile.job_applied.length}</h6>
                    </div>
                  </div>
                </div>

                <div className="col-sm-6 mb-3">
                  <div className="card h-100">
                    <div className="card-body">
                    <h6 className="d-flex align-items-center mb-3" style={{color: "orange"}}>Nh?? tuy???n d???ng ???? xem</h6>
                      <h6>{profile.job_applied.filter((x) => x.status == "seen").length}</h6>
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
                      <h6 className="d-flex align-items-center mb-3" style={{color: "blue"}}>C??ng vi???c ???? ???????c nh???n</h6>
                      <h6>{profile.job_applied.filter((x) => x.status == "success").length}</h6>
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
                    <Tab><Box fontWeight="fontWeightBold">
                    C??ng vi???c ???? ???ng tuy???n
                        </Box></Tab>
                    <Tab><Box fontWeight="fontWeightBold">
                    H??? s??
                        </Box></Tab>
                </TabList> 
                <TabPanel>
                {
                    profile.job_applied.map((job) => {
                        return renderJob(job);
                    }) 
                }
                </TabPanel>
                <TabPanel>
                    {/* {showEdit ? <Edit/> : <Show/>} */}
                    <Show/>
                </TabPanel>
                </Tabs>
                </div>
                </div>
            
            </div>
            
          </div>

    </div>
    </main>

    <Dialog open={showEdit} onClose={handleCloseCreate} aria-labelledby="form-dialog-title" fullWidth={true}
maxWidth = {'md'}>
                <DialogContent>
                    {/* <CreateHR/> */}
                    <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <div className="card-body">
                    <div className="row">
                        <div className="col-sm-3">
                        <Box fontWeight="fontWeightBold">
                            H??? t??n<label style={{color:"red"}}> *</label>
                            </Box>
                        </div>
                        <div className="col-sm-9 text-secondary">
                        <Form.Control type="text"  required defaultValue={profile.fullname}/>
                        <Form.Control.Feedback type="invalid">
                            Th??ng tin kh??ng ???????c ????? tr???ng.
                        </Form.Control.Feedback>
                        </div>
                    </div>
                    <hr/>
                    <div className="row">
                    <InputGroup hasValidation>
                        <div className="col-sm-3">
                        <Box fontWeight="fontWeightBold">
                            Email<label style={{color:"red"}}> *</label>
                            </Box>
                        </div>
                        
                        <div className="col-sm-9 text-secondary">
                        <Form.Control type="text" required defaultValue={profile.email}/>
                        <div class="invalid-feedback">
                            Th??ng tin kh??ng ???????c ????? tr???ng.
                        </div>
                        </div>
                    </InputGroup>
                    </div>
                    <hr/>
                    <div className="row">
                        <div className="col-sm-3">
                        <Box fontWeight="fontWeightBold">
                            S??? ??i???n tho???i<label style={{color:"red"}}> *</label>
                            </Box>
                        </div>
                        <div className="col-sm-9 text-secondary">
                        <input type="text" class="form-control" required defaultValue={profile.phone}/>
                        <div class="invalid-feedback">
                            Th??ng tin kh??ng ???????c ????? tr???ng.
                        </div>
                        </div>
                    </div>
                    <hr/>
                    <div className="row">
                        <div className="col-sm-3">
                        <Box fontWeight="fontWeightBold">
                            ?????a ch???<label style={{color:"red"}}> *</label>
                            </Box>
                        </div>
                        <div className="col-sm-9 text-secondary">
                        <input type="text" class="form-control" required defaultValue={profile.address}/>
                        <div class="invalid-feedback">
                            Th??ng tin kh??ng ???????c ????? tr???ng.
                        </div>
                            
                        </div>
                    </div>
                    <hr/>
                    <div className="row">
                        <div className="col-sm-3">
                        <Box fontWeight="fontWeightBold">
                            Tr?????ng ?????i H???c
                            </Box>
                        </div>
                        <div className="col-sm-9 text-secondary">
                        <input type="text" class="form-control"  defaultValue=""/>
                            
                        </div>
                    </div>
                    <hr/>
                    <div className="row">
                        <div className="col-sm-3">
                        <Box fontWeight="fontWeightBold">
                            Chuy??n ng??nh
                            </Box>
                        </div>
                        <div className="col-sm-9 text-secondary">
                        <input type="text" class="form-control"  defaultValue=""/>
                            
                        </div>
                    </div>
                    <hr/>
                     <div className="row">
                        <div className="col-sm-3">
                        <Box fontWeight="fontWeightBold">
                            Ngo???i Ng???
                            </Box>
                        </div>
                        <div className="col-sm-9 text-secondary">
                        <input type="text" class="form-control"  defaultValue={profile.languages}/>
                            
                        </div>
                    </div>
                    <hr/>
                    <div className="row">
                        <div className="col-sm-3">
                        <Box fontWeight="fontWeightBold">
                            Th??ng tin chung
                            </Box>
                        </div>
                        <div className="col-sm-9 text-secondary">
                        <textarea type="text" class="form-control" defaultValue={profile.about} rows="7"/>
                            
                        </div>
                    </div>
        </div>
        
        </Form>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleCloseCreate} color="primary">
                        H???y
                    </Button>
                    <Button type="summit"color="primary">
                        L??u thay ?????i
                    </Button>
                </DialogActions>
            </Dialog>

    </React.Fragment>
    );
    
}