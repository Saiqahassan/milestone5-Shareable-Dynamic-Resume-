var form = document.getElementById('resume-form');
var resumeGenerateElement = document.getElementById('resume-generate');
var sharedLink = document.getElementById('shared-link');
var shareableLinkContainer = document.getElementById('shared-link-container');
var downloadpdfButton = document.getElementById('pdf-download');
form.addEventListener('submit', function (event) {
    event.preventDefault();
    var username = document.getElementById('username').value;
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var address = document.getElementById('address').value;
    var university = document.getElementById('university').value;
    var college = document.getElementById('college').value;
    var school = document.getElementById('school').value;
    var experience = document.getElementById('experience').value;
    var skills = document.getElementById('skills').value;
    // Save form data in local storage with the username as the key
    var resumeData = {
        name: name,
        email: email,
        phone: phone,
        address: address,
        university: university,
        college: college,
        school: school,
        experience: experience,
        skills: skills
    };
    localStorage.setItem(username, JSON.stringify(resumeData));
    // Dynamically generate the resume
    var resumeBuilder = "\n    <h2><b>Shareable and Editable Resume</b></h2>\n    <h3>Personal Information</h3>\n    <p><b>Name:</b><span contenteditable=\"true\">".concat(name, "</span></p>\n    <p><b>Email:</b><span contenteditable=\"true\">").concat(email, "</span></p>\n    <p><b>Phone:</b><span contenteditable=\"true\">").concat(phone, "</span></p>\n    <p><b>Address:</b><span contenteditable=\"true\">").concat(address, "</span></p>\n\n    <h3>Education</h3>\n    <p><b>University:</b><span contenteditable=\"true\">").concat(university, "</span></p>\n    <p><b>College:</b><span contenteditable=\"true\">").concat(college, "</span></p>\n    <p><b>School:</b><span contenteditable=\"true\">").concat(school, "</span></p>\n\n    <h3>Work Experience</h3>\n    <p contenteditable=\"true\">").concat(experience, "</p>\n    \n    <h3>Skills</h3>\n    <p contenteditable=\"true\">").concat(skills, "</p>\n\n    ");
    // Display the edited resume
    resumeGenerateElement.innerHTML = resumeBuilder;
    // Generate a shareable URL with the username only
    var shareableURl = "".concat(window.location.origin, "?username=").concat(encodeURIComponent(username));
    // Display the shareable link 
    sharedLink.style.display = 'block';
    shareableLinkContainer.href = shareableURl;
    shareableLinkContainer.textContent = shareableURl;
});
// PDF Download Button
downloadpdfButton.addEventListener('click', function () {
    window.print();
});
window.addEventListener('DOMContentLoaded', function () {
    var urlParams = new URLSearchParams(window.location.search);
    var username = urlParams.get('username');
    if (username) {
        // Autofill form if data is found in localStorage
        var savedResumeData = localStorage.getItem(username);
        if (savedResumeData) {
            var resumeData = JSON.parse(savedResumeData);
            document.getElementById('username').value = username;
            document.getElementById('name').value = resumeData.name;
            document.getElementById('email').value = resumeData.email;
            document.getElementById('phone').value = resumeData.phone;
            document.getElementById('address').value = resumeData.address;
            document.getElementById('university').value = resumeData.university;
            document.getElementById('college').value = resumeData.college;
            document.getElementById('school').value = resumeData.school;
            document.getElementById('experience').value = resumeData.experience;
            document.getElementById('skills').value = resumeData.skills;
        }
    }
});
