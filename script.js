document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('.product-form');
    const imageInput = form.querySelector('input[name="image"]');
    const previewContainer = document.createElement('div');
    previewContainer.style.marginTop = '1rem';
  
    // Image Preview
    imageInput.addEventListener('change', function () {
      const file = this.files[0];
      if (file && file.type.startsWith('image/')) {
        const reader = new FileReader();
        reader.onload = function (e) {
          previewContainer.innerHTML = `<img src="${e.target.result}" alt="Preview" style="max-width: 200px; border-radius: 8px; box-shadow: 0 2px 5px rgba(0,0,0,0.2);" />`;
        };
        reader.readAsDataURL(file);
      } else {
        previewContainer.innerHTML = '<p style="color:red;">Invalid image file</p>';
      }
    });
  
    imageInput.parentElement.appendChild(previewContainer);
  
    // Auction time countdown message
    const endDateInput = form.querySelector('input[name="endDate"]');
    const endTimeInput = form.querySelector('input[name="endTime"]');
    const countdownMessage = document.createElement('p');
    countdownMessage.style.fontSize = '0.8rem';
    countdownMessage.style.color = '#333';
  
    function updateCountdownMessage() {
      const endDate = endDateInput.value;
      const endTime = endTimeInput.value;
  
      if (endDate && endTime) {
        const auctionEnd = new Date(`${endDate}T${endTime}`);
        const now = new Date();
        const diff = auctionEnd - now;
  
        if (diff > 0) {
          const days = Math.floor(diff / (1000 * 60 * 60 * 24));
          const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
          const mins = Math.floor((diff / (1000 * 60)) % 60);
          countdownMessage.textContent = `Auction will end in ${days} day(s), ${hours} hour(s), and ${mins} minute(s).`;
        } else {
          countdownMessage.textContent = '⚠️ Please select a future date and time.';
        }
      } else {
        countdownMessage.textContent = '';
      }
    }
  
    endDateInput.addEventListener('input', updateCountdownMessage);
    endTimeInput.addEventListener('input', updateCountdownMessage);
    endTimeInput.parentElement.appendChild(countdownMessage);
  
    // Form Submit
    form.addEventListener('submit', function (e) {
      e.preventDefault();
  
      // Basic client-side validation
      const inputs = form.querySelectorAll('input, textarea');
      let allFilled = true;
      inputs.forEach(input => {
        if (!input.value) {
          input.style.borderColor = 'red';
          allFilled = false;
        } else {
          input.style.borderColor = '#ccc';
        }
      });
  
      if (!allFilled) {
        alert('⚠️ Please fill out all fields before publishing.');
        return;
      }
  
      alert('✅ Your product has been successfully published on Bidify!');
      form.reset();
      previewContainer.innerHTML = '';
      countdownMessage.textContent = '';
    });
  });
  