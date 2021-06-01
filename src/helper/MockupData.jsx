var data_home_page = {
    JOB_LIST: [
        {
            company_name: "KMS",
            image_link:"",
            title:"BE Developer",
            job_type:"IT",
            tag_list: [
                "Nodejs",
                "Docker"
            ],
            id_job: 1,
            salary:1000,
            company_address:"Ho chi minh",
            description:"",

        },{
            company_name: "VNG",
            image_link:"",
            title:"Game Developer",
            job_type:"IT",
            tag_list: [
                "Java",
                "Javascript"
            ],
            id_job: 2,
            salary:1000,
            company_address:"Ho chi minh",
            description:"",

        },{
            company_name: "VNG",
            image_link:"",
            title:"2D Graphic Desgin",
            job_type:"Design",
            tag_list: [
                "Photoshop"
            ],
            id_job: 3,
            salary:1000,
            company_address:"Ho chi minh",
            description:"",

        },
    ]
    ,
    TOP_COMPANY: [
        {
            id_company:1,
            company_name:"VNG",
            company_address:"Ho chi Minh",
            website:"",
            top: 1
        },
        {
            id_company:2,
            company_name:"KMS",
            company_address:"Ho chi Minh",
            website:"",
            top: 2
        },
        {
            id_company:3,
            company_name:"FSoft",
            company_address:"Ho chi Minh",
            website:"",
            top: 3
        }
    ],


};

var data_manage_hr_page = {
    JOB_LIST: [
        {
            company_name: "KMS",
            image_link:"",
            title:"BE Developer",
            job_type:"IT",
            tag_list: [
                "Nodejs",
                "Docker"
            ],
            id_job: 1,
            salary:1000,
            company_address:"Ho chi minh",
            description:"",

        },{
            company_name: "VNG",
            image_link:"",
            title:"Game Developer",
            job_type:"IT",
            tag_list: [
                "Java",
                "Javascript"
            ],
            id_job: 2,
            salary:1000,
            company_address:"Ho chi minh",
            description:"",

        },{
            company_name: "VNG",
            image_link:"",
            title:"2D Graphic Desgin",
            job_type:"Design",
            tag_list: [
                "Photoshop"
            ],
            id_job: 3,
            salary:1000,
            company_address:"Ho chi minh",
            description:"",

        },
    ],
    CV_LIST:[
        {
            employee_id:1,
            id_job:1,
            employee_name:"",
            employee_email:"",
            employee_phone:"",
            cv_link:"",

        },{
            employee_id:2,
            id_job:1,
            employee_name:"",
            employee_email:"",
            employee_phone:"",
            cv_link:"",

        },{
            employee_id:3,
            id_job:2,
            employee_name:"",
            employee_email:"",
            employee_phone:"",
            cv_link:"",

        },
    ]
}

// import vào, đặt const rồi gọi thôi

module.exports= {data_manage_hr_page:data_manage_hr_page,data_home_page:data_home_page};