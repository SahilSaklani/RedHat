
      let patients={
    User: "sahil",
    pass:"12345"
};

let doctors={
    user:"Pradeep",
    pass:"1234"
};
let admin={
    user:"admin",
    pass:"123"
};
let appoint={
    Doctor: "Dr.Pradeep",
    Fees:"1000",
    date:"18/02/2022",
    status:"active"
};

let doclist=["Dr.Pradeep","Dr.Sushil","Dr.Himanshu"];
let patientlist=["Sahil","Aditya","Rahul"];

function check()
{
  var usernam = document.getElementById("username").value
  var password=document.getElementById("pwd").value
 if(usernam==patients.User&&password==patients.pass)
 {
  window.location.href="dashboard-patient.html";
 }
 else
 {
     document.getElementById("errr").innerHTML="username or password is incorect";
 }

}

function checkd()
{
  var dusernam = document.getElementById("username").value;
  var dpassword=document.getElementById("pwd").value;
 if(dusernam==doctors.user&&dpassword==doctors.pass)
 {
  window.location.href="dashboard-doctor.html";
 }
 else
 {
     document.getElementById("errr").innerHTML="username or password is incorect";
 }

}

function checka()
{
  var ausernam = document.getElementById("username").value;
  var apassword=document.getElementById("pwd").value;
 if(ausernam==admin.user&&apassword==admin.pass)
 {
  window.location.href="dashboard-admin.html";
 }
 else
 {
     document.getElementById("errr").innerHTML="username or password is incorect";
 }

}

function checkappointment()
{
    document.getElementById("txt").innerHTML = "Doctor : " + appoint.Doctor + '<br>' +"Fees : " +appoint.Fees + '<br>' +"Date of appointment : " + appoint.date + '<br>' + "Status : "+ appoint.status+'<br>';
}

function changeappoint()
{
    appoint.Doctor=document.getElementById("doctor").value;
    appoint.date=document.getElementById("dat").value;

}

function getdoc()
{
    var tx="";
    for (let i=0; i<doclist.length; i++)
    {
        
        tx= doclist[i];
        document.getElementById(i+1).innerHTML=tx;
    }
}

function checkdoctorappointment()
{
    document.getElementById("txt").innerHTML="Fees : " +appoint.Fees + '<br>' +"Date of appointment : " + appoint.date + '<br>' + "Status : "+ appoint.status+'<br>';
  
    document.getElementById("cancel").innerHTML="CANCEL";
    document.getElementById("cancel").style.display="block";
    document.getElementById("check").style.display="none";
}

function cancelappoint()
{
    appoint.status="Cancelled by Doctor";
    checkdoctorappointment();
    document.getElementById("undo").innerHTML="UNDO";
    document.getElementById("undo").style.display="block";
    document.getElementById("cancel").style.display="none";
}

function undoappoint()
{
   appoint.status="active";
   checkdoctorappointment();
   document.getElementById("cancel").innerHTML="CANCEL";
    document.getElementById("cancel").style.display="block";
    document.getElementById("undo").style.display="none";
}

function checkPATIENTS()
{let txt=" ";
    for (let i=0; i<patientlist.length; i++)
    {
        
        txt+= patientlist[i];
        txt+='<br>';
        
    }
    document.getElementById("txt").innerHTML="<h3>Patients list:</h3>" + '<br>' + txt;

}
function checkDOCTORS()
{let txt1="";
    for (let i=0; i<doclist.length; i++)
    {
        
        txt1+= doclist[i];
        txt1+='<br>';
        
    }
    document.getElementById("txt").innerHTML="<h3>Doctors list:</h3>"+ '<br>'+ txt1;
    
}

function deleteP()
{
    patientlist.shift();
    checkPATIENTS()
}
function deleteD()
{
    doclist.shift();
    checkDOCTORS()
}

function addp()
{
    patientlist.push(document.getElementById("pname").value);
    checkPATIENTS()
}

function addd()
{
    doclist.push(document.getElementById("dname").value);
    checkDOCTORS()
}
