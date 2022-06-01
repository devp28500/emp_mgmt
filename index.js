function index(){
    var un=document.forms["myform"]["Uname"].value;
    var pw=document.forms["myform"]["pass"].value;
    if(un!="" && pw!="")
    {
      window.location.href="index.html"
    }
    else{
      alert("Enter Name and Password")
    }
  }