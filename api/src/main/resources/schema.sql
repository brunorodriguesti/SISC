CREATE TABLE IF NOT EXISTS Curso (
    idCurso INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(50),
    objetivo VARCHAR(45),
    situacao BOOLEAN
);

CREATE TABLE IF NOT EXISTS Turma (
    idTurma INT AUTO_INCREMENT PRIMARY KEY,
    dt_inicio DATE,
    dt_fim DATE,
    hora TIME,
    curso_idCurso INT,
    num_max_alunos INT,
    situacao BOOLEAN,
    FOREIGN KEY (curso_idCurso) REFERENCES Curso(idCurso)
);

CREATE TABLE IF NOT EXISTS Aluno (
    idAluno INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100),
    cpf VARCHAR(11),
    cep VARCHAR(11),
    nome_mae VARCHAR(100),
    email VARCHAR(50),
    telefone VARCHAR(11),
    celular VARCHAR(11),
    data_nascimento DATE NOT NULL,
    carteira_identidade VARCHAR(9),
    orgao_emissor VARCHAR(5),
    pis_pasep VARCHAR(11),
    numero_ctps VARCHAR(7),
    serie_ctps VARCHAR(4),
    situacao BOOLEAN
);

CREATE TABLE IF NOT EXISTS Objetivo (
    idObjetivo INT AUTO_INCREMENT PRIMARY KEY,
    adquirir_conhecimento VARCHAR(45),
    aluno_idAluno INT,
    situacao BOOLEAN,
    FOREIGN KEY (aluno_idAluno) REFERENCES Aluno(idAluno)
);

CREATE TABLE IF NOT EXISTS Parametro_Selecao (
    idParametro_Selecao INT AUTO_INCREMENT PRIMARY KEY,
    descricao TINYINT,
    peso INT,
    aluno_idAluno INT,
    situacao BOOLEAN,
    FOREIGN KEY (aluno_idAluno) REFERENCES Aluno(idAluno)
);


ALTER TABLE Aluno
ADD turma_idTurma INT;

ALTER TABLE Aluno
ADD CONSTRAINT fk_turma FOREIGN KEY (turma_idTurma) REFERENCES Turma(idTurma);