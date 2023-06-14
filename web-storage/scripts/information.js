const greeting = document.getElementById('greetingMessage')
const loremP = document.getElementById('loremMessage')
const logOutBtn = document.getElementById('logOutBtn');

greeting.innerHTML = `${localStorage.getItem('role')} ${localStorage.getItem('name')}`

if (greeting.innerHTML.includes('Student')) {
    loremP.classList.add('student-text')
} else if (greeting.innerHTML.includes('Instructor')) {
    loremP.classList.add('instructor-text')
}

logOutBtn.addEventListener('click', () => {
    localStorage.removeItem('name')
    localStorage.removeItem('role')

    window.location.href = './index.html'
})