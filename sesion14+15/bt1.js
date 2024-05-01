"use strict";
class Studentt {
    constructor(id, name, enrolledCourses) {
        this.id = id;
        this.name = name;
        this.enrolledCourses = [];
    }
}
class Instructor {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    createCourse(item) {
    }
    createLesson(item) {
    }
    createAsignment(item) {
    }
    createAssesment(item) {
    }
}
class Course {
    constructor(title, instructor, lessons, assesment) {
        this.title = [];
        this.instructor = [];
        this.lessons = [];
        this.assesment = [];
    }
}
class lesson {
    constructor(title, asognments) {
        this.title = title;
        this.asignments = [];
    }
}
