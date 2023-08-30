// ++++++++++ Calculate BMI +++++++++++++++++++++++++++++++++
/*
Write a JavaScript program that calculates the BMI, and reports the BMI category as per the following table:
BMI Category	BMI
Underweight =>	below 18.5
Healthy	     =>18.6 to 24.9
Overweight	 =>25 to 25.9
Obese	Obese  =>30 or greater
Input Data:-
Weight 58kg and height 1.60m(160cm)
*/

/*
Code 
function calculateBMI(weight, height) {
  // Convert height from centimeters to meters
  var heightInMeters = height / 100;

  // Calculate BMI
    var bmi = weight / (heightInMeters * heightInMeters);
    // var bmi = weight / (2*heightInMeters);

    // Determine BMI category
  var category;
  if (bmi < 18.5) {
    category = "Underweight";
  } else if (bmi >= 18.5 && bmi <= 24.9) {
    category = "Healthy";
  } else if (bmi >= 25 && bmi <= 29.9) {
    category = "Overweight";
  } else {
    category = "Obese";
  }

  // Return the BMI category
  return category;
}

// Example usage
var weight = 58; // Weight in kilograms
var height = 160; // Height in centimeters

var bmiCategory = calculateBMI(weight, height);
console.log("BMI Category: " + bmiCategory);
*/