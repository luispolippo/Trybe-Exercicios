CREATE DATABASE IF NOT EXISTS normalization;

USE normalization;

CREATE TABLE Setor(
	`setor_id` INT PRIMARY KEY AUTO_INCREMENT,
    `nome` VARCHAR(50) NOT NULL
);

CREATE TABLE Funcionario(
	`funcionario_id` INT PRIMARY KEY AUTO_INCREMENT,
    `nome` VARCHAR(50) NOT NULL,
    `sobrenome` VARCHAR(50) NOT NULL,
    `email` VARCHAR(50) NULL,
    `telefone` VARCHAR(50) NULL,
    `data_cadastro` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP()
);

CREATE TABLE Funcionario_Setor(
	`funcionario_id` INT,
    `setor_id` INT,
    CONSTRAINT PRIMARY KEY(funcionario_id, setor_id),
    FOREIGN KEY(funcionario_id) REFERENCES Funcionario(funcionario_id),
    FOREIGN KEY(setor_id) REFERENCES Setor(setor_id)
);

INSERT INTO Setor(nome)
VALUES('Administração'),
('Estratégico'),('Marketing'),('Operacional'),('Vendas');

INSERT INTO 
	Funcionario(funcionario_id, nome, sobrenome, email, telefone, data_cadastro)
VALUES 
	(12, 'Joseph', 'Rodrigues', 'jo@gmail.com', '(35)998552-1445', '2020-05-05 08:50:25'),
    (13, 'André', 'Freeman', 'andre1990@gmail.com', '(47)99522-4996', '2020-02-05 00:00:00'),
    (14, 'Cíntia', 'Duval', 'cindy@outlook.com', '(33)99855-4669', '2020-05-05 10:55:35'),
    (15, 'Fernanda', 'Mendes', 'fernandamendes@yahoo.com', '(33)99200-1556', '2020-05-05 11:45:40');
    
INSERT INTO
	Funcionario_Setor(funcionario_id, setor_id)
VALUES
	(12, 1), (12, 5), (13, 4), (14, 2), (14, 5), (15, 3);
    