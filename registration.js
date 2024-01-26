const inquirer = require('inquirer');

const user = {};

const registration = [
  {
    type: 'input',
    name: 'name',
    message: 'Введите ваше имя:',
  },
];

function registrationUser() {
  inquirer.prompt(registration).then((answers) => {
    Object.assign(user, answers);
    console.log(`${user.name}, добро пожаловать  в ...`);
  });
}

module.exports = registrationUser;
