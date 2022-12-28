const tipoSuscripcion = {
    Free: 'Puedes tomar solo los cursos gratis de Platzi',
    Basic: 'Puedes tomar casi todos los cursos de Platzi durante un mes',
    Expert: 'Puedes tomar los cursos de Platzi durante un mes',
    ExpertDuo: 'Tú y otra persona pueden tomar los cursos de Platzi durante un año',
    ExpertFamily: 'Tu y un grupo de 3 personas pueden tomar los cursos de Platzi durante un año'
}

let suscripcion = prompt("Qué suscripción quieres?")

function suscripcionEscogida(suscripcion){
    if(tipoSuscripcion[suscripcion]){
        console.log(tipoSuscripcion[suscripcion]);
        return;
    }
    console.warn('No existe');
    // tipoSuscripcion[suscripcion] ? console.log(tipoSuscripcion[suscripcion]) : console.warn('No existe')
} 


suscripcionEscogida(suscripcion);