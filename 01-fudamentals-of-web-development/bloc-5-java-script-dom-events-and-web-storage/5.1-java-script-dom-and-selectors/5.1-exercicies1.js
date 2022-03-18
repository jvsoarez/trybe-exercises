const header = document.getElementById('header-container');
header.style.backgroundColor = '#8fb9aa';

const emergencyTasks = document.getElementsByClassName('emergency-tasks');
emergencyTasks[0].style.backgroundColor = '#ed8975';


const noEmergencyTasks = document.getElementsByClassName('no-emergency-tasks')
noEmergencyTasks[0].style.backgroundColor = '#f2d096';

const tasksEmergency = document.querySelectorAll('.emergency-tasks h3');
tasksEmergency[0].style.backgroundColor = '#304d63'
tasksEmergency[1].style.backgroundColor = '#304d63'

const noTasksEmergency = document.querySelectorAll('.no-emergency-tasks h3');
noTasksEmergency[0].style.backgroundColor = '#304d63'
noTasksEmergency[1].style.backgroundColor = '#304d63'