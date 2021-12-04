const dateOfBirth = document.querySelector("#dob");
const luckyNum = document.querySelector("#lucky-num");
const checkBtn = document.querySelector("#check-btn");

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
  console.log(sum)
}
checkBtn.addEventListener("click", checkLuck);
