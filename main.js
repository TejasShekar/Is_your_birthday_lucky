const dateOfBirth = document.querySelector("#dob");
const luckyNum = document.querySelector("#lucky-num");
const checkBtn = document.querySelector("#check-btn");
const output = document.querySelector("#output");
const main = document.querySelector("#container");
const noticeBtn = document.querySelector("#notice-btn");
const notice = document.querySelector("#notice");

main.style.display = "none";

noticeBtn.addEventListener("click", function showMain() {
  main.style.display = "block";
  notice.style.display = "none";
});

function sumOfDOB(dob) {
  let sum = 0;
  dob = dob.replaceAll("-", "");
  for (let i = 0; i < dob.length; i++) {
    sum = sum + Number(dob.charAt(i));
  }
  return sum;
}

function checkLuck() {
  if (dateOfBirth.value && luckyNum.value) {
    const dob = dateOfBirth.value;
    const sum = sumOfDOB(dob);
    if (sum % luckyNum.value === 0) {
      output.innerText = "Your birthdate is lucky, Awesome !🥳";
    } else {
      output.innerText = "Sorry, your birthdate isn't lucky 😔";
    }
  } else {
    output.style.color = "red";
    output.innerText = "Fill all the required inputs";
  }
}
checkBtn.addEventListener("click", checkLuck);
