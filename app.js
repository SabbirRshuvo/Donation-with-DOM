let mainBalance = 5500;
let balance1 = 0;
let balance2 = 0;
let balance3 = 0;
const history = [];

const firstLocation = document.getElementById("first-location").innerText;
const secondLocation = document.getElementById("second-location").innerText;
const thirdLocation = document.getElementById("third-location").innerText;

function updateMainBalance() {
  document.getElementById("mainBalance").textContent = `
  $${mainBalance.toFixed(2)}
  `;
}

function handleHistory() {
  document.getElementById("history-btn").classList.add("hidden");
  document
    .getElementById("buttonHistoryPage")
    .classList.add("bg-green-500", "text-white");
  document.getElementById("buttonDonationPage").classList.add("bg-gray-400");
  document.getElementById("history-section").classList.remove("hidden");
}
function handleDonate() {
  document.getElementById("history-btn").classList.remove("hidden");
  document
    .getElementById("buttonHistoryPage")
    .classList.remove("bg-green-500", "text-white");
  document.getElementById("buttonDonationPage").classList.remove("bg-gray-400");
  document.getElementById("history-section").classList.add("hidden");
}

function handleDonation(inputId, balanceId, balanceVar, location) {
  const donationAmount =
    parseFloat(document.getElementById(inputId).value) || 0;

  if (donationAmount > 0 && donationAmount <= mainBalance) {
    mainBalance -= donationAmount;
    balanceVar += donationAmount;

    document.getElementById(balanceId).textContent = `$${balanceVar.toFixed(
      2
    )}`;

    // history details
    const historyItem = document.createElement("div");
    historyItem.className = "bg-white rounded-md border-1-2 border-indigo-500";
    historyItem.innerHTML = `
        <h3>${donationAmount} Taka is Donated for Donate for ${location}</h3>
        <p class="text-sm">
        ${new Date().toLocaleString()}(BD Standard Time)
        </p>
     `;

    const historyContainer = document.getElementById("history-list");
    historyContainer.insertBefore(historyItem, historyContainer.firstChild);

    updateMainBalance();
    my_modal_1.showModal();
    // history

    document.getElementById(inputId).value = "";
  } else {
    alert("Invalid donation amount");
  }

  return balanceVar;
}

document.getElementById("donateButton1").addEventListener("click", function () {
  balance1 = handleDonation("donation1", "balance1", balance1, firstLocation);
});
document.getElementById("donateButton2").addEventListener("click", function () {
  balance2 = handleDonation("donation2", "balance2", balance2, secondLocation);
});
document.getElementById("donateButton3").addEventListener("click", function () {
  balance3 = handleDonation("donation3", "balance3", balance3, thirdLocation);
});

const navigateButton = document.getElementById("navigateButton");

navigateButton.addEventListener("click", function () {
  window.location.href = "blog.html";
});
