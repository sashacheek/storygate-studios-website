/* <section class="comment">
    <h4>Sasha Cheek [Dev]</h4>
    <p class="para-comment">
        Hello, and welcome to the forums! Share any messages you want us here at StoryGate Studios to see.
    </p>
</section> */

function makeComment() {
    let username = document.getElementById("name").value;
    let comment = document.getElementById("msg").value;

    console.log(username);
    console.log(comment);

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


let postButton = document.getElementById("post-button");

postButton.addEventListener("click", makeComment);