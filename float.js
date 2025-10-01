const container = document.querySelector('.floating-icons-container');
const iconSrc = 'assets/whatsapp-icon.png'; // Replace with your correct image path

function createFloatingIcon() {
  const icon = document.createElement('img');
  icon.src = iconSrc;
  icon.classList.add('floating-icon');

  // Random size (16–32px)
  icon.style.width = '28px';
  icon.style.height = '28px';

  // Random horizontal position (0–100vw)
  icon.style.left = `${Math.random() * 100}vw`;

  // Random animation duration (6–16s)
  const duration = 20; // constant 20s float
  icon.style.animationDuration = `${duration}s`;

  container.appendChild(icon);

  // Clean up after animation
  icon.addEventListener('animationend', () => {
    icon.remove();
  });
}

// Create 1 icon every 1200ms
setInterval(createFloatingIcon, 1200);