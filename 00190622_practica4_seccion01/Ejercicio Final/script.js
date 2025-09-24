document.addEventListener('DOMContentLoaded', () => {

  const boton = document.querySelector('.boton-recordatorio');
  const inputDia = document.getElementById('diaInput');
  const modal = document.getElementById('miModal');
  const cerrar = document.querySelector('.cerrar-modal');
  const mensajeRecordatorio = document.getElementById('mensaje-recordatorio');

  function obtenerRecordatorio(dia) {
    const problemas = {
      'lunes': 'Los lunes debo atender un cliente específico.',
      'martes': 'Los martes debo visitar una agencia fuera de la ciudad.',
      'miercoles': 'Los miércoles debo llevar a mi hija al ballet.',
      'jueves': 'Los jueves debo priorizar entregas de desarrollo.',
      'viernes': 'Los viernes debo atender problemas de manera remota.',
      'sabado': 'Los sábados debo hacer lo que mi esposa quiera.',
      'domingo': 'Los domingos no tengo nada, así que a mimir a menos que haya parcial hay que estudiar',
    };

    const diaNormalizado = dia.toLowerCase().trim();

    if (diaNormalizado.length === 0) {
      return 'Por favor, escribe un día de la semana.';
    }

    if (problemas[diaNormalizado]) {
      return problemas[diaNormalizado];
    }

    for (let key in problemas) {
      if (diaNormalizado.includes(key) || key.includes(diaNormalizado)) {
        return `¿Quizás quisiste decir ${key.charAt(0).toUpperCase() + key.slice(1)}? ${problemas[key]}`;
      }
    }

    return `Lo siento, "${dia}" no es un día de la semana válido. Intenta con "lunes", "martes", etc.`;
  }

  boton.addEventListener('click', () => {
    const diaEscrito = inputDia.value;

    const mensaje = obtenerRecordatorio(diaEscrito);
    mensajeRecordatorio.textContent = mensaje;
    modal.style.display = 'flex';
  });

  cerrar.addEventListener('click', () => {
    modal.style.display = 'none';
  });

  window.addEventListener('click', (event) => {
    if (event.target === modal) {
      modal.style.display = 'none';
    }
  });
});