import { DepartamentoInterface } from "src/app/recursosCompartidos/modelos/departamento.interface";

export class RolValidador{
    esSuscriptor(depto: DepartamentoInterface):boolean{
        return depto.rol === 'SUSCRIPTOR';
    }
    
    esEditor(depto:DepartamentoInterface):boolean{
        return depto.rol === 'EDITOR';
    }

    esAdmin(depto: DepartamentoInterface):boolean{
        return depto.rol === 'ADMIN';
    }
}