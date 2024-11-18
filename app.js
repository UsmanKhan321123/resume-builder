document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById('resume-form');
    const fileInput = document.getElementById('picture');  // Your file input

    // When the form is submitted
    form.addEventListener('submit', function (e) {
        e.preventDefault();  // Prevent form submission

        // Collect form data
        const name = document.getElementById('fname').value;
        const gender = document.getElementById('gender').value;
        const age = document.getElementById('age').value;
        const phone = document.getElementById('phone').value;
        const email = document.getElementById('email').value;
        const address = document.getElementById('address').value;
        const qualification = document.getElementById('qualification').value;
        const institute = document.getElementById('institute').value;
        const passingYear = document.getElementById('passing-year').value;
        const grade = document.getElementById('grade').value;
        const skills = document.getElementById('skills').value;
        const experience = document.getElementById('experience').value;
        const github = document.getElementById('github').value;
        const linkedin = document.getElementById('linkedin').value;

        // Save form data to localStorage
        localStorage.setItem('name', name);
        localStorage.setItem('gender', gender);
        localStorage.setItem('age', age);
        localStorage.setItem('phone', phone);
        localStorage.setItem('email', email);
        localStorage.setItem('address', address);
        localStorage.setItem('qualification', qualification);
        localStorage.setItem('institute', institute);
        localStorage.setItem('passingYear', passingYear);
        localStorage.setItem('grade', grade);
        localStorage.setItem('skills', skills);
        localStorage.setItem('experience', experience);
        localStorage.setItem('github', github);
        localStorage.setItem('linkedin', linkedin);

        // Save the image (if selected)
        const file = fileInput.files[0];  // Get the selected file
        if (file) {
            const reader = new FileReader();
            reader.onload = function (e) {
                // Store the image as a data URL
                localStorage.setItem('picture', e.target.result);
            };
            reader.readAsDataURL(file);  // Convert image to DataURL
        }

        // Redirect to resume page
        window.location.href = './resume.html';
    });
});
