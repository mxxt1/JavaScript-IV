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

const personJohn = new Person({
    name: 'john',
    location: 'bedrock',
    age: 37,
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: "Don't forget the homies"
});

const personJack = new Person({
    name: 'Jack',
    location: 'New York',
    age: 45,
    favLanguage: 'Perl',
    specialty: 'Back-End',
    catchPhrase: "Wherever your go, there you are"
});

const personMike = new Person({
    name: 'Mike',
    location: 'Atlanta',
    age: 27,
    favLanguage: 'JavaScript',
    specialty: 'Design',
    catchPhrase: "I... like design"
});

class Instructor extends Person{
    constructor(obj){
        super(obj);
        this.specialty = obj.specialty;
        this.favLanguage = obj.favLanguage;
        this.catchPhrase = obj.catchPhrase;
    }
    demo(subject){
        return `Today we are learning about ${subject}`
    }
    grade(obj, subject){
        return `${obj.name} receives a perfect score on ${subject}.`;
    }
    addSubPoints(studentObj){
        let originalGrade = studentObj.grade;
        console.log(originalGrade);
        let randomNum = (Math.floor(Math.random()*25)+1)*(Math.round(Math.random())*2-1);
        console.log(randomNum);
        return studentObj.grade += randomNum; 
        // return `Old Grade: ${originalGrade}, New Grade: ${studentObj.grade}`;
    }
}


const instructorSusan = new Instructor({
    name: 'Susan',
    location: 'Detroit',
    age: 82,
    favLanguage: 'C',
    specialty: 'Dev-ops',
    catchPhrase: "Shazam!",
    subject: "responsive design"
});

const instructorJane = new Instructor({
    name: 'Jane',
    location: 'Buffalo',
    age: 45,
    favLanguage: 'Perl',
    specialty: 'Back-End',
    catchPhrase: "Wherever your go, there you are",
    subject: "html5"
});

const instructorJen = new Instructor({
    name: 'Jen',
    location: 'Boston',
    age: 27,
    favLanguage: 'JavaScript',
    specialty: 'Design',
    catchPhrase: "I... like design",
    subject: "CSS"
});


class Students extends Person{
    constructor(obj){
     super(obj);
     this.previousBackground = obj.previousBackground;
     this.classname = obj.classname;   
     this.favSubjects = obj.favSubjects 
     this.grade = obj.grade;
    }
    listsSubjects(){
        for (let i=0;i<this.favSubjects.length;i++){
            console.log(this.favSubjects[i]);
        }
        
    }
    PRAssignement(subject){
        console.log(`${this.name} has submitted a PR for ${subject}`);
    }
    sprintChallenge(subject){
        return console.log(`${this.name} has begun sprint challenge on ${subject}.`);
    }
    graduate(){
        if (this.grade >= 70){
            return `${this.name} is eligible to graduate!`;
        } else {
            return `${this.name} is ineligible for graduation.`;
        }
    }
}

// console.log(studentMoe.listsSubjects());

const studentMoe = new Students({
    name: 'Moe',
    location: 'bedrock',
    age: 23,
    favLanguage: 'Java',
    specialty: 'Data Science',
    catchPhrase: "Greed is good",
    previousBackground: 'Medicine',
    classname: 'cs15',
    favSubjects: ['math','programming'],
    grade: 90
});

const studentJill = new Students({
    name: 'Jill',
    location: 'Sacramento',
    age: 45,
    favLanguage: 'Perl',
    specialty: 'Back-End',
    catchPhrase: "Wherever your go, there you are",
    previousBackground: 'Mechanical Eng',
    classname: 'ME35',
    favSubjects: ['math','programming'],
    grade: 82
});

const studentRyan = new Students({
    name: 'Ryan',
    location: 'Atlanta',
    age: 27,
    favLanguage: 'JavaScript',
    specialty: 'Design',
    catchPhrase: "I... like design",
    previousBackground: 'Sociology',
    classname: 'cs325',
    favSubjects: ['math','programming'],
    grade: 60
});


class ProjectManagers extends Instructor{
    constructor(obj){
        super(obj);
        this.gradClassName = obj.gradClassName;       
    }
    standUp(channel){
        return console.log(`${this.name} announces to ${channel}. @${channel} standy times!`);
    }
    debugsCode(studentObj,subject){
        return console.log(`${this.name} debugs ${studentObj.name}'s code on ${subject}.`);
    }
}


const pMSusan = new ProjectManagers({
    name: 'Susan',
    location: 'Detroit',
    age: 82,
    favLanguage: 'C',
    specialty: 'Dev-ops',
    catchPhrase: "Shazam!",
    subject: "responsive design",
    gradClassName: "CS2019"
});

const pMJane = new ProjectManagers({
    name: 'Jane',
    location: 'Buffalo',
    age: 45,
    favLanguage: 'Perl',
    specialty: 'Back-End',
    catchPhrase: "Wherever your go, there you are",
    subject: "html5",
    gradClassName: "CS2019"
});

const pMJen = new ProjectManagers({
    name: 'Jen',
    location: 'Boston',
    age: 27,
    favLanguage: 'JavaScript',
    specialty: 'Design',
    catchPhrase: "I... like design",
    subject: "CSS",
    gradClassName: "CS2019"
});

console.log(personJack.speak());
console.log(instructorSusan.demo('test'));
console.log(instructorSusan.grade(studentMoe,'testSubject'));
studentMoe.listsSubjects();
studentMoe.PRAssignement('teststring');
studentJill.sprintChallenge('test subject');
pMJane.standUp('web23');
pMJane.debugsCode(studentJill,'python');
console.log(instructorJane.addSubPoints(studentJill));
console.log(studentJill.graduate());




