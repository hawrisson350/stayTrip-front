export class Hotel {
    private _id: string;
    private _name: string;
    private _city: string;
    private _department: number;
    private _address: string;
    private _description: string;
    private _photo: string;
    private _status: string;


    constructor(
        id: string,
        name: string,
        city: string,
        department: number,
        address: string,
        description: string,
        photo: string,
        status: string) {
        this._id = id;
        this._name = name;
        this._city = city;
        this._department = department;
        this._address = address;
        this._description = description;
        this._photo = photo;
        this._status = status;
    }

    /**
     * Getter id
     * @return {number}
     */
    public get id(): string {
        return this._id;
    }

    /**
     * Getter name
     * @return {string}
     */
    public get name(): string {
        return this._name;
    }

    /**
     * Getter city
     * @return {string}
     */
    public get city(): string {
        return this._city;
    }

    /**
     * Getter department
     * @return {number}
     */
    public get department(): number {
        return this._department;
    }

    /**
     * Getter address
     * @return {string}
     */
    public get address(): string {
        return this._address;
    }

    /**
     * Getter description
     * @return {string}
     */
    public get description(): string {
        return this._description;
    }

    /**
     * Getter photo
     * @return {string}
     */
    public get photo(): string {
        return this._photo;
    }

    /**
     * Getter status
     * @return {string}
     */
    public get status(): string {
        return this._status;
    }

    /**
     * Setter id
     * @param {number} value
     */
    public set id(value: string) {
        this._id = value;
    }

    /**
     * Setter name
     * @param {string} value
     */
    public set name(value: string) {
        this._name = value;
    }

    /**
     * Setter city
     * @param {string} value
     */
    public set city(value: string) {
        this._city = value;
    }

    /**
     * Setter department
     * @param {number} value
     */
    public set department(value: number) {
        this._department = value;
    }

    /**
     * Setter address
     * @param {string} value
     */
    public set address(value: string) {
        this._address = value;
    }

    /**
     * Setter description
     * @param {string} value
     */
    public set description(value: string) {
        this._description = value;
    }

    /**
     * Setter photo
     * @param {string} value
     */
    public set photo(value: string) {
        this._photo = value;
    }

    /**
     * Setter status
     * @param {string} value
     */
    public set status(value: string) {
        this._status = value;
    }


}