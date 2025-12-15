const orderId = document.getElementById("orderId");

const generateOrderId = () => {
    return "RLX-" + Math.floor(100000 + Math.random() * 900000);
};

orderId.textContent = generateOrderId();
