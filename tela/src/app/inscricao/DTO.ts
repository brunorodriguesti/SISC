export interface objPessoaPost {
    nome: string,
    cpf: string,
    cep: string,
    nomeMae: string,
    email: string | null,
    telefone: string | null,
    celular: string | null,
    dataNascimento: string,
    carteiraIdentidade: string | null,
    orgaoEmissor: string | null,
    pisPasep: string | null,
    numeroCTPS: string | null,
    serieCTPS: string | null,
    sexo: string | null,
    complemento: string | null,
    numeroLocalidade: number | null
}

export interface objPessoaId {
    id: number,
    nome: string,
    cpf: string,
    cep: string,
    nomeMae: string,
    email: string | null,
    telefone: string | null,
    celular: string | null,
    dataNascimento: string | null,
    carteiraIdentidade: string | null
    orgaoEmissor: string | null,
    pisPasep: string | null,
    numeroCTPS: string | null,
    serieCTPS: string | null,
    sexo: string | null,
    enderecoDTO: objEndereco
}

export interface objEndereco {
    cep: string,
    logradouro: string,
    complemento: string,
    bairro: string,
    localidade: string,
    uf: string,
    estado: string,
    numeroLocalidade: number
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

export interface objParametrosId {
    id: number,
    descricao: string,
    peso: number
}

export interface objParametros {
    descricao: string,
    peso: number
}