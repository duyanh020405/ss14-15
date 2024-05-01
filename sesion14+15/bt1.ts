class Studentt{
    id:number
    name:string
    enrolledCourses:any[]
    constructor(id:number,name:string,enrolledCourses:any[]){
        this.id=id
        this.name=name
        this.enrolledCourses=[]
    }
}
class Instructor{
    id:number
    name:string
    constructor(id:number,name:string){
        this.id=id
        this.name=name
    }
    createCourse(item:Course){
    }
    createLesson(item:lesson){
    }
    createAsignment(item:any[]){
    }
    createAssesment(item:any[]){

    }
}
class Course{
    title:any[] 
    instructor:any[]
    lessons:any[]
    assesment:any[]
    constructor(title:any[],instructor:any[],lessons:any[],assesment:any[]){
        this.title=[]
        this.instructor=[]
        this.lessons=[]
        this.assesment=[]
    }
}
class lesson{
    title:string
    asignments:any[]
    constructor(title:string,asognments:any[]){
        this.title=title
        this.asignments=[]
    }
}