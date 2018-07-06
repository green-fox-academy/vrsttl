'use strict';

let http = new XMLHttpRequest();
http.open('GET', 'http://localhost:3000/posts', true);
http.onload = () => {
    const response = JSON.parse(http.responseText);
    const table = document.querySelector('table');
    let modifyForm = document.querySelector('.modify-form');
    let submitForm = document.querySelector('.submit-form');
    let nickname = document.querySelector('.nickname');
    let newContent = document.querySelector('#new-content');
    let newUrl = document.querySelector('#new-url');
    const submitLink = document.querySelector('.submit-link');
    modifyForm.style.display = "none";
    submitForm.style.display = "none";
    submitLink.addEventListener('click', (e) =>{
        submitForm.style.display = 'initial';
    });
    modifyForm.addEventListener('submit', (e) => {
        e.preventDefault();
    });
    submitForm.addEventListener('submit', (e) => {
        e.preventDefault();
    });
    modifyForm.addEventListener('submit', () => {
        let submit = new XMLHttpRequest();
        submit.open('PUT', `http://localhost:3000/posts/${hiddenFormTextBox.value}`, true);
        submit.setRequestHeader('Content-Type', 'application/json');
        submit.onload = () => {
            let responseModifySubmit = JSON.parse(submit.responseText);
            console.log(responseModifySubmit);
            let newTitleAfterModify = document.querySelector(`.titleIdForDom${hiddenFormTextBox.value}`);
            newTitleAfterModify.innerHTML = modifyPostTextBox.value;
            let newUrlAfterModify = document.querySelector(`.urlIdForDom${hiddenFormTextBox.value}`);
            newUrlAfterModify.innerHTML = modifyURLTextBox.value;
            modifyPostTextBox.value = '';
            modifyURLTextBox.value = '';
            hiddenFormTextBox.value = '';
            modifyForm.style.display = "none";

        }
        submit.send(JSON.stringify({
            title: modifyPostTextBox.value,
            url: modifyURLTextBox.value,
            owner: hiddenFormTextBox.value
        }));
    });

    submitForm.addEventListener('submit', () => {
        let submit = new XMLHttpRequest();
        submit.open('POST', `http://localhost:3000/posts/`, true);
        submit.setRequestHeader('Content-Type', 'application/json');
        submit.onload = () => {
            let responseSubmit = JSON.parse(submit.responseText);
            console.log(responseSubmit);
            createTableRows(responseSubmit.rows[0], 0);
            newContent.value = '';
            newUrl.value = '';
            nickname.value = '';
            submitForm.style.display = "none";
        }
        submit.send(JSON.stringify({
            title: newContent.value,
            url: newUrl.value,
            owner: nickname.value
        }));
    });

    let modifyPostTextBox = document.querySelector('#content');
    let modifyURLTextBox = document.querySelector('#url');
    let hiddenFormTextBox = document.querySelector('.hidden');

    console.log(response);

    function createTableRows(element, index) {
        let tableRow = document.createElement('tr');
        let rowDiv = document.createElement('div');
        rowDiv.classList.add('row-div');
        table.appendChild(tableRow);
        tableRow.appendChild(rowDiv);
        let titleCell = document.createElement('td');
        let sqlId = document.createElement('div');
        sqlId.innerText = element.id;
        sqlId.style.display = 'none';
        sqlId.classList.add(`idForDom${element.id}`);
        sqlId.classList.add('sqlidnumber');
        table.appendChild(sqlId);
        console.log(sqlId);
        titleCell.innerHTML = element.title;
        titleCell.classList.add(`titleIdForDom${element.id}`);
        rowDiv.appendChild(titleCell);
        let urlCell = document.createElement('td');
        let urlLink = document.createElement('a');
        urlLink.href=element.URL;
        urlLink.innerHTML = element.URL;
        urlCell.appendChild(urlLink);
        urlCell.classList.add(`urlIdForDom${element.id}`);
        rowDiv.appendChild(urlCell);
        let ownerCell = document.createElement('td');
        ownerCell.innerHTML = element.owner;
        ownerCell.classList.add(`ownerIdForDom${element.id}`);
        rowDiv.appendChild(ownerCell);
        let scoreCell = document.createElement('td');
        scoreCell.innerHTML = element.score;
        scoreCell.classList.add(`scorecard-sc${index}`);
        scoreCell.classList.add(`scoreIdForDom${element.id}`);
        rowDiv.appendChild(scoreCell);
        //let upVoteCell = document.createElement('td');
        let buttonDiv = document.createElement('div');
        buttonDiv.classList.add('buttondiv');
        rowDiv.appendChild(buttonDiv);
        let upVoteButton = document.createElement('button');
        upVoteButton.classList.add('up');
        //upVoteButton.innerText = '+1';
        buttonDiv.appendChild(upVoteButton);
        //tableRow.appendChild(upVoteCell);
        //let downVoteCell = document.createElement('td');
        let downVoteButton = document.createElement('button');
        downVoteButton.classList.add('down');
        //downVoteButton.innerText = '-1';
        buttonDiv.appendChild(downVoteButton);
        //tableRow.appendChild(downVoteCell);
        let modify = document.createElement('a');
        modify.classList.add('modify-button');
        modify.innerHTML = 'Modify';
        modify.id = element.id;
        modify.title = element.title;
        modify.name = element.URL;
        modify.addEventListener('click', () => {
            modifyForm.style.display = "initial";
            modifyPostTextBox.value = modify.title;
            modifyURLTextBox.value = modify.name;
            hiddenFormTextBox.value = modify.id;
        });
        rowDiv.appendChild(modify);
        let deletePost = document.createElement('a');
        deletePost.classList.add('delete');
        deletePost.innerHTML = 'Delete';
        deletePost.addEventListener('click', () => {
            let submit = new XMLHttpRequest();
            submit.open('DELETE', `http://localhost:3000/posts/${element.id}`, true);
            submit.setRequestHeader('Content-Type', 'application/json');
            submit.send(JSON.stringify({
                id: element.id
            }));
        });
        rowDiv.appendChild(deletePost);
    }

    function getPosts(fromSQL) {
        table.innerHTML = '';
        fromSQL.posts.forEach((element, index) => {
            createTableRows(element, index);
        });
    }


    getPosts(response);
    const modifyButtons = document.querySelectorAll('.modify-button');
    console.log(modifyButtons);

    let upButtons = document.querySelectorAll('.up');
    let downButtons = document.querySelectorAll('.down');
    let sqlIds = document.querySelectorAll('.sqlidnumber');

    function upVoteGenerator() {
        upButtons.forEach((element, index) => {
            element.addEventListener('click', () => {
                let updateConn = new XMLHttpRequest();
                updateConn.open('PUT', `http://localhost:3000/posts/${sqlIds[index].innerText}/upvote`, true);
                updateConn.setRequestHeader('Content-Type', 'application/json');
                updateConn.send(JSON.stringify({
                    vote: 1
                }));
                let scoreInner = document.querySelector(`.scorecard-sc${index}`);
                scoreInner.innerText = parseInt(scoreInner.innerText) + 1;
            });
        });
    }
    upVoteGenerator();
    function downVoteGenerator() {
        downButtons.forEach((element, index) => {
            element.addEventListener('click', () => {
                let updateConn = new XMLHttpRequest();
                updateConn.open('PUT', `http://localhost:3000/posts/${sqlIds[index].innerText}/downvote`, true);
                updateConn.setRequestHeader('Content-Type', 'application/json');
                updateConn.send(JSON.stringify({
                    vote: -1
                }));
                let scoreInner = document.querySelector(`.scorecard-sc${index}`);
                scoreInner.innerText = parseInt(scoreInner.innerText) - 1;
            });
        });
    }
    downVoteGenerator();
}
http.send();