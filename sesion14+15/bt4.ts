class User {
        id:Number
        post:any[]
        folowers:any[]
        constructor(id:number){
            this.id=id
            this.post=[]
            this.folowers=[]
        }
        createPost(item:Post){
            this.post.push(item)
        }
        comment(item:comment){
            this.post.push(`comment :${item.content}`)
        }
        follow(item:User){
            this.folowers.push(item)
        }
        likePost(item:number=1){
            this.post.push(`like = ${item} `)

        }
        viewFeed(item:User){
            this.folowers.forEach(element => {
                console.log(element);
            });
        }


}
class Post{
    id:number
    like:any[]
    comment:string[]
    userId:number
    content:string
    constructor(id:number,userId:number,content:string){
        this.id=id
        this.like=[]
        this.comment=[]
        this.userId=userId
        this.content=content
    }
    addLike(item:User){
        this.like.push(item)
    }
    addComment(item:comment){
        this.comment.push(`${item}`)
    }
}
class comment{
    id:number
    userId:number
    content:string
    replies:string[]
    constructor(id:number,userId:number,content:string){
        this.id=id
        this.userId=userId
        this.content=content
        this.replies=[]
    }

}