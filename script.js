// Floating hearts background animation
function createFloatingHeart() {
    const heart = document.createElement('div');
    heart.className = 'heart';
    heart.innerHTML = '💖';
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.animationDuration = (Math.random() * 3 + 2) + 's';
    heart.style.fontSize = (Math.random() * 10 + 15) + 'px';
    
    const floatingContainer = document.querySelector('.floating-hearts');
    if (floatingContainer) {
        floatingContainer.appendChild(heart);
        
        setTimeout(() => {
            heart.remove();
        }, 5000);
    }
}

// Heart text formation
function createHeartText(element, text) {
    const container = element;
    container.innerHTML = '';
    
    // Define heart shape coordinates for each letter
    const heartShapes = {
        'L': [
            [0,0], [0,1], [0,2], [0,3], [0,4], [1,4], [2,4]
        ],
        'O': [
            [0,1], [0,2], [0,3], [1,0], [1,4], [2,0], [2,4], [3,1], [3,2], [3,3]
        ],
        'V': [
            [0,0], [0,1], [0,2], [1,3], [2,4], [3,3], [4,0], [4,1], [4,2]
        ],
        'E': [
            [0,0], [0,1], [0,2], [0,3], [0,4], [1,0], [1,2], [1,4], [2,0], [2,2], [2,4]
        ],
        'Y': [
            [0,0], [0,1], [1,2], [2,3], [2,4], [3,2], [4,0], [4,1]
        ],
        'U': [
            [0,0], [0,1], [0,2], [0,3], [1,4], [2,4], [3,0], [3,1], [3,2], [3,3]
        ],
        'A': [
            [0,1], [0,2], [0,3], [0,4], [1,0], [1,2], [2,0], [2,2], [3,1], [3,2], [3,3], [3,4]
        ],
        'R': [
            [0,0], [0,1], [0,2], [0,3], [0,4], [1,0], [1,2], [2,0], [2,1], [2,3], [3,1], [3,4]
        ],
        'M': [
            [0,0], [0,1], [0,2], [0,3], [0,4], [1,1], [2,2], [3,1], [4,0], [4,1], [4,2], [4,3], [4,4]
        ],
        'Z': [
            [0,0], [1,0], [2,0], [2,1], [2,2], [2,3], [2,4], [3,4], [4,4]
        ],
        'I': [
            [1,0], [1,1], [1,2], [1,3], [1,4]
        ],
        'N': [
            [0,0], [0,1], [0,2], [0,3], [0,4], [1,1], [2,2], [3,3], [4,0], [4,1], [4,2], [4,3], [4,4]
        ],
        'G': [
            [0,1], [0,2], [0,3], [1,0], [1,4], [2,0], [2,2], [2,4], [3,0], [3,2], [3,3], [3,4]
        ]
    };
    
    const shape = heartShapes[text] || heartShapes['O'];
    
    shape.forEach((coord, index) => {
        setTimeout(() => {
            const particle = document.createElement('div');
            particle.className = 'heart-particle';
            particle.style.left = (coord[0] * 15) + 'px';
            particle.style.top = (coord[1] * 15) + 'px';
            container.appendChild(particle);
        }, index * 100);
    });
}

// Initialize when page loads
document.addEventListener('DOMContentLoaded', function() {
    // Create floating hearts periodically
    setInterval(createFloatingHeart, 1000);
    
    // For message page heart text formations
    const heartForms = document.querySelectorAll('.heart-text-form');
    heartForms.forEach((form, index) => {
        setTimeout(() => {
            const text = form.getAttribute('data-text');
            if (text) {
                createHeartText(form, text);
            }
        }, index * 1000);
    });
    
    // Add click event for interactive hearts
    heartForms.forEach(form => {
        form.addEventListener('click', function() {
            const text = this.getAttribute('data-text');
            if (text) {
                this.innerHTML = '';
                createHeartText(this, text);
            }
        });
    });
});
