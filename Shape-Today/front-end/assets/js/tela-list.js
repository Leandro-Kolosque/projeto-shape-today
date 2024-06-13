const mode = document.getElementById('moon_icon');

mode.addEventListener('click', () => {
    const form=document.getElementById('container')
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

document.getElementById('loadItems').addEventListener('click', async function() {
    const token = localStorage.getItem('token');
    if (!token) {
        document.getElementById('items').innerText = 'No token found. Please log in first.';
        return;
    }

    try {
        const response = await fetch('http://localhost:3001/user', {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            }
        });

        if (response.ok) {
            const items = await response.json();
            let itemsList = '<ul>';
            items.forEach(item => {
                itemsList += `
                    <li>
                        Nome: ${item.nome}<br>
                        CPF: ${item.cpf}<br>
                        Email: ${item.email}
                    </li>
                `; // Ajuste conforme a estrutura dos seus itens
            });
            itemsList += '</ul>';
            document.getElementById('items').innerHTML = itemsList;
        } else {
            const result = await response.json();
            document.getElementById('items').innerText = `Error: ${result.message}`;
        }
    } catch (error) {
        document.getElementById('items').innerText = `Error: ${error.message}`;
    }
});