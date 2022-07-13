let choicesObject = {
    'rock': {
        'rock': 'draw',
        'scissors': 'win',
        'paper': 'lose'
    },
    'scissor': {
        'rock': 'lose',
        'scissor': 'draw',
        'paper': 'win'
    },
    'paper': {
        'rock': 'win',
        'scissors': 'lose',
        'paper': 'draw'
    }
}

function checker(input) {
    let choices = ['rock', 'paper', 'scissor'];
    let num = Math.floor(Math.random() * 3);

    let computersChoice = choices[num];
    let result

    switch (choicesObject[input][computersChoice]) {
        case 'win':
            result = 'You Win!';
            break;
        case 'lose':
            result = 'You Lose!';
            break;
        default:
            result = 'Thats a Draw';
            break;
    }
    console.log(result);
    document.getElementById('result').textContent = result;

}