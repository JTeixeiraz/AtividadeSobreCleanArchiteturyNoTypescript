import * as fs from "fs";
import * as path from "path";
import { User } from "../models/User";

export class UserRepository {
    private readonly filePath = path.resolve(__dirname, "../database/users.json");

    getAll(): User[] {
        const data = fs.readFileSync(this.filePath, "utf-8");
        const users: User[] = JSON.parse(data); // array de usuários
        return users;
    }

    add(user: User): void {
        const users = this.getAll(); // array
        users.push(user);            // uso de array.push
        this.saveAll(users);
    }

    private saveAll(users: User[]): void {
        const data = JSON.stringify(users, null, 2);
        fs.writeFileSync(this.filePath, data);
    }

    removeById(id: number): void {
        const users = this.getAll();
        const filtered = users.filter(u => u.id !== id); // uso de array.filter
        this.saveAll(filtered);
    }   
}