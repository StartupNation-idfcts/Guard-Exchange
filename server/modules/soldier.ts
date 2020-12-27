import { User } from "./user";

export class Soldier extends User{
    private _privateNumber: number;
    private _guardShiftId: bigint;

    constructor(firstName: string, lastName: string, age: number, privatNumber: number, guardShiftId: bigint){
        super(firstName, lastName, age)
        this.privateNumber = privatNumber;
        this.guardShiftId = guardShiftId;
    }

    public get privateNumber() {
        return this._privateNumber;
    }

    // FIXME: find an alternative, it should not be public.
    public set privateNumber(thePrivateNumber: number) {
        if (thePrivateNumber <= 0 || thePrivateNumber >= 200) {
            throw new Error('The private number is invalid');
        }
        this._privateNumber = thePrivateNumber;
    }

    public get guardShiftId() {
        return this._guardShiftId;
    }

    // FIXME: find an alternative, it should not be public.
    public set guardShiftId(theGuardShiftId: bigint) {
        if (theGuardShiftId <= 0) {
            throw new Error('The guard shift id is invalid');
        }
        this._guardShiftId = theGuardShiftId;
    }

    public toString = () : string => {
        return `${super.toString()} The private number is ${this.privateNumber}.`
    }
}