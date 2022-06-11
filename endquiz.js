const username = document.getElementById('username');
const saveScore = document.getElementById('saveScore');

username.addEventListener('keyup', () => {
    saveScore.disabled = !username.value
});


