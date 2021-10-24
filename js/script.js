// Makes a comment on the forums page
function makeComment() {
    let username = document.getElementById("name").value;
    let comment = document.getElementById("msg").value;

    // Checks if the inputted username is in the usernames array
    // If it is, is adds the comment.
    // Else, it sends an alert telling the user to create a username first.
    if (usernames.includes(username))
    {

        let usernameText = document.createTextNode(username);
        let commentText = document.createTextNode(comment);

        console.log(usernameText);

        let commentUsername = document.createElement("H4")
        commentUsername.appendChild(usernameText);
        
        let commentComment = document.createElement("p");
        commentComment.className = "para-comment";
        commentComment.appendChild(commentText);

        let commentSection = document.createElement("section");
        commentSection.className = "comment";

        commentSection.appendChild(commentUsername);
        commentSection.appendChild(commentComment);

        document.getElementById("forum-comments").appendChild(commentSection);
    }
    else {
        alert("Invalid username! Please create one first");
    }
}

// Adds the inputted username to the usernames array
function createUsername() {
    let newUsername = document.getElementById("give-name").value;
    usernames.push(newUsername);
}

let usernames = ["[Dev] Sasha Cheek"];

//Event listeners for both of the buttons to call the above functions
let postButton = document.getElementById("post-button");
postButton.addEventListener("click", makeComment);

let createButton = document.getElementById("create-username");
createButton.addEventListener("click", createUsername);