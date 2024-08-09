(function(){
    
    const form = document.querySelector('#formulario');

    const name = document.querySelector('#nombre');
    const email = document.querySelector('email');
    const celNumber = document.querySelector('telefono');
    const company = document.querySelector('empresa');

    if(name !== '' && email !== '' && celNumber !== '' && company !== ''){
        createClient();
    }
})();