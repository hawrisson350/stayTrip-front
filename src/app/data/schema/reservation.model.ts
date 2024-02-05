interface EmergencyContact {
    name: string;
    lastname: string;
    phone: string;
}

interface Guest {
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
    private _id: number;
    private _startDate: string;
    private _endDate: string;
    private _status: string;
    private _user: number;
    private _rooms: number[];
    private _guests: Guest[];
    private _emergencyContact: EmergencyContact;


    constructor(id: number, startDate: string, endDate: string, status: string, user: number, rooms: number[], guests: Guest[], emergencyContact: EmergencyContact) {
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
     * @return {number}
     */
    public get id(): number {
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
     * @return {number}
     */
    public get user(): number {
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
     * @param {number} value
     */
    public set id(value: number) {
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
     * @param {number} value
     */
    public set user(value: number) {
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