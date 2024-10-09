export interface objPessoa {
    nome: string,
    cpf: string
}

export interface objPessoaId {
    id: number,
    nome: string,
    cpf: string
}

export interface objCursoId {
    id: Number,
    nome: string,
    objetivo: string
}

export interface objTurmaId {
    id: number,
    dataInicio: string,
    dataFim: string,
    hora: string,
    numeroMaximoAlunos: number,
    cadastroAlunoDTOList: objPessoaId[],
    cursoDTO: objCursoId
}

export interface objTurma {
    dataInicio: string,
    dataFim: string,
    hora: string,
    numeroMaximoAlunos: number,
    cadastroAlunoDTOList: objPessoaId[],
    cursoDTO: objCursoId
}
