export class Telefono {
    estaPrendido: boolean;
    bateriaActual:number;

    constructor(paramEstaPrendido: boolean, paramBateriaActual: number) {
        this.estaPrendido = paramEstaPrendido;
        this.bateriaActual= paramBateriaActual
    }

    public mandarMensa() {
     console.log('Se envio tu mensaje');
        
    }

    public hacerLlamada (contacto){
        console.log('Llamando a ', contacto);
        
    }

    public setPrenderApagar(pEstaPrendido:boolean):void{
        this.estaPrendido =pEstaPrendido;
    }

    public getPrenderApagar():string{
        if(this.estaPrendido=== true){
            return "Apagando teléfono";
        }else{
            return "Encendiendo teléfono";
        }
    }
}

