// Now… (60 min)
// Create A Class named Person with Constructor (firstName , family,birthday,phoneNumber,nationalId,Gender,Address,Email)
// For creating an object from this class we should know about convention.
// lengdition of class’s attribute.
// So First Name should be greater than 2 characters and less than12 characters
// length of family should be greater than 6 characters and less than 15 characters
// phoneNumber should be 11 digits and should be starts with 09
// nationalId should be 10 digits
// Gender should be male or female
// Address should be in this Format : “Country=Iran&State=Isfahan&City=Isfahan&Alley=ShahidRajaee&Block=3” Use Object to Store Address.
// Email Should be in a correct Format


class Person {
    constructor(firstName , family,birthday,phoneNumber,nationalId,Gender,Address,Email){
        this._firstName = firstName;
        this._family = family;
        this._birthday = birthday;
        this._phoneNumber = phoneNumber;
        this._nationalId = nationalId;
        this._Gender = Gender;
        this._Address = Address;
        this._Email = Email;
    }

    static calAge(value) {
        let newDate = new Date().getFullYear() - new Date(value).getFullYear();
        return newDate;
    }

    set firstNAme (value) {
        if (value.length > 2 && value.length < 12) {
            this._firstNAme = value;
        }else {
            console.log('firstName should be greater than 2 characters and less than12 characters');
        }
    }
    get firstNAme() {
        return this._firstNAme;
    }

    set family (value) {
        if (value.length > 6 && value.length < 15) {
            this._family = value;
        }else {
            console.log('family should be greater than 6 characters and less than 15 characters');
        }
    }
    get family () {
        return this._family;
    }

    set phoneNumber (value) {
        let valueStr = value.toString();
        if (valueStr.length == 11 && valueStr.startsWith('09')) {
            this._phoneNumber = value;
        }else {
            console.log('phoneNumber should be 11 digits and should be starts with 09');
        }
    }
    get phoneNumber () {
        return this._phoneNumber;
    }

    set nationalId (value) {
        let valueStr = value.toString();
        if (valueStr.length === 10) {
            this._nationalId = value;
        }else {
            console.log('nationalId should be 10 digits');
        }
    }
    get nationalId () {
        return this._nationalId;
    }

    set Gender (value) {
        if (value === 'female' || value === 'male') {
            this._Gender = value;
        }else {
            console.log('Gender should be male or female');
        }
    }
    get Gender () {
        return this._Gender;
    }

    set Address (value) {
        if (value.includes('&') && value.includes('=')) {
            let obj = {};
            let valueSplited = value.split('&');
            valueSplited.map(str => {
                let arr = str.split('=');
                obj[arr[0]] = arr[1];
            })
            this._Address = obj;
        }

    }
    get Address () {
        return this._Address;
    }

    set Email(value){
        let valueStr = value.toString();
        if (valueStr.length > 5 && valueStr.length < 20 && valueStr.includes("@"))
            this.email = valueStr;
    }
    get Email(){
        return this.email;
    }
    

    set birthday(value) {
        let age = Person.calAge(value);
        console.log(age);
        if (age > 6 && age < 19) {
            this._birthday = new Date(value).toLocaleDateString();
        } else {
            console.log("the Age isn't between 6 and 19 ");
        }
    }
    get birthday() {
        return this._birthday;
    }

}
                                                
// let person = new Person('fateme','esm','1378/9/6','091212121212','12345678910','male','Country=Iran&State=Isfahan&City=Tehran&Alley=ShahidRajaee&Block=3','fateme@gmail.com');
// person.Address = 'Country=Iran&State=Isfahan&City=Tehran&Alley=ShahidRajaee&Block=3';
// console.log(person.Address);
// console.log(person.phoneNumber);
// person.phoneNumber = '09121111111';
// console.log(person.phoneNumber);
// console.log(person.birthday);











// Create A class Named Student That Extended From Person
// For creating an object from this class we should know about the condition of the class's attribute.
// So pay attention.
// Age Of Students should be greater than 6 and less than 19
// This class also has other attributes, including Grade. Father's name and father phoneNumber and schoolName class number and teacher name
// for Father's name and father phoneNumber and schoolName class number and teacher fullName you must write and Suitable setter. for example for phoneNumber
//  You should consider 11 digits for that or for schoolAddress you should consider this format “Country=Iran&State=Isfahan&City=Isfahan&Alley=ShahidRajaee&Block=3”
class Student extends Person {
    
    constructor(firstName,family,birthday,phoneNumber,nationalId,Gender,Address,Email, age, grade, fatherName, FatherPhoneNumber, schoolName, classNumber, teacherName, schoolAddress){
        super(firstName,family,birthday,phoneNumber,nationalId,Gender,Address,Email);
        this.age = age;
        this.grade = grade;
        this.fatherName = fatherName;
        this.FatherPhoneNumber = FatherPhoneNumber;
        this.schoolName = schoolName;
        this.classNumber = classNumber;
        this.teacherName = teacherName;
        this.schoolAddress = schoolAddress;
    }
    
    set age(value) {
        if (value < 19 && value > 6){
            this._age = value;
        }else {
            console.log('age Of Students should be greater than 6 and less than 19');
        }
    }
    get age() {
        return this._age;
    }

    set grade(value) {
        if (value > 0 && value < 20){
            this._grade = value;
        }else {
            console.log('grade should be greater than 0 and less than 20');
        }
    }
    get grade() {
        return this._grade;
    }

    set fatherName(value) {
        if (value.length > 2 && value.length < 12){
            this._fatherName = value;
        }else {
            console.log('FathersName should be greater than 2 characters and less than 12 characters');
        }
    }
    get fatherName() {
        return this._fatherName;
    }

    set FatherPhoneNumber(value) {
        if (value.length == 11 && value.startsWith('09')){
            this._FatherPhoneNumber = value;
        }else {
            console.log('FatherPhoneNumber should be 11 digits and should be starts with 09');
        }
    }
    get FatherPhoneNumber() {
        return this._FatherPhoneNumber;
    }

    set schoolName(value) {
        if (value.length > 2 && value.length < 12){
            this._schoolName = value;
        }else {
            console.log('schoolName should be greater than 2 characters and less than 12 characters');
        }
    }
    get schoolName() {
        return this._schoolName;
    }

    set classNumber(value) {
        if (value > 0 && value < 10){
            this._classNumber = value;
        }else {
            console.log('classNumber should be greater than 0 and less than 10');
        }
    }
    get classNumber() {
        return this._classNumber;
    }

    set teacherName(value) {
        if (value.length > 2 && value.length < 12){
            this._teacherName = value;
        }else {
            console.log('teacherName should be greater than 2 characters and less than 20 characters');
        }
    }
    get teacherName() {
        return this._teacherName;
    }

    set schoolAddress (value) {
        if (value.includes('&') && value.includes('=')) {
            let obj = {};
            let valueSplited = value.split('&');
            valueSplited.map(str => {
                let arr = str.split('=');
                obj[arr[0]] = arr[1];
            })
            this._schoolAddress = obj;
        }
    }
    get schoolAddress () {
        return this._schoolAddress;
    }
}

let student = new Student ("ali" , "zamani" , "1380/2/3" , "09121234567" , "1234567890" , "male" , "Country=Iran&State=Isfahan&City=Isfahan&Alley=ShahidRajaee&Block=3" , "abc@gmail.com" , 18 , 15 , "reza" , "09104562121" , "alavi" , 6 , "ahmadi" , "Country=Iran&State=Isfahan&City=Isfahan&Alley=ShahidRajaee&Block=3");
student.birthday = "2005/11/11";
console.log(student.birthday);
