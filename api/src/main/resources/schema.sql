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
    sexo VARCHAR(1),
    situacao BOOLEAN
);

CREATE TABLE IF NOT EXISTS Objetivo (
    idObjetivo INT AUTO_INCREMENT PRIMARY KEY,
    descricao VARCHAR(100),
    aluno_idAluno INT,
    situacao BOOLEAN,
    FOREIGN KEY (aluno_idAluno) REFERENCES Aluno(idAluno)
);

CREATE TABLE IF NOT EXISTS Parametro_Selecao (
    idParametro_Selecao INT AUTO_INCREMENT PRIMARY KEY,
    descricao VARCHAR(100),
    peso INT,
    situacao BOOLEAN
);

CREATE TABLE IF NOT EXISTS Endereco (
    idEndereco INT AUTO_INCREMENT PRIMARY KEY,
    logradouro VARCHAR(100),
    numero VARCHAR(11),
    complemento VARCHAR(45),
    bairro VARCHAR(100),
    cidade VARCHAR(100),
    estado CHAR(2),
    aluno_idAluno INT,
    FOREIGN KEY (aluno_idAluno) REFERENCES Aluno(idAluno)
);

CREATE TABLE IF NOT EXISTS Aluno_Objetivo (
    aluno_idAluno INT,
    objetivo_idObjetivo INT,
    simnao CHAR(1),
    PRIMARY KEY (aluno_idAluno, objetivo_idObjetivo),
    FOREIGN KEY (aluno_idAluno) REFERENCES Aluno(idAluno),
    FOREIGN KEY (objetivo_idObjetivo) REFERENCES Objetivo(idObjetivo)
);

CREATE TABLE IF NOT EXISTS Aluno_Parametro_Selecao (
    aluno_idAluno INT,
    parametro_selecao_idParametro_Selecao INT,
    simnao CHAR(1),
    PRIMARY KEY (aluno_idAluno, parametro_selecao_idParametro_Selecao),
    FOREIGN KEY (aluno_idAluno) REFERENCES Aluno(idAluno),
    FOREIGN KEY (parametro_selecao_idParametro_Selecao) REFERENCES Parametro_Selecao(idParametro_Selecao)
);

ALTER TABLE Aluno
ADD turma_idTurma INT;

ALTER TABLE Aluno
ADD CONSTRAINT fk_turma FOREIGN KEY (turma_idTurma) REFERENCES Turma(idTurma);

ALTER TABLE Aluno
ADD endereco_idEndereco INT;

ALTER TABLE Aluno
ADD CONSTRAINT fk_endereco FOREIGN KEY (endereco_idEndereco) REFERENCES Endereco(idEndereco);