import path from "path";
import { Pacientes } from "../models/Pacientes";
import * as fs from "fs"

export class PacientRepository{
    private readonly filePath = path.resolve(__dirname, "../database/pacientes.json");

    getAll():Pacientes[]{
        const data = fs.readFileSync(this.filePath, "utf-8");
        const pacients:Pacientes[] = JSON.parse(data)
        return pacients
    }

    add(pacientes: Pacientes):void{
        const pacients = this.getAll()
        pacients.push(pacientes);
        this.saveAll(pacients)
    }

    private saveAll(pacients: Pacientes[]):void{
        const data = JSON.stringify(pacients, null, 2)
        fs.writeFileSync(this.filePath, data)
    }

    removeById(id: number):void{
        const pacientes = this.getAll()
        const filtered = pacientes.filter(u => u.id !== id);
        this.saveAll(filtered)
    }

    getByName(name: string): Pacientes | undefined {
        const pacients = this.getAll();
        return pacients.find(p => p.nome === name);
    }
}