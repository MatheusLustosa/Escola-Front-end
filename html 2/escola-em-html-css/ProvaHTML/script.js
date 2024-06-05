document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contactForm');
    const nome = document.getElementById('nome');
    const sobrenome = document.getElementById('sobrenome');
    const email = document.getElementById('email');
    const categoria = document.getElementById('categoria');
    const email2 = document.getElementById('email2');
    const outrainfo = document.getElementById('outrainfo');

    const validateNome = () => {
        if (nome.value.trim() === '') {
            nome.setCustomValidity('Por favor, preencha seu nome.');
            nome.reportValidity();
        } else {
            nome.setCustomValidity('');
        }
    };

    const validateSobrenome = () => {
        if (sobrenome.value.trim() === '') {
            sobrenome.setCustomValidity('Por favor, preencha seu sobrenome.');
            sobrenome.reportValidity();
        } else {
            sobrenome.setCustomValidity('');
        }
    };

    const validateEmail = (emailField) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(emailField.value.trim())) {
            emailField.setCustomValidity('Por favor, insira um email válido.');
            emailField.reportValidity();
        } else {
            emailField.setCustomValidity('');
        }
    };

    const validateCategoria = () => {
        if (categoria.value === '') {
            categoria.setCustomValidity('Por favor, selecione uma categoria.');
            categoria.reportValidity();
        } else {
            categoria.setCustomValidity('');
        }
    };

    const validateOutraInfo = () => {
        if (outrainfo.value.trim() === '') {
            outrainfo.setCustomValidity('Por favor, preencha outra informação.');
            outrainfo.reportValidity();
        } else {
            outrainfo.setCustomValidity('');
        }
    };

    nome.addEventListener('input', validateNome);
    sobrenome.addEventListener('input', validateSobrenome);
    email.addEventListener('input', () => validateEmail(email));
    email2.addEventListener('input', () => validateEmail(email2));
    categoria.addEventListener('input', validateCategoria);
    outrainfo.addEventListener('input', validateOutraInfo);

    form.addEventListener('submit', (event) => {
        validateNome();
        validateSobrenome();
        validateEmail(email);
        validateEmail(email2);
        validateCategoria();
        validateOutraInfo();

        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        } else {
            event.preventDefault(); // Prevent form submission to show the alert
            alert('Mensagem enviada com sucesso!');
        }
    });
});
document.getElementById("hamburger").addEventListener("click", function() {
    document.getElementById("nav-links").classList.toggle("show");
});
