// CODE here for your Lambda Classes


class Person{
    constructor(obj){
        this.name = obj.name;
        this.age = obj.age;
        this.location = obj.location;
    }
    speak(){
        return `Hello my name is ${this.name}, I am from ${this.location}`;
    }
}

class Instructor extends Person{
    constructor(obj){
        super(obj);
        this.specialty = obj.specialty;
        this.favLanguage = obj.favLanguage;
        this.catchPhrase = obj.catchPhrase;
    }
    demo(subject){

    }
    grade(student){

    }
}

class Students extends Person{
    constructor(obj){
     super(obj);
     this.previousBackground = obj.previousBackground;
     this.classname = obj.classname;    
    }
    listsSubjects(){

    }
    PRAssignement(subject){

    }
    sprintChallenge(subject){

    }
}

class ProjectManagers extends Instructor{
    constructor(obj){
        super(obj);
        this.gradClassName = obj.gradClassName;       
    }
    standUp(name,channel){

    }
    debugsCode(){
        
    }
}