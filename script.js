function setTheme(event) {
    const root = document.documentElement;
    const theme = event.target.id;
    root.className = theme;
    
    document.querySelector('.theme-name').textContent = newTheme;
}
  
const themeButtons = document.querySelectorAll('.theme-change');
themeButtons.forEach(button => {
    button.addEventListener('click', setTheme);
});