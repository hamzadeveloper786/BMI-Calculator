function calculateBMI() {
    let heightInFeet = document.querySelector(heightInFeet).value;
    let heightInches = document.querySelector(heightInches).value;

    let weightInKg = document.querySelector(weightInKg).value;
    
    console.log (heightInFeet);
    console.log (heightInches);

    console.log (weightInKg);
    heightInFeet = parseInt(heightInFeet);
    heightInches = parseInt(heightInches);

    heightInches += heightInFeet * 12;
    let heightMeter = (heightInches * 2.54) /100;
    
    console.log (heightMeter);
    let heightinSq = (heightMeter * heightMeter);

    console.log (heightinSq);
    let bodyMassIndex = (weightInKg * heightinSq);

    console.log ("BMI", bodyMassIndex);
    let idealWeight = (22 * heightinSq);
    
    console.log (idealWeight);
    let weightLoss = (weightInKg - idealWeight);
    let weightGain = (idealWeight - weightInKg);

    let suggestion = "You are:";

    if(bodyMassIndex > 30){
        suggestion += 'Obese. You need to lose ${weightLoss}kg';
    }else if (bodyMassIndex > 25){
        suggestion += 'Overweight. You need to lose ${weightLose}kg';
    }else if(bodyMassIndex > 18.5){
        if(bodyMassIndex > 22){
            suggestion += 'Normal. But optionally you may lose ${weightLose}kg';
        }else if(parseInt(bodyMassIndex === 22)){
            suggestion += 'perfectly fit'
        }else{
            suggestion += 'Normal. But optionally you may gain ${weightGain}kg';
        }
    }else{
        suggestion += 'Underweight. You are supposed to gain ${weightGain}kg to become normal.';
    }
}  

console.log ("title:", Title);

console.log ("Ideal Weight:" , idealWeight);

document.querySelector("#title").innerHTML = 'Ideal weight: ${(idealWeight).tofixed(2)}kg';
document.querySelector("#suggestion").innerHTML = suggestion;