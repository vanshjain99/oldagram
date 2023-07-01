const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]

let mainEl = document.getElementById("main-el")

function renderPost(){
    let postInMain = ""
    for(let i = 0; i<posts.length; i++){
        let currentPostObj = posts[i]
        let currentName = currentPostObj.name
        let currentUsername = currentPostObj.username
        let currentLocation = currentPostObj.location
        let currentAvatar = currentPostObj.avatar
        let currentPost = currentPostObj.post
        let currentComment = currentPostObj.comment
        let currentLikes = currentPostObj.likes
        let currentPostHtml = `
                <section class="post">
                    <div class="post-info-section">
                        <img class="post-info-avatar" src="${currentAvatar}" alt="avatar of the posted id">
                        <div class="post-info-text-section">
                            <p class="post-info-name">${currentName}</p>
                            <p class="post-info-location">${currentLocation}</p>
                        </div>
                    </div>
                    <div class="post-image-section">
                        <img class="post-image" src="${currentPost}" alt="posted picture">
                    </div>
                    <div class="post-body-section">
                        <div class="post-interaction-icons">
                            <img class="like-icon interaction-icon" alt="like" src="images/icon-heart.png" >
                            <img class="comment-icon interaction-icon" alt="comment" src="images/icon-comment.png">
                            <img class="share-icon interaction-icon" alt="share" src="images/icon-dm.png">
                        </div>
                        <p class="post-body-likes">${currentLikes}</p>
                        <div class="post-body-comment-section">
                            <p class="post-body-username">${currentUsername}</p>
                            <p class="post-body-comment">${currentComment}</p>
                        </div>
                    </div>
                </section>
        `
        postInMain += currentPostHtml

    }
    mainEl.innerHTML = postInMain
}

renderPost()