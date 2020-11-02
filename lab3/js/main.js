//1 task
button.onclick = function ()
{
    swapBlock('header div', '#cell-5')
};
//2 task
document.querySelector('#cell-1 img').onclick = function ()
{
    const radius = 100;
    document.querySelector('#last').textContent += ' S of circle  = ' + areaOfCircle(radius);
};
//3 task
document.querySelector('#form-min-digit').onsubmit = function (event)
{
    event.preventDefault();
    let mindigit = min(document.querySelector('#form-min-digit > input[name="to-find-min-digit"]').value);
    document.cookie = 'min-digit=' + mindigit;
    document.querySelector('#form-min-digit').reset();
    alert("Min digit = " + mindigit);
}
window.addEventListener('load', function ()
{
    if (getCookie('min-digit')) {
        document.querySelector('#form-min-digit').style = "display:none;";
        setTimeout(() => {
            if (confirm(getCookie('min-digit') + "\nAfter clicking \"OK\" cookies will be deleted")) {
                document.cookie = 'min-digit=' + getCookie('min-digit') + '; max-age=0';
                alert('Cookies were removed');
                location.reload()
            }
        }, 100);
    }
})
//4 task
loadTextColor('text-color');
document.getElementById('form-text-color').onsubmit = function (event) {
    event.preventDefault();
    let textColor = document.querySelector('#form-text-color > input[name="text-color"]').value;
    localStorage.setItem('text-color', textColor);
    loadTextColor('text-color');
}
//5 task
document.getElementById('select').onselect = function ()
{
    alert("You selected some text!");
}
//6 task
document.addEventListener('DOMContentLoaded', () => {
    makeEditableBlock('cell-1-c');
    makeEditableBlock('cell-2-c');
    makeEditableBlock('cell-3-c');
    makeEditableBlock('cell-4-c');
    makeEditableBlock('cell-5-c');
    initEditableBlocks();
})
//REALIZATION
//1 task
function swapBlock(header, cell5) {
    let temp = document.querySelector(header).innerHTML;
    document.querySelector(header).innerHTML = document.querySelector(cell5).innerHTML;
    document.querySelector(cell5).innerHTML = temp;
}
//2 task
function areaOfCircle(radius) {
    return Math.PI * (radius * radius);
}
//3 task
function min(num) {
    let n = num.split('');
    return Math.min.apply(Math,n);
}
function getCookie(name) {
    let cookies = document.cookie.split(';');
    for (let i = 0; i < cookies.length; i++)
        if (cookies[i].trim().split('=')[0] == name)
            return cookies[i].trim().split('=')[1];
    return null;
}
//4 task
function changeTextColor(color)
{
    document.getElementById("cell-5").style.color = color;
}
function loadTextColor(localStorageKey)
{
    if (localStorage.getItem(localStorageKey))
    {
        changeTextColor(localStorage.getItem(localStorageKey));
        document.querySelector('#form-text-color > input[name="text-color"]').value = localStorage.getItem(localStorageKey);
    }
}
//6 task
const initEditableBlocks = () => {
    Array.from(document.getElementsByClassName('editArea')).map((area) => {
        area.addEventListener('change', (event) => {
            const newContent = event.target.value;
            if (isValidHTML(newContent)) {
                localStorage.setItem(`${event.target.parentNode.id}-c`, newContent);
                event.target.parentNode.children[0].innerHTML = newContent;
            }
            else {
                localStorage.removeItem(`${event.target.parentNode.id}-c`);
                document.location.reload();
            }
        })
    })
    Array.from(document.getElementsByClassName('editBtn')).map((btn) => {
        btn.addEventListener('click', (event) => {
            localStorage.removeItem(`${event.target.parentNode.id}-c`);
            document.location.reload();
        })
    })
}
const makeEditableBlock = (blockId) => {
    const content = localStorage.getItem(`${blockId}-c`) ?
        localStorage.getItem(`${blockId}-c`) :
        document.getElementById(blockId).innerHTML;
    document.getElementById(blockId).innerHTML = content;
    document.getElementById(blockId).insertAdjacentHTML('beforeend',
        `<textarea class="editArea">${content}</textarea>
  <button type="submit" class="editBtn">Return</button>`)
}
const isValidHTML = (html) => {
    const doc = document.createElement('div');
    doc.innerHTML = html;
    return doc.innerHTML === html;
};
