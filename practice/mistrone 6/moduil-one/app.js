// console.log('clicked')
// function add (sum1,sum2='hello'){
//     const total = sum1+sum2;
//     return total;
// }
// const age = add (47);
// console.log(age);

// const age =[ 45,58,87,98,102,152];
// // console.log(age);
// age.unshift(57);
//  console.log(age);

//  function getSum(a, b=9){return a+b;} 
//  console.log(getSum(2));

// const y = x => x*x; 
// const z = y(10); 
// console.log(z);
// const numbers=[10,20,30,40,50,60,70]
// console.log(Math.max(...numbers));
// const cars=['toyota', 'honda','mercedes'];
// console.log(Math.max(...cars));
// const newCars= [...cars , 'ferrari']; 
// console.log(newCars);
// document.getElementById


// const friendAge=[41,15,17,18,19,20,21];
// console.log(Math.max(...friendAge));


// const cars = ["BMW", "Volvo", "Mini"];
// let text = "";

// const cars = ["BMW", "Volvo", "Mini"];

// let text = "";
// for (let x of cars) {
//   text += x + "<br>";
  
// }


// const letters = new Set();
// console.log(letters);

// letters.add("a");
// letters.add("b");
// letters.add("c");
// letters.add("d");
// console.log(letters);


// const numbers=[74,55,28,77,98,105,109,155,2,3,4,6,7,9,12,15,16,18,17,22,25,64,];

// const studets=[
//    { name:'rubel', id:78, subject:'english'},
//    { name:'hatem', id:74, subject:'bangla'},
//    { name:'piyas', id:28, subject:'math'},
//    { name:'shakil', id:48, subject:'quran'},
//    { name:'robin', id:101, subject:'account'},
//    { name:'imran', id:278, subject:'sivil'},
// ];

// const book=studets.filter(roll=> roll.id>28);
// console.log(book);

// const bigNumber=numbers.filter(number=> number > 15);
// const smalNumber=numbers.filter(num => num < 15 || num>100);
// console.log(smalNumber);
const text=document.getElementById('input');
const fild=document.getElementById('fild');

text.addEventListener('keyup', function(){
    // console.log(text.value.length);
    fild.innerText=text.value.length;
});
window.onload=()=>{
    main();
};
function main(){
    const root=document.getElementById('root');
    const btn=document.getElementById('btn');
    btn.addEventListener('click',function(){
        const rbaColor=getRgbaColor();
        root.style.body.backgroundColor=rbaColor;
    })
}

function getRgbaColor(){
    const red=Math.floor(Math.random()*255);
    const green=Math.floor(Math.random()*255);
    const yellow=Math.floor(Math.random()*255);
    return `rgb(${red}, ${green}, ${yellow})`;
};