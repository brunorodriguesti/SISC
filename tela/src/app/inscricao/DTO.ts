export interface objPessoa {
    nome: string,
    cpf: string,
    cep: string,
    nomeMae: string,
    email: string,
    telefone: string,
    celular: string,
    dataNascimento: string,
    carteiraIdentidade: string,
    orgaoEmissor: string,
    pisPasep: string,
    numeroCTPS: string,
    serieCTPS: string
}

export interface objPessoaId {
    id: number,
    nome: string,
    cpf: string,
    cep: string,
    nomeMae: string,
    email: string,
    telefone: string,
    celular: string
    dataNascimento: string
    carteiraIdentidade: string
    orgaoEmissor: string,
    pisPasep: string,
    numeroCTPS: string,
    serieCTPS: string
}

export interface objCursoId {
    id: number,
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

export interface objEndereco {
    cep: string,
    logradouro: string,
    complemento: string,
    unidade: string,
    bairro: string,
    localidade: string,
    uf: string,
    estado: string,
    regiao: string
}
