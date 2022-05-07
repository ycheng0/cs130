
const square = '<rect x="291" y="70" width="40" height="40" stroke="black" stroke-width="3" fill="pink"></rect>'
const triangle = ' <polygon points="100,100 150,100 125,135" stroke="black" stroke-width="3" fill="teal"></polygon>';





document.querySelector('svg').insertAdjacentHTML("beforeend", square);


document.querySelector('svg').insertAdjacentHTML("beforeend", triangle);

//Step 1: What event do we want to use to create these shapes:

//Step 2: Create an event handler to attach to the event:

const addShape = (ev) =>{
    console.log(ev.offsetX, ev.offsetY);
    console.log('Add shape');
    // want to make the color whatevery color the person type in
    let color = document.querySelector('#color').value;
    // change the size:
    let size = document.querySelector('#size').value;
    let shape = document.querySelector('#shape').value;
    if (shape ==='circle'){
        ///do something
        // Define the circle; turin into template (replace ' with `); ${} turn something into a variable:
        const circle = `
        <circle 
            cx="${ev.offsetX}" 
            cy="${ev.offsetY}" 
            r="${size}" 
            stroke="black" 
            stroke-width="3" 
            fill="${color}"></circle>`;
    }
    else if(shape ==='square'){
        ///do something
        const square=`
            <rect
                x="${ev.offsetX}"
                y="${ev.offsetY}"
        //NOT COMEPLETE YET!!! CHECK CLASS FILE FOR CODE

    }
    else if(shape ==='triangle'){
        /// do something
    }
    // Define the circle; turin into template (replace ' with `); ${} turn something into a variable:
    const circle = `<circle 
                        cx="${ev.offsetX}" 
                        cy="${ev.offsetY}" 
                        r="${size}" 
                        stroke="black" 
                        stroke-width="3" 
                        fill="${color}"></circle>`;
    //Add the circle
    document.querySelector('svg').insertAdjacentHTML("beforeend", circle);
}

/**
 * Your job: when the user clicks the svg element, 
 * draw the shape the corresponds with the controls 
 * in the left-hand panel.
 */