const mode = document.getElementById('moon_icon');

mode.addEventListener('click', () => {
    const form=document.getElementById('login_form')
    if (mode.classList.contains('fa-moon')) {
        mode.classList.remove('fa-moon')
        mode.classList.add('fa-sun')

        form.classList.add('dark')
        //return;
    } else {
        mode.classList.remove('fa-sun')
        mode.classList.add('fa-moon')
        form.classList.remove('dark')
    }
    //mode.classList.remove('fa-sun')
    //mode.classList.add('fa-moon')
});

document.getElementById('login_form').addEventListener('submit', async function(event) {
    event.preventDefault();

    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;

    try {
        const response = await fetch('http://localhost:3001/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, senha })
        });

        const result = await response.json();

        if (response.ok) {
            // Armazenar o token no localStorage
            localStorage.setItem('token', result.access_token);
            document.getElementById('response').innerText = 'Login successful! Redirecting...';
            // Redirecionar para outra página
            window.location.href = "tela-treino.html"; // Substitua 'pagina-principal.html' pelo caminho da página de destino
        } else {
            document.getElementById('response').innerText = `Error: ${result.message}`;
        }
    } catch (error) {
        document.getElementById('response').innerText = `Error: ${error.message}`;
    }
});