let i = 1;
let j = 1;
let over = 1;
let target = 0;
let ballsCount = 0;

for (let i = 1; i <= 20; i++) {
  let runs = 0;
  let ballLeft = 6;

  console.log(`Over ${over}`);
  let eachBall = ballsCount + 0.1;
  while (ballLeft > 0) {
    let runThisBall = Math.floor(Math.random() * 7);

    console.log(`Ball ${eachBall.toFixed(1)} - Runs ${runThisBall} `);
    runs = runs + runThisBall;

    ballLeft--;
    eachBall = eachBall + 0.1;
  }
  let total = runs;
  console.log(`CSK scored ${runs} runs in over ${j}`);
  target = target + runs;
  console.log(`Total score for CSK at the end of over ${j} is ${target}`);
  over++;
  j++;
  ballsCount = ballsCount + 1;
}
console.log(`Target for the opponent is ${target + 1}`);
