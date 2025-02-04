const test = document.getElementById("my-title");
test.innerText = 'Hallo javascript werkt';

const button = document.querySelector('button');
console.log(button);

button.addEventListener('click', validateForm);

function validateForm() {
  if (hasElementError('name') || hasElementError('email') || hasElementError('message')) {
    document.getElementById('form-error').style.display = 'block';
    document.getElementById('success-message').style.display = 'none';
  }
  else {
    document.getElementById('form-error').style.display = 'none';
    const name = document.getElementById('name').value;
    const success = document.getElementById('success-message');
    success.innerText = 'Beste ' + name + ', Uw bericht is verzonden!';
    success.style.display = 'block';
  }
}

window.addEventListener('scroll', doScrollFunctions);

function doScrollFunctions() {
  startAnimation('skillset', 'slide-in-left-to-right');
  startAnimation('work-experience', 'slide-in-right-to-left');
  startAnimation('contact', 'fade-in-slide-in');
  startAnimation('contact-form', 'top-slide-in');

  hideAfterScroll();
}


function startAnimation(id, classToBe) {
  const el = document.getElementById(id);

  if (el.getBoundingClientRect().top < window.innerHeight) {
    el.classList.add(classToBe);
  }
}

function hideAfterScroll() {
  if (window.scrollY > 0) {
    document.getElementById('header').classList.add('header-colored');
  } else {
    document.getElementById('header').classList.remove('header-colored');
  }
}

function hasElementError(elementId) {
  const element = document.getElementById(elementId).value;

  if (element === '' || element.length < 2) {
    document.getElementById('form-error').style.display = 'block';
    document.getElementById('success-message').style.display = 'none';
    return true;
  }

  return false;
}

let person = { // object
  name: 'Remco', // string
  dateOfBirth: new Date(1982, 7, 13), // date
  //age, // number
  hasWork: true // boolean
  //hobbies // array
};

window.onload = function () {
  console.log('website is geladen');
  person.age = calculateAge(person.dateOfBirth);
  setHobbies();

  console.log(person);

  writeHobbiesToConsole(person.hobbies);

  document.getElementById('year').innerText = new Date().getFullYear();

  checkLastVisit();
};

function checkLastVisit() {
  const lastVisit = getLocalStorage('lastVisit');

  if (lastVisit === null || lastVisit === undefined) {
    setLocalStorage('lastVisit', new Date());
    return;
  }
  // formateer de lastVisit naar een leesbare string
  const formattedLastVisit = new Date(lastVisit).toLocaleString('nl-NL', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
  });

  document.getElementById('last-visit').innerText = 'uw laatste bezoek was op: ' + formattedLastVisit;
  setLocalStorage('lastVisit', new Date());
}

function setLocalStorage(key, value) {
  localStorage.setItem(key, value);
}
function getLocalStorage(key) {
  return localStorage.getItem(key);
}


function calculateAge(dateOfBirth) {
  const currentDate = new Date();
  let age = currentDate.getFullYear() - dateOfBirth.getFullYear();
  // let age = 2025 - 1987 = 38
  const monthDifference = currentDate.getMonth() - dateOfBirth.getMonth();
  // monthDifference = 0 - 6 = -6
  const dayDifference = currentDate.getDate() - dateOfBirth.getDate();
  // dayDifference = 28 - 17 = 11

  if (monthDifference < 0 || (monthDifference === 0 && dayDifference < 0)) { } {
    age--;
    // age-- is hetzelfde als age = age - 1;
    // age++ is hetzelfde als age = age + 1;
    // age+= 5 is hetzelfde als age = age + 5;
    // person.name + age is hetzelfde als person.name + ' ' + age; dus het uit resultaat een string;
    // person + person is een error, want je kan geen objecten bij elkaar optellen. 
  }
  return age;

}
function setHobbies() {
  person.hobbies = ['gaming', 'animals', 'nature walks'];
}

function writeHobbiesToConsole(hobbies) {
  if (hobbies === undefined) {
    console.log('geen hobbies gevonden');
    return;
  }

  for (let i = 0; i < hobbies.lenght; i++) {
    const humanCounter = i + 1;
    console.log('hobby number ' + humanCounter + ' = ' + hobbies[i]);
  }
}