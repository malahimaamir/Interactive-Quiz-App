let currentQuestion = 1;
let score = 0;
const total = 5;
const correctAnswers = [3, 1, 1, 2, 0];

// document.getElementById(`q${currentQuestion}`).style.display = 'block';

const showQuestion = (questionNum) => {

    document.getElementById(`q${currentQuestion}`).style.display = 'block';


    for (let i = 1; i <= total; i++) {
        document.getElementById(`q${i}`).style.display = i === questionNum ? 'block' : 'none';
    }
    document.getElementById('prev-btn').style.display = questionNum > 1 ? 'inline-block' : 'none';
    document.getElementById('next-btn').textContent = questionNum === total ? 'Submit' : 'Next';
};

document.getElementById('next-btn').addEventListener('click', () => {    
    const selected = document.querySelector(`input[name="q${currentQuestion}"]:checked`);
    
    document.getElementById('next-btn').addEventListener('click', () => {})

    if (!selected) return alert("Please select an answer.");

    localStorage.setItem(`answer${currentQuestion}`, selected.value);
    score += parseInt(selected.value) === correctAnswers[currentQuestion - 1] ? 1 : 0;

    if (++currentQuestion > total) {
        showResult();
    } else {
        showQuestion(currentQuestion);
    }
});



document.getElementById('prev-btn').addEventListener('click', () => {
    if (currentQuestion > 1) {
        currentQuestion--;
        showQuestion(currentQuestion);
    }
});

document.getElementById('restart-btn').addEventListener('click', () => {
    score = 0;
    currentQuestion = 1;

    for (let i = 1; i <= total; i++) {
        localStorage.removeItem(`answer${i}`);
        const inputs = document.querySelectorAll(`input[name="q${i}"]`);
        inputs.forEach(input => input.checked = false);

    }


    showQuestion(currentQuestion);

    document.getElementById('prev-btn').style.display = 'none' ? "inline-block" : "inline-block"; 
    document.getElementById('next-btn').style.display = 'none' ? '' : 'block'; 


    document.getElementById('result').style.display = 'none';
    document.getElementById('next-btn').textContent = 'Next'; 
});

function showResult() {    
    document.getElementById('result').style.display = 'block';
    document.getElementById('score').textContent = `You scored ${score} out of ${total}`;
    document.getElementById('progress_1').style.display = 'block';

    for (let i = 1; i <= total; i++) {
        document.getElementById(`q${i}`).style.display = 'none'; 
    }
    document.getElementById('prev-btn').style.display = 'none'; 
    document.getElementById('next-btn').style.display = 'none'; 
}


// let answers = document.querySelectorAll (`input[value="${value}]`)
// if(answers=='true'){
//     localStorage.getItem(`answer${value}`);
//     windows.onload= answers.checked = true  
    
// }

// if (value=='true'){
//     window.reload(checked = true)
// }



// let selectedKey = 'selected';
// let answer = localStorage.getItem(selectedKey);

// function main() {
//     const input = document.querySelector('input'); 
//     if (answer === 'true') {
//         input.checked = true; 
//     }
// }

// window.onload = function() {
//     main(); 
// };


let selectedKey = 'selected'; 
let answer = localStorage.getItem(selectedKey);

function main() {    
    const inputs = document.querySelectorAll('input[type="radio"]');     
    if (answer) {
        for (let i = 0; i < inputs.length; i++) {
            if (inputs[i].value === answer) {
                inputs[i].checked = true;
            }
        }        
    }    
    
}
window.onload = function() {
    main();
};
    