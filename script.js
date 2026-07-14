// Candle Blowing Logic
function blowCandle() {
    const flame = document.getElementById('birthdayFlame');
    const text = document.getElementById('candleText');
    
    if (!flame.classList.contains('blown-out')) {
        flame.classList.add('blown-out');
        text.innerText = "Make a wish! 🌟 (Tap again to relight)";
    } else {
        flame.classList.remove('blown-out');
        text.innerText = "Tap the flame to blow out the candle! 🎂";
    }
}

// Open Surprise Greeting Card
function openCard() {
    document.getElementById('cardOverlay').classList.add('active');
}

// Close Surprise Greeting Card
function closeCard() {
    document.getElementById('cardOverlay').classList.remove('active');
}

// Close card if clicking anywhere outside the greeting card boundary
function closeCardOutside(event) {
    if(event.target === document.getElementById('cardOverlay')) {
        closeCard();
    }
}
