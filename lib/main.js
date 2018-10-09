const DOMiNodeCollection = require('./dom_node_collection.js');
window.DOMiNodeCollection = DOMiNodeCollection;
import View from './view.js';

window.$DN = (arg) => {
  if (arg instanceof HTMLElement){
    const domObject = new DOMiNodeCollection([arg]);
    return domObject;
  }else {
    const objects = document.querySelectorAll(arg);
    const arrObjects = Array.from(objects);
    const domObject = new DOMiNodeCollection(arrObjects);
    return domObject;
  }
};

$DN.extend = (base, ...objs) => {
  objs.forEach((obj) => {
    for (const prop in obj) {
      base[prop] = obj[prop];
    }
  });
  return base;
};

$DN.ajax = (options) => {
  const defaults = {
  contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
  method: "GET",
  url: "",
  success: () => {},
  error: () => {},
  data: {},
  };
  options = $l.extend(defaults, options);
  const xhr = new XMLHttpRequest();
  xhr.open(options.method, options.url, true);
  xhr.onload = (e)=>{
    if (xhr.status === 200){
      options.success(xhr.response);
    }else {
      options.error(xhr.response);
    }
  };
  xhr.send(JSON.stringify(options.data));
};

window.newGame = ()=>{
  let view = new View();
  $DN('#bottom').empty();
  $DN('#timer').html("10");
  $DN('#counter').html("0");
};

document.addEventListener("DOMContentLoaded", ()=> {
  newGame();
});
