// Create floating background elements
// const background = document.getElementById('background');
// const numElements = 30; // More elements but smaller
// const types = ['circle', 'square'];
// const colors = ['#93c5fd', '#60a5fa']; // blue-300, blue-400

// for (let i = 0; i < numElements; i++) {
//   const element = document.createElement('div');
//   const type = types[Math.floor(Math.random() * types.length)];
//   const color = colors[Math.floor(Math.random() * colors.length)];
//   const size = Math.random() * 8 + 4;
  
//   element.classList.add('floating-element', type);
//   element.style.backgroundColor = color;
//   element.style.width = `${size}px`;
//   element.style.height = `${size}px`;
//   element.style.top = `${Math.random() * 100}%`;
//   element.style.left = `${Math.random() * 100}%`;
//   // element.style.animationDuration = `${Math.random() * 10 + 15}s`; // 15s to 25s
//   element.style.animationDuration = '10s';
//   element.style.animationDelay = `${Math.random() * 5}s`;

//   const animationNames = ['float1', 'float2', 'float3', 'float4'];
//   const randomAnimation = animationNames[Math.floor(Math.random() * animationNames.length)];
//   element.style.animationName = randomAnimation;
  
//   background.appendChild(element);
// }

// Create floating background elements
const background = document.getElementById('background');
const numElements = 10; // Number of elements
const types = ['circle', 'square'];
const colors = ['#93c5fd', '#60a5fa']; // blue-300, blue-400

function createNewElement() {
  const element = document.createElement('div');
  const type = types[Math.floor(Math.random() * types.length)];
  const color = colors[Math.floor(Math.random() * colors.length)];
  const size = Math.random() * 10 + 40;
  
  element.classList.add('floating-element', type);
  element.style.backgroundColor = color;
  element.style.width = `${size}px`;
  element.style.height = `${size}px`;
  element.style.opacity = (Math.random() * 0.1 + 0.1).toString(); // Varying opacity
  
  // Random starting position on the page
  element.style.left = `${Math.random() * 100}%`;
  element.style.top = `${Math.random() * 100}%`;
  
  // Random direction and distance
  const angle = Math.random() * 360; // Random angle in degrees
  const distance = Math.random() * 1000 + 500; // Random distance 50-150px
  const speed = Math.random() * 40 + 60; // 4-10s for movement
  
  // Calculate end position using trigonometry
  const moveX = Math.cos(angle * (Math.PI/180)) * distance;
  const moveY = Math.sin(angle * (Math.PI/180)) * distance;
  
  element.style.transition = `transform ${speed}s linear, opacity ${speed * 0.8}s linear`;
  
  // Add to DOM
  background.appendChild(element);
  
  // Trigger animation after a small delay
  setTimeout(() => {
    element.style.transform = `translate(${moveX}px, ${moveY}px)`;
    // Fade out near the end of movement
    setTimeout(() => {
      element.style.opacity = '0';
    }, speed * 800);
  }, 10);
  
  // Remove element after animation completes and create a new one
  setTimeout(() => {
    element.remove();
    createNewElement();
  }, speed * 1000);
}

// Initialize with initial elements
for (let i = 0; i < numElements; i++) {
    createNewElement();
}