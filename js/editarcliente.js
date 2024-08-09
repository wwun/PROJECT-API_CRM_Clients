import {getClientById, updateClient} from './API.js';
import {validateIfEmpty, showAlert} from './funciones.js';

(function(){
    const form = document.querySelector('#formulario');

    document.addEventListener('DOMContentLoaded', loadClient);

    async function loadClient(e){

        const urlParameters = new URLSearchParams(window.location.search);
        const idClient = urlParameters.get('id');

        const client = await getClientById(idClient);
        const { name, email, cellPhone, company } = client;

        document.querySelector('#nombre').value = name;
        document.querySelector('#email').value = email;
        document.querySelector('#telefono').value = cellPhone;
        document.querySelector('#empresa').value = company;
        document.querySelector('#id').value = idClient;
        
    }

    form.addEventListener('submit', updateClientChanges);

    async function updateClientChanges(e){
        
        e.preventDefault();

        const idClient = document.querySelector('#id').value;
        const nameInput = document.querySelector('#nombre').value;
        const emailInput = document.querySelector('#email').value;
        const cellPhoneInput = document.querySelector('#telefono').value;
        const companyInput = document.querySelector('#empresa').value;

        const client = { 
            name: nameInput, 
            email:emailInput, 
            cellPhone:cellPhoneInput, 
            company:companyInput,
            id: (new URLSearchParams(window.location.search)).get('id')
        };

        if(validateIfEmpty(client)){
            showAlert('All fields must be completed');
            return;
        }

        await updateClient(client);
    }
})();