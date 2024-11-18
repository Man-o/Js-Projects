// let submitBtn=document.getElementById('btn');
// let stuSection=document.getElementById('std');
// submitBtn.addEventListener('click',function(){
//     stuSection.classList.remove('hidden')
// })

// let loginBtn=document.getElementById('log-in');
// let username=document.getElementById('username');
// loginBtn.addEventListener('submit',function(e){
//     e.preventDefault()
//     alert("Welcome "+ username.value +"😊")
// })


//object creation
let stu_1={id:101,name:'Amit Pandey',mail:'amit@gmail.com',gender:'Male',role:'student',marks:[73,69,89,81,89],pw:1234}
let stu_2={id:102,name:'Rithik Roshan',mail:'rithik@gmail.com',gender:'Male',role:'student',marks:[93,87,89,71,89],pw:3456}
let stu_3={id:103,name:'Rohit Sharma',mail:'rohit@gmail.com',gender:'Male',role:'admin',marks:[53,87,29,81,59],pw:7956}
let stu_4={id:104,name:'Keerthi Suresh',mail:'keerthi@gmail.com',gender:'Female',role:'student',marks:[4,67,29,41,39],pw:7956}

let StuArr=[stu_1,stu_2,stu_3,stu_4]

//create username
function createUsername(studentsUsn)
{
    studentsUsn.forEach((student)=>{
        student.username=student.name.toLowerCase().split(" ").map((name)=>name[0]).join('');
    })   
}
createUsername(StuArr)

//total marks
function totalMarks(marks){
    let sum=0
    for(let m of marks){
        sum+=m
    }
    return sum
}

//calculate percentage
let max=500
function percent(tm){
    let p=(tm/max)*100
    return p;
}


//display all students
function display(students){
    if(students.length!=0){
        let eachStu=``
        students.forEach(function(stu)
        {
            let tmarks=totalMarks(stu.marks)
            let percentage=percent(tmarks)
            let res=percentage>40?'Pass':'Fail';
            eachStu+=`<tr>
                    <td>${stu.id}</td>
                    <td>${stu.name}</td>
                    <td>${stu.mail}</td>
                    <td>${stu.gender}</td>
                    <td>${tmarks}</td>
                    <td>${res}</td>
                </tr>`
        })
        document.getElementById('tbody').innerHTML=eachStu;
    }
}
display(StuArr);

//Display data
function studentdata(student){
    let tmarks=totalMarks(student.marks)
    let percentage=(percent(tmarks)).toFixed(0);
    let htmlTemplate= `<h4>${student.name}</h4>
                        <h4>${student.mail}</h4>
                        <h4>${tmarks}</h4>
                        <h4>${percentage}%</h4>`
    document.getElementById('stu-data').innerHTML=htmlTemplate;
    document.getElementById('congrats').innerHTML=`Congratulations!!! You got ${percentage}% in your exams`
}

//Login-functionality
let formTag=document.getElementById('log-in');
let usnInput=document.getElementById('username');
let pwInput=document.getElementById('password');


formTag.addEventListener('submit',function(e){
    e.preventDefault();
    let usnVal=usnInput.value.toLowerCase().trim();
    let pwVal=Number(pwInput.value.trim());
    let student=StuArr.find(function(stu){
        return stu.username==usnVal;
    })
    
    
    let textTag=document.getElementById('text')
    if(student&&student.pw==pwVal){
        textTag.textContent=`Welecome Buddy💙,${student.name}!`;
        if(student.role=='admin'){
            loginAdmin()
        }
        else{
            loginStudent();
            studentdata(student);
        }
    }
    else{
        textTag.classList.remove('text-success')
        textTag.classList.add('text-danger','text-center')
        textTag.textContent=`Invalid User⚠️`;
    }
    usnInput.value='';
    pwInput.value='';
})

//Log In admin function
function loginAdmin(){
    let adminEl=document.getElementById('admin');
    let filterEl=document.getElementById('filter');
    adminEl.classList.remove('hidden');
    filterEl.classList.remove('hidden');
}

//Log In student function
function loginStudent(){
    let stuEl=document.getElementById('std');
    stuEl.classList.remove('hidden');
}

// Filter By name
let filterNameEl=document.getElementById('filter-name');
filterNameEl.addEventListener('keyup',function(){
    let usn=filterNameEl.value;
    let stts=filterStudents(usn,StuArr);
    if(usn.length==0 || stts.length==0){
        document.getElementById('tbody').innerHTML=`<tr>
                    <td colspan="6"><h3 class="text-danger">Data not found❗</h3></td>
                </tr>`
    }
    else{
        display(stts)
    }
});

function filterStudents(enteredname,orgArr){
    enteredname=enteredname.toLowerCase().trim();
    let filteredObj=[];
    for(let student of orgArr)
    {
        let originalName=student.name.toLowerCase().trim();
        if(originalName.startsWith(enteredname))
        {
            filteredObj.push(student);
        }
    }
    return filteredObj;
}

//filter By dropdown
let dropDown=document.getElementById('select')
document.getElementById('form').addEventListener('change',function(){
    let dropDownVal=dropDown.value;
    let drop=filterDropdown(dropDownVal,StuArr)
    display(drop)
})

function filterDropdown(dropDownVal,orgArr){
    let filteredObj=[];
    if (dropDownVal=='All' || dropDownVal==''){
        for(let student of orgArr)
            {
               filteredObj.push(student)
            }
            return filteredObj;
    }

    else if(dropDownVal=='Male' || dropDownVal=='Female'){
        for(let student of orgArr)
            {
               if(student.gender==dropDownVal){
                  filteredObj.push(student)
               }
            }
            return filteredObj;
    }
    else if(dropDownVal=='Pass' || dropDownVal=='Fail'){
        for(let student of orgArr){
            let tmarks=totalMarks(student.marks)
            let percentage=percent(tmarks)
            let res=percentage>40?'Pass':'Fail';
            if(res==dropDownVal){
                filteredObj.push(student)
            }
        }
        return filteredObj;
    }
    else if(dropDownVal=='Above400'){
        for(let student of orgArr){
            let tmarks=totalMarks(student.marks)
            if(tmarks>=400){
                filteredObj.push(student)
            }
        }
        return filteredObj;
    }
}








