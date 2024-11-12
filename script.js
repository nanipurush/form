document.getElementById('offerForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting the traditional way
    
    const formContainer = document.querySelector('.form-container');
    const successMessage = document.querySelector('.success-message');
    const offerForm = document.getElementById('offerForm');
  
    // Apply fade-out animation to the form
    formContainer.style.animation = "formSubmit 0.5s forwards";
  
    // After the animation, hide the form and show the success message
    setTimeout(() => {
      offerForm.style.display = 'none';
      successMessage.style.display = 'block';
    }, 500); // Match delay to the CSS animation time
  });
  