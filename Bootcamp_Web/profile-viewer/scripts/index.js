const COMMENTS_URL = 'https://jsonplaceholder.typicode.com/comments';

/**
 * @param {number} id 
 * @param {string} name 
 * @param {(ev: Event) => void} buttonClickHandler 
 */
function createCommentButton(id, name, buttonClickHandler) {
    const buttonDiv = document.createElement('div');
    buttonDiv.setAttribute('id', 'button-div-'+id);
    buttonDiv.setAttribute('class', 'button-div');

    const button = document.createElement('button');
    button.setAttribute('id', 'button-'+id);
    button.setAttribute('class', 'button');
    button.innerText = name;
    button.addEventListener('click', buttonClickHandler);

    buttonDiv.appendChild(button);
    return buttonDiv;
}

/**
 * @param {string} parent_id Parent container id
 */
async function createCommentButtonsContainer(parent_id) {
    try {
        const buttonsContainer = document.createElement('div');
        buttonsContainer.setAttribute('id', 'buttons-container');
        buttonsContainer.setAttribute('class', 'buttons-container');

        // fecth all comments and create button for each comment, and keep it inside buttonsContainer
        const comments = await fetchComments(COMMENTS_URL);

        for(const comment of comments) {
            const button = createCommentButton(comment.id, comment.name, (ev) => { 
                //open dialog box based on selection 
                removeProfileFromProfileContainer();
                createProfile(comment);
            });
            buttonsContainer.appendChild(button);
        }
        document.getElementById(parent_id).appendChild(buttonsContainer);
    } catch(error) {
        console.log(error);
    }
}

/**
 * @param {string} url 
 * @returns {Promise<[{postId: number, id: number, name: string, email: string, body: string}]>}
 */
function fetchComments(url) {
    return new Promise((resolve, reject) => {
        fetch(url)
        .then((response) => response.json())
        .then((comments) => {
            resolve(comments);
        }).catch((error) => {
            reject(error);
        });
    })
}

/**
 * @param {string} parent_id Parent container id
 */
function createProfileContainer(parent_id) {
    const profileContainer = document.createElement('div');
    profileContainer.setAttribute('id', 'profile-container');
    profileContainer.setAttribute('class', 'profile-container');
    document.getElementById(parent_id).appendChild(profileContainer);
}

/** @param {{postId: number, id: number, name: string, email: string, body: string}} comment  */
async function createProfile(comment) {
    const profileDiv = document.createElement('div');
    profileDiv.setAttribute('id', 'profile'+comment.id);
    profileDiv.setAttribute('class', 'profile');
    document.getElementById('profile-container').appendChild(profileDiv);

    const namediv = document.createElement('div');
    namediv.setAttribute('id', 'profile-name'+comment.id);
    namediv.setAttribute('class', 'profile-name');
    namediv.innerText = `Name: ${comment.name}`;
    profileDiv.appendChild(namediv);

    const emaildiv = document.createElement('div');
    emaildiv.setAttribute('id', 'profile-email'+comment.id);
    emaildiv.setAttribute('class', 'profile-email');
    emaildiv.innerText = `Email: ${comment.email}`;
    profileDiv.appendChild(emaildiv);

    const textdiv = document.createElement('div');
    textdiv.setAttribute('id', 'profile-text'+comment.id);
    textdiv.setAttribute('class', 'profile-text');
    textdiv.innerText = `${comment.body}`;
    profileDiv.appendChild(textdiv);
}

function removeProfileFromProfileContainer() {
    // document.getElementById('profile-container').innerHTML = null;
    const profileContainer = document.getElementById('profile-container');
    while(profileContainer.hasChildNodes()) {
        profileContainer.removeChild(profileContainer.firstChild);
    }
}


window.onload = function() {
    createCommentButtonsContainer('root').then(() => {
        createProfileContainer('root');
    });
}