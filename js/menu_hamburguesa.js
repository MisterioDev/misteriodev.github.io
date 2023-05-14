export default function hamburgerMenu(panelBtn, panel, menu) {
  const d = document,
    w = window,
    $panelBtn = d.querySelector(panelBtn);

  $panelBtn.addEventListener('click', (e) => {
    if (w.innerWidth < 700) {
      d.querySelector(panel).classList.toggle('panel-phone');
      d.querySelector(menu).classList.toggle('menu-phone');
      d.querySelector(panel).classList.toggle('is-active');
    }
  });
  w.addEventListener('resize', (e) => {
    if (w.innerWidth > 700) {
      d.querySelector(panel).classList.remove('panel-phone');
      d.querySelector(menu).classList.remove('menu-phone');
      d.querySelector(panel).classList.remove('is-active');
    }
  });
}
