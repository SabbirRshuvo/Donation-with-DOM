let mainBalance = 55000;
let balance1 = 0;
let balance2 = 0;
let balance3 = 0;
const history = [];

function updateMainBalance() {
  document.getElementById("mainBalance").textContent = `
  $${mainBalance.toFixed(2)}
  `;
}
// to handle Donation

function addToHistory(mainBalance, balance1, balance2, balance3) {
  const historyItem = document.createElement("div");
  historyItem.className =
    "bg-white p-3 rounded-md border-1-2 border-indigo-500";

  historyItem.innerHTML = `
  <p class="text-xs text-gray-500">${new Date().toLocaleDateString()}</p>
  
  <p class="text-lg text-gray-500">Balance: ${mainBalance}</p>
  <p class="text-xs text-gray-500">Donate:  B1: --${balance1} B2:-- ${balance2} B3:-- ${balance3}</p>

  `;

  const historyContainer = document.getElementById("history-list");
  historyContainer.insertBefore(historyItem, historyContainer.firstChild);
}
//

function handleHistory() {
  document.getElementById("history-btn").classList.add("hidden");
  document
    .getElementById("buttonHistoryPage")
    .classList.add("bg-green-500", "text-white");
  document.getElementById("buttonDonationPage").classList.add("bg-gray-400");
  document.getElementById("history-section").classList.remove("hidden");
  addToHistory(mainBalance, balance1, balance2, balance3);
}
function handleDonate() {
  document.getElementById("history-btn").classList.remove("hidden");
  document
    .getElementById("buttonHistoryPage")
    .classList.remove("bg-green-500", "text-white");
  document.getElementById("buttonDonationPage").classList.remove("bg-gray-400");
  document.getElementById("history-section").classList.add("hidden");
}

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
    alert("Invalid donation amount");
    return;
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

const navigateButton = document.getElementById("navigateButton");

navigateButton.addEventListener("click", function () {
  window.location.href = "blog.html";
});

/*



closer
*/
