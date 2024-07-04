function toggleAnswer(question) {
    const answer = question.nextElementSibling;
    answer.style.display = answer.style.display === 'block' ? 'none' : 'block';
}

function searchHelp() {
    const searchTerm = document.querySelector('.search-bar input').value.toLowerCase();
    const helpSections = document.querySelectorAll('.help-section');

    helpSections.forEach(section => {
        const content = section.textContent.toLowerCase();
        section.style.display = content.includes(searchTerm) ? 'block' : 'none';
    });
}