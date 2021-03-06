import jquery from 'jquery';


export const goTo = (link, urlObject) => {
  if (urlObject) {
    const queryString = `?${jquery.param(urlObject, true)}`;
    window.location.href = link + queryString;
  } else {
    window.location.href = link;
  }
};

export const closeTab = () => {
  return window.close();
}

export const newTab = (link, urlObject) => {
  if (urlObject) {
    const queryString = `?${jquery.param(urlObject, true)}`;
    window.open(link + queryString, "_blank");
  } else {
    window.open(link, "_blank");
  }
}

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
