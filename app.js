// Select All password boxes
const passowrdBox = document.querySelector("#password");
const passowrdBox1 = document.querySelector("#password1");
const passowrdBox2 = document.querySelector("#password2");
const passowrdBox3 = document.querySelector("#password3");
const passowrdBox4 = document.querySelector("#password4");
const passowrdBox5 = document.querySelector("#password5");
const passowrdBox6 = document.querySelector("#password6");
const passowrdBox7 = document.querySelector("#password7");
const passowrdBox8 = document.querySelector("#password8");
const passowrdBox9 = document.querySelector("#password9");
const passowrdBox10 = document.querySelector("#password10");
const passowrdBox11 = document.querySelector("#password11");
const passowrdBox12 = document.querySelector("#password12");
const passowrdBox13 = document.querySelector("#password13");
const passowrdBox14 = document.querySelector("#password14");

// Select Copy button
const copyPassowrdBtn = document.getElementById("copy-password");
const copyPassowrdBtn1 = document.getElementById("copy-password1");
const copyPassowrdBtn2 = document.getElementById("copy-password2");
const copyPassowrdBtn3 = document.getElementById("copy-password3");
const copyPassowrdBtn4 = document.getElementById("copy-password4");
const copyPassowrdBtn5 = document.getElementById("copy-password5");
const copyPassowrdBtn6 = document.getElementById("copy-password6");
const copyPassowrdBtn7 = document.getElementById("copy-password7");
const copyPassowrdBtn8 = document.getElementById("copy-password8");
const copyPassowrdBtn9 = document.getElementById("copy-password9");
const copyPassowrdBtn10 = document.getElementById("copy-password10");
const copyPassowrdBtn11 = document.getElementById("copy-password11");
const copyPassowrdBtn12 = document.getElementById("copy-password12");
const copyPassowrdBtn13 = document.getElementById("copy-password13");
const copyPassowrdBtn14 = document.getElementById("copy-password14");

const length = 8;

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";

const allChars = upperCase + lowerCase + number;

function createPassword() {
  let password = "";
  password += upperCase[Math.floor(Math.random() * upperCase.length)];
  password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
  password += number[Math.floor(Math.random() * number.length)];

  while (length > password.length) {
    password += allChars[Math.floor(Math.random() * allChars.length)];
  }

  passowrdBox.value = password;
}

function createPassword1() {
  let password = "";
  password += upperCase[Math.floor(Math.random() * upperCase.length)];
  password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
  password += number[Math.floor(Math.random() * number.length)];

  while (length > password.length) {
    password += allChars[Math.floor(Math.random() * allChars.length)];
  }

  passowrdBox1.value = password;
}

function createPassword2() {
  let password = "";
  password += upperCase[Math.floor(Math.random() * upperCase.length)];
  password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
  password += number[Math.floor(Math.random() * number.length)];

  while (length > password.length) {
    password += allChars[Math.floor(Math.random() * allChars.length)];
  }

  passowrdBox2.value = password;
}

function createPassword3() {
  let password = "";
  password += upperCase[Math.floor(Math.random() * upperCase.length)];
  password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
  password += number[Math.floor(Math.random() * number.length)];

  while (length > password.length) {
    password += allChars[Math.floor(Math.random() * allChars.length)];
  }

  passowrdBox3.value = password;
}

function createPassword4() {
  let password = "";
  password += upperCase[Math.floor(Math.random() * upperCase.length)];
  password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
  password += number[Math.floor(Math.random() * number.length)];

  while (length > password.length) {
    password += allChars[Math.floor(Math.random() * allChars.length)];
  }

  passowrdBox4.value = password;
}

function createPassword5() {
  let password = "";
  password += upperCase[Math.floor(Math.random() * upperCase.length)];
  password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
  password += number[Math.floor(Math.random() * number.length)];

  while (length > password.length) {
    password += allChars[Math.floor(Math.random() * allChars.length)];
  }

  passowrdBox5.value = password;
}

function createPassword6() {
  let password = "";
  password += upperCase[Math.floor(Math.random() * upperCase.length)];
  password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
  password += number[Math.floor(Math.random() * number.length)];

  while (length > password.length) {
    password += allChars[Math.floor(Math.random() * allChars.length)];
  }

  passowrdBox6.value = password;
}

function createPassword7() {
  let password = "";
  password += upperCase[Math.floor(Math.random() * upperCase.length)];
  password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
  password += number[Math.floor(Math.random() * number.length)];

  while (length > password.length) {
    password += allChars[Math.floor(Math.random() * allChars.length)];
  }

  passowrdBox7.value = password;
}

function createPassword8() {
  let password = "";
  password += upperCase[Math.floor(Math.random() * upperCase.length)];
  password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
  password += number[Math.floor(Math.random() * number.length)];

  while (length > password.length) {
    password += allChars[Math.floor(Math.random() * allChars.length)];
  }

  passowrdBox8.value = password;
}

function createPassword9() {
  let password = "";
  password += upperCase[Math.floor(Math.random() * upperCase.length)];
  password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
  password += number[Math.floor(Math.random() * number.length)];

  while (length > password.length) {
    password += allChars[Math.floor(Math.random() * allChars.length)];
  }

  passowrdBox9.value = password;
}

function createPassword10() {
  let password = "";
  password += upperCase[Math.floor(Math.random() * upperCase.length)];
  password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
  password += number[Math.floor(Math.random() * number.length)];

  while (length > password.length) {
    password += allChars[Math.floor(Math.random() * allChars.length)];
  }

  passowrdBox10.value = password;
}

function createPassword11() {
  let password = "";
  password += upperCase[Math.floor(Math.random() * upperCase.length)];
  password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
  password += number[Math.floor(Math.random() * number.length)];

  while (length > password.length) {
    password += allChars[Math.floor(Math.random() * allChars.length)];
  }

  passowrdBox11.value = password;
}

function createPassword12() {
  let password = "";
  password += upperCase[Math.floor(Math.random() * upperCase.length)];
  password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
  password += number[Math.floor(Math.random() * number.length)];

  while (length > password.length) {
    password += allChars[Math.floor(Math.random() * allChars.length)];
  }

  passowrdBox12.value = password;
}

function createPassword13() {
  let password = "";
  password += upperCase[Math.floor(Math.random() * upperCase.length)];
  password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
  password += number[Math.floor(Math.random() * number.length)];

  while (length > password.length) {
    password += allChars[Math.floor(Math.random() * allChars.length)];
  }

  passowrdBox13.value = password;
}

function createPassword14() {
  let password = "";
  password += upperCase[Math.floor(Math.random() * upperCase.length)];
  password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
  password += number[Math.floor(Math.random() * number.length)];

  while (length > password.length) {
    password += allChars[Math.floor(Math.random() * allChars.length)];
  }

  passowrdBox14.value = password;
}

const generatebtn = document.getElementById("generate");
generatebtn.addEventListener("click", createPassword);
generatebtn.addEventListener("click", createPassword1);
generatebtn.addEventListener("click", createPassword2);
generatebtn.addEventListener("click", createPassword3);
generatebtn.addEventListener("click", createPassword4);
generatebtn.addEventListener("click", createPassword5);
generatebtn.addEventListener("click", createPassword6);
generatebtn.addEventListener("click", createPassword7);
generatebtn.addEventListener("click", createPassword8);
generatebtn.addEventListener("click", createPassword9);
generatebtn.addEventListener("click", createPassword10);
generatebtn.addEventListener("click", createPassword11);
generatebtn.addEventListener("click", createPassword12);
generatebtn.addEventListener("click", createPassword13);
generatebtn.addEventListener("click", createPassword14);

function copyPassowrd() {
  passowrdBox.select();
  document.execCommand("copy");
}

function copyPassowrd1() {
  passowrdBox1.select();
  document.execCommand("copy");
}

function copyPassowrd2() {
  passowrdBox2.select();
  document.execCommand("copy");
}

function copyPassowrd3() {
  passowrdBox3.select();
  document.execCommand("copy");
}

function copyPassowrd4() {
  passowrdBox4.select();
  document.execCommand("copy");
}

function copyPassowrd5() {
  passowrdBox5.select();
  document.execCommand("copy");
}

function copyPassowrd6() {
  passowrdBox6.select();
  document.execCommand("copy");
}

function copyPassowrd7() {
  passowrdBox7.select();
  document.execCommand("copy");
}

function copyPassowrd8() {
  passowrdBox8.select();
  document.execCommand("copy");
}

function copyPassowrd9() {
  passowrdBox9.select();
  document.execCommand("copy");
}

function copyPassowrd10() {
  passowrdBox10.select();
  document.execCommand("copy");
}

function copyPassowrd11() {
  passowrdBox11.select();
  document.execCommand("copy");
}

function copyPassowrd12() {
  passowrdBox12.select();
  document.execCommand("copy");
}

function copyPassowrd13() {
  passowrdBox13.select();
  document.execCommand("copy");
}

function copyPassowrd14() {
  passowrdBox14.select();
  document.execCommand("copy");
}

copyPassowrdBtn.addEventListener("click", copyPassowrd);
copyPassowrdBtn1.addEventListener("click", copyPassowrd1);
copyPassowrdBtn2.addEventListener("click", copyPassowrd2);
copyPassowrdBtn3.addEventListener("click", copyPassowrd3);
copyPassowrdBtn4.addEventListener("click", copyPassowrd4);
copyPassowrdBtn5.addEventListener("click", copyPassowrd5);
copyPassowrdBtn6.addEventListener("click", copyPassowrd6);
copyPassowrdBtn7.addEventListener("click", copyPassowrd7);
copyPassowrdBtn8.addEventListener("click", copyPassowrd8);
copyPassowrdBtn9.addEventListener("click", copyPassowrd9);
copyPassowrdBtn10.addEventListener("click", copyPassowrd10);
copyPassowrdBtn11.addEventListener("click", copyPassowrd11);
copyPassowrdBtn12.addEventListener("click", copyPassowrd12);
copyPassowrdBtn13.addEventListener("click", copyPassowrd13);
copyPassowrdBtn14.addEventListener("click", copyPassowrd14);
