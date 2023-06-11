document.addEventListener('DOMContentLoaded', function() {
    var calculateClrBtn = document.getElementById('calculateClrBtn');
    calculateClrBtn.addEventListener('click', calculateCLR);
  
    var calculateTransferTaxBtn = document.getElementById('calculateTransferTaxBtn');
    calculateTransferTaxBtn.addEventListener('click', calculateTransferTax);
  });
  
  function calculateCLR() {
    var assessedValueInput = document.getElementById('assessedValueInput');
    var clrRateInput = document.getElementById('clrRateInput');
    var clrResult = document.getElementById('clrResult');
  
    var assessedValue = parseFloat(assessedValueInput.value);
    var clrRate = parseFloat(clrRateInput.value);
  
    if (isNaN(assessedValue) || isNaN(clrRate)) {
      clrResult.textContent = 'Please enter valid numbers.';
    } else {
      var clr = (assessedValue * clrRate) / 100;
      clrResult.textContent = 'CLR: $' + clr.toFixed(2);
    }
  }
  
  function calculateTransferTax() {
    var salesAmountInput = document.getElementById('salesAmountInput');
    var transferTaxRateInput = document.getElementById('transferTaxRateInput');
    var transferTaxResult = document.getElementById('transferTaxResult');
  
    var salesAmount = parseFloat(salesAmountInput.value);
    var transferTaxRate = parseFloat(transferTaxRateInput.value);
  
    if (isNaN(salesAmount) || isNaN(transferTaxRate)) {
      transferTaxResult.textContent = 'Please enter valid numbers.';
    } else {
      var transferTax = (salesAmount * transferTaxRate) / 100;
      transferTaxResult.textContent = 'Transfer Tax: $' + transferTax.toFixed(2);
    }
  }
  