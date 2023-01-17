const form = document.querySelector('.login-form');

form.addEventListener('submit', onSubmitForm);

function onSubmitForm(event){
    event.preventDefault();

    const formElements = event.currentTarget.elements;
    
    const mail = formElements.email.value;
    const password = formElements.password.value;
    

    if(mail === '' || password === ''){
        return window.alert(`Увага! Усі поля мають бути заповнені.`);
    };

    console.log({mail: mail, password: password});

    event.currentTarget.reset();
};