const addTheNumbers = () => {
    // Your code here...
    // console.log('add the numbers...');
    let num1 = document.querySelector('#num1').value;
    // console.log(num1);
    
    let num2 = document.querySelector('#num2').value;
    // console.long(num2)

    let result = Number(num1) + Number(num2);
    // console.log(result);

    document.querySelector('#answer').innerHTML = result;
    
}

const subtractTheNumbers = () => {
    // Your code here...
    console.log('subtract the numbers...');
}
