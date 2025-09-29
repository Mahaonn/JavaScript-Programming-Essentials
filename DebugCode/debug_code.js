    
    function performOperation() {
    // Get user input from input fields
    let num1 = parseInt(document.getElementById('input1').value);
    let num2 = parseInt(document.getElementById('input2').value);
    // Check if inputs are valid numbers
    if (!isNaN(num1) && !isNaN(num2)) {
    // Perform the operation
                    let result = calculateAll(num1, num2);

                    // Display the result
                    displayResult(result);
                } else {
                    displayResult('Please enter valid numbers');
                }
            }

            function calculateAll(a, b) {
                // Introduce a debugger statement to pause execution
                debugger;
                let sum = a + b;
                let mult = a * b;
                let devision = b !== 0 ? Number((a / b).toFixed(1)) : "Division by zero";

                return {
                    sum,
                    mult,
                    devision
                };
            }

            function displayResult(results) {
                // Display the result in the paragraph element
                const resultElement = document.getElementById('result');

                if (typeof results === "string") {
                    resultElement.textContent = `The result is: ${results}`;
                } else{
                    resultElement.innerHTML = `
                    Sum: ${results.sum} <br>
                    Multiply: ${results.mult} <br>
                    Devision: ${results.devision}
                    `;
                }
                
            }
        