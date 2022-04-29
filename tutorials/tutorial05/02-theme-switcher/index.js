/*
    Hints: 
    1. Attach click event handlers to all four of the 
       buttons (#default, #ocean, #desert, and #high-contrast).
    2. Modify the className property of the body tag 
       based on the button that was clicked.
*/
const switchDefault = () => {
   console.log('switch to default theme');
   document.querySelector('body').className = "default";
}

const switchOcean = () => {
   console.log('switch to ocean theme');
   document.querySelector('body').className= "ocean";

}

const switchDesert = () => {
   console.log('switch to ocean theme');
   document.querySelector('body').className= "desert";

}
const switchHighContrast = () => {
   console.log('switch to ocean theme');
   document.querySelector('body').className= "high-contrast";

}

document.querySelector("#default").addEventListener('click', switchDefault);
document.querySelector("#ocean").addEventListener('click', switchOcean);
document.querySelector("#desert").addEventListener('click', switchDesert);
document.querySelector("#high-contrast").addEventListener('click', switchHighContrast);


