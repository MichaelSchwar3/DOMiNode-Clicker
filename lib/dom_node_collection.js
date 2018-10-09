class DOMiNodeCollection {
  constructor(objects) {
    this.objects = objects;
    this.callback = null;
  }
  html(string){
    if(!string){
      return this.objects[0].innerHTML;
    }else {
      for (let i = 0; i < this.objects.length; i++) {
        this.objects[i].innerHTML = string;
      }
    }
  }
  empty(){
    for (let i = 0; i < this.objects.length; i++) {
      this.objects[i].innerHTML = "";
    }
  }
  append(args){
    for (let i = 0; i < this.objects.length; i++) {
      if (args instanceof DOMiNodeCollection) {
        for (let j = 0; j < args.length; j++) {
          this.objects[i].innerHTML += args[j].outerHTML;
        }
      }else if (args instanceof HTMLElement) {
        this.objects[i].innerHTML += args.outerHTML;
      }else {
        this.objects[i].innerHTML += args;
      }
    }
  }
  attr(attributeName){
    const attr = this.objects[0].getAttribute(attributeName);
    return attr.value;
  }
  addClass(classNames){
    const splitNames = classNames.split(" ");
    for (let i = 0; i < this.objects.length; i++) {
      for (let j = 0; j < splitNames.length; j++) {
        this.objects[i].classList.add(splitNames[j]);
      }
    }
  }
  removeClass(classNames){
    const splitNames = classNames.split(" ");
    for (let i = 0; i < this.objects.length; i++) {
      for (let j = 0; j < splitNames.length; j++) {
        this.objects[i].classList.remove(splitNames[j]);
      }
    }
  }
  toggleClass(classNames){
    const splitNames = classNames.split(" ");
    for (let i = 0; i < this.objects.length; i++) {
      for (let j = 0; j < splitNames.length; j++) {
        this.objects[i].classList.toggle(splitNames[j]);
      }
    }
  }
  children(){
    let childrenArr = [];
    for (let i = 0; i < this.objects.length; i++) {
      if (this.objects[i].children.length){
        childrenArr = childrenArr.concat(Array.from(this.objects[i].children));
      }
    }
    return new DOMiNodeCollection(childrenArr);
  }
  parent(){
    const parrentArr = [];
    for (let i = 0; i < this.objects.length; i++) {
      parrentArr.push(this.objects[i].parentElement);
    }
    return new DOMiNodeCollection(parentArr);
  }
  find(selector){
    let findArr = [];
    for (let i = 0; i < this.objects.length; i++) {
    findArr = findArr.concat(Array.from(this.objects[i].querySelectorAll(selector)));
    }
    return new DOMiNodeCollection(findArr);
  }
  remove() {
    this.empty();
    for (let i = 0; i < this.objects.length; i++) {
      let child = this.objects[i];
      child.parentElement.removeChild(child);
    }
  }
  on(type, callback){
    for (let i = 0; i < this.objects.length; i++) {
      this.callback = callback;
      this.objects[i].addEventListener(type, callback);
    }
  }

  off(type){
    for (let i = 0; i < this.objects.length; i++) {
      this.objects[i].removeEventListener(type, this.callback);
    }
  }
}

module.exports = DOMiNodeCollection;
