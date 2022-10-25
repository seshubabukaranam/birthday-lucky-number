const dateOfBirth = document.querySelector("#date-of-birth");
const luckyNumber = document.querySelector("#lucky-number");
const btnCheak = document.querySelector("#btn-ckeack");
const outputMeaasge = document.querySelector("#output-message");

btnCheak.addEventListener("click",cheakDobIsLucky);

function cheakDobIsLucky()
{  
  var luckyNum=luckyNumber.value;
  var dob = (dateOfBirth.value) ;
  var sumOfDateOfBitrh = caluclateSumOfDob(dob);  
  if(sumOfDateOfBitrh && dob)
  {
    validationValues(sumOfDateOfBitrh,luckyNum);
  }
  else{
    outputMeaasge.innerText = "Above Fields should not be empty";
  }
 
}

 function caluclateSumOfDob(dob)
 {
    dob= dob.replaceAll("-","");
    var sumOfDob =0;
    for(let i =0; i < dob.length; i++){
        sumOfDob = sumOfDob+ Number(dob.charAt(i));    
    }
    return sumOfDob;
}

function validationValues(sumOfDateOfBitrh,luckyNum)
{
    if(sumOfDateOfBitrh%luckyNum === 0){
        outputMeaasge.innerText= "Your Birth day is Lucky";
    }
    else{
        outputMeaasge.innerText= "Your Birth day is not Lucky";
    }

}