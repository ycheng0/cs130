const resetButtonBackgrounds = () => {
    const color = '#EEE';
    // document.querySelector("#btn1").style.backgroundColor ='rgb(133,133,133)';
    // document.querySelector("#btn2").style.backgroundColor ='rgb(133,133,133)';
    // document.querySelector("#btn3").style.backgroundColor ='rgb(133,133,133)';
    // document.querySelector("#btn4").style.backgroundColor ='rgb(133,133,133)';
    //document.querySelectorAll('button').style.backgorundColor = color; --> THIS WILL NOT WORK;
    //this will be a list of elements:
    document.querySelectorAll('button').forEach(btn => btn.style.backgroundColor)= color;

};

const makeRed = () => {
    // your code here...
    console.log('Change background to red');
    document.querySelector("body").style.backgroundColor ='red';
    document.querySelector("#btn1").style.backgroundColor ='red';
};

const makeBlue = () => {
    // your code here...
    console.log('Change background to blue');
    document.querySelector("body").style.backgroundColor ='blue';
    document.querySelector("#btn2").style.backgroundColor ='blue';
};

const makePink = () => {
    // your code here...
    console.log('Change background to pink');
    document.querySelector("body").style.backgroundColor ='pink';
    document.querySelector("#btn3").style.backgroundColor ='pink';
};

const makeOrange = () => {
    // your code here...
    console.log('Change background to orange');
    document.querySelector("body").style.backgroundColor ='orange';
    document.querySelector("#btn4").style.backgroundColor ='orange';
};

