export enum Status {
    'I' = "Inactivo",
    'A' = "Activo"
}

export enum Gender {
    'M' = "Masculino",
    'F' = "Femenino",
    'O' = "Prefiero no decir",
}

export type Colombia = {
    id: number,
    departamento: string,
    ciudades: string[],
};

export enum RoomType {
    Individual = 'Individual',
    Doble = 'Doble',
    Suite = 'Suite',
    Familiar = 'Familiar',
    Presidencial = 'Presidencial',
}

export enum DocumentType {
    CC = 'Cédula de Ciudadanía',
    TI = 'Tarjeta de Identidad',
    CE = 'Cédula de Extranjería',
    PA = 'Pasaporte',
    RC = 'Registro Civil'
  }
  