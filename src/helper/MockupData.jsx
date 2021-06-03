var data_home_page = {
    JOB_LIST: [
        {
            company_name: "KMS Technology",
            image_link: "",
            title: "DevOps Engineer",
            job_type: "IT",
            tag_list: [
                "Nodejs",
                "Docker",
                "CI",
            ],
            id_job: 0,
            salary: 2000,
            company_address: "Ho chi minh",
            description: "",

        }, {
            company_name: "KMS Technology",
            image_link: "",
            title: "BE Developer",
            job_type: "IT",
            tag_list: [
                "Nodejs",
                "Docker"
            ],
            id_job: 1,
            salary: 1000,
            company_address: "Ho chi minh",
            description: "",

        }, {
            company_name: "Katalon",
            image_link: "",
            title: "Fullstack Engineer",
            job_type: "IT",
            tag_list: [
                "Java",
                "Javascript"
            ],
            id_job: 2,
            salary: 1000,
            company_address: "Ho chi minh",
            description: "",

        }, {
            company_name: "Vinagame",
            image_link: "",
            title: "2D Graphic Desgin",
            job_type: "Design",
            tag_list: [
                "Photoshop"
            ],
            id_job: 3,
            salary: 1000,
            company_address: "Ho chi minh",
            description: "",

        }, {
            company_name: "FPT Software",
            image_link: "",
            title: "2D Graphic Desgin",
            job_type: "Design",
            tag_list: [
                "Photoshop"
            ],
            id_job: 4,
            salary: 1000,
            company_address: "Ho chi minh",
            description: "",

        }, {
            company_name: "Gameloft",
            image_link: "",
            title: "2D Graphic Desgin",
            job_type: "Design",
            tag_list: [
                "Photoshop"
            ],
            id_job: 5,
            salary: 1000,
            company_address: "Ho chi minh",
            description: "",

        }, {
            company_name: "Vietcombank",
            image_link: "",
            title: "Accounting excutive",
            job_type: "Design",
            tag_list: [
                "Accounting"
            ],
            id_job: 6,
            salary: 1000,
            company_address: "Ho chi minh",
            description: "",

        }, {
            company_name: "Vietcombank",
            image_link: "",
            title: "Financal excutive",
            job_type: "Accounting",
            tag_list: [
                "Photoshop"
            ],
            id_job: 7,
            salary: 1000,
            company_address: "Ho chi minh",
            description: "",

        }, {
            company_name: "VNG",
            image_link: "",
            title: "2D Graphic Desgin",
            job_type: "Design",
            tag_list: [
                "Photoshop"
            ],
            id_job: 8,
            salary: 1000,
            company_address: "Ho chi minh",
            description: "",

        },
    ]
    ,
    TOP_COMPANY: [
        {
            id_company: 1,
            company_name: "VNG",
            company_address: "Ho chi Minh",
            website: "",
            top: 1
        },
        {
            id_company: 2,
            company_name: "KMS",
            company_address: "Ho chi Minh",
            website: "",
            top: 2
        },
        {
            id_company: 3,
            company_name: "FSoft",
            company_address: "Ho chi Minh",
            website: "",
            top: 3
        }
    ],


};

var data_manage_hr_page = {
    JOB_LIST: [
        {
            company_name: "KMS",
            image_link: "",
            title: "BE Developer",
            job_type: "IT",
            tag_list: [
                "Nodejs",
                "Docker"
            ],
            id_job: 1,
            salary: 1000,
            company_address: "Ho chi minh",
            description: "",

        }, {
            company_name: "VNG",
            image_link: "",
            title: "Game Developer",
            job_type: "IT",
            tag_list: [
                "Java",
                "Javascript"
            ],
            id_job: 2,
            salary: 1000,
            company_address: "Ho chi minh",
            description: "",

        }, {
            company_name: "VNG",
            image_link: "",
            title: "2D Graphic Desgin",
            job_type: "Design",
            tag_list: [
                "Photoshop"
            ],
            id_job: 3,
            salary: 1000,
            company_address: "Ho chi minh",
            description: "",

        },
    ],
    CV_LIST: [
        {
            employee_id: 1,
            id_job: 1,
            employee_name: "",
            employee_email: "",
            employee_phone: "",
            cv_link: "",

        }, {
            employee_id: 2,
            id_job: 1,
            employee_name: "",
            employee_email: "",
            employee_phone: "",
            cv_link: "",

        }, {
            employee_id: 3,
            id_job: 2,
            employee_name: "",
            employee_email: "",
            employee_phone: "",
            cv_link: "",

        },
    ]
}

var loremipsum = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit,'
    + ' sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    + ' Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    + ' Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
    + ' Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n'
    + 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,'
    + ' totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.'
    + ' Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit,'
    + ' sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.'
    + ' Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit,'
    + ' sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.'
    + ' Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?'
    + ' Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur,'
    + ' vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?';

// import vào, đặt const rồi gọi thôi

module.exports = { data_manage_hr_page: data_manage_hr_page, data_home_page: data_home_page, loremipsum: loremipsum };
