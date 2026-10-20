// What is BMI calculator?

// BMI (Body Mass Index) calculator is a tool that helps to determine whether a person has a healthy body weight for a given height. It is calculated by dividing a person's weight in kilograms by the square of their height in meters. The resulting value is then used to categorize the individual into different weight status categories, such as underweight, normal weight, overweight, or obese.


function bmi(weight, height) {
    return weight / (height * height);
};
console.log(bmi(70, 1.75)); // Example usage: weight = 70 kg, height = 1.75 m


console.log(bmi(50, 1.60).toFixed(2)); // Example usage: weight = 50 kg, height = 1.60 m, rounded to 2 decimal places