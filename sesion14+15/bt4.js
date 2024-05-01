"use strict";
class User {
    constructor(id) {
        this.id = id;
        this.post = [];
        this.folowers = [];
    }
    createPost(item) {
        this.post.push(item);
    }
    comment(item) {
        this.post.push(`comment :${item.content}`);
    }
    follow(item) {
        this.folowers.push(item);
    }
    likePost(item = 1) {
        this.post.push(`like = ${item} `);
    }
    viewFeed(item) {
        this.folowers.forEach(element => {
            console.log(element);
        });
    }
}
class Post {
    constructor(id, userId, content) {
        this.id = id;
        this.like = [];
        this.comment = [];
        this.userId = userId;
        this.content = content;
    }
    addLike(item) {
        this.like.push(item);
    }
    addComment(item) {
        this.comment.push(`${item}`);
    }
}
class comment {
    constructor(id, userId, content) {
        this.id = id;
        this.userId = userId;
        this.content = content;
        this.replies = [];
    }
}
