const questionScreen = document.getElementById('question-screen');
const thankYouScreen = document.getElementById('thank-you-screen');
const letterScreen = document.getElementById('letter-screen');
const sadScreen = document.getElementById('sad-screen');

const yesBtn = document.getElementById('yes-btn');
const noBtn = document.getElementById('no-btn');
const forYouBtn = document.getElementById('for-you-btn');
const goBackBtn = document.getElementById('go-back-btn');
const sadText = document.getElementById('sad-text');

let noCount = 0;
const messages = [
    "why will you even click this button",
    "you pressed this again ☹️",
    "baby please reconsider",
    "No you can't say no"
];

// Success Path
yesBtn.addEventListener('click', () => {
    questionScreen.classList.add('hidden');
    thankYouScreen.classList.remove('hidden');
});

forYouBtn.addEventListener('click', () => {
    thankYouScreen.classList.add('hidden');
    letterScreen.classList.remove('hidden');
});

// "No" Path
noBtn.addEventListener('click', () => {
    questionScreen.classList.add('hidden');
    sadScreen.classList.remove('hidden');
    
    if (noCount < messages.length) {
        sadText.innerText = messages[noCount];
    } else {
        sadText.innerText = "Please reconsider... No you can't say no! ❤️";
    }
    noCount++;
});

// Return to Start
goBackBtn.addEventListener('click', () => {
    sadScreen.classList.add('hidden');
    questionScreen.classList.remove('hidden');
});

// --- Function to create background hearts ---
function createHearts() {
    const body = document.body;
    // Create 30 hearts
    for (let i = 0; i < 30; i++) {
        const heart = document.createElement('div');
        heart.classList.add('heart-bg');
        
        // Random position across the screen
        heart.style.left = Math.random() * 100 + 'vw';
        heart.style.top = Math.random() * 100 + 'vh';
        
        // Randomize size slightly for variety (between 0.8x and 1.5x normal size)
        const scale = Math.random() * 0.7 + 0.8;
        // Random rotation to make them look natural
        const rotation = Math.random() * 360;
        heart.style.transform = `rotate(${rotation}deg) scale(${scale})`;

        body.appendChild(heart);
    }
}

// Run the function when page loads
createHearts();