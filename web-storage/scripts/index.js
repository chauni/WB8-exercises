const nameInput = document.getElementById('nameInput')
const studentRadio = document.getElementById('studentRadio')
const instructorRadio = document.getElementById('instructorRadio')
const enterBtn = document.getElementById('enterBtn');



enterBtn.addEventListener('click', () => {
    localStorage.setItem('name', nameInput.value)

    if (studentRadio.checked) {
        localStorage.setItem('role', 'Student')
    } else if (instructorRadio.checked) {
        localStorage.setItem('role', 'Instructor')
    }
    
    window.location.href = './information.html'
});

/* alternative way ^^

in the inputs if name = role, and it's value is student or instructor

const role = document.querySelector('input[name=role]:checked').value

*/