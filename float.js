const container = document.querySelector('.floating-icons-container');
const iconSrc = 'whatsapp-icon.png'; // Make sure this path is correct

// Fixed icon size per screen
function getIconSize() {
  const vw = window.innerWidth;
  if (vw < 500) return 26;
  if (vw < 1024) return 30;
  return 35;
}

const iconSize = getIconSize();
let iconCount = 0;
const maxIcons = 10;

// Main function to create a single floating icon
function createFloatingIcon() {
  if (iconCount >= maxIcons) return;

  const icon = document.createElement('img');
  icon.src = iconSrc;
  icon.classList.add('floating-icon');

  icon.style.width = `${iconSize}px`;
  icon.style.height = `${iconSize}px`;

  const left = Math.random() * 90 + 5;
  icon.style.left = `${left}vw`;
  icon.style.animationDuration = `30s`; // smoother speed

  container.appendChild(icon);
  iconCount++;

  icon.addEventListener('animationend', () => {
    icon.remove();
    iconCount--;
  });
}

// ✅ Spawn a few immediately — but slightly spaced apart
for (let i = 0; i < 5; i++) {
  setTimeout(createFloatingIcon, i * 500); // 0ms, 500ms, 1000ms, 1500ms, 2000ms
}

// ✅ Then keep spawning every 3s
setInterval(createFloatingIcon, 3000);