const scriptURL = 'https://script.google.com/macros/s/AKfycbxEKpl9itzBKEWEH5PmtvuOpknMuz0U4DxBVBXVeb5AQZOUBJw85JSw3yJCa6pIQQGc/exec';
const form = document.forms['submit-to-google-sheet'];
    const nameSection = document.querySelector('.name');
    const stateSection = document.querySelector('.state');
    const mailSection = document.querySelector('.mail');
    const loadingSpinner = document.getElementById('loadingSpinner');
    const msg = document.getElementById('scsmsg');

    // Initially hide the loading spinner and sections other than the name section
    loadingSpinner.style.display = 'none';
    stateSection.style.display = 'none';
    mailSection.style.display = 'none';

    document.getElementById('name_next').addEventListener('click', function (e) {
        e.preventDefault();

        // Show loading spinner
        loadingSpinner.style.display = 'inline-block';

        // Simulate some asynchronous operation (e.g., fetching data)
        setTimeout(() => {
            // Hide loading spinner
            loadingSpinner.style.display = 'none';

            // Hide name section
            nameSection.style.display = 'none';

            // Show state section
            stateSection.style.display = 'flex';
        }, 1500); // You can replace this with actual logic or remove the timeout for immediate transition
    });

    document.getElementById('state_next').addEventListener('click', function (e) {
        e.preventDefault();

        // Show loading spinner
        loadingSpinner.style.display = 'inline-block';

        // Simulate some asynchronous operation (e.g., fetching data)
        setTimeout(() => {
            // Hide loading spinner
            loadingSpinner.style.display = 'none';

            // Hide state section
            stateSection.style.display = 'none';

            // Show email section
            mailSection.style.display = 'flex';
        }, 1500); // You can replace this with actual logic or remove the timeout for immediate transition
    });

    form.addEventListener('submit', function (e) {
        e.preventDefault();

        // Fetch data or submit the form to Google Sheets
        fetch(scriptURL, { method: 'POST', body: new FormData(form) })
            .then(response => {
                msg.style.display = 'block';
            })
            .catch(error => {
                console.error('Error!', error.message);
                // Handle error - You can display an error message or perform other actions.
            });
    });