import { Soldier } from "./soldier";

export class GuardingShift {
    private _guardId: bigint;
    private _datetime: Date;
    private _cost: number;
    private _guardingSoldier: Soldier

    constructor(guardId: bigint, datetime: Date, cost: number, guardingSoldier: Soldier){
        this.guardId = guardId;
        this.datetime = datetime;
        this.cost = cost;
        this.guardingSoldier = guardingSoldier;
    }

    public get guardId() {
        return this._guardId;
    }

    // FIXME: find an alternative, it should not be public.
    public set guardId(theGuardId: bigint) {
        if (theGuardId <= 0) {
            throw new Error('The guard shift id is invalid');
        }
        this._guardId = theGuardId;
    }

    public get cost() {
        return this._cost;
    }

    // FIXME: find an alternative, it should not be public.
    public set cost(theCost: number) {
        if (theCost <= 0) {
            throw new Error('The cost is invalid');
        }
        this._cost = theCost;
    }

    public get datetime() {
        return this._datetime;
    }

    // FIXME: find an alternative, it should not be public.
    public set datetime(theDatetime: Date) {
        if (!theDatetime) {
            throw new Error('Invalid datetime');
        }
        this._datetime = theDatetime;
    }

    public get guardingSoldier() {
        return this._guardingSoldier;
    }

    // FIXME: find an alternative, it should not be public.
    public set guardingSoldier(theGuardingSoldier: Soldier) {
        if (!theGuardingSoldier) {
            throw new Error('Invalid soldier');
        }
        this._guardingSoldier = theGuardingSoldier;
    }
}