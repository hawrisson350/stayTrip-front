export enum Status {
    'I' = "Inactivo",
    'A' = "Activo"
}

export type Colombia = {
    id: number,
    departamento: string,
    ciudades: string[],
};