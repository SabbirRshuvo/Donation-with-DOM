let mainBalance = 5500;
let balance1 = 0;
let balance2 = 0;
let balance3 = 0;

// main balanceDisplay

function updateMainBalance() {
  document.getElementById("mainBalance").textContent = `
  $${mainBalance.toFixed(2)}
  `;
}
// to handle Donation

function handleDonation(inputId, balanceId, balanceVar) {
  const donationAmount =
    parseFloat(document.getElementById(inputId).value) || 0;

  if (donationAmount > 0 && donationAmount <= mainBalance) {
    mainBalance -= donationAmount;
    balanceVar += donationAmount;

    document.getElementById(balanceId).textContent = `$${balanceVar.toFixed(
      2
    )}`;
    updateMainBalance();

    // history

    document.getElementById(inputId).value = "";
  } else {
    return alert("Invalid donation amount");
  }
  return balanceVar;
}

document.getElementById("donateButton1").addEventListener("click", function () {
  balance1 = handleDonation("donation1", "balance1", balance1);
});
document.getElementById("donateButton2").addEventListener("click", function () {
  balance2 = handleDonation("donation2", "balance2", balance2);
});
document.getElementById("donateButton3").addEventListener("click", function () {
  balance3 = handleDonation("donation3", "balance3", balance3);
});
