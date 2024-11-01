function toggleMenu() {
    document.querySelector('.navlist').classList.toggle('active');
}


const navLinks = document.querySelectorAll('.navlist a');

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        document.querySelector('.navlist').classList.remove('active');
    });
});

const projectItems = document.querySelectorAll('.project-item');
let currentIndex = 0;


function updateProjectDisplay() {
    projectItems.forEach((item, index) => {
        item.classList.remove('active');
        item.querySelector('.project-description').style.display = 'none'; // Hide all descriptions
    });


    projectItems[currentIndex]?.classList.add('active');
    projectItems[currentIndex + 1]?.classList.add('active');
}

document.querySelectorAll('.description-button').forEach((button, index) => {
    button.addEventListener('click', (event) => {
        const description = projectItems[index].querySelector('.project-description');
        description.style.display = (description.style.display === 'block') ? 'none' : 'block';
        
      
        projectItems.forEach((item, idx) => {
            if (idx !== index) {
                item.querySelector('.project-description').style.display = 'none';
            }
        });
        
       
        event.stopPropagation();
    });
});

document.getElementById('prev-button').addEventListener('click', () => {
    currentIndex = (currentIndex > 0) ? currentIndex - 2 : projectItems.length - 2;
    updateProjectDisplay();
});


document.getElementById('next-button').addEventListener('click', () => {
    currentIndex = (currentIndex < projectItems.length - 2) ? currentIndex + 2 : 0;
    updateProjectDisplay();
});


updateProjectDisplay();

// Initialize EmailJS with your user ID
(function() {
    emailjs.init("TFFnjwXF_O03vomrv"); // Replace with your EmailJS user ID
})();

// Function to send email
function sendEmail(event) {
    event.preventDefault(); // Prevent form from submitting the traditional way

    const templateParams = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value,
    };

    emailjs.send("service_gg2mdml", "template_am5jiu4", templateParams)
        .then(function(response) {
            console.log("Email sent successfully", response);
        }, function(error) {
            console.error("Failed to send email", error);
        });
}

// Ensure the DOM is fully loaded before adding event listeners
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("contact-form").addEventListener("submit", sendEmail);
});



document.querySelector('.scroll-to-top').addEventListener('click', function(event) {
    event.preventDefault();
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

function updateDate() {
    const currentDate = new Date();
    const options = { year: 'numeric', month: 'long' };
    document.getElementById('currentDate').textContent = currentDate.toLocaleDateString('en-US', options);
}

// Call the function once to set the initial date
updateDate();
