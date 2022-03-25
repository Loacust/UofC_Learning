class Student{
    name: String;
    age: Number;
    gender:String;
    nationality: String;



constructor(name:String,age:Number,nationality:String) {
    var female: String;
    this.name= name;
    this.age= age;
    this.gender= female;
    this.nationality
}

getNationality(){
    console.log(this.nationality)
}
}

class Undergraduates extends Student{
        batch:number;
        constructor(name:String,age:Number,nationality:String,batch:number){
            super(name,age,nationality);
            this.batch =batch;
        }         
    }

interface Iundergrad{
    name: String;
    age: Number;
    gender:String;
    nationality: String;
    GPA:number;
}

class Undergraduate implements Iundergrad{
    name: String;
    age: Number;
    gender:String;
    nationality: String;
    GPA:number; 

    constructor(name:string,age:number,gender:string,nationality,GPA){
        this.name=name;
        this.age= age;
        this.gender=gender;
        this.nationality = nationality;
        this.GPA = GPA;
    }
    getNationality(){
        console.log(this.nationality);
    };
}
var myUndergraduate: Undergraduate = new Undergraduate("Simon",34, "female", "french", 4)
myUndergraduate.getNationality();