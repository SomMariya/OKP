
//1 task
async function changeContentWithDelay(contentBlocksNames, delay = 0) {
    let blocksHtml = [];
    contentBlocksNames.forEach(block => {
        blocksHtml.push(document.querySelector(block).innerHTML);
    });
    for (let index = 0; index < blocksHtml.length - 1; index++) {
        await sleep(delay);
        document.querySelector(contentBlocksNames[index + 1]).innerHTML = blocksHtml[index];
    }
    await sleep(delay);
    document.querySelector(contentBlocksNames[0]).innerHTML = blocksHtml[blocksHtml.length - 1];
}
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
//2 task
function addColorChangeWithDelay(delay) {

    setInterval(() => {
        let content = document.getElementById('cell-4');
        let contentstyle = getComputedStyle(content);
        contentstyle.fontWeight == 'bold' ? content.style.fontWeight = 'normal' : content.style.fontWeight = 'bold';
    }, delay);
}

//REALIZATION

//1 task
changeContentWithDelay(['#cell-2', '#cell-4', '#cell-5'], 5000);
//2 task
addColorChangeWithDelay(5000);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//5 task
document.getElementById('select').onselect = function () {
    alert("You selected some text!");
}