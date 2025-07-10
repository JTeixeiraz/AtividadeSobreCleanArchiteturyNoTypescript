=================================================================================
                                PRÁTICA 10_07_2025
=================================================================================
Código / estrutura de apoio

npm i
npx ts-node src/index.ts

/src
  models/
  database/
  repositories/
  index.ts

==================================================================================

SISTEMA DE GESTÃO DE CONSULTAS MÉDICAS

Você foi contratado para desenvolver Um módulo inicial de um sistema para registrar 
consultas médicas.

Requisitos Arquiteturais
RA1: Deve-se utilizar Typescript com Orientação a Objetos e seus princípios.
RA2: Procure criar métodos para atingir os requisitos funcionais, melhorando a modularização; uso de import e export para importar e exportar módulos.
RA3: Toda entidade/modelo que precisar ARMAZENAR deve ter um repositório para ele. Ex: "PacienteRepository", seguindo o exemplo de repositório dado.


Requisitos Funcionais
v- RF1: O sistema deve permitir cadastrar um paciente, listar todos os pacientes, listar um paciente por ID e remover um paciente por ID.
v- RF2: O sistema deve permitir cadastrar um médico, listar todos os médicos, listar um médico por ID e remover um médico por ID.
RF3: O sistema deve permitir registrar e armazenar consultas. Entende-se uma consulta o registro de um paciente com um médico em uma data, podendo ter ou não uma receita associada.
RF4: O sistema deve permitir listas todas as consultas de um certo paciente, dado o ID do paciente.
RF5: O sistema deve permitir listas todas as consultas de um certo paciente, dado o nome do paciente (se houver repetido, considerar o primeiro encontrado)
RF6: O sistema deve permitir listas todas as consultas de um certo médico, dado o ID do médico.
RF7: O sistema deve permitir listas todas as consultas de um certo médico, dado o nome do médico (se houver repetido, considerar o primeiro encontrado)
RF8: O sistema deve permitir listar médicos dada uma especialidade/patologia fornecida (TABELA !)
RF9: O sistema deve verificar se o paciente possui uma patologia identificada: se sim, somente deve agendar consulta com médicos dessa especialidade; caso ao contrário esse paciente deve registrar com médicos clínicos gerais (TABELA 1)



TABELA 1
Código	Especialidade/Patologia
01      Clínico Geral	Atendimento inicial, diagnóstico e tratamento de problemas gerais
02      Pediatria	Cuida da saúde de bebês, crianças e adolescentes.
03      Ginecologia/Obstetrícia	Saúde da mulher, gravidez, parto e sistema reprodutor feminino.
04      Dermatologia	Doenças da pele, unhas e cabelo.
05      Ortopedia	Ossos, músculos, articulações e fraturas.
06      Cardiologia	Doenças do coração e sistema circulatório.
07      Neurologia	Doenças do cérebro, nervos e sistema nervoso.
08      Psiquiatria	Saúde mental e transtornos psicológicos.
09      Oftalmologia	Saúde dos olhos e visão.
10      Otorrinolaringologia	Doenças do ouvido, nariz e garganta.

Para simplificar, ao cadastrar o Paciente e ele tiver uma patologia identificada, basta cadastrar o código da patologia/especialidade médica.



