function makePost() {
    axios.request ({
        method : "POST",
        url : "https://jsonplaceholder.typicode.com/posts",
        data : {
            id : '',
            title : 'My Awesome post',
            body : document.getElementById('makePost'.value)
        }
    }).then(madePost).catch(failedPost)
}

function madePost(response) {
    console.log(response);
    console.log(response.data);
    document.getElementById('itWorked').innerText = 'Made Post !!'
}

function failedPost(error) {
    console.log(error);
}

document.getElementById("submitButton").addEventListener('click', makePost);


function patchPost() {
    axios.request ({
        method : "PATCH",
        url : 'https://jsonplaceholder.typicode.com/posts/1',
        data : {
            userId : '2000',
            title : 'My Awesome post',
            body : document.getElementById('makePost'.value)
        }
    }).then(madePatch).catch(failedPatch)
}

function madePatch(response) {
    console.log(response);
    console.log(response.data);
}

function failedPatch(error) {
    console.log(error);
}

document.getElementById("submitButton").addEventListener('click', patchPost);

function deletePost() {
    axios.request ({
        method : "DELETE",
        url : 'https://jsonplaceholder.typicode.com/posts/1',
        data : {
            id : '2000',
            title : 'My Awesome post',
            body : document.getElementById('makePost'.value)
        }
    }).then(deletedPatch).catch(failedDelete)
}

function deletedPatch(response) {
    console.log(response);
    console.log(response.data);
}

function failedDelete(error) {
    console.log(error);
}

document.getElementById("submitButton").addEventListener('click', deletePost);


function getPosts() {
    axios.request ({
        method : "GET",
        url : "https://jsonplaceholder.typicode.com/posts",
    }).then(gettingPost).catch(failedGettingPost)
}

function gettingPost(response) {
    console.log(response);
    console.log(response.data);
    document.getElementById('itWorked').innerText.value
}

function failedGettingPost(error) {
    console.log(error);
}

document.getElementById("submitButton").addEventListener('click', getPosts);