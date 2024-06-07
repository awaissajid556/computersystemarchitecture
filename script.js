document.addEventListener('DOMContentLoaded', function () {
    const feedbackForm = document.getElementById('feedbackForm');

    feedbackForm.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent the form from submitting

        const selectedStar = document.querySelector('input[name="star"]:checked');
        const comments = document.getElementById('comments').value.trim();

        if (!selectedStar) {
            alert('Please select a star rating.');
            return;
        }

        if (comments === '') {
            alert('Please provide your comments.');
            return;
        }

        // Process the feedback (e.g., send it to the server)
        console.log('Star Rating:', selectedStar.value);
        console.log('Comments:', comments);

        // Reset the form after submission
        feedbackForm.reset();
        alert('Thank you for your feedback!');
    });
});
