const background = document.querySelector('#background');
const password = document.querySelector('#password');

password.addEventListener('input', () => {
  background.style.filter = `blur(${20 - password.value.length * 2}px)`;
});
