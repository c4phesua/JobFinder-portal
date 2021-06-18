import { currentPath } from '../utils/Routes';
import RouteConstants from '../utils/RouteConstants';


export const isDashboard = () => {
  return currentPath() === RouteConstants.ROOT
    || currentPath() === RouteConstants.INDEX_HTML
    || currentPath() === RouteConstants.INDEX_PHP
    || currentPath() === RouteConstants.INDEX;
}

export const isLoggedIn = () => {
  return currentPath() === RouteConstants.HR_APPLICANTS
    || currentPath().split('/')[1] === RouteConstants.APPLY_CV.split('/')[1]
    || currentPath() === RouteConstants.DASHBOARD
    || currentPath() === RouteConstants.HR_CREATEJOB;
}

export const isHRRole = () => {
  return currentPath() === RouteConstants.HR_APPLICANTS
  || currentPath() === RouteConstants.HR_CREATEJOB;
}

export const isStudentRole = () => {
  return currentPath().split('/')[1] === RouteConstants.APPLY_CV.split('/')[1]
    || currentPath() === RouteConstants.DASHBOARD;
}

export const isCurrentSite = () => {
  return currentPath();
}