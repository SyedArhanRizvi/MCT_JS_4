// Selecting each 'Reply' button in separate variables
const replyButton1 = document.querySelector('.cT1 .details button');
const replyButton2 = document.querySelector('.cT2 .details button');
const replyButton3 = document.querySelector('.cT3 .details button');

let oA1 = document.querySelector(".outputA1");
let oA2 = document.querySelector(".outputA2");
let oA3 = document.querySelector(".outputA3");


// User Post Handler ::
const postUsersComment = (username, comment, pDiv) => {
    pDiv.style.display = "none";

    const div = document.createElement("div");
    div.className = "userComment";

    const imgDiv = document.createElement("div");
    imgDiv.className = "img";
    const img = document.createElement("img");
    img.src = "https://th.bing.com/th/id/R.7f74cdafb3416c87fcf605e66f4c12fd?rik=20zeF75LZuhQ7Q&riu=http%3a%2f%2fwww.thefamouspeople.com%2fprofiles%2fimages%2felon-musk-1.jpg&ehk=bGWEbcsdoxqEEwaNuveQSXmdQ1%2b%2bOFWRbnwdiGtgLoM%3d&risl=&pid=ImgRaw&r=0";
    imgDiv.append(img);

    const detailsDiv = document.createElement("div");
    detailsDiv.className = "commentDetails";
    const usernameI = document.createElement("h3");
    usernameI.textContent = username;
    const commentInput = document.createElement("p");
    commentInput.textContent = comment;
    const deleteBtn = document.createElement("button");
    const editBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.className = "deletebtn";
    editBtn.textContent = "Edit";
    editBtn.className = "editBtn";

    detailsDiv.append(usernameI);
    detailsDiv.append(commentInput);
    detailsDiv.append(deleteBtn);
    detailsDiv.append(editBtn);

    div.append(imgDiv);
    div.append(detailsDiv);
    oA1.append(div);
}


// Optionally, you can test them by adding event listeners
replyButton1.addEventListener('click', () => {
    const div = document.createElement("div");
    div.className = "inputFOA1";

    const imgDiv = document.createElement("div");
    imgDiv.className = "img";
    const img = document.createElement("img");
    imgDiv.append(img);

    const detailsDiv = document.createElement("div");
    const usernameI = document.createElement("input");
    usernameI.placeholder = "@username";
    const commentInput = document.createElement("textarea");

    const btn = document.createElement("button");
    btn.textContent = "Post";
    btn.className = "replyBtn";

    const cancelBtn = document.createElement("button");
    cancelBtn.textContent = "Cancel";
    cancelBtn.className = "cancelBtn";

    commentInput.className = "iForC";
    commentInput.placeholder = "Enter Your Comment here..";

    detailsDiv.className = "details";

    detailsDiv.append(usernameI);
    detailsDiv.append(commentInput);
    detailsDiv.append(btn);
    detailsDiv.append(cancelBtn);
    div.append(imgDiv);
    div.append(detailsDiv);
    oA1.append(div);

    let username;
    let comment;

    usernameI.addEventListener("change", (e) => {
        username = e.target.value;
    });
    commentInput.addEventListener("change", (e) => {
        comment = e.target.value;
    });

    btn.addEventListener("click", () => {
        if (username && comment) {
            postUsersComment(username, comment, div);
        }
    }); // Closing the event listener properly
});
