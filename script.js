function submitOrder() {
  const product = document.getElementById("productName").value;
  const name = document.getElementById("name").value;
  const phone = document.getElementById("phone").value;
  const address = document.getElementById("address").value;
  const pincode = document.getElementById("pincode").value;
  const payment = document.getElementById("payment").value;

  if (!name || !phone || !address || !pincode) {
    alert("Please fill all details");
    return;
  }

  // Google Sheets Web App URL
  const sheetURL = "https://script.google.com/macros/s/AKfycbzRnw3BrRQvSSeWNV1Srm-ski5uKBO1qRXUQmZ7wIW4jI0CGXUXndH-UPRhZq-64Wnoow/exec";

  fetch(sheetURL, {
    method: "POST",
    body: JSON.stringify({
      product,
      name,
      phone,
      address,
      pincode,
      payment
    }),
    headers: {
      "Content-Type": "application/json"
    }
  });

  // WhatsApp message
  const msg = `Hello Kensa,
Product: ${product}
Name: ${name}
Phone: ${phone}
Address: ${address}
Pincode: ${pincode}
Payment: ${payment}`;

  window.open(
    "https://wa.me/91XXXXXXXXXX?text=" + encodeURIComponent(msg),
    "_blank"
  );

  closeOrder();
}
