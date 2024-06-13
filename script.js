document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('nav ul li a');

    links.forEach(link => {
        link.addEventListener('click', (e) => {
            // Verifica se o link é interno (inicia com '#')
            if (link.getAttribute('href').startsWith('#')) {
                e.preventDefault();
                // Scroll suave para a âncora correspondente
                document.querySelector(link.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Adicionar o código para os links na página de contatos, se necessário
    const contactsLinks = document.querySelectorAll('.contacts-nav ul li a');

    contactsLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            // Verifica se o link é interno (inicia com '#')
            if (link.getAttribute('href').startsWith('#')) {
                e.preventDefault();
                // Scroll suave para a âncora correspondente
                document.querySelector(link.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});
