export class Room {
    private _id: number;
    private _baseCost: number;
    private _taxes: number;
    private _type: string;
    private _location: string;
    private _amountPersons: number;
    private _description: string;
    private _status: string;
    private _available: boolean;
    private _hotel: number;


    constructor(id: number, baseCost: number, taxes: number, type: string, location: string, amountPersons: number, description: string, status: string, available: boolean, hotel: number) {
        this._id = id;
        this._baseCost = baseCost;
        this._taxes = taxes;
        this._type = type;
        this._location = location;
        this._amountPersons = amountPersons;
        this._description = description;
        this._status = status;
        this._available = available;
        this._hotel = hotel;
    }


    /**
     * Getter id
     * @return {number}
     */
    public get id(): number {
        return this._id;
    }

    /**
     * Getter baseCost
     * @return {number}
     */
    public get baseCost(): number {
        return this._baseCost;
    }

    /**
     * Getter taxes
     * @return {number}
     */
    public get taxes(): number {
        return this._taxes;
    }

    /**
     * Getter type
     * @return {string}
     */
    public get type(): string {
        return this._type;
    }

    /**
     * Getter location
     * @return {string}
     */
    public get location(): string {
        return this._location;
    }

    /**
     * Getter amountPersons
     * @return {number}
     */
    public get amountPersons(): number {
        return this._amountPersons;
    }

    /**
     * Getter description
     * @return {string}
     */
    public get description(): string {
        return this._description;
    }

    /**
     * Getter status
     * @return {string}
     */
    public get status(): string {
        return this._status;
    }

    /**
     * Getter available
     * @return {boolean}
     */
    public get available(): boolean {
        return this._available;
    }

    /**
     * Getter hotel
     * @return {number}
     */
    public get hotel(): number {
        return this._hotel;
    }

    /**
     * Setter id
     * @param {number} value
     */
    public set id(value: number) {
        this._id = value;
    }

    /**
     * Setter baseCost
     * @param {number} value
     */
    public set baseCost(value: number) {
        this._baseCost = value;
    }

    /**
     * Setter taxes
     * @param {number} value
     */
    public set taxes(value: number) {
        this._taxes = value;
    }

    /**
     * Setter type
     * @param {string} value
     */
    public set type(value: string) {
        this._type = value;
    }

    /**
     * Setter location
     * @param {string} value
     */
    public set location(value: string) {
        this._location = value;
    }

    /**
     * Setter amountPersons
     * @param {number} value
     */
    public set amountPersons(value: number) {
        this._amountPersons = value;
    }

    /**
     * Setter description
     * @param {string} value
     */
    public set description(value: string) {
        this._description = value;
    }

    /**
     * Setter status
     * @param {string} value
     */
    public set status(value: string) {
        this._status = value;
    }

    /**
     * Setter available
     * @param {boolean} value
     */
    public set available(value: boolean) {
        this._available = value;
    }

    /**
     * Setter hotel
     * @param {number} value
     */
    public set hotel(value: number) {
        this._hotel = value;
    }



}