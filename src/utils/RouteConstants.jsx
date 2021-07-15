const LOGIN = '/login';
const SIGNUP = '/signup';
const INDEX = '/index';
const INDEX_HTML = '/index.html';
const INDEX_PHP = '/index.php';
const ROOT = '/';
const APPLY_CV = '/apply-cv/:id';
const HR_MANAGEMENT = '/hr/management';
const CV_CHECKING = '/hr/checkcv';
const HR_CREATEJOB = '/hr/create';
const HR_PROFILE = '/hr/profile'
const DASHBOARD = '/dashboard';
const STUDENT_PROFILE = '/profile';
const JOBS = '/jobs';
const EMPLOYER = '/hr/signup'; 
const JOB_DESCRIPTION = JOBS + '/:id';
const PROFILE = '/profile/:id';
const COMPANY_VIEW ='/company/:id';
const ADMIN = '/admin';
const HR_LOGIN = '/hr/login';
const REPORT_COMPANY = `/r${COMPANY_VIEW}`;
const REPORT_JOB = `/r${JOB_DESCRIPTION}`

const RouteConstants = {
  LOGIN,
  SIGNUP,
  INDEX,
  INDEX_HTML,
  INDEX_PHP,
  ROOT,
  APPLY_CV,
  CV_CHECKING,
  HR_MANAGEMENT,
  HR_CREATEJOB,
  DASHBOARD,
  STUDENT_PROFILE,
  JOBS,
  EMPLOYER,
  JOB_DESCRIPTION,
  PROFILE,
  HR_PROFILE,
  COMPANY_VIEW,
  ADMIN,
  HR_LOGIN,
  REPORT_COMPANY,
  REPORT_JOB,
};

export default RouteConstants;
