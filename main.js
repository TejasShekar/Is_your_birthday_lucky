const dateOfBirth = document.querySelector("#dob");
const luckyNum = document.querySelector("#lucky-num");
const checkBtn = document.querySelector("#check-btn");
const output = document.querySelector("#output");

function sumOfDOB(dob) {
  let sum = 0;
  dob = dob.replaceAll("-", "");
  for (let i = 0; i < dob.length; i++) {
    sum = sum + Number(dob.charAt(i));
  }
  return(sum);
}

function checkLuck() {
  const dob = dateOfBirth.value;
  const sum = sumOfDOB(dob);
  if(sum%luckyNum.value===0){
      output.innerHTML="Your birthdate is lucky, Awesome !🥳";
  }else{
      output.innerHTML="Sorry, your birthdate isn't lucky 😔";
  }
}
checkBtn.addEventListener("click", checkLuck);
