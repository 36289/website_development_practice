// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = 'Correct Number!';
// console.log(document.querySelector('.message').textContent);

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;

// document.querySelector('.number').value = 23;
// console.log(document.querySelector('.guess').value);
let number = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  if (score > 1) {
    if (!guess) {
      displayMessage('🚫No number!');
    } else if (guess === number) {
      displayMessage('🎉Correct number!');
      document.querySelector('body').style.backgroundColor = '#60b347';
      document.querySelector('.number').style.width = '30rem';
      document.querySelector('.number').textContent = number;
      highscore = score > highscore ? score : highscore;
      document.querySelector('.highscore').textContent = highscore;
    } else if (guess !== number) {
      if (score > 1) {
        displayMessage(guess > number ? '📈Too high!' : '📉Too low!');
        score--;

        document.querySelector('.score').textContent = score;
      } else {
        document.querySelector('.message').textContent = '🎇You loss';
        document.querySelector('.score').textContent = 0;
      }
    }
    //    else if (guess > number) {
    //     document.querySelector('.message').textContent = '📈Too high!';
    //     score--;
    //     document.querySelector('.score').textContent = score;
    //   } else {
    //     document.querySelector('.message').textContent = '📉Too low!';
    //     score--;
    //     document.querySelector('.score').textContent = score;
    //   }
    // } else {
    //   document.querySelector('.message').textContent = '🎇You loss';
    //   document.querySelector('.score').textContent = 0;
    // }
  }
});
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  number = Math.trunc(Math.random() * 20) + 1;
  displayMessage('Start guessing...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.body').style.backgroundColor = '#222';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.number').style.width = '15rem';

  document.querySelector('.guess').value = ' ';
});
