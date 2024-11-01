document.querySelectorAll('.faq-question').forEach((question) => {
    question.addEventListener('click', () => {
        let answer = question.nextElementSibling;
        answer.style.display = answer.style.display === 'block' ? 'none' : 'block';
    });
});
