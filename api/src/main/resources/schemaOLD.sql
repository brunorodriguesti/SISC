CREATE TABLE IF NOT EXISTS tb_perguntas(
    id_pergunta SERIAL PRIMARY KEY,
    descricao VARCHAR(255),
    grupo INT,
    candidato_id_candidato INT
);

CREATE TABLE IF NOT EXISTS tb_candidato(
    id_candidato SERIAL PRIMARY KEY,
    nome VARCHAR(100),
    cpf VARCHAR(11)
);

CREATE TABLE IF NOT EXISTS tb_curso(
    id_curso SERIAL PRIMARY KEY,
    nome VARCHAR(100),
    objetivo VARCHAR(45),
    carga_horaria FLOAT
);

CREATE TABLE IF NOT EXISTS tb_financiador(
    id_financiador SERIAL PRIMARY KEY,
    nome VARCHAR(100)
);

CREATE TABLE IF NOT EXISTS tb_requisitos(
    id_requisito SERIAL PRIMARY KEY,
    descricao_requisito VARCHAR(100)
);

CREATE TABLE IF NOT EXISTS tb_opcoes(
    id_respostas SERIAL PRIMARY KEY,
    descricao VARCHAR(255),
    tipo INT,
    pontuacao_default INT,
    perguntas_id_pergunta INT
);

CREATE TABLE IF NOT EXISTS tb_requisitos_cursos(
    id SERIAL PRIMARY KEY,
    curso_id_curso INT,
    financiador_id_financiador INT,
    requisito_id_requisito INT
);

CREATE TABLE IF NOT EXISTS tb_inscricao(
    id SERIAL PRIMARY KEY,
    curso_id_curso INT,
    perguntas_id_pergunta INT
);

ALTER TABLE tb_perguntas
    ADD CONSTRAINT fk_tb_candidato_id_candidato FOREIGN KEY (candidato_id_candidato) REFERENCES tb_candidato (id_candidato);

ALTER TABLE tb_opcoes
    ADD CONSTRAINT fk_tb_perguntas_id_perguntas FOREIGN KEY (perguntas_id_pergunta) REFERENCES tb_perguntas (id_pergunta);

ALTER TABLE tb_inscricao
    ADD CONSTRAINT fk_tb_curso_id_curso FOREIGN KEY (curso_id_curso) REFERENCES tb_curso (id_curso);

ALTER TABLE tb_inscricao
    ADD CONSTRAINT fk_tb_perguntas_id_pergunta FOREIGN KEY (perguntas_id_pergunta) REFERENCES tb_perguntas (id_pergunta);

ALTER TABLE tb_requisitos_cursos
    ADD CONSTRAINT fk_tb_cursos_id_curso FOREIGN KEY (curso_id_curso) REFERENCES tb_curso (id_curso);

ALTER TABLE tb_requisitos_cursos
    ADD CONSTRAINT fk_tb_financiador_id_financiador FOREIGN KEY (financiador_id_financiador) REFERENCES tb_financiador (id_financiador);

ALTER TABLE tb_requisitos_cursos
    ADD CONSTRAINT fk_tb_requisito_id_requisito FOREIGN KEY (requisito_id_requisito) REFERENCES tb_requisitos (id_requisito);