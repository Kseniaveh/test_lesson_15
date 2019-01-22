let name = 'Ksenia';
    age = 20;
    subscription = true;

// функция уведомляет пользователя о том, что все проверки пройдены и вход разрешен
function notificationAccess() {
    alert('Hello!');
    console.log('Client allowed!')
};

function checkSubstraction() {
    if (subscription === true){
        alert('Login allowed!');
        notificationAccess();
    }
    else {
        alert('Buy substraction!');
    }
    
};

function checkAge() {
    if (age > 18){
        alert('Very cool:)');
        checkSubstraction();
    }
    else {
        alert ('You are small! Goodbye');
    }
};

checkAge();