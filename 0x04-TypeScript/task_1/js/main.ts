interface Teacher {
    readonly firstName: string;
    readonly lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience: number;
    location: string;
    [attrName: string]: any;
};

interface Directors extends Teacher {
    numberOfReports: number;
};

interface printTeacherFunction { (firstName: string, lastName: string): string };

const printTeacher: printTeacherFunction = (firstName, lastName) => {
    return `${firstName.slice(0)}. ${lastName}`;
}


interface studentInterface { workOnHomework(): string; displayName(): string };

class StudentClass implements studentInterface {
    firstName: string;
    lastName: string;
    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    workOnHomework() {
        return 'Currently working';
    }

    displayName() {
        return this.firstName;
    }
}

