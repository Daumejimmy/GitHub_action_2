function submitName() {
    const enteredName = document.getElementById('nameInput').value.trim();
    if (enteredName === '') {
        alert('Bitte gib deinen Namen ein.');
    } else {
        const greetingMessage = `Hallo, ${enteredName}!`;
        updateUI(greetingMessage);
    }
}

function updateUI(message) {
    document.getElementById('greetingMessage').innerText = message;
}
