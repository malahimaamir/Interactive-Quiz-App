let currentQuestion = 1;
let score = 0;
const total = 5;
const correctAnswers = [3, 1, 1, 2, 0];

document.getElementById(`q${currentQuestion}`).style.display = 'block';

const showQuestion = (questionNum) => {
    for (let i = 1; i <= total; i++) {
        document.getElementById(`q${i}`).style.display = i === questionNum ? 'block' : 'none';
    }
    document.getElementById('prev-btn').style.display = questionNum > 1 ? 'inline-block' : 'none';
    document.getElementById('next-btn').textContent = questionNum === total ? 'Submit' : 'Next';
};

document.getElementById('next-btn').addEventListener('click', () => {
    const selected = document.querySelector(`input[name="q${currentQuestion}"]:checked`);
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
        localStorage.removeItem(`answer${i}`);     }
    showQuestion(currentQuestion);
    document.getElementById('result').style.display = 'none';
});

function showResult() {    
    document.getElementById('result').style.display = 'block';
    document.getElementById('score').textContent = `You scored ${score} out of ${total}`;
    
    
    for (let i = 1; i <= total; i++) {
        document.getElementById(`q${i}`).style.display = 'none'; 
    }
    document.getElementById('prev-btn').style.display = 'none'; 
    document.getElementById('next-btn').style.display = 'none'; 
}

