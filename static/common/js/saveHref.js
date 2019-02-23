function refreshPage(){  
   var sessionStorage=window.sessionStorage;  
   // var index=location.href.lastIndexOf("/");
   var index=location.href; 
   if(index!=-1){  
       var href=location.href.substring(index.lastIndexOf('/', index.lastIndexOf('/') - 1) + 1);  
       sessionStorage.setItem("refreshPage",href);  
   } 
}
window.onload = function(){  
   refreshPage(); 
}