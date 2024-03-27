import JSConfetti from 'js-confetti';

document.addEventListener('DOMContentLoaded', () => {
  const jsConfetti = new JSConfetti();
  const button = document.querySelector('button');

  let count = 0;
  button.addEventListener('click', (e) => {
    e.preventDefault();
    button.textContent = `You clicked ${++count} times!`;
    jsConfetti.addConfetti({
      emojis: ['🌈', '⚡️', '💥', '✨', '💫', '🌸'],
    });
  });
});
