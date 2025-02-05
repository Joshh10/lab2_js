function changePic() 
{

  /* write code to change the picture to the one linked at:
  
    - https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Rhode_Island_Rams_logo.svg/1200px-Rhode_Island_Rams_logo.svg.png
    
	- change the width of the image
  */
  var getLogo = document.getElementById('uri_logo');
  getLogo.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Rhode_Island_Rams_logo.svg/1200px-Rhode_Island_Rams_logo.svg.png";
  getLogo.style.width = "200px";
  
}



function changeTags() 
{

  /* write code to change the color of all paragraphs to one of your choosing
  */
 var changeColor = document.querySelectorAll("p");

 changeColor.forEach(function(p){
    p.style.color = "green";

 });

 

  
}


function removeParagraph() 
{

	/* write code to use a confirmation box to confirm that the  user wants to remove the paragraph where this button is located. If the user confirms, then remove this paragraph.
  */
 var removePara = document.getElementById('tinyParagraph');
 var verify = confirm("Do you want to delete this?");
 if(verify){
  removePara.remove();  
 }
  
}