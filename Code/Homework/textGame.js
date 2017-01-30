//Akash Kumar: A Text based console only game.
var lucky = Math.floor((Math.random() * 10) + 1);
var unlucky = Math.floor((Math.random() * 10) + 1);
console.log('You are stuck on a desert island, a role of the dice will decide if you live or die')
console.log('Your lucky number is ', lucky);
if (lucky == unlucky) {
    console.log(unlucky);
    console.log('You lives another day')
} else {
    gameOver()
}
function gameOver() {
    console.log('The dice rolled ', unlucky);
    console.log('You lose');
}
console.log('Refresh to play again')
