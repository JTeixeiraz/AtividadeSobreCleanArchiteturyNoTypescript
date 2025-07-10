import * as fs from "fs"
import path from "path"
import { Query } from "../models/Query";

export class QueryRepository{
    private readonly filePath = path.resolve(__dirname, "../database/consultas.json");

    getAll():Query[]{
        const data = fs.readFileSync(this.filePath, "utf-8");
        const consultas:Query[] = JSON.parse(data)
        return consultas;
    }

    add(consultas: Query):void{
        const consulta = this.getAll()
        consulta.push(consultas);
        this.saveAll(consulta)
    }

    private saveAll(consultas: Query[]):void{
        const data = JSON.stringify(consultas)
        fs.writeFileSync(this.filePath, data)
    }

    removeById(id:number):void{
        const consultas = this.getAll()
        const filtered = consultas.filter(u => u.id !== id);
        this.saveAll(filtered)
    }
}