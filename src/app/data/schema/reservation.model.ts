export type EmergencyContact = {
    name: string;
    lastname: string;
    phone: string;
}

export type Guest ={
    name: string;
    lastname: string;
    birthday: string;
    gender: string;
    documentType: string;
    documentNumber: string;
    email: string;
    phone: string;
}

export class Reservation {
    private _id: string;
    private _startDate: string;
    private _endDate: string;
    private _status: string;
    private _user: string;
    private _rooms: number[];
    private _guests: Guest[];
    private _emergencyContact: EmergencyContact;


    constructor(id: string, startDate: string, endDate: string, status: string, user: string, rooms: number[], guests: Guest[], emergencyContact: EmergencyContact) {
        this._id = id;
        this._startDate = startDate;
        this._endDate = endDate;
        this._status = status;
        this._user = user;
        this._rooms = rooms;
        this._guests = guests;
        this._emergencyContact = emergencyContact;
    }


    /**
     * Getter id
     * @return {string}
     */
    public get id(): string {
        return this._id;
    }

    /**
     * Getter startDate
     * @return {string}
     */
    public get startDate(): string {
        return this._startDate;
    }

    /**
     * Getter endDate
     * @return {string}
     */
    public get endDate(): string {
        return this._endDate;
    }

    /**
     * Getter status
     * @return {string}
     */
    public get status(): string {
        return this._status;
    }

    /**
     * Getter user
     * @return {string}
     */
    public get user(): string {
        return this._user;
    }

    /**
     * Getter rooms
     * @return {number[]}
     */
    public get rooms(): number[] {
        return this._rooms;
    }

    /**
     * Getter guests
     * @return {Guest[]}
     */
    public get guests(): Guest[] {
        return this._guests;
    }

    /**
     * Getter emergencyContact
     * @return {EmergencyContact}
     */
    public get emergencyContact(): EmergencyContact {
        return this._emergencyContact;
    }

    /**
     * Setter id
     * @param {string} value
     */
    public set id(value: string) {
        this._id = value;
    }

    /**
     * Setter startDate
     * @param {string} value
     */
    public set startDate(value: string) {
        this._startDate = value;
    }

    /**
     * Setter endDate
     * @param {string} value
     */
    public set endDate(value: string) {
        this._endDate = value;
    }

    /**
     * Setter status
     * @param {string} value
     */
    public set status(value: string) {
        this._status = value;
    }

    /**
     * Setter user
     * @param {string} value
     */
    public set user(value: string) {
        this._user = value;
    }

    /**
     * Setter rooms
     * @param {number[]} value
     */
    public set rooms(value: number[]) {
        this._rooms = value;
    }

    /**
     * Setter guests
     * @param {Guest[]} value
     */
    public set guests(value: Guest[]) {
        this._guests = value;
    }

    /**
     * Setter emergencyContact
     * @param {EmergencyContact} value
     */
    public set emergencyContact(value: EmergencyContact) {
        this._emergencyContact = value;
    }

}