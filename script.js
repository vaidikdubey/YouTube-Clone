// Selecting necessary elements
var commentInput = document.querySelector(".writeCommentContainer input[type='text']");
var previousCommentsContainer = document.querySelector(".previousComments-Container");

// Function to add a new comment
function addComment(commentText) {
    // Create a new comment element
    var newComment = document.createElement("div");
    newComment.classList.add("previousComments", "d-flex");
    
    newComment.innerHTML = `
        <img class="channelIcon" src="./Images/myImg.jpeg" alt="">
        <div class="nameAndComment">
            <p>@NewUser</p>
            <p class="comment">${commentText}</p>
        </div>
    `;

    // Append the new comment to the container
    previousCommentsContainer.appendChild(newComment);
}

// Event listener for handling the enter key press
commentInput.addEventListener("keypress", function(event) {
    if (event.key === "Enter" && commentInput.value.trim() !== "") {
        addComment(commentInput.value.trim());
        commentInput.value = ""; // Clear the input field after adding the comment
    }
});

// Menu icon toggle functionality
var menuIcon = document.querySelector(".menu-icon");
var sidebar = document.querySelector(".sidebar");
var mainContainer = document.querySelector(".mainContainer");

menuIcon.onclick = function() {
    sidebar.classList.toggle("smaller-sidebar");
    mainContainer.classList.toggle("larger-mainContainer");
    console.log("Menu icon Clicked");
}
