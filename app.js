const calc = document.querySelector(".btn");
const loanTerms = document.querySelector("#term");
const amount = document.querySelector("#amount");
const loanType = document.querySelector("#loan-types");
let installment = 0;
let interest = 0;

calc.addEventListener("click", (e) => {
  e.preventDefault();

  if (!loanType.value || !amount.value || !loanTerms.value) {
    alert("Please enter the informations...");
  } else {
    if (loanType.value === "Mortgage") {
      interest = 1.45 / 100;
    } else if (loanType.value === "Personal Finance Loan") {
      interest = 1.92 / 100;
    } else if (loanType.value === "Car Loan") {
      interest = 1.65 / 100;
    }

    installment =
      amount.value *
      ((interest * (1 + interest) ** loanTerms.value) /
        ((1 + interest) ** loanTerms.value - 1));
  }

  document.querySelector(".d-none").className = "d-block";

  document.querySelector("#result-amount").textContent = amount.value;
  document.querySelector("#result-type").textContent = loanType.value;
  document.querySelector("#result-terms").textContent = loanTerms.value;
  document.querySelector("#result-interest").textContent = interest;
  document.querySelector("#result-total-amount").textContent = `${(
    installment * loanTerms.value
  ).toFixed(2)}₺`;
  document.querySelector(
    "#result-installment"
  ).textContent = `${installment.toFixed(2)}₺`;
});

calc.addEventListener("keyup", (e) => {
  if (e.code === "Enter") {
    calc.click();
  }
});
