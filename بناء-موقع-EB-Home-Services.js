// إرسال إيميل تلقائي
await fetch(`https://formsubmit.co/ajax/ebmovingcleaning@gmail.com`, {
  method: 'POST',
  headers: {'Content-Type': 'application/json'},
  body: JSON.stringify({
    name: name,
    phone: phone,
    email: email,
    service: service,
    message: `حجز جديد من موقع EB Home Services: ${JSON.stringify(formDataObj)}`
  })
});