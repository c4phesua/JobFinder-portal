import jquery from 'jquery';


export const goTo = (link, urlObject) => {
  if (urlObject) {
    const queryString = `?${jquery.param(urlObject, true)}`;
    window.location.href = link + queryString;
  } else {
    window.location.href = link;
  }
};

export const currentPath = () => {
  return window.location.pathname;
}

export const currentHost = () => {
  return window.location.hostname;
}


export default class Routes {

  constructor(params) {
    this.params = params;
  }

  //constant or logic of parameter in link here


}