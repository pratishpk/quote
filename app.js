const state = { advice: '' };

function fetchAdvice() {
    fetch('https://api.adviceslip.com/advice')
        .then(response => response.json())
        .then(data => {
            const { advice } = data.slip;
            updateAdvice(advice);
        })
        .catch(error => {
            console.error(error);
        });
}

function updateAdvice(newAdvice) {
    state.advice = newAdvice;
    const adviceElement = document.querySelector('.heading');
    adviceElement.textContent = newAdvice;
}

// Initial fetch on page load
fetchAdvice();

document.getElementById('tweet').addEventListener('click', function () {
    window.open("https://twitter.com/intent/tweet?text=" + state.advice, 'Tweet Window', 'height=300,width=600');
});


const facebook = document.getElementById('facebook');
facebook.addEventListener('click', function(){
    window.open("https://www.facebook.com/sharer/sharer.php?u=" + state.advice, 'Facebook Window');

});