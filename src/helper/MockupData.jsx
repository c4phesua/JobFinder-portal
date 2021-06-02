var data_home_page = {
    JOB_LIST: [
        {
            company_name: "KMS Technology",
            image_link:"",
            title:"DevOps Engineer",
            job_type:"IT",
            tag_list: [
                "Nodejs",
                "Docker",
                "CI",
            ],
            id_job: 0,
            salary:2000,
            company_address:"Ho chi minh",
            description:"",

        },{
            company_name: "KMS Technology",
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
            company_name: "Katalon",
            image_link:"",
            title:"Fullstack Engineer",
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
            company_name: "Vinagame",
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

        },{
            company_name: "FPT Software",
            image_link:"",
            title:"2D Graphic Desgin",
            job_type:"Design",
            tag_list: [
                "Photoshop"
            ],
            id_job: 4,
            salary:1000,
            company_address:"Ho chi minh",
            description:"",

        },{
            company_name: "Gameloft",
            image_link:"",
            title:"2D Graphic Desgin",
            job_type:"Design",
            tag_list: [
                "Photoshop"
            ],
            id_job: 5,
            salary:1000,
            company_address:"Ho chi minh",
            description:"",

        },{
            company_name: "Vietcombank",
            image_link:"",
            title:"Accounting excutive",
            job_type:"Design",
            tag_list: [
                "Accounting"
            ],
            id_job: 6,
            salary:1000,
            company_address:"Ho chi minh",
            description:"",

        },{
            company_name: "Vietcombank",
            image_link:"",
            title:"Financal excutive",
            job_type:"Accounting",
            tag_list: [
                "Photoshop"
            ],
            id_job: 7,
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
            id_job: 8,
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