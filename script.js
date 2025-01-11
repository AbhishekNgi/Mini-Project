document.getElementById("generateBtn").addEventListener("click", () => {
    const textInput = document.getElementById("textInput").value;
    const qrCodeDiv = document.getElementById("qrcode");
  
    // Clear the previous QR code
    qrCodeDiv.innerHTML = "";
  
    if (textInput.trim() === "") {
      alert("Please enter some text or a URL to generate a QR code.");
      return;
    }
  
    // Generate QR code
    const qrCode = new QRCode(qrCodeDiv, {
      text: textInput,
      width: 200, // Width of the QR code
      height: 200, // Height of the QR code
    });
  });
  