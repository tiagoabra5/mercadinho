const paymentMethodSelect = document.getElementById('payment-method');
const paymentInfos = document.querySelectorAll('.payment-info');

paymentMethodSelect.addEventListener('change', (event) => {
    const selectedOption = event.target.value;
    
    paymentInfos.forEach(info => {
        info.style.display = 'none';
    });
    
    const selectedInfo = document.getElementById(`${selectedOption}-info`);
    selectedInfo.style.display = 'block';
});

function checkout() {
    var name = document.getElementById("name").value;
    var address = document.getElementById("address").value;
    var payment = document.getElementById("payment").value;
  
  
    alert("Compra realizada com sucesso! Obrigado por comprar conosco.");
    cartItems = [];
    updateCart();
  }
  
  function showCheckoutForm() {
    document.getElementById("checkout-button").style.display = "none";
    document.getElementById("checkout-form").style.display = "block";
  }