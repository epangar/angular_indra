export interface ITareaModel {
        descripcion: string,
        responsable: string,
        isCompleted: boolean
}

export class TareaModel implements ITareaModel {
    constructor(
        public descripcion: string = '',
        public responsable: string = '',
        public isCompleted: boolean = false
         ) {}
}
