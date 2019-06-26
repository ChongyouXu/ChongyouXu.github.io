if (localStorage.pagecount)
  {
    localStorage.pagecount=Number(localStorage.pagecount)+1; 
  }
else{
       localStorage.pagecount=1;
    }
document.getElementById("visit-counts").innerHTML="访问次数："+localStorage.pagecount+"次"
