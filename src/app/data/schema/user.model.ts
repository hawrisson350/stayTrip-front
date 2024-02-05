export class User {
    private _id: number;
    private _name: string;
    private _lastname: string;
    private _birthday: string;
    private _gender: string;
    private _documentType: string;
    private _documentNumber: string;
    private _email: string;
    private _phone: string;
    private _password: string;
    private _role: number;
    private _reservations: [];


    constructor(id: number, name: string, lastname: string, birthday: string, gender: string, documentType: string, documentNumber: string, email: string, phone: string, password: string, role: number, reservations: []) {
        this._id = id;
        this._name = name;
        this._lastname = lastname;
        this._birthday = birthday;
        this._gender = gender;
        this._documentType = documentType;
        this._documentNumber = documentNumber;
        this._email = email;
        this._phone = phone;
        this._password = password;
        this._role = role;
        this._reservations = reservations;
    }



    /**
     * Getter id
     * @return {number}
     */
    public get id(): number {
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
     * Getter lastname
     * @return {string}
     */
    public get lastname(): string {
        return this._lastname;
    }

    /**
     * Getter birthday
     * @return {string}
     */
    public get birthday(): string {
        return this._birthday;
    }

    /**
     * Getter gender
     * @return {string}
     */
    public get gender(): string {
        return this._gender;
    }

    /**
     * Getter documentType
     * @return {string}
     */
    public get documentType(): string {
        return this._documentType;
    }

    /**
     * Getter documentNumber
     * @return {string}
     */
    public get documentNumber(): string {
        return this._documentNumber;
    }

    /**
     * Getter email
     * @return {string}
     */
    public get email(): string {
        return this._email;
    }

    /**
     * Getter phone
     * @return {string}
     */
    public get phone(): string {
        return this._phone;
    }

    /**
     * Getter password
     * @return {string}
     */
    public get password(): string {
        return this._password;
    }

    /**
     * Getter role
     * @return {number}
     */
    public get role(): number {
        return this._role;
    }

    /**
     * Getter reservations
     * @return {[]}
     */
    public get reservations(): [] {
        return this._reservations;
    }

    /**
     * Setter id
     * @param {number} value
     */
    public set id(value: number) {
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
     * Setter lastname
     * @param {string} value
     */
    public set lastname(value: string) {
        this._lastname = value;
    }

    /**
     * Setter birthday
     * @param {string} value
     */
    public set birthday(value: string) {
        this._birthday = value;
    }

    /**
     * Setter gender
     * @param {string} value
     */
    public set gender(value: string) {
        this._gender = value;
    }

    /**
     * Setter documentType
     * @param {string} value
     */
    public set documentType(value: string) {
        this._documentType = value;
    }

    /**
     * Setter documentNumber
     * @param {string} value
     */
    public set documentNumber(value: string) {
        this._documentNumber = value;
    }

    /**
     * Setter email
     * @param {string} value
     */
    public set email(value: string) {
        this._email = value;
    }

    /**
     * Setter phone
     * @param {string} value
     */
    public set phone(value: string) {
        this._phone = value;
    }

    /**
     * Setter password
     * @param {string} value
     */
    public set password(value: string) {
        this._password = value;
    }

    /**
     * Setter role
     * @param {number} value
     */
    public set role(value: number) {
        this._role = value;
    }

    /**
     * Setter reservations
     * @param {[]} value
     */
    public set reservations(value: []) {
        this._reservations = value;
    }


}
