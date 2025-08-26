document.getElementById('bookingForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const form = this;
  const messageDiv = document.getElementById('bookingMessage');

  fetch(form.action, {
    method: 'POST',
    body: new FormData(form),
    headers: {
      'Accept': 'application/json'
    }
  })
  .then(response => {
    if (response.ok) {
      messageDiv.innerHTML = '<div class="alert alert-success">Thank you! We will contact you soon.</div>';
      form.reset();
    } else {
      messageDiv.innerHTML = '<div class="alert alert-danger">Oops! Something went wrong. Please try again.</div>';
    }
  })
  .catch(() => {
    messageDiv.innerHTML = '<div class="alert alert-danger">Oops! Something went wrong. Please try again.</div>';
  });
});

