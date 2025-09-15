// Wait until the DOM is fully loaded before running scripts
document.addEventListener('DOMContentLoaded', () => {

    // --- PART 2: JAVASCRIPT FUNCTIONS - SCOPE, PARAMETERS & RETURN VALUES ---
    
    // 2a: Demonstrating Global vs. Local Scope
    const scopeBtn = document.getElementById('scope-btn');
    let globalScopeVar = "I am GLOBAL! 🌎"; // This is a global variable

    function demonstrateScope() {
        // This is a local variable, only accessible inside this function.
        // It has the same name as the global one, creating a "shadow".
        let globalScopeVar = "I am LOCAL! 🏠"; 
        
        console.log("Inside the function, the variable is:", globalScopeVar); // Will log the local value
    }

    scopeBtn.addEventListener('click', () => {
        console.log("--- Scope Test ---");
        console.log("Before calling the function, the variable is:", globalScopeVar); // Logs the global value
        demonstrateScope();
        console.log("After calling the function, the variable is:", globalScopeVar); // Still logs the global value
    });

    // 2b: Function with parameters and a return value
    const calcResultSpan = document.getElementById('calc-result');

    /**
     * A reusable function that takes two numbers and returns their sum.
     * @param {number} num1 - The first number.
     * @param {number} num2 - The second number.
     * @returns {number} The sum of the two numbers.
     */
    function addNumbers(num1, num2) {
        return num1 + num2;
    }

    // Using the function and updating the DOM with the returned value
    const sum = addNumbers(7, 15);
    calcResultSpan.textContent = sum;


    // --- PART 3: COMBINING CSS ANIMATIONS WITH JAVASCRIPT ---

    // 3a: Triggering the 'shake' animation on a box
    const shakeBtn = document.getElementById('shake-btn');
    const shakeBox = document.getElementById('shake-box');

    shakeBtn.addEventListener('click', () => {
        // Add the class to start the animation
        shakeBox.classList.add('shake-animation');

        // IMPORTANT: Remove the class after the animation ends.
        // Otherwise, you can't re-trigger it by adding the same class again.
        // The animation duration in CSS is 0.82s (820ms).
        setTimeout(() => {
            shakeBox.classList.remove('shake-animation');
        }, 820);
    });

    // 3b: Controlling a modal window
    const modalBtn = document.getElementById('modal-btn');
    const closeModalBtn = document.getElementById('close-modal-btn');
    const modalContainer = document.getElementById('modal-container');

    function openModal() {
        modalContainer.classList.add('show');
    }

    function closeModal() {
        modalContainer.classList.remove('show');
    }
    
    // Event listeners to open and close the modal
    modalBtn.addEventListener('click', openModal);
    closeModalBtn.addEventListener('click', closeModal);

    // Optional: Close modal by clicking the background overlay
    modalContainer.addEventListener('click', (event) => {
        // If the clicked element is the container itself (the overlay)
        if (event.target === modalContainer) {
            closeModal();
        }
    });

});