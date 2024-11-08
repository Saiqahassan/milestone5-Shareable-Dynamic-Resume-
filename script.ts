const form = document.getElementById('resume-form') as HTMLFormElement;
const resumeGenerateElement = document.getElementById('resume-generate') as HTMLDivElement;
const sharedLink = document.getElementById('shared-link') as HTMLDivElement;
const shareableLinkContainer = document.getElementById('shared-link-container') as HTMLAnchorElement;
const downloadpdfButton = document.getElementById('pdf-download') as HTMLButtonElement;

form.addEventListener('submit', (event: Event) => {
    event.preventDefault();

    const username = (document.getElementById('username') as HTMLInputElement).value
    const name = (document.getElementById('name') as HTMLInputElement).value
    const email = (document.getElementById('email') as HTMLInputElement).value
    const phone = (document.getElementById('phone') as HTMLInputElement).value
    const address = (document.getElementById('address') as HTMLInputElement).value
    const university = (document.getElementById('university') as HTMLInputElement).value
    const college = (document.getElementById('college') as HTMLInputElement).value
    const school = (document.getElementById('school') as HTMLInputElement).value
    const experience = (document.getElementById('experience') as HTMLTextAreaElement).value
    const skills = (document.getElementById('skills') as HTMLTextAreaElement).value

    // Save form data in local storage with the username as the key
    const resumeData = {
        name,
        email,
        phone,
        address,
        university,
        college,
        school,
        experience,
        skills
    };
        localStorage.setItem(username, JSON.stringify(resumeData));


    // Dynamically generate the resume

    const resumeBuilder = `
    <h2><b>Shareable and Editable Resume</b></h2>
    <h3>Personal Information</h3>
    <p><b>Name:</b><span contenteditable="true">${name}</span></p>
    <p><b>Email:</b><span contenteditable="true">${email}</span></p>
    <p><b>Phone:</b><span contenteditable="true">${phone}</span></p>
    <p><b>Address:</b><span contenteditable="true">${address}</span></p>

    <h3>Education</h3>
    <p><b>University:</b><span contenteditable="true">${university}</span></p>
    <p><b>College:</b><span contenteditable="true">${college}</span></p>
    <p><b>School:</b><span contenteditable="true">${school}</span></p>

    <h3>Work Experience</h3>
    <p contenteditable="true">${experience}</p>
    
    <h3>Skills</h3>
    <p contenteditable="true">${skills}</p>

    `
    // Display the edited resume
        resumeGenerateElement.innerHTML = resumeBuilder;

    // Generate a shareable URL with the username only
        const shareableURl = `${window.location.origin}?username=${encodeURIComponent(username)}`;

    // Display the shareable link 
    sharedLink.style.display = 'block';
    shareableLinkContainer.href = shareableURl;
    shareableLinkContainer.textContent = shareableURl;
    
});

    // PDF Download Button
    downloadpdfButton.addEventListener('click', () =>{
    window.print();
});

    window.addEventListener('DOMContentLoaded', () =>{
        const urlParams = new URLSearchParams(window.location.search);
        const username = urlParams.get('username');
        if (username) {
    
    // Autofill form if data is found in localStorage
        const savedResumeData = localStorage.getItem(username);

if (savedResumeData) {
const resumeData = JSON.parse(savedResumeData);
(document.getElementById('username') as HTMLInputElement).value = username;
(document.getElementById('name') as HTMLInputElement).value = resumeData.name;
(document.getElementById('email') as HTMLInputElement).value = resumeData.email;
(document.getElementById('phone') as HTMLInputElement).value = resumeData.phone;
(document.getElementById('address') as HTMLInputElement).value = resumeData.address;
(document.getElementById('university') as HTMLTextAreaElement).value = resumeData.university;
(document.getElementById('college') as HTMLInputElement).value = resumeData.college;
(document.getElementById('school') as HTMLInputElement).value = resumeData.school;
(document.getElementById('experience') as HTMLTextAreaElement).value = resumeData.experience;
(document.getElementById('skills') as HTMLTextAreaElement).value = resumeData.skills;
}
}
});