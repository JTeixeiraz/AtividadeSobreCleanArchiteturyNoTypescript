import path from "path";
import { Doctor } from "../models/Doctor";
import * as fs from "fs";

export class DoctorRepository{
    private readonly filePath = path.resolve(__dirname, "../database/medicos.json");

    getAll(): Doctor[]{
        const data = fs.readFileSync(this.filePath, "utf-8");
        const doctors: Doctor[] = JSON.parse(data);
        return doctors;
    }

    add(doctor: Doctor):void{
        const doctors = this.getAll();
        doctors.push(doctor);
        this.saveAll(doctors)
    }

    private saveAll(doctors: Doctor[]):void{
        const data = JSON.stringify(doctors, null, 2)
        fs.writeFileSync(this.filePath, data);
    }

    removeById(id: number):void{
        const doctors = this.getAll();
        const filtered = doctors.filter(u => u.id !== id);
        this.saveAll(filtered) 
    }
}