var cofeeInit = 200;
var currentAnswer;
var timeDown;
var secondDown;
var var1;
var var2;
var var3;
var message = [];
var score = 5;
i = 0;

const readline = require('readline');

timeDown = 10;
secondDown = 1;
console.log('You must diliver coffee to your boss before it gets cold. \n It is currently at', cofeeInit, "degrees, \n Get it to your boss before it reaches 170. \n You will have to answer 5 math questions correctly. \n Each mistake makes you lose 10 degrees");
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
maths();

function maths() {
    // console.log(millis());
    console.log('Coffee is at', cofeeInit, 'degrees');
    var1 = Math.floor((Math.random() * 10) + 1);
    var2 = Math.floor((Math.random() * 10) + 1);
    var3 = (var1 + var2);
    console.log(var3);
    message = ["what is " + var1 + ' + ' + var2 + '? '];
    // console.log(message);
    rl.question(message, (answer) => {
        // TODO: Log the answer in a database
        currentAnswer = answer;
        currentAnswer = currentAnswer.toLowerCase();
        //console.log(currentAnswer);
        if (currentAnswer == var3) {
            maths();
            i++;
        } else {
            console.log('Not quite');
            maths();
            cofeeInit -= 10

        }
        if (i > score) {
            console.log('You are successful!!!');
            rl.close();
        }
        if (i < 0 || cofeeInit < 170) {
            console.log('You lose');
            rl.close();
        }
    });
}
