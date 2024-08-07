   

var lang= document.getElementById("lang").value;

function StartMeUp ()
{

document.getElementById("audioFrame").src="captcha?lang="+lang+"&type=a";
   
   

    document.getElementById("inCaptchaChars").focus();    
    document.getElementById("inCaptchaChars").value='';
   

}

function ShutMeDown ()
{
document.getElementById("audioFrame").src="";
}



function reloadImg ()
{

   
   
var r= Math.random();

  
    document.getElementById("imgCaptcha").src=parseInt(1 + r * 10) + ".jpg";//"captcha?lang="+lang+"&type=i&"+r;
    document.getElementById("inCaptchaChars").focus();
    document.getElementById("inCaptchaChars").value='';
}
function reload ()
{
return;
   
   
var r2= Math.random();

   document.getElementById("imgCaptcha").src="captcha?lang="+lang+"&type=i&"+r2;
    
       
    
	//serve per dare il tempo all'immagne di essere generata e creare il codice corretto in sessione
  	setTimeout('StartMeUp()',1000);
  
	
}



function checkCode()
{return true;
	var r= Math.random();
	var xmlhttp;
	
	if (window.XMLHttpRequest)
 	 {
	  // code for IE7+, Firefox, Chrome, Opera, Safari	
		
 
	  xmlhttp=new XMLHttpRequest();
	  }
	else if (window.ActiveXObject)
 	 {
 	 // code for IE6, IE5
 	 xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
 	 }
	else
 	 {
 		 document.formcaptcha.submit();
 		 return true;
 	  //document.getElementById('ajaxNotSupported').innerHTML='spiacente il tuo browser e molto vecchio e non supporta questa funzionalità. Aggiorna ad un versione più recente';
 	 }
	xmlhttp.onreadystatechange=function()
	{
		if(xmlhttp.readyState==4)
  		{	
  			
  			
  			if(xmlhttp.responseText=='false'){
  				alert("Codice di sicurezza errato");
  				//document.getElementById('ajax').innerHTML="Codice di sicurezza errato";
  				reloadImg();
  				return false;
  			}
  			else{
  			document.formcaptcha.submit();
  			return true;
  			}
  		}
	}
 	var code=document.getElementById("inCaptchaChars").value;
	xmlhttp.open("GET","checkcode.jsp?code="+code+"&r="+r,true);
	
	xmlhttp.send();
	
	return false;
}