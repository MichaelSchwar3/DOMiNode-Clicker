class View {
  constructor() {
    this.addListeners = this.addListeners.bind(this);
    this.addListenersTwo = this.addListenersTwo.bind(this);
    this.clickFunc = this.clickFunc.bind(this);
    this.clickFuncTwo = this.clickFuncTwo.bind(this);
    this.keepTime = this.keepTime.bind(this);
    this.turnListenersOff = this.turnListenersOff.bind(this);
    this.boardTop = $DN('#clicker-container');
    this.boardBot = $DN('#clicker-container2');
    this.boardTop.append("<div class='clickable'></div>");
    this.counter = 0;
    this.addListeners();
    this.keepTime();
  }
  addListeners() {
    let clickable2 = $DN('.clickable2');
    clickable2.off("click", this.clickFuncTwo);
    clickable2.remove();
    let clickable = $DN('.clickable');
    this.addRandomPos(clickable);
    clickable.on("click", this.clickFunc);
  }
  clickFunc() {
    this.boardBot.append("<div class='clickable2'></div>");
    this.addCounter();
    this.addListenersTwo();
  }
  addListenersTwo() {
    let clickable = $DN('.clickable');
    clickable.off("click", this.clickFunc);
    clickable.remove();
    let clickable2 = $DN('.clickable2');
    this.addRandomPos(clickable2);
    clickable2.on("click", this.clickFuncTwo);
  }
  clickFuncTwo() {
    this.boardTop.append("<div class='clickable'></div>");
    this.addCounter();
    this.addListeners();
  }
  addRandomPos(clickable){
    const num = Math.floor(Math.random() * 7) + 1;
    clickable.addClass(`pos-${num}`);
  }
  addCounter() {
    this.counter+=1;
    $DN('#counter').html(`${this.counter}`);
  }
  keepTime() {
    this.timer = 10;
    let timer = setInterval(()=>{
        if(this.timer >-1){
          $('#timer').html(`${this.timer--}`);
          this.timer = this.timer;
        }else if (this.timer === -1) {
          this.turnListenersOff();
          clearInterval(timer);
        }else {
          this.turnListenersOff();
          clearInterval(timer);
        }
      }, 1000);
  }
  turnListenersOff() {
    let clickable = $DN('.clickable');
    clickable.remove();
    let clickable2 = $DN('.clickable2');
    clickable2.remove();
    $DN('#bottom').append("<button id='play-button' onClick='newGame()'>Play Again!</button>");
  }

}


export default View;
