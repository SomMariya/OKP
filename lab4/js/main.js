
//1 task
async function changeContent(contentBlocksName, delay = 0) {
    let blocks = [];
    contentBlocksName.forEach(block => {
        blocks.push(document.querySelector(block).innerHTML);
    });
    for (let i = 0; i < blocks.length - 1; i++) {
        await sleep(delay);
        document.querySelector(contentBlocksName[i + 1]).innerHTML = blocks[i];
    }
    await sleep(delay);
    document.querySelector(contentBlocksName[0]).innerHTML = blocks[blocks.length - 1];
}
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
//2 task(1)
function ChangeFontWeight(delay) {

    setInterval(() => {
        var blockContent = document.getElementById('cell-4');
        blockContent.style.fontWeight == 'bold' ? blockContent.style.fontWeight = 'normal' : blockContent.style.fontWeight = 'bold';
    }, delay);
}
//2 task(2)
function ChangeAlign1(blockid, delay = 0) {
    setTimeout(() => {
        var blockContent = document.getElementById(blockid);
        blockContent.style.textAlign == 'right' ? blockContent.style.textAlign = 'left' : blockContent.style.textAlign = 'right';
    }, delay);
}
function ChangeAlign2(blockid, delay = 0) {
    setTimeout(() => {
        var blockContent = document.getElementById(blockid);
        blockContent.style.textAlign == 'left' ? blockContent.style.textAlign = 'right' : blockContent.style.textAlign = 'left';
    }, delay);
}
//3 task
function CreateGitForm(blockName) {
    let GitForm = document.createElement("form");
    GitForm.id = 'Git-form';

    let Username = document.createElement("input");
    Username.setAttribute('type', "text");
    Username.setAttribute('name', "username");
    Username.setAttribute('placeholder', "Username");
    Username.setAttribute('required', true);

    let RepName = document.createElement("input");
    RepName.setAttribute('type', "text");
    RepName.setAttribute('name', "repository-name");
    RepName.setAttribute('placeholder', "Repository name");
    RepName.setAttribute('required', true);

    let SubmitButton = document.createElement("button");
    SubmitButton.setAttribute('type', "submit");
    SubmitButton.textContent = "Get commits";
    SubmitButton.style = 'background-color: cadetblue; font-weight: 700; border: 1px solid black';

    GitForm.append(Username);
    GitForm.append(RepName);
    GitForm.append(SubmitButton);

    document.querySelector(blockName).append(GitForm);
}
async function ShowCommits(blockName) {
    let Username = document.querySelector('#Git-form > input[name="username"]').value;
    let RepName = document.querySelector('#Git-form > input[name="repository-name"]').value;

    let response = await fetch(`https://api.github.com/repos/${Username}/${RepName}/commits`);

    let divElement = document.createElement('div');
    divElement.id = "commits-content";
    divElement.style.height = "15%";
    divElement.style.overflow = "auto";

    let ulElement = document.createElement('ul');
    if (response.ok) {
        response.json().then(data => data.forEach(c => {
            let li = document.createElement('li');
            li.textContent = `${c.commit.author.name} : ${c.commit.message}`;
            ulElement.append(li);
        }));
        divElement.append(ulElement);
    }
    else {
        let pElement = document.createElement('p');
        pElement.textContent = `Error : ${response.status}(${response.statusText})`;
        pElement.style = 'display:border-box; color: red; font-weight: bold; padding = 1em; ';
        divElement.append(pElement);
    }
    document.querySelector(blockName).appendChild(divElement);
}
//4 task
function function1() {
    //function1
}
async function function2() {
    await sleep(4000);
}
async function TakeCallBacks(function1, function2) {
    await function1();
    console.log("function1 has worked");
    await function2();
    console.log("function2 has worked");
}
//5 task
function CreateSortForm(blockName) {
    let form = document.createElement("form");
    form.id = 'Sort-form';

    let listOfValues = document.createElement("input");
    listOfValues.setAttribute('type', "text");
    listOfValues.setAttribute('name', "list-of-values");
    listOfValues.setAttribute('placeholder', "List of values");
    listOfValues.setAttribute('required', true);

    let Submit = document.createElement("button");
    Submit.setAttribute('type', "submit");
    Submit.textContent = "Sort";

    form.append(listOfValues);
    form.append(Submit);

    document.querySelector(blockName).append(form);
}
function SelectionSort(arr) {
    let length = arr.length;
    for (let i = 0; i < length; i++)
    {
        let min = i;
        for (let j = i + 1; j < length; j++)
        {
            if (arr[min] > arr[j]) { min = j;}
        }
        if (min !== i)
        {
            let temp = arr[i];
            arr[i] = arr[min];
            arr[min] = temp;
        }
    }
    return arr;
}

//REALIZATION
CreateGitForm('#cell-5');
CreateSortForm('#cell-3')
//1 task
changeContent(['#cell-2', '#cell-4', '#cell-5'], 5000);

//2 task(1)
ChangeFontWeight(5000);

//2 task(2)
document.getElementById("select").onselect = function () {
    alert("You selected some text!");
    ChangeAlign1("fText", 5000);
    ChangeAlign2("hText", 5000);
}

//3 task
document.addEventListener('submit', function (event) {
    if (event?.target.id == 'Git-form') {
        event.preventDefault();
        if (document.querySelector('#commits-content')) {
            document.querySelector('#commits-content').remove();
        }
        ShowCommits('#' + document.querySelector('#Git-form').parentNode.id);
        document.querySelector('#Git-form').reset();
    }
    //5 task
    if (event?.target.id == 'Sort-form') {
        event.preventDefault();
        if (document.querySelector('#sort-content')) {
            document.querySelector('#sort-content').remove();
        }
        ShowSortListOfValues();
        document.querySelector('#Sort-form').reset();
    }
});

//4 task
TakeCallBacks(function1, function2);

//5 task
function ShowSortListOfValues() {
    let listOfValues = document.querySelector('#Sort-form > input[name="list-of-values"]').value;
    let regex = /\d+/g
    let matches = listOfValues.match(regex);
    if (matches != null) {
        let valueList = matches.map(Number);
        console.log('Input list of values:');
        console.log(valueList.slice());
        console.log('Sorted list of values:')
        console.log(SelectionSort(valueList));
    }
    else
        console.log("Error: there`re no values in a list");
}
