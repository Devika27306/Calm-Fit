window.onload = function() {
    let steps = 0;
    const stepsDisplay = document.getElementById("steps");
    const caloriesDisplay = document.getElementById("caloriesBurned");

    const caloriesPerStep = 0.04; // Approximate calories burned per step

    // Function to add steps and calculate calories burned
    function addSteps() {
        steps += 100; // Increment by 100 steps
        stepsDisplay.textContent = `Steps: ${steps}`;

        // Calculate and update calories burned
        const caloriesBurned = (steps * caloriesPerStep).toFixed(2);
        caloriesDisplay.textContent = `Calories Burned: ${caloriesBurned} kcal`;

        console.log(`Steps: ${steps}, Calories: ${caloriesBurned}`);
    }

    // Function to add water intake
    function addWater() {
        const waterElement = document.getElementById('water');
        let currentWater = parseInt(waterElement.textContent.replace(/\D/g, '')) || 0;
        currentWater++;
        waterElement.textContent = `Glasses: ${currentWater}`;
    }

    // Function to calculate BMI
    function calculateBMI() {
        const weight = parseFloat(document.getElementById('weight').value);
        const height = parseFloat(document.getElementById('height').value);

        if (weight > 0 && height > 0) {
            const bmi = (weight / (height * height)).toFixed(2);
            let resultText = `Your BMI is ${bmi}. `;

            if (bmi < 18.5) {
                resultText += 'You are underweight. It is recommended to gain weight.';
            } else if (bmi >= 18.5 && bmi <= 24.9) {
                resultText += 'You have a normal weight. Keep it up!';
            } else if (bmi >= 25 && bmi <= 29.9) {
                resultText += 'You are overweight. It is recommended to lose weight.';
            } else {
                resultText += 'You are obese.';
            }

            document.getElementById('bmiResult').textContent = resultText;
        } else {
            alert("Please enter valid weight and height values.");
        }
    }

    // Attach functions to global scope
    window.addSteps = addSteps;
    window.addWater = addWater;
    window.calculateBMI = calculateBMI;
};
