let count = 0;
let factIndex = 0;
let facts = [];

// Load facts from the text file
fetch('facts.txt')   
    .then(response => response.text())
    .then(text => {
        facts = text.split('\n').filter(fact => fact.trim() !== '');
        updateText();
    })
    .catch(error => console.error('Error loading facts:', error));

function addOne() {
    count++;
    updateText();
    if (count % 25 === 0) {  // Show a fact every 25 clicks
        updateFact();
    }
    animateCookie();
}

function updateText() {
    document.getElementById('cookie-count').innerText = count;
}

function updateFact() {
    const factElement = document.getElementById("fact");
    if (factElement && facts.length > 0) {
        factElement.innerText = facts[factIndex];
        factIndex = (factIndex + 1) % facts.length;  // Cycle through facts
    } else if (facts.length === 0) {
        console.error("No facts loaded");
    } else {
        console.error("Fact element not found");
    }
}

function animateCookie() {
    const cookie = document.getElementById('cookie-image');
    cookie.classList.add('cookie-click');
    setTimeout(() => {
        cookie.classList.remove('cookie-click');
    }, 100);
}