document.addEventListener('DOMContentLoaded', function() {
    var calculateClrBtn = document.getElementById('calculateClrBtn');
    calculateClrBtn.addEventListener('click', calculateCLR);
  
    var calculateTransferTaxBtn = document.getElementById('calculateTransferTaxBtn');
    calculateTransferTaxBtn.addEventListener('click', calculateTransferTax);
  });
  
  function calculateCLR() {
    var assessedValueInput = document.getElementById('assessedValueInput');
    var countySelect = document.getElementById('countySelect');
    var clrResult = document.getElementById('clrResult');
  
    var assessedValue = parseFloat(assessedValueInput.value);
    var clrFactor = getCLRFactor(countySelect.value);
  
    if (isNaN(assessedValue) || isNaN(clrFactor)) {
      clrResult.textContent = 'Please enter valid numbers.';
    } else {
      var clr = clrFactor * assessedValue;
      clrResult.textContent = 'CLR: $' + clr.toFixed(2);
    }
  }
  
  function getCLRFactor(county) {
    // Implement the logic to retrieve the CLR factor based on the selected county
    // You can use conditional statements or a lookup table
  
    // Example lookup table
    var clrFactors = {
      'Adams County': 1.14 ,
      'Allegheny County': 1.57,
      
      // Add CLR factors for other counties
    };
  
    return clrFactors[county] || 0; // Return 0 if CLR factor is not found for the county
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
  