const arr = prompt('Please, enter 3 numbers with such delimeter (, )').split(', ');


let result = 0;

for(let num of arr) {
  result += +num;
}

alert(`first number is ${arr[0]}, last number is ${arr[arr.length - 1]}
${arr[0]} + ${arr[1]} + ${arr[2]} = ${result}`);


const requestNumber = prompt('Please enter one of the numbers which you entered before');

if(arr.indexOf(requestNumber) !== -1) {
  alert(`${arr.indexOf(requestNumber) + 1} number of array`);
} else {
  alert('Sorry, you did not enter this number!');
}
