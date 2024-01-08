function Back() {
    window.location.href = 'http://localhost:3000'
}
function validateregistered() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    fetch('/api/registered', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username: username, password: password })
    })
        .then(response => {
            if (response.ok) {
                document.getElementById('loginMessage').innerText = 'enregistrer';
                window.location.href = 'http://localhost:3000';


            }
        })
        .catch(error => {
            console.error('Erreur lors de la requête:', error);
            document.getElementById('loginMessage').innerText = 'Erreur lors de la connexion.';
        });
}
