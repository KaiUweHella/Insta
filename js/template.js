function storiesHTML(i) {
  return /*html*/ `<div class="user-stories">
    <div class="profile-img-border">
      <img src="${user[i].profileImage}" alt="" />
    </div>
    <h5>${user[i].name}</h5>
  </div>
  `;
}

function postHTML(i) {
  return /*html*/ `
 <div class="user-post">
          <div class="profil-info">
            <div class="img-name">
              <img src="${user[i].profileImage}" alt="">
              <h5>${user[i].name}</h5>
            </div>
            <img class="icon-post" src="img/icons/ellipsis-solid.svg" alt="">
          </div>
          <img class="img-post" src="${user[i].posts[0].picture}" alt="">
          <div class="like-comment-section">
            <div class="like-comment-send-icon">
              <img onclick="like(${i})" src="img/icons/heart-crack-light.svg" alt="" id="like-icon${i}">
              <img onclick="dislike(${i})" src="img/icons/heart-filled.svg" alt="" id="like-icon-filled${i}" class="d-none">
              <img src="img/icons/comment-light.svg" alt="">
              <img src="img/icons/paper-plane-top-light.svg" alt="">
            </div>
            <img src="img/icons/bookmark-light.svg" alt="">
          </div>
          <p class="likes">Gefällt ${user[i].posts[0].likes} Mal</p>
          <p class="post-info"><span class="profil-name">${user[i].name} </span>${user[i].posts[0].description}</p>
          <div class="comments" id="comments${i}">
            
          </div>
          <div class="write-comment">
            <img src="img/icons/face-smile-light.svg" alt="">
            <input type="text" id="comment-value${i}" placeholder="Kommentieren ...">
            <button class="button" onclick="addComment(${i})">Posten</button>
          </div>
        </div>
 `;
}

function commentHTML(i, j) {
  return /*html*/ `
    <div class="comment">
    <p><span class="profil-name">${user[i].posts[0].comments[j].name} </span>${user[i].posts[0].comments[j].comment}</p>
    <img src="img/icons/heart-crack-light.svg" alt="">
    </div>
`;
}

function suggestionsHTML(i) {
  return /*html*/ ` 
    <div class="user-suggestion">
        <img src="${user[i].profileImage}" alt="">
        <div class="user-suggestion-info">
            <h5>${user[i].name}</h5>
            <span>Neu auf Instagram</span>
        </div>
        <button class="button-sm" onclick="addToFriends(${i})">Folgen</button>
    </div>
    `;
}

function uploadHTML() {
  return /*html*/ `
    <img src="img/icons/image-light.svg" alt="" />
    <p>Ziehe Fotos und Videos hierher</p>
    <button onclick="createPost()">Vom Computer auswählen</button>
  `;
}

function createPostHTML() {
  return /*html*/ `
    <textarea id="myComment" name="text" id="" cols="30" rows="10" placeholder="Kommentar schreiben"></textarea>
    <button onclick="myPost()">Beitrag teilen</button>
`;
}
