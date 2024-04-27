localStorage.setItem("theme","dark");
localStorage.setItem("car","toyota");
localStorage.setItem("title","manager");
localStorage.setItem("phone","teano");
localStorage.setItem("color","#fff");
const student =[
    {
        name:"abner kure",
        grade:47
    },
    {
        name:"abner kure",
        grade:47
    }
]

localStorage.setItem("bigstudent",student)
localStorage.setItem("student",JSON.stringify(student));
const getstudent =localStorage.getItem('student')
const pstudent = JSON.parse(localStorage.getItem('student'))
console.log(getstudent);
console.log(pstudent);
document.write(getstudent.valueOf())
window.confirm(getstudent)
localStorage.removeItem("student")

let answer = localStorage.key(2)

console.log(localStorage.length);
let keys = Object.keys(localStorage);
for(let key of keys){
    console.log(`${key}: ${localStorage.getItem(key)}`);
}