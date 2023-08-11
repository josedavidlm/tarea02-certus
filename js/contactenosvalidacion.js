const formulario = document.getElementById('form')

//evento
formulario.addEventListener("submit", validarFormulario);


//funcion validar el formulario al dar submit
function validarFormulario(e) {
    e.preventDefault();

    //ver los valores de los inputs
    const nombre = document.getElementById("nombre").value;
    const email = document.getElementById("email").value;
    const asunto = document.getElementById("asunto").value;
    const mensaje = document.getElementById("mensaje").value;
    



     // Lógica para validacion en JavaScript
    if (nombre == '' || email == '' || asunto == '' || mensaje == '') {
        mostrarAlerta('Complete los campos', 'error');
    } else {        


            const btn = document.getElementById('button');

            btn.value = 'Enviando...';
    

            const serviceID = 'default_service';
            const templateID = 'template_g7slbpq';

            mostrarAlerta('enviando información...', 'exito');    

            setTimeout(() => {                
                emailjs.sendForm(serviceID, templateID, this)
                .then(() => {
                btn.value = 'Enviar mensaje';
                /*alert('Mensaje enviado correctamente!');*/

                mostrarAlerta('Mensaje enviado correctamente!', 'exito');    

                }, (err) => {
                btn.value = 'Enviar mensaje';
                /*alert(JSON.stringify(err));*/

                mostrarAlerta(JSON.stringify(err), 'error');    

                });


            }, 2000);

            


                    
            setTimeout(() => {
                window.location.href = "./contactenos.html"
            }, 4000);
            
            return
             
    }
}

//Mostrar la alerta cuando agregamos datos incorrectos o vacíos
function mostrarAlerta(mensaje, tipo) {
    const alerta = document.createElement('div');
    alerta.className = `alerta ${tipo}`
    alerta.textContent = mensaje

    formulario.appendChild(alerta);
    setTimeout(() => {
        alerta.remove();
    }, 2000)
}





