// Photo gallery data
const photos = [
    '20250606_141020.jpg',
    '20250606_214326.jpg',
    '20250608_001400.jpg',
    '20250608_001829.jpg',
    'IMG_20250322_191648.jpg',
    'IMG_20250322_215728.jpg',
    'IMG_20250421_203227.jpg',
    'IMG_20250502_002520~2.jpg',
    'IMG_20250502_215918.jpg',
    'IMG_20250511_004647.jpg',
    'IMG_20250517_201225.jpg',
    'IMG_20250524_231925.jpg',
    'IMG_20250524_232303.jpg'
];

// Romantic captions for photos
const photoCaptions = [
    "Nosso amor em cada olhar 💕",
    "Momento mágico juntos ✨",
    "Você e eu, para sempre 💖",
    "Sorriso que aquece meu coração 😍",
    "Nosso amor é eterno 💝",
    "Cada segundo ao seu lado é especial 🌹",
    "Você é minha felicidade 😊",
    "Juntos somos perfeitos 💫",
    "Amor que transforma tudo 💕",
    "Nossos momentos únicos 🥰",
    "Para sempre em meu coração ❤️",
    "Você é minha alma gêmea 👫",
    "Amor verdadeiro e eterno 💖"
];

// Initialize the website
document.addEventListener('DOMContentLoaded', function() {
    loadPhotoGallery();
    initializeLoveCounter();
    initializeInteractiveElements();
    startHeartAnimation();
    initializeScrollAnimations();
});

// Load photo gallery
function loadPhotoGallery() {
    const gallery = document.getElementById('photoGallery');
    
    photos.forEach((photo, index) => {
        const photoItem = document.createElement('div');
        photoItem.className = 'photo-item';
        photoItem.style.animationDelay = `${index * 0.1}s`;
        
        photoItem.innerHTML = `
            <img src="${photo}" alt="Momento especial ${index + 1}" loading="lazy">
            <div class="photo-overlay">
                <div class="photo-hearts">💕</div>
            </div>
        `;
        
        // Add click event to open modal
        photoItem.addEventListener('click', () => openPhotoModal(photo, index));
        
        gallery.appendChild(photoItem);
    });
}

// Open photo modal
function openPhotoModal(photoSrc, index) {
    const modal = document.getElementById('photoModal');
    const modalImage = document.getElementById('modalImage');
    
    modalImage.src = photoSrc;
    modalImage.alt = photoCaptions[index];
    modal.style.display = 'block';
    
    // Add heart animation to modal
    createModalHearts();
}

// Close photo modal
document.getElementById('closeModal').addEventListener('click', function() {
    document.getElementById('photoModal').style.display = 'none';
});

// Close modal when clicking outside
document.getElementById('photoModal').addEventListener('click', function(e) {
    if (e.target === this) {
        this.style.display = 'none';
    }
});

// Create hearts animation in modal
function createModalHearts() {
    const modalHearts = document.querySelector('.modal-hearts');
    modalHearts.innerHTML = '';
    
    for (let i = 0; i < 5; i++) {
        setTimeout(() => {
            const heart = document.createElement('div');
            heart.className = 'modal-heart';
            heart.innerHTML = ['💖', '💕', '💗', '💝', '❤️'][Math.floor(Math.random() * 5)];
            heart.style.left = Math.random() * 80 + 10 + '%';
            modalHearts.appendChild(heart);
            
            setTimeout(() => {
                if (heart.parentNode) {
                    heart.parentNode.removeChild(heart);
                }
            }, 3000);
        }, i * 300);
    }
}

// Initialize love counter
function initializeLoveCounter() {
    // Calculate days together (assuming relationship started on March 22, 2025)
    const startDate = new Date('2024-06-09');
    const currentDate = new Date();
    const daysTogether = Math.floor((currentDate - startDate) / (1000 * 60 * 60 * 24));
    
    // Animate counters
    animateCounter('daysCounter', 0, Math.max(daysTogether, 1), 2000);
    animateCounter('heartbeats', 0, 1000000, 3000);
}

// Animate counter numbers
function animateCounter(elementId, start, end, duration) {
    const element = document.getElementById(elementId);
    const startTime = performance.now();
    
    function update(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        const current = Math.floor(start + (end - start) * easeOutQuart(progress));
        element.textContent = current.toLocaleString();
        
        if (progress < 1) {
            requestAnimationFrame(update);
        }
    }
    
    requestAnimationFrame(update);
}

// Easing function for smooth animation
function easeOutQuart(t) {
    return 1 - Math.pow(1 - t, 4);
}

// Initialize interactive elements
function initializeInteractiveElements() {
    const loveButton = document.getElementById('loveButton');
    const loveExplosion = document.getElementById('loveExplosion');
    
    loveButton.addEventListener('click', function() {
        createLoveExplosion(loveExplosion);
        playHeartAnimation(this);
        showLoveMessage();
    });
}

// Create love explosion effect
function createLoveExplosion(container) {
    const hearts = ['💖', '💕', '💗', '💝', '❤️', '💘', '😍', '🥰'];
    
    for (let i = 0; i < 15; i++) {
        setTimeout(() => {
            const heart = document.createElement('div');
            heart.className = 'explosion-heart';
            heart.innerHTML = hearts[Math.floor(Math.random() * hearts.length)];
            
            const angle = (Math.PI * 2 * i) / 15;
            const distance = 100 + Math.random() * 100;
            const dx = Math.cos(angle) * distance;
            const dy = Math.sin(angle) * distance;
            
            heart.style.setProperty('--dx', dx + 'px');
            heart.style.setProperty('--dy', dy + 'px');
            heart.style.left = '50%';
            heart.style.top = '50%';
            
            container.appendChild(heart);
            
            setTimeout(() => {
                if (heart.parentNode) {
                    heart.parentNode.removeChild(heart);
                }
            }, 2000);
        }, i * 50);
    }
}

// Play heart animation on button
function playHeartAnimation(button) {
    button.style.transform = 'scale(0.9)';
    setTimeout(() => {
        button.style.transform = 'scale(1.1)';
    }, 100);
    setTimeout(() => {
        button.style.transform = 'scale(1)';
    }, 200);
}

// Show love message
function showLoveMessage() {
    const messages = [
        "💕 Eu te amo, Maria Margareth! 💕",
        "💖 Você é meu mundo! 💖",
        "💗 Para sempre juntos! 💗",
        "💝 Você é minha vida! 💝",
        "❤️ Meu amor eterno! ❤️",
        "😍 Você é perfeita! 😍",
        "🥰 Minha alma gêmea! 🥰",
        "💘 Te amo mais que tudo! 💘"
    ];
    
    const randomMessage = messages[Math.floor(Math.random() * messages.length)];
    
    // Create floating message
    const messageElement = document.createElement('div');
    messageElement.innerHTML = randomMessage;
    messageElement.style.position = 'fixed';
    messageElement.style.top = '50%';
    messageElement.style.left = '50%';
    messageElement.style.transform = 'translate(-50%, -50%)';
    messageElement.style.fontSize = '2rem';
    messageElement.style.color = '#fff';
    messageElement.style.textShadow = '2px 2px 4px rgba(0,0,0,0.5)';
    messageElement.style.zIndex = '9999';
    messageElement.style.pointerEvents = 'none';
    messageElement.style.animation = 'messageFloat 3s ease-out forwards';
    
    document.body.appendChild(messageElement);
    
    setTimeout(() => {
        if (messageElement.parentNode) {
            messageElement.parentNode.removeChild(messageElement);
        }
    }, 3000);
}

// Start continuous heart animation
function startHeartAnimation() {
    setInterval(() => {
        createRandomHeart();
    }, 2000);
}

// Create random floating hearts
function createRandomHeart() {
    const heart = document.createElement('div');
    const hearts = ['💖', '💕', '💗', '💝', '❤️', '💘'];
    
    heart.innerHTML = hearts[Math.floor(Math.random() * hearts.length)];
    heart.style.position = 'fixed';
    heart.style.left = Math.random() * 100 + '%';
    heart.style.top = '100%';
    heart.style.fontSize = '2rem';
    heart.style.zIndex = '1';
    heart.style.pointerEvents = 'none';
    heart.style.animation = 'floatUp 6s linear forwards';
    
    document.body.appendChild(heart);
    
    setTimeout(() => {
        if (heart.parentNode) {
            heart.parentNode.removeChild(heart);
        }
    }, 6000);
}

// Add float up animation to CSS dynamically
const style = document.createElement('style');
style.textContent = `
    @keyframes floatUp {
        0% {
            transform: translateY(0) rotate(0deg);
            opacity: 0.8;
        }
        100% {
            transform: translateY(-100vh) rotate(360deg);
            opacity: 0;
        }
    }
    
    @keyframes messageFloat {
        0% {
            opacity: 0;
            transform: translate(-50%, -50%) scale(0.5);
        }
        20% {
            opacity: 1;
            transform: translate(-50%, -50%) scale(1.2);
        }
        80% {
            opacity: 1;
            transform: translate(-50%, -50%) scale(1);
        }
        100% {
            opacity: 0;
            transform: translate(-50%, -50%) scale(0.8) translateY(-50px);
        }
    }
`;
document.head.appendChild(style);

// Initialize scroll animations
function initializeScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe elements for scroll animation
    const animatedElements = document.querySelectorAll('.reason-card, .counter-item, .photo-item');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(50px)';
        el.style.transition = 'all 0.8s ease-out';
        observer.observe(el);
    });
}

// Add special effects on scroll
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const parallax = document.querySelector('.hero-section');
    const speed = scrolled * 0.5;
    
    if (parallax) {
        parallax.style.transform = `translateY(${speed}px)`;
    }
});

// Add keyboard shortcuts for fun
document.addEventListener('keydown', (e) => {
    if (e.key === 'l' || e.key === 'L') {
        createLoveExplosion(document.getElementById('loveExplosion'));
    }
    if (e.key === 'h' || e.key === 'H') {
        createRandomHeart();
    }
});

// Add mouse trail effect
let mouseTrail = [];
document.addEventListener('mousemove', (e) => {
    mouseTrail.push({x: e.clientX, y: e.clientY, time: Date.now()});
    
    // Limit trail length
    if (mouseTrail.length > 20) {
        mouseTrail.shift();
    }
    
    // Occasionally create heart at mouse position
    if (Math.random() < 0.02) {
        createHeartAtPosition(e.clientX, e.clientY);
    }
});

// Create heart at specific position
function createHeartAtPosition(x, y) {
    const heart = document.createElement('div');
    heart.innerHTML = '💖';
    heart.style.position = 'fixed';
    heart.style.left = x + 'px';
    heart.style.top = y + 'px';
    heart.style.fontSize = '1rem';
    heart.style.zIndex = '1';
    heart.style.pointerEvents = 'none';
    heart.style.animation = 'heartFade 2s ease-out forwards';
    
    document.body.appendChild(heart);
    
    setTimeout(() => {
        if (heart.parentNode) {
            heart.parentNode.removeChild(heart);
        }
    }, 2000);
}

// Add heart fade animation
const heartFadeStyle = document.createElement('style');
heartFadeStyle.textContent = `
    @keyframes heartFade {
        0% {
            opacity: 1;
            transform: scale(1);
        }
        100% {
            opacity: 0;
            transform: scale(2) translateY(-50px);
        }
    }
`;
document.head.appendChild(heartFadeStyle);

// Console message for Maria Margareth
console.log(`
💕💕💕💕💕💕💕💕💕💕💕💕💕💕💕💕💕💕💕💕
💖  Olá Maria Margareth! 💖
💕  Este site foi feito com muito amor 💕
💖  pelo Arthur especialmente para você! 💖
💕  Pressione 'L' para corações extras! 💕
💖  Pressione 'H' para mais magia! 💖
💕💕💕💕💕💕💕💕💕💕💕💕💕💕💕💕💕💕💕💕
`);

// Easter egg: Konkami code for extra hearts
let konamiCode = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];
let konamiIndex = 0;

document.addEventListener('keydown', (e) => {
    if (e.keyCode === konamiCode[konamiIndex]) {
        konamiIndex++;
        if (konamiIndex === konamiCode.length) {
            // Activate super love mode!
            superLoveMode();
            konamiIndex = 0;
        }
    } else {
        konamiIndex = 0;
    }
});

// Super love mode
function superLoveMode() {
    // Create massive heart explosion
    for (let i = 0; i < 50; i++) {
        setTimeout(() => {
            createRandomHeart();
        }, i * 100);
    }
    
    // Show special message
    const specialMessage = document.createElement('div');
    specialMessage.innerHTML = '💕✨ MODO SUPER AMOR ATIVADO! ✨💕<br>Maria Margareth, você é incrível!';
    specialMessage.style.position = 'fixed';
    specialMessage.style.top = '50%';
    specialMessage.style.left = '50%';
    specialMessage.style.transform = 'translate(-50%, -50%)';
    specialMessage.style.fontSize = '3rem';
    specialMessage.style.color = '#fff';
    specialMessage.style.textAlign = 'center';
    specialMessage.style.textShadow = '3px 3px 6px rgba(0,0,0,0.5)';
    specialMessage.style.zIndex = '9999';
    specialMessage.style.pointerEvents = 'none';
    specialMessage.style.animation = 'superLoveAnimation 5s ease-out forwards';
    
    document.body.appendChild(specialMessage);
    
    setTimeout(() => {
        if (specialMessage.parentNode) {
            specialMessage.parentNode.removeChild(specialMessage);
        }
    }, 5000);
}

// Add super love animation
const superLoveStyle = document.createElement('style');
superLoveStyle.textContent = `
    @keyframes superLoveAnimation {
        0% {
            opacity: 0;
            transform: translate(-50%, -50%) scale(0) rotate(-360deg);
        }
        20% {
            opacity: 1;
            transform: translate(-50%, -50%) scale(1.5) rotate(0deg);
        }
        80% {
            opacity: 1;
            transform: translate(-50%, -50%) scale(1) rotate(0deg);
        }
        100% {
            opacity: 0;
            transform: translate(-50%, -50%) scale(0.5) rotate(360deg);
        }
    }
`;
document.head.appendChild(superLoveStyle);
