const form = document.getElementById("bookingForm");
const messageDiv = document.getElementById("bookingMessage");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  try {
    const response = await fetch(form.action, {
      method: "POST",
      body: new FormData(form),
      headers: {
        Accept: "application/json"
      }
    });

    if (response.ok) {
      messageDiv.innerHTML = `
        <div class="alert alert-success">
          Booking successful! We will contact you soon.
        </div>
      `;
      form.reset();
    } else {
      throw new Error("Submission failed");
    }

  } catch (error) {
    messageDiv.innerHTML = `
      <div class="alert alert-danger">
        Something went wrong. Please try again.
      </div>
    `;
  }
});
/* ===============================
   GOLD PARTICLES SCRIPT (LIVELY)
================================ */
const particleContainer = document.getElementById("gold-particles");

const PARTICLE_COUNT = 70; // lively but safe

for (let i = 0; i < PARTICLE_COUNT; i++) {
  const particle = document.createElement("span");
  particle.className = "gold-particle";

  const size = Math.random() * 6 + 2; // mix sizes
  particle.style.width = `${size}px`;
  particle.style.height = `${size}px`;

  particle.style.left = `${Math.random() * 100}%`;

  const floatDuration = Math.random() * 12 + 8;   // faster
  const twinkleDuration = Math.random() * 3 + 2;  // sparkle

  particle.style.animationDuration =
    `${floatDuration}s, ${twinkleDuration}s`;

  particle.style.animationDelay =
    `${Math.random() * 10}s, ${Math.random() * 3}s`;

  particleContainer.appendChild(particle);
}

