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
    const itemsContainer = document.getElementById('items');

    if (!token) {
        itemsContainer.innerText = 'No token found. Please log in first.';
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
                `;
            });
            itemsList += '</ul>';
            itemsContainer.innerHTML = itemsList;

            // Adiciona ou remove a classe para mostrar ou ocultar a barra de rolagem
            itemsContainer.classList.toggle('show-scrollbar');
        } else {
            const result = await response.json();
            itemsContainer.innerText = `Error: ${result.message}`;
        }
    } catch (error) {
        itemsContainer.innerText = `Error: ${error.message}`;
    }
});