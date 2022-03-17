const adviceHeaderSpan = document.querySelector('.advice-number');
const adviceBody = document.querySelector('.advice-body');
const adviceBtn = document.querySelector('#advice-btn');

// Display advice number
const displayNum = data => {
    adviceHeaderSpan.textContent = `# ${data.slip.id}`;
};

// Display advice
const displayAdvice = data => {
    adviceBody.textContent = `"${data.slip.advice}"`;
};

// API Call
const getAdvice = () => {
    const apiUrl = 'https://api.adviceslip.com/advice';

    fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
        console.log(data);
        displayNum(data);
        displayAdvice(data);
    });
};

// Event listener for button
// On click, display new advice
adviceBtn.addEventListener('click', getAdvice);