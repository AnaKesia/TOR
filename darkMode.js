class Dark {
  constructor() {
    this.darkModeToggle = document.querySelector('#dark-mode-toggle');
    this.htmlElement = document.documentElement;
    this.darkModeClass = 'dark-mode';

    this.darkModeToggle.addEventListener('click', () => {
      this.toggleDarkMode();
    });

    if (localStorage.getItem('darkModeEnabled')) {
      this.enableDarkMode();
    }
  }

  toggleDarkMode() {
    this.htmlElement.classList.toggle(this.darkModeClass);

    if (this.htmlElement.classList.contains(this.darkModeClass)) {
      localStorage.setItem('darkModeEnabled', true);
    } else {
      localStorage.removeItem('darkModeEnabled');
    }
  }

  enableDarkMode() {
    this.htmlElement.classList.add(this.darkModeClass);
    localStorage.setItem('darkModeEnabled', true);
  }

  disableDarkMode() {
    this.htmlElement.classList.remove(this.darkModeClass);
    localStorage.removeItem('darkModeEnabled');
  }
}

const dark = new Dark();
