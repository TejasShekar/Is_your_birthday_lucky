const dateOfBirth = document.querySelector("#dob");
const luckyNum = document.querySelector("#lucky-num");
const checkBtn = document.querySelector("#check-btn");

function sumOfDOB() {
  let sum = 0;
  let dob = dateOfBirth.value;
  dob = dob.replaceAll("-", "");
  for (let i = 0; i < dob.length; i++) {
    sum = sum + Number(dob.charAt(i));
  }
  console.log(sum);
}

checkBtn.addEventListener("click", sumOfDOB);
