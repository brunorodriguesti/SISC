import requests
import random
from datetime import datetime, timedelta
import time

# Base URL do backend
BASE_URL = "http://host.docker.internal:8080"

# Função para gerar uma data aleatoria
def gerar_data_aleatoria():
    ano_atual = datetime.now().year
    mes = random.randint(1, 12)

    # Define o número máximo de dias no mes
    if mes in [1, 3, 5, 7, 8, 10, 12]:  # Meses com 31 dias
        dia = random.randint(1, 31)
    elif mes in [4, 6, 9, 11]:  # Meses com 30 dias
        dia = random.randint(1, 30)
    else:  # Fevereiro
        # Verifica se o ano atual é bissexto
        if (ano_atual % 4 == 0 and ano_atual % 100 != 0) or (ano_atual % 400 == 0):
            dia = random.randint(1, 29)
        else:
            dia = random.randint(1, 28)

    data_aleatoria = datetime(ano_atual, mes, dia)
    return data_aleatoria

# Função que gera horas aleatoria
def gerar_horario_aleatorio():
    hora = random.randint(0, 23)
    minuto = random.randint(0, 59)
    segundo = random.randint(0, 59)
    return f"{hora:02}:{minuto:02}:{segundo:02}"

# Função para criar cursos
def criar_curso(curso:dict):
    url = f"{BASE_URL}/curso"
    payload = {
        "nome": curso.get("nome"),
        "objetivo": curso.get("objetivo")
    }
    print(payload)
    # Enviar o ID do curso no payload, se necessário
    response = requests.post(url, json=payload)
    if response.status_code == 201:
        print(f"Curso criado com sucesso: {curso.get("nome")}")
        return
    else:
        print(f"Erro ao criar curso: {response.status_code}, {response.text}")
        return

# Função para criar turmas
def criar_turma(turma:dict):
    url = f"{BASE_URL}/turma"
    payload = {
        "dataInicio": turma.get("dataInicio"),
        "dataFim": turma.get("dataFim"),
        "hora": turma.get("hora"),
        "numeroMaximoAlunos": turma.get("numeroMaximoAlunos"),
        "idCurso": turma.get("idCurso")
    }
    print(payload)
    response = requests.post(url, json=payload)
    if response.status_code == 201:
        print(f"Turma {turma.get("dataInicio")} criada para o curso {turma.get("idCurso")}")
    else:
        print(f"Erro ao criar turma: {response.status_code}, {response.text}")

def criar_parametros(parametro:dict):
    url = f"{BASE_URL}/parametro"
    payload = {
        "descricao": parametro.get("descricao"),
        "peso": parametro.get("peso")
    }
    print(payload)
    response = requests.post(url, json=payload)
    if response.status_code == 201:
        print(f"Parametro criada {parametro.get("descricao")}")
    else:
        print(f"Erro ao criar o parametro: {response.status_code}, {response.text}")

# Função para cadastrar alunos
def gerar_pessoa(dict_pessoa:dict):
    url = f"{BASE_URL}/aluno"
    payload = {
    "nome": dict_pessoa.get("nome"),
    "cpf": dict_pessoa.get("cpf"),
    "cep": dict_pessoa.get("cep"),
    "nomeMae": dict_pessoa.get("nomeMae"),
    "email": dict_pessoa.get("email"),
    "telefone": dict_pessoa.get("telefone"),
    "celular": dict_pessoa.get("celular"),
    "dataNascimento": dict_pessoa.get("dataNascimento"),
    "carteiraIdentidade": dict_pessoa.get("carteiraIdentidade"),
    "orgaoEmissor": dict_pessoa.get("orgaoEmissor"),
    "pisPasep": dict_pessoa.get("pisPasep"),
    "numeroCTPS": dict_pessoa.get("numeroCTPS"),
    "serieCTPS": dict_pessoa.get("serieCTPS"),
    "sexo": dict_pessoa.get("sexo"),
    "complemento": dict_pessoa.get("complemento"),
    "numeroLocalidade": dict_pessoa.get("numeroLocalidade")
    }
    print(payload)
    response = requests.post(url, json=payload)
    if response.status_code == 201:
        print(f"Aluno criado com sucesso: {dict_pessoa.get("nome")}")
    else:
        print(f"Erro ao criar o parametro: {response.status_code}, {response.text}")


