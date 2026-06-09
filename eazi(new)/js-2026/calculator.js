const saleInput = document.getElementById("saleprice");

if (saleprice) {
  const commFee = document.getElementById("commFee");
  const saving = document.getElementById("saving");
  const avgAgentFeeElement = document.querySelector(
    ".calcForm__row:nth-child(4) p:last-child"
  );

  const COMMISSION_RATE = 0.045;

  function getEaziFee(price) {
    if (price <= 600000) return 33000;
    if (price <= 1000000) return 45000;
    return 45000;
  }

  function formatCurrency(num) {
    return "R " + num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  function parseNumber(str) {
    return parseFloat(str.replace(/[^\d.-]/g, "")) || 0;
  }
  function updateCalculator() {
    let price = parseNumber(saleInput.value);
    if (price <= 0) {
      saving.textContent = "R 0";
      return;
    }

    let eaziFee = getEaziFee(price);
    let avgAgentFee = price * COMMISSION_RATE;
    let savings = avgAgentFee - eaziFee;

    if (savings <= 0) savings = 0;

    commFee.textContent = formatCurrency(eaziFee);
    avgAgentFeeElement.textContent = formatCurrency(Math.round(avgAgentFee));
    saving.textContent = formatCurrency(Math.round(savings)) + "*";
  }

  saleInput.addEventListener("input", (e) => {
    let rawValue = parseNumber(e.target.value);
    e.target.value = formatCurrency(rawValue);
    updateCalculator();
  });

  saleInput.addEventListener("blur", () => {
    if (saleInput.value.trim() === "" || saleInput.value.trim() === "R") {
      saleInput.value = "R ";
      saving.textContent = "R 0";
    }
  });

  if (!saleInput.value.startsWith("R")) {
    saleInput.value = "R " + saleInput.value;
  }
  updateCalculator();
}
