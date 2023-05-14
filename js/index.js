import scrollTopButton from './btn_scroll.js';
import contactFormValidations from './validaciones_formularios.js';

const d = document;

d.addEventListener('DOMContentLoaded', (e) => {
  scrollTopButton('.scroll-top-btn');
  contactFormValidations();
});
