function render() {
  loadStories();
  loadFeed();
  loadSuggestion();
}

function loadFeed() {
  loadPosts();
  loadComments();
  loadMyComments();
}

function loadStories() {
  document.getElementById("stories").innerHTML = "";
  for (let i = 0; i < user.length; i++) {
    if (user[i].friend == true) {
      document.getElementById("stories").innerHTML += storiesHTML(i);
    }
  }
}

function loadPosts() {
  document.getElementById("posts").innerHTML = "";

  loadMyPost();

  for (let i = 0; i < user.length; i++) {
    if (user[i].friend == true) {
      if (user[i].posts != null) {
        document.getElementById("posts").innerHTML += postHTML(i);
        if (user[i].posts[0].iLike == true) {
          showLikes(i);
        }
      }
    }
  }
}

function loadMyPost() {
  for (let i = 0; i < user.length; i++) {
    if (user[i].friend == "me") {
      document.getElementById("posts").innerHTML += postHTML(i);
      if (user[i].posts[0].iLike == true) {
        showLikes(i);
      }
    }
  }
}

function loadComments() {
  for (let i = 0; i < user.length; i++) {
    if (user[i].friend == true) {
      if (user[i].posts != null) {
        for (let j = 0; j < user[i].posts[0].comments.length; j++) {
          document.getElementById(`comments${i}`).innerHTML += commentHTML(
            i,
            j
          );
        }
      }
    }
  }
}

function loadMyComments() {
  for (let i = 0; i < user.length; i++) {
    if (user[i].friend == "me") {
      for (let j = 0; j < user[i].posts[0].comments.length; j++) {
        document.getElementById(`comments${i}`).innerHTML += commentHTML(i, j);
      }
    }
  }
}

function loadSuggestion() {
  document.getElementById("suggestions").innerHTML = "";

  for (let i = 0; i < user.length; i++) {
    if (user[i].friend == false) {
      document.getElementById("suggestions").innerHTML += suggestionsHTML(i);
    }
  }
}

function addComment(i) {
  let comment = document.getElementById(`comment-value${i}`).value;
  let name = myAccount[0].name;

  if (comment <= 0) {
    alert("Bitte gebe einen Kommentar ein.");
  } else {
    user[i].posts[0].comments.push({ name: name, comment: comment });

    loadFeed();
  }
}

function showOverlay() {
  document.getElementById("overlay").classList.remove("d-none");
  document.getElementById("upload-img").innerHTML = uploadHTML();
}

function createPost() {
  document.getElementById("upload-img").innerHTML = createPostHTML();
}

function closeOverlay() {
  document.getElementById("overlay").classList.add("d-none");
}

function myPost() {
  let comment = document.getElementById("myComment").value;

  user.push({
    friend: "me",
    name: "jimmy",
    profileImage: "img/me/jimmy.jpg",
    posts: [
      {
        iLike: false,
        picture: "img/me/my_post.jpg",
        likes: 0,
        description: comment,
        comments: [],
      },
    ],
  });

  window.scrollTo({ top: 0, behavior: "smooth" });

  closeOverlay();
  loadFeed();
}

function addToFriends(i) {
  user[i].friend = true;
  loadStories();
  loadSuggestion();
}

function like(i) {
  user[i].posts[0].likes++;

  user[i].posts[0].iLike = true;

  loadFeed();
}

function showLikes(i) {
  document.getElementById(`like-icon${i}`).classList.add("d-none");
  document.getElementById(`like-icon-filled${i}`).classList.remove("d-none");
}

function dislike(i) {
  user[i].posts[0].likes--;

  user[i].posts[0].iLike = false;

  document.getElementById(`like-icon${i}`).classList.remove("d-none");
  document.getElementById(`like-icon-filled${i}`).classList.add("d-none");

  loadFeed();
}

function leftScroll() {
  let left = document.getElementById("stories");
  left.scrollLeft += 90;

  if (left.scrollLeft >= 0) {
    document.getElementById("scroll-right").classList.remove("d-none");
  }
}

function rightScroll() {
  let right = document.getElementById("stories");
  right.scrollLeft -= 90;

  if (right.scrollLeft <= 90) {
    document.getElementById("scroll-right").classList.add("d-none");
  }
}

function filterPosts() {
  let search = document.getElementById("search").value;
  search = search.toLowerCase();

  searchName(search);
}

function searchName(search){
  document.getElementById("posts").innerHTML = "";

  for (let i = 0; i < user.length; i++) {
    if (user[i].name.toLowerCase().includes(search)) {
      if (user[i].friend == true) {
        if (user[i].posts != null) {
          document.getElementById("posts").innerHTML += postHTML(i);
          if (user[i].posts[0].iLike == true) {
            showLikes(i);
          }
        }
      }
    }
  }
}