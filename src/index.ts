import * as readline from "readline";
import { DoctorRepository } from "./repositories/DoctorRepository";
import { PacientRepository } from "./repositories/PacientRepository";
import { QueryRepository } from "./repositories/QueryRepository";
import { Pacientes } from "./models/Pacientes";
import { Doctor } from "./models/Doctor";
import { Query } from "./models/Query";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const patologias: string[][] = [
    ["1", "Clínico Geral"],
    ["2", "Pediatria"],
    ["3", "Ginecologia/Obstetrícia"],
    ["4", "Dermatologia"],
    ["5", "Ortopedia"],
    ["6", "Cardiologia"],
    ["7", "Neurologia"],
    ["8", "Psiquiatria"],
    ["9", "Oftalmologia"],
    ["10", "Otorrinolaringologia"],
];

const doctorRepository = new DoctorRepository();
const pacientRepository = new PacientRepository();
const queryRepository = new QueryRepository();

main();

async function main() {
    console.log("================================");
    console.log("========== Hospital ============");
    console.log("================================");
    console.log("1 - Listar consultas por paciente (ID)");
    console.log("2 - Listar consultas por paciente (Nome)");
    console.log("3 - Listar consultas por médico (ID)");
    console.log("4 - Listar consultas por médico (Nome)");
    console.log("5 - Listar médicos por especialidade");
    console.log("6 - Agendar consulta");
    console.log("0 - Sair");

    rl.question("Escolha uma opção: ", (option) => {
        switch (option) {
            case "1":
                listQueriesByPatientId();
                break;
            case "2":
                listQueriesByPatientName();
                break;
            case "3":
                listQueriesByDoctorId();
                break;
            case "4":
                listQueriesByDoctorName();
                break;
            case "5":
                listDoctorsByEspecialidade();
                break;
            case "6":
                scheduleQuery();
                break;
            case "0":
                rl.close();
                break;
            default:
                console.log("Opção inválida!");
                main();
                break;
        }
    });
}

function listQueriesByPatientId() {
    rl.question("Digite o ID do paciente: ", (patientId) => {
        const queries = queryRepository.getByPatientId(parseInt(patientId));
        console.log(queries);
        main();
    });
}

function listQueriesByPatientName() {
    rl.question("Digite o nome do paciente: ", (patientName) => {
        const patient = pacientRepository.getByName(patientName);
        if (patient) {
            const queries = queryRepository.getByPatientId(patient.id);
            console.log(queries);
        } else {
            console.log("Paciente não encontrado!");
        }
        main();
    });
}

function listQueriesByDoctorId() {
    rl.question("Digite o ID do médico: ", (doctorId) => {
        const queries = queryRepository.getByDoctorId(parseInt(doctorId));
        console.log(queries);
        main();
    });
}

function listQueriesByDoctorName() {
    rl.question("Digite o nome do médico: ", (doctorName) => {
        const doctor = doctorRepository.getByName(doctorName);
        if (doctor) {
            const queries = queryRepository.getByDoctorId(doctor.id);
            console.log(queries);
        } else {
            console.log("Médico não encontrado!");
        }
        main();
    });
}

function listDoctorsByEspecialidade() {
    console.log("Especialidades:");
    patologias.forEach(p => console.log(`${p[0]} - ${p[1]}`));
    rl.question("Digite o código da especialidade: ", (especialidadeCodigo) => {
        const doctors = doctorRepository.getByEspecialidade(parseInt(especialidadeCodigo));
        console.log(doctors);
        main();
    });
}

function scheduleQuery() {
    rl.question("Digite o ID do paciente: ", (patientId) => {
        const patient = pacientRepository.getAll().find(p => p.id === parseInt(patientId));
        if (!patient) {
            console.log("Paciente não encontrado!");
            main();
            return;
        }

        console.log("Especialidades:");
        patologias.forEach(p => console.log(`${p[0]} - ${p[1]}`));
        rl.question("Digite o código da especialidade desejada: ", (especialidadeCodigo) => {
            const especialidade = parseInt(especialidadeCodigo);
            if (patient.patologiaCodigo !== 0 && patient.patologiaCodigo !== especialidade) {
                console.log("Paciente com patologia específica só pode agendar com a especialidade correspondente.");
                main();
                return;
            }
            if (patient.patologiaCodigo === 0 && especialidade !== 1) {
                console.log("Paciente sem patologia específica só pode agendar com Clínico Geral.");
                main();
                return;
            }

            const doctors = doctorRepository.getByEspecialidade(especialidade);
            if (doctors.length === 0) {
                console.log("Nenhum médico encontrado para esta especialidade.");
                main();
                return;
            }

            console.log("Médicos disponíveis:");
            doctors.forEach(d => console.log(`ID: ${d.id} - Nome: ${d.nome}`));
            rl.question("Digite o ID do médico: ", (doctorId) => {
                const newQuery = new Query(
                    new Date().getTime(),
                    parseInt(patientId),
                    parseInt(doctorId),
                    new Date().getTime(),
                    ""
                );
                queryRepository.add(newQuery);
                console.log("Consulta agendada com sucesso!");
                main();
            });
        });
    });
}
