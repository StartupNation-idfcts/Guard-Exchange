export class User {
    private _age: number;
    private _firstName: string;
    private _lastName: string;

    constructor(firstName: string, lastName: string, age: number){
        this._firstName = firstName;
        this._lastName = lastName;
        this._age = age;
    }

    public get age() {
        return this._age;
    }

    // FIXME: find an alternative, it should not be public.
    public set age(theAge: number) {
        if (theAge <= 0 || theAge >= 200) {
            throw new Error('The age is invalid');
        }
        this._age = theAge;
    }

    public get firstName() {
        return this._firstName;
    }

    // FIXME: find an alternative, it should not be public.
    public set firstName(theFirstName: string) {
        if (!theFirstName) {
            throw new Error('Invalid first name.');
        }
        this._firstName = theFirstName;
    }

    public get lastName() {
        return this._lastName;
    }

    // FIXME: find an alternative, it should not be public.
    public set lastName(theLastName: string) {
        if (!theLastName) {
            throw new Error('Invalid last name.');
        }
        this._lastName = theLastName;
    }

    public get fullName() {
        return `${this.firstName} ${this.lastName}`;
    }

    // FIXME: find an alternative, it should not be public.
    public set fullName(name: string) {
        let parts = name.split(' ');
        if (parts.length != 2) {
            throw new Error('Invalid name format: first last');
        }
        this.firstName = parts[0];
        this.lastName = parts[1];
    }

    public toString = () : string => {
        return `${this.fullName} ${this.age} years old.`
    }
}