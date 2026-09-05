
const passBox = document.getElementById("passBox");
const copyBtn = document.getElementById("copyBtn");
const slider  = document.getElementById("lengthSlider");
const lenVal  = document.getElementById("lenVal");
const upper   = document.getElementById("upper");
const lower   = document.getElementById("lower");
const numbers = document.getElementById("numbers");
const symbols = document.getElementById("symbols");
const genBtn  = document.getElementById("genBtn");


const UPPER = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const LOWER = "abcdefghijklmnopqrstuvwxyz";
const NUMS  = "0123456789";
const SYMS  = "!@#$%^&*()_+-=";


function generate() {
  let pool = "";
  if (upper.checked)   pool += UPPER;
  if (lower.checked)   pool += LOWER;
  if (numbers.checked) pool += NUMS;
  if (symbols.checked) pool += SYMS;


  if (!pool) {
    passBox.value = "Select an option!";
    return;
  }

  let password = "";
  for (let i = 0; i < slider.value; i++) {
    password += pool[Math.floor(Math.random() * pool.length)];
  }
  passBox.value = password;
}


slider.addEventListener("input", () => {
  lenVal.textContent = slider.value;
  generate();
});


[upper, lower, numbers, symbols].forEach((cb) => {
  cb.addEventListener("change", generate);
});


genBtn.addEventListener("click", generate);


copyBtn.addEventListener("click", () => {
  if (!passBox.value || passBox.value === "Select an option!") return;
  navigator.clipboard.writeText(passBox.value);
  copyBtn.textContent = "Copied!";
  setTimeout(() => { copyBtn.textContent = "Copy"; }, 1200);
});


generate();