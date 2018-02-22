export class Empleado {
    //FORMA TRADICIONAL DE HACERLO
    /* public nombre:string;
     public edad:number;
 
     constructor(nombre, edad) {
         this.nombre = nombre;
         this.edad = edad;
     }*/
    //FORMA DE TYPESCRIPT
    constructor(
        public nombre: string,
        public edad: number,
        public cargo: string,
        public contratado: boolean

    ) { }

}
