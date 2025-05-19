<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Payment</title>
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600&family=Raleway:wght@400;500;600;700&display=swap" rel="stylesheet">
<style>
    /* General Styles */
    body {
        font-family: 'Poppins', Arial, sans-serif;
        background-color: #f8f9fa;
        margin: 0;
        padding: 0;
        color: #333;
        line-height: 1.6;
    }

   

    /* Payment Main Section */
    .payment-main {
        display: flex;
        padding: 40px 20px;
        gap: 40px;
        font-family: 'Raleway', sans-serif;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
        max-width: 1200px;
        margin: 0 auto;
    }

    .payment-image {
        flex: 1;
        min-width: 300px;
        max-width: 500px;
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
        overflow: hidden;
        border-radius: 15px;
        box-shadow: 0 10px 30px rgba(0,0,0,0.15);
        transition: transform 0.3s ease;
    }

    .payment-image:hover {
        transform: translateY(-5px);
    }

    .payment-image img {
        width: 100%;
        height: auto;
        object-fit: cover;
        transition: transform 0.5s ease;
    }

    .payment-image:hover img {
        transform: scale(1.03);
    }

    /* Payment Form Styles */
    .payment-container {
        flex: 1;
        min-width: 300px;
        max-width: 500px;
        background: linear-gradient(145deg, #1a1a1a 0%, #2d2d2d 100%);
        padding: 40px;
        border-radius: 15px;
        box-shadow: 0 15px 35px rgba(0,0,0,0.2);
        margin: 20px auto;
        color: white;
        position: relative;
        overflow: hidden;
    }

    .payment-container::before {
        content: '';
        position: absolute;
        top: -50%;
        left: -50%;
        width: 200%;
        height: 200%;
        background: radial-gradient(circle, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0) 70%);
        transform: rotate(30deg);
        z-index: 1;
    }

    .form-group {
        margin-bottom: 20px;
        position: relative;
        z-index: 2;
    }

    .payment-container label {
        display: block;
        margin-bottom: 8px;
        color: #ddd;
        font-weight: 500;
        font-size: 14px;
        letter-spacing: 0.5px;
    }

    .payment-container input {
        width: 100%;
        padding: 14px 15px;
        margin-top: 5px;
        border-radius: 8px;
        border: 1px solid #444;
        font-size: 16px;
        background-color: #2d2d2d;
        color: white;
        transition: all 0.3s ease;
        box-shadow: inset 0 1px 3px rgba(0,0,0,0.2);
    }

    .payment-container input:focus {
        outline: none;
        border-color: #4CAF50;
        box-shadow: 0 0 0 2px rgba(76, 175, 80, 0.2);
        background-color: #333;
    }

    .payment-container input::placeholder {
        color: #999;
    }

    .input-icon {
        position: relative;
    }

    .input-icon i {
        position: absolute;
        top: 50%;
        right: 15px;
        transform: translateY(-50%);
        color: #777;
        font-size: 18px;
    }

    .card-icons {
        display: flex;
        gap: 10px;
        margin-top: 10px;
    }

    .card-icon {
        width: 40px;
        height: 25px;
        background-color: white;
        border-radius: 4px;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 2px;
    }

    .card-icon img {
        max-width: 100%;
        max-height: 100%;
    }

    /* Submit Button */
    #submitPayment {
        background: linear-gradient(135deg, #4CAF50 0%, #2E7D32 100%);
        color: white;
        padding: 16px 25px;
        border: none;
        border-radius: 8px;
        cursor: pointer;
        font-weight: 600;
        font-size: 16px;
        transition: all 0.3s ease;
        width: 100%;
        margin-top: 10px;
        letter-spacing: 0.5px;
        text-transform: uppercase;
        box-shadow: 0 4px 6px rgba(0,0,0,0.1);
        position: relative;
        overflow: hidden;
        z-index: 2;
    }

    #submitPayment:hover {
        background: linear-gradient(135deg, #45a049 0%, #1B5E20 100%);
        box-shadow: 0 6px 8px rgba(0,0,0,0.15);
        transform: translateY(-2px);
    }

    #submitPayment:active {
        transform: translateY(0);
    }

    #submitPayment::after {
        content: '';
        position: absolute;
        top: 50%;
        left: 50%;
        width: 5px;
        height: 5px;
        background: rgba(255, 255, 255, 0.5);
        opacity: 0;
        border-radius: 100%;
        transform: scale(1, 1) translate(-50%);
        transform-origin: 50% 50%;
        z-index: -1;
    }

    #submitPayment:focus:not(:active)::after {
        animation: ripple 1s ease-out;
    }

    @keyframes ripple {
        0% {
            transform: scale(0, 0);
            opacity: 0.5;
        }
        100% {
            transform: scale(20, 20);
            opacity: 0;
        }
    }

    /* Error Messages */
    .error-message {
        color: #ff6b6b;
        font-size: 13px;
        margin-top: 5px;
        display: none;
    }

    .input-error {
        border-color: #ff6b6b !important;
    }

    .input-success {
        border-color: #4CAF50 !important;
    }

    /* Footer/Copyright */
    .copyright {
        text-align: center;
        margin-top: 50px;
        padding: 25px;
        background-color: #f1f1f1;
        font-size: 13px;
        color: #666;
    }

    /* Responsive Design */
    @media (max-width: 768px) {
        .payment-main {
            flex-direction: column;
            padding: 20px 15px;
            gap: 30px;
        }

        .payment-image, .payment-container {
            max-width: 100%;
            width: 100%;
        }
        
        .payment-container {
            padding: 25px;
        }
        
        .header {
            font-size: 22px;
            padding: 20px;
        }
        
        h2 {
            font-size: 24px;
        }
    }

    /* Animation */
    @keyframes fadeIn {
        from { opacity: 0; transform: translateY(10px); }
        to { opacity: 1; transform: translateY(0); }
    }

    .payment-container {
        animation: fadeIn 0.6s ease-out forwards;
    }

    /* Credit Card Preview */
    .card-preview {
        background: linear-gradient(135deg, #434343 0%, #1a1a1a 100%);
        border-radius: 10px;
        padding: 20px;
        margin-bottom: 25px;
        position: relative;
        overflow: hidden;
        box-shadow: 0 5px 15px rgba(0,0,0,0.2);
        z-index: 2;
    }

    .card-preview::before {
        content: '';
        position: absolute;
        top: -50%;
        right: -50%;
        width: 200px;
        height: 200px;
        background: radial-gradient(circle, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0) 70%);
        border-radius: 50%;
    }

    .card-number-preview {
        font-family: 'Courier New', monospace;
        font-size: 20px;
        letter-spacing: 2px;
        margin: 20px 0;
        word-spacing: 5px;
    }

    .card-details {
        display: flex;
        justify-content: space-between;
        font-size: 14px;
    }

    .card-holder-preview {
        text-transform: uppercase;
    }

    .card-expiry-preview {
        text-align: right;
    }

    .card-chip {
        width: 40px;
        height: 30px;
        background: linear-gradient(135deg, #ffd700 0%, #c5a600 100%);
        border-radius: 5px;
        margin-bottom: 15px;
    }

    .card-logo {
        position: absolute;
        right: 20px;
        top: 20px;
        width: 60px;
    }
</style>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
</head>
<body>

<%@ include file="header.jsp"%>
   
<div class="payment-main">
    <div class="payment-image">
      <img src="img/payment-image.jpg" alt="Secure Payment">
    </div>
  
    <div class="payment-container">
      <h2>Enter Your Payment Details</h2>
      
      <!-- Credit Card Preview -->
      <div class="card-preview">
        <div class="card-chip"></div>
        <div class="card-number-preview" id="cardNumberPreview">•••• •••• •••• ••••</div>
        <div class="card-details">
          <div class="card-holder-preview" id="cardHolderPreview">CARDHOLDER NAME</div>
          <div class="card-expiry-preview" id="cardExpiryPreview">MM/YY</div>
        </div>
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/visa/visa-original.svg" alt="Visa" class="card-logo" id="cardLogo" style="display: none;">
      </div>
      
      <form action="PaymentInsertServlet" method="post" id="paymentForm">
        <div class="form-group">
          <label for="cardHolder">Card Holder Name</label>
          <input type="text" id="cardHolder" name="name" required placeholder="John Doe">
          <div class="error-message" id="cardHolderError">Please enter a valid name</div>
        </div>
  
        <div class="form-group">
          <label for="cardNumber">Card Number</label>
          <div class="input-icon">
            <input type="text" id="cardNumber" name="card_number" required placeholder="1234 5678 9012 3456" >
            <i class="far fa-credit-card"></i>
          </div>
          
          <div class="error-message" id="cardNumberError">Please enter a valid card number</div>
        </div>
  
        <div class="form-group">
          <label for="expiryDate">Expiry Date</label>
          <input type="month" id="expiryDate" name="expiry_date" required>
          <div class="error-message" id="expiryDateError">Please select a valid future date</div>
        </div>
  
        <div class="form-group">
          <label for="cvv">CVV</label>
          <div class="input-icon">
            <input type="password" id="cvv" name="cvv" required placeholder="•••" maxlength="4">
            <i class="fas fa-lock"></i>
          </div>
          <div class="error-message" id="cvvError">Please enter a valid CVV (3-4 digits)</div>
        </div>
  
        <button type="submit" id="submitPayment">Add Payment Method</button>
      </form>
    </div>
</div>

<%@ include file="footer.jsp"%>

<script>
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('paymentForm');
    const cardHolder = document.getElementById('cardHolder');
    const cardNumber = document.getElementById('cardNumber');
    const expiryDate = document.getElementById('expiryDate');
    const cvv = document.getElementById('cvv');
    
    // Preview elements
    const cardHolderPreview = document.getElementById('cardHolderPreview');
    const cardNumberPreview = document.getElementById('cardNumberPreview');
    const cardExpiryPreview = document.getElementById('cardExpiryPreview');
    const cardLogo = document.getElementById('cardLogo');
    
    // Format card number with spaces
    cardNumber.addEventListener('input', function(e) {
        let value = e.target.value.replace(/\s+/g, '');
        if (value.length > 0) {
            value = value.match(new RegExp('.{1,4}', 'g')).join(' ');
        }
        e.target.value = value;
        
        // Update preview
        if (value.trim() === '') {
            cardNumberPreview.textContent = '•••• •••• •••• ••••';
        } else {
            const visibleDigits = value.substring(0, value.length);
            const hiddenDigits = '•••• •••• •••• ••••'.substring(value.length);
            cardNumberPreview.textContent = visibleDigits + hiddenDigits.substring(visibleDigits.length);
        }
        
        // Detect card type and show logo
        detectCardType(value.replace(/\s/g, ''));
    });
    
    // Format expiry date for preview
    expiryDate.addEventListener('input', function(e) {
        if (e.target.value) {
            const [year, month] = e.target.value.split('-');
            cardExpiryPreview.textContent = `${month}/${year.slice(2)}`;
        } else {
            cardExpiryPreview.textContent = 'MM/YY';
        }
    });
    
    // Update card holder preview
    cardHolder.addEventListener('input', function(e) {
        if (e.target.value.trim() === '') {
            cardHolderPreview.textContent = 'CARDHOLDER NAME';
        } else {
            cardHolderPreview.textContent = e.target.value.toUpperCase();
        }
    });
    
    
    
    // Form validation
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        let isValid = true;
        
        // Validate card holder name
        if (!cardHolder.value.trim() || !/^[a-zA-Z ]+$/.test(cardHolder.value.trim())) {
            showError(cardHolder, 'cardHolderError', 'Please enter a valid name');
            isValid = false;
        } else {
            hideError(cardHolder, 'cardHolderError');
        }
        
       
        
        // Validate expiry date
        if (!expiryDate.value || !validateExpiryDate(expiryDate.value)) {
            showError(expiryDate, 'expiryDateError', 'Please select a valid future date');
            isValid = false;
        } else {
            hideError(expiryDate, 'expiryDateError');
        }
        
        // Validate CVV
        const cvvValue = cvv.value.trim();
        if (!cvvValue || !/^\d{3,4}$/.test(cvvValue)) {
            showError(cvv, 'cvvError', 'Please enter a valid CVV (3-4 digits)');
            isValid = false;
        } else {
            hideError(cvv, 'cvvError');
        }
        
        if (isValid) {
            form.submit();
        }
    });
    
 
    
    // Validate expiry date is in the future
    function validateExpiryDate(expiryDateValue) {
        const [year, month] = expiryDateValue.split('-');
        const expiry = new Date(year, month - 1, 1);
        const now = new Date();
        const currentMonth = new Date(now.getFullYear(), now.getMonth(), 1);
        
        return expiry >= currentMonth;
    }
    
    // Show error message
    function showError(input, errorId, message) {
        const errorElement = document.getElementById(errorId);
        input.classList.add('input-error');
        input.classList.remove('input-success');
        errorElement.textContent = message;
        errorElement.style.display = 'block';
    }
    
    // Hide error message
    function hideError(input, errorId) {
        const errorElement = document.getElementById(errorId);
        input.classList.remove('input-error');
        input.classList.add('input-success');
        errorElement.style.display = 'none';
    }
    
    // Real-time validation
    cardHolder.addEventListener('blur', function() {
        if (!cardHolder.value.trim() || !/^[a-zA-Z ]+$/.test(cardHolder.value.trim())) {
            showError(cardHolder, 'cardHolderError', 'Please enter a valid name');
        } else {
            hideError(cardHolder, 'cardHolderError');
        }
    });
    
    
    expiryDate.addEventListener('blur', function() {
        if (!expiryDate.value || !validateExpiryDate(expiryDate.value)) {
            showError(expiryDate, 'expiryDateError', 'Please select a valid future date');
        } else {
            hideError(expiryDate, 'expiryDateError');
        }
    });
    
    cvv.addEventListener('blur', function() {
        const cvvValue = cvv.value.trim();
        if (!cvvValue || !/^\d{3,4}$/.test(cvvValue)) {
            showError(cvv, 'cvvError', 'Please enter a valid CVV (3-4 digits)');
        } else {
            hideError(cvv, 'cvvError');
        }
    });
});
</script>
</body>
</html>