import {createClient} from './API.js';
import {validateIfEmpty, showAlert} from './funciones.js';

(function(){
    
    const form = document.querySelector('#formulario');

        form.addEventListener('submit', function(e){

            e.preventDefault();

            const name = document.querySelector('#nombre').value;
            const email = document.querySelector('#email').value;
            const cellPhone = document.querySelector('#telefono').value;
            const company = document.querySelector('#empresa').value;

            const client = { name, email, cellPhone, company };
            
            if(validateIfEmpty(client)){
                showAlert('All fields must be completed');
                return;
            }

            createClient(client);
        });
})();