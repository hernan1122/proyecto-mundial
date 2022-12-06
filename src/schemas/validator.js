const form = document.getElementById('form');
const inputs = document.querySelectorAll('#form input');

const expresiones = {
  team_1: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
  goal_team_1: /^\d{1,2}$/, // 1 a 2 numeros.
  team_2: /^[a-zA-ZÀ-ÿ\s]{1,40}$/,
  goal_team_2: /^\d{1,2}$/,
  phase: /^[a-zA-ZÀ-ÿ\s]{1,40}$/
}

const campos = {
  team_1: false,
  goal_team_1: false,
  team_2: false,
  goal_team_2: false,
  phase: false,
}

const validateForm = (e) => {
  switch (e.target.name) {
    case 'team_1':
      validateInput(expresiones.team_1, e.target, 'team_1');
      break;
    case 'goal_team_1':
      validateInput(expresiones.goal_team_1, e.target, 'goal_team_1');
      break;
    case 'team_2':
      validateInput(expresiones.team_2, e.target, 'team_2');
      break;
    case 'goal_team_2':
      validateInput(expresiones.goal_team_2, e.target, 'goal_team_2');
      break;
    case 'phase':
      validateInput(expresiones.phase, e.target, 'phase');
      break;
  }
}

const validateInput = (expresion, input, campo) => {
  if(expresion.test(input.value)){
    document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-incorrecto');
    document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-correcto');
    document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.remove('formulario__input-error-activo');
    campos[campo] = true;
  } else {
    document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-incorrecto');
    document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-correcto');
    document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.add('formulario__input-error-activo');
    campos[campo] = false;
  }
}

// cuando suelto la tecla se ejecuta un codigo
inputs.forEach((input) => {
  input.addEventListener('keyup', validateForm);
  input.addEventListener('blur', validateForm);
});

form.addEventListener('submit', () => {
  if (campos.team_1 && campos.goal_team_1 && campos.team_2 && campos.goal_team_2 && campos.phase) {
    form.reset();
  }
});