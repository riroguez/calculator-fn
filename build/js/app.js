const display = document.querySelector('.display');
const buttons = document.querySelectorAll('.btn');

buttons.forEach(button => button.addEventListener('click', () => {
    const buttonPressed = button.textContent;

    if(button.id === 'empty') {
        display.textContent = '0';
        return;
    }

    if(button.id === 'delete') {
        if(display.textContent.length === 1 || display.textContent === 'Error!') {
            display.textContent ='0';
        } else {
            display.textContent = display.textContent.slice(0, -1);
        }
        return;
    }

    if(button.id === 'equal') {
        try {
            display.textContent = eval(display.textContent); 
        } catch {
            display.textContent = 'Error!';
        }
        
        return;
    }

    if(display.textContent === '0' || display.textContent === 'Error!') {
        display.textContent = buttonPressed;
    } else {
        display.textContent += buttonPressed;
    }

}));


