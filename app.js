const btn = document.getElementById('btn');
const text = document.getElementById('text');

// when button is pressed

btn.addEventListener('click', () => {
    text.focus(); //select the input text content
    text.select();
    document.execCommand('copy'); // copy content to clipboard

    const oldText = btn.innerHTML; // remember the button current text

    btn.innerHTML = 'copied'; // set the button text to 'copied'

    setTimeout(() => {   // after 2 sec. change it back
        btn.innerHTML = oldText;
    }, 2000);
});