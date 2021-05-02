//------------------------Faiza Berrichi

function getSamePass(){
    var inputVall=document.getElementById('password1').value;
    var inputVal1=document.getElementById ('password2').value
if(inputVall===inputVal1){document.getElementById("password1").style.border="3px solid green";
document.getElementById("password2").style.border="3px solid green";
}
 else{
    document.getElementById("password1").style.border="3px solid red";
    document.getElementById("password2").style.border="3px solid red";
}
}
//github FAITH-ORAN