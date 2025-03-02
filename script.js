const cardFooterBtnElem = document.querySelectorAll(".card-footer-btn");
const assignedTaskCountElem = document.getElementById("assigned-task-count");

const taskCountElem = document.getElementById('task-count')

const activityLogElem = document.querySelector('.status')

const clearHistoryBtnElem = document.querySelector('.clear-history-btn')

const dateNameElem = document.querySelector('.date-name')

const dateCurrentElem = document.querySelector('#date-current')

const themeBtnElem = document.getElementById('theme-btn')

const bodyElem = document.querySelector('body');


const cardDateElems = document.querySelectorAll('.card-date')
let activityLogEntry;


let completedTaskCount = parseInt(assignedTaskCountElem.textContent, 10);

let taskCount = parseInt(taskCountElem.textContent, 10);

cardFooterBtnElem.forEach(cardFooterBtn => {
    cardFooterBtn.addEventListener("click", () => {
        if (!cardFooterBtn.disabled && completedTaskCount > 0) {

            completedTaskFunc(cardFooterBtn)

            taskCountFunc()

            statusFunc(cardFooterBtn)

            
            if (completedTaskCount === 0) {
                alert('Board updated Successfully')
                alert('Congrats! You have completed all the current tasks')
            }
            else{
                alert('Board updated Successfully')
            }
        }

        
    });
});

const completedTaskFunc = (button) => {
    button.disabled = true;
    completedTaskCount--;
    assignedTaskCountElem.textContent = completedTaskCount;
}


const taskCountFunc = () => {
    taskCount++;
    taskCountElem.textContent = taskCount;
}

const statusFunc = (button) => {

        const now = new Date()

        const hours = now.getHours() % 12 || 12;

        const minutes = now.getMinutes().toString().padStart(2, '0')

        const seconds = now.getSeconds().toString().padStart(2, '0')

        const clockTime = now.getHours() >= 12 ? 'PM' : 'AM'

        const timeFormat = `${hours}:${minutes}:${seconds} ${clockTime}`


        const taskTitleElem = button.parentElement.parentElement;

    const taskTitle = taskTitleElem.querySelector('.card-title')

     activityLogEntry = document.createElement('p');

        activityLogEntry.textContent = `You have Complete The Task ${taskTitle.textContent} at ${timeFormat}`

        activityLogEntry.classList.add('activity')

        activityLogElem.prepend(activityLogEntry)
    
}


clearHistoryBtnElem.addEventListener('click', ()=> activityLogElem.innerHTML = '')


const dateFuncs = () => {
    const now = new Date()

    const day = now.getDay()

    let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    let shortDayName = days[day].slice(0,3)

    dateNameElem.textContent = `${shortDayName} ,`

    dateCurrentElem.textContent = now.toLocaleString('en-US', {month: 'short',
        day: 'numeric',
        year: 'numeric'
    }).replace(',', '');

    const date = now.getDate()
    const month = now.toLocaleString({month: 'long'});
    const year = now.getFullYear()

    const formattedDate = date < 10 ? `0${date}` : date;

    cardDateElems.forEach((cardDateElem) => {
        const day = now.getDate();
        const month = now.toLocaleString('en-US', { month: 'long' });
        const year = now.getFullYear();

        cardDateElem.textContent = `${day} ${month} ${year}`;
    });
}

dateFuncs()

themeBtnElem.addEventListener('click', ()=> {

    bodyElem.style.backgroundColor = `#${Math.floor(123456 + Math.random() * 987654)}`
})
