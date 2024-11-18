document.addEventListener("DOMContentLoaded", function () {
    // Retrieve data from localStorage
    const name = localStorage.getItem('name') || 'N/A';
    const gender = localStorage.getItem('gender') || 'N/A';
    const phone = localStorage.getItem('phone') || 'N/A';
    const email = localStorage.getItem('email') || 'N/A';
    const address = localStorage.getItem('address') || 'N/A';
    const qualification = localStorage.getItem('qualification') || 'N/A';
    const institute = localStorage.getItem('institute') || 'N/A';
    const passingYear = localStorage.getItem('passingYear') || 'N/A';
    const grade = localStorage.getItem('grade') || 'N/A';
    const skills = localStorage.getItem('skills') || 'N/A';
    const experience = localStorage.getItem('experience') || 'N/A';
    const github = localStorage.getItem('github') || 'N/A';
    const linkedin = localStorage.getItem('linkedin') || 'N/A';
    const picture = localStorage.getItem('picture');  // Get the picture data URL

    // Populate the resume fields
    document.getElementById('name').textContent = name;
    document.getElementById('gender').querySelector('.text').textContent = gender;
    document.getElementById('contact').querySelector('.text').textContent = phone;
    document.getElementById('email').querySelector('.text').textContent = email;
    document.getElementById('address').querySelector('.text').textContent = address;

    // Add experience and education in resume
    document.getElementById('professional-summary-description').textContent = experience;
    document.getElementById('edu-description').textContent = `${qualification} from ${institute} with ${grade} in ${passingYear}`;
    document.getElementById('skills-description').textContent = skills;

    // Social Links
    document.getElementById('github').querySelector('.text').textContent = github;
    document.getElementById('linkedin').querySelector('.text').textContent = linkedin;

    // Set the picture if available
    if (picture) {
        const backgroundElement = document.getElementById('rd1-1'); // Your image container
        backgroundElement.style.backgroundImage = `url(${picture})`;
        backgroundElement.style.backgroundSize = 'cover';  // Ensure the image covers the area
        backgroundElement.style.backgroundPosition = 'center';  // Center the image
        backgroundElement.style.height = '200px';  // Adjust height as needed
    }
});
document.getElementById('download-btn').addEventListener('click', function () {
    // Create a new jsPDF instance
    const { jsPDF } = window.jspdf;
    const pdf = new jsPDF();

    // Get the content of your resume to convert into PDF
    const resumeContent = document.getElementById('resume-main');

    // Use jsPDF to convert the content of resume to a PDF
    pdf.html(resumeContent, {
        callback: function (doc) {
            // Save the generated PDF with the name "resume.pdf"
            doc.save('resume.pdf');
        },
        x: 10,
        y: 10
    });
});
