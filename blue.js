// Set the URL to your cursor image
const cursorImageUrl = 'https://raw.githubusercontent.com/gits07/blue/main/IMG_20230817_113355_(100_x_100_pixel).png';

// Create an image element for the custom cursor
const customCursor = new Image();
customCursor.src = cursorImageUrl;
customCursor.style.position = 'fixed';
customCursor.style.zIndex = '9999';
customCursor.style.pointerEvents = 'none';

// Append the cursor image to the document
document.body.appendChild(customCursor);

// Create particles for the trail effect
const particles = [];
const numParticles = 30;

// Initialize particles
for (let i = 0; i < numParticles; i++) {
  const particle = document.createElement('div');
  particle.className = 'particle';
  particles.push(particle);
  document.body.appendChild(particle);
}

// Update particle positions based on cursor movement
document.addEventListener('mousemove', (event) => {
  const { clientX, clientY } = event;
  customCursor.style.left = `${clientX}px`;
  customCursor.style.top = `${clientY}px`;

  particles.forEach((particle, index) => {
    const angle = (index / numParticles) * Math.PI * 2;
    const distance = 20;

    const x = clientX + distance * Math.cos(angle);
    const y = clientY + distance * Math.sin(angle);

    particle.style.left = `${x}px`;
    particle.style.top = `${y}px`;
  });
});