# Função para gerar dados de exemplo
def gerar_massa_de_dados():
    # Lista de cursos de exemplo
    cursos:list[dict] = [
        {"nome": "Informatica", "objetivo": "Curso de 40hrs de informática"},
        {"nome": "Cabeleireiro", "objetivo": "Curso de 20hrs de cabeleireiro"},
        {"nome": "Costureira", "objetivo": "Curso de 20hrs de costura e modelagem básica"},
        {"nome": "Auxiliar Administrativo", "objetivo": "Curso de 30hrs de noções de administração"},
        {"nome": "Culinária Básica", "objetivo": "Curso de 25hrs de culinária para iniciantes"},
        {"nome": "Manicure e Pedicure", "objetivo": "Curso de 15hrs de técnicas de manicure e pedicure"},
        {"nome": "Eletricista Residencial", "objetivo": "Curso de 35hrs sobre eletricidade básica para residências"},
        {"nome": "Jardinagem", "objetivo": "Curso de 20hrs sobre técnicas básicas de jardinagem"},
        {"nome": "Maquiagem Profissional", "objetivo": "Curso de 10hrs para iniciantes em maquiagem"},
        {"nome": "Corte e Costura", "objetivo": "Curso de 30hrs de corte e costura avançado"},
        {"nome": "Panificação", "objetivo": "Curso de 20hrs sobre preparo de pães e bolos"},
        {"nome": "Cuidador de Idosos", "objetivo": "Curso de 40hrs com foco em cuidados para idosos"},
        {"nome": "Assistente de Recursos Humanos", "objetivo": "Curso de 20hrs de noções de recursos humanos"},
        {"nome": "Pintura em Tecido", "objetivo": "Curso de 15hrs sobre técnicas de pintura em tecido"},
        {"nome": "Fotografia Básica", "objetivo": "Curso de 25hrs de introdução à fotografia"},
        {"nome": "Marketing Digital", "objetivo": "Curso de 30hrs de fundamentos de marketing online"},
        {"nome": "Atendimento ao Cliente", "objetivo": "Curso de 20hrs para habilidades de atendimento"},
        {"nome": "Informática para Idosos", "objetivo": "Curso de 25hrs com introdução ao uso do computador para idosos"},
        {"nome": "Desenvolvimento Pessoal", "objetivo": "Curso de 15hrs com foco em habilidades pessoais"},
        {"nome": "Artesanato com Materiais Recicláveis", "objetivo": "Curso de 10hrs para criação de peças com recicláveis"},
    ]

    # Criar cursos
    for curso in cursos:
        criar_curso(curso)
        time.sleep(2)

    # Criar turmas para cada curso
    for index in range(0, 25):
        # Gerar datas de exemplo
        data = gerar_data_aleatoria()
        data_sete = data + timedelta(days=7)

        criar_turma({
            "dataInicio": data.strftime("%Y-%m-%d"),
            "dataFim": data_sete.strftime("%Y-%m-%d"),
            "hora": gerar_horario_aleatorio(),
            "numeroMaximoAlunos": random.randint(10, 30),
            "idCurso": random.randint(1, 20)
        })
        time.sleep(2)
    
    # Criar os parametros
    lista_parametros:list[dict] = [
        {"descricao": "Pessoa com deficiência", "peso": 1},
        {"descricao": "Escolaridade: Alfabetizado.", "peso": 1},
        {"descricao": "Escolaridade: Fundamental Comp.", "peso": 1},
        {"descricao": "Escolaridade: Médio Comp.", "peso": 1},
        {"descricao": "Escolaridade: Outros.", "peso": 1},
        {"descricao": "Beneficiários de programas de transferência de renda", "peso": 100},
        {"descricao": "Encaminhamento dos serviços do Sistema Único de Assistência Social de Belo Horizonte (SUAS/BH)", "peso": 100},
        {"descricao": "Jovens de 16 a 21 anos", "peso": 1},
        {"descricao": "Beneficiárias(os) do Benefício de Prestação Continuada", "peso": 1},
        {"descricao": "Estar em cumprimento de pena em regime aberto e semiaberto", "peso": 1},
        {"descricao": "Ser regresso(a) do Sistema Prisional", "peso": 1},
        {"descricao": "Jovem em cumprimento/conclusão de medidas socioeducativas", "peso": 1},
        {"descricao": "Família Monoparental Feminina", "peso": 1},
        {"descricao": "Pertencer a família que vivenciaram ou estejam vivenciando situação de Trabalho Infantil", "peso": 1},
        {"descricao": "Ser do gênero feminino(cis ou trans)", "peso": 1},
        {"descricao": "Pertencer a grupos populacionais, tradicionais e específicos", "peso": 1},
        {"descricao": "Estar inserido precariamente ou não estar inserido no mundo do trabalho", "peso": 1},
        {"descricao": "Vivenciar contexto de migração interna ou externa", "peso": 1},
        {"descricao": "Atender a pelo menos um dos objetivos do curso", "peso": 1},
        {"descricao": "Pessoa em Situação de Rua ou que têm trajetória de vida nas ruas", "peso": 1},
        {"descricao": "Se autodeclarar preto ou pardo", "peso": 1},
        {"descricao": "Estar em situação de acolhimento institucional ou familiar.", "peso": 1},
        {"descricao": "jovem regresso do Serviço de Acolhimento Institucional por +18 anos sem referência familiar", "peso": 1},
        {"descricao": "Estar inscrito no Cadastro Único para Programas Sociais", "peso": 1},
        {"descricao": "Ser Público LGBT", "peso": 1},
        {"descricao": "Pertencer à família com renda familiar per capita de até 1/2 salário mínimo", "peso": 1},
    ]

    for parametro in lista_parametros:
        criar_parametros(parametro)
        time.sleep(2)
    
    lista_alunos:list[dict] = [
        {
            "nome": "Teste",
            "cpf": "03659082821",
            "cep": "32340480",
            "nomeMae": "Mae Teste",
            "email": "teste@email.com",
            "telefone": "3133344568",
            "celular": "989870061",
            "dataNascimento": "2024-11-02",
            "carteiraIdentidade": "123456789",
            "orgaoEmissor": "ssp",
            "pisPasep": "123456",
            "numeroCTPS": "12345",
            "serieCTPS": "12345",
            "sexo": "m",
            "complemento": "casa",
            "numeroLocalidade": 222
        },
        {
            "nome": "Teste2",
            "cpf": "92567936017",
            "cep": "30525490",
            "nomeMae": "Mae Teste2",
            "dataNascimento": "2024-11-02",
        }
    ]
    for aluno in lista_alunos:
        gerar_pessoa(aluno)
        time.sleep(2)

# Executar o script para gerar a massa de dados
if __name__ == "__main__":
    gerar_massa_de_dados()
