document.addEventListener("DOMContentLoaded", function () {
  var calculateClrBtn = document.getElementById("calculateClrBtn");
  calculateClrBtn.addEventListener("click", calculateCLR);


});

function calculateCLR() {
  var assessedValueInput = document.getElementById("assessedValueInput");
  var countySelect = document.getElementById("countySelect");
  var clrResult = document.getElementById("clrResult");

  var assessedValue = parseFloat(assessedValueInput.value);
  var clrFactor = getCLRFactor(countySelect.value);

  if (isNaN(assessedValue) || isNaN(clrFactor)) {
    clrResult.textContent = "Please enter valid numbers.";
  } else {
    var clr = clrFactor * assessedValue;
    var clrFormatted = clr.toLocaleString(undefined, {
      style: "currency",
      currency: "USD",
    });
    
    clrResult.textContent = "CLR: " + clrFormatted;
    
  }
}

function getCLRFactor(county) {
  // Implement the logic to retrieve the CLR factor based on the selected county
  // You can use conditional statements or a lookup table

  // Example lookup table
  var clrFactors = {
    "Adams County": 1.14,
    "Allegheny County": 1.57,
    "Armstrong": 2.46,
    'Beaver': 6.76,
   ' Bedford': 1.39,
    'Franklin': 10.53,
   ' Philadelphia1': 1.08,
   'Montour': 1.81,
    'Berks': 2.22,
    'Fulton': 3.76,
    'Elk': 3.98,
    'Philadelphia1': 1.0,
    'Blair': 1.16,
    " Greene": 2.19,
    'Pike': 8.26,
    'Bradford': 4.33,
    'Huntingdon': 6.54,
   ' Potter': 4.37,
   ' Bucks': 13.7,
  '  Indiana': 1.06,
   ' Schuylkill': 3.82,
   ' Butler': 14.08,
    'Jefferson': 3.66,
   ' Snyder': 8.4,
    'Cambria': 6.06,
   ' Juniata': 9.35,
    'Somerset': 4.24,
    'Cameron': 4.18,
    'Lackawanna': 12.2,
   ' Sullivan': 1.81,
    'Carbon': 4.12,
   ' Lancaster': 1.47,
   ' Susquehanna': 4.52,
    'Centre': 4.67,
   ' Lawrence': 1.67,
  '  Tioga': 1.94,
    'Chester': 2.53,
    'Lebanon': 1.39,
    'Union': 1.8,
    'Clarion': 3.44,
    'Lehigh': 1.57,
   ' Venango': 1.52,
    'Clearfield': 9.9,
   ' Luzerne': 1.32,
   ' Warren': 5.26,
    'Clinton': 1.57,
    'Lycoming': 1.79,
    'Washington': 1.19,
    'Columbia': 5.78,
    'McKean': 1.24,
    'Wayne': 1.75,
    'Crawford': 4.69,
   ' Mercer': 6.99,
    'Wayne': 1.0,
    'Cumberland': 1.17,
   'Mifflin': 3.51,
    'Westmoreland': 9.09,
   ' Dauphin': 1.91,
    'Monroe': 1.65,
    'Wyoming': 7.04,
   ' Delaware': 1.37,
   ' Montgomery': 2.53,
    'York': 1.52,
    'Erie': 1.41,
    'Northampton': 4.61,
    'Fayette': 1.93,
    'Northumberland': 8.20,
    'Forest': 6.85,
    'Perry': 1.41,
    'Franklin': 10.53, 

    'Fulton': 3.76,
    'Philadelphia2': 1.00,

    // Add CLR factors for other counties
  };

  return clrFactors[county] || 0; // Return 0 if CLR factor is not found for the county
}

