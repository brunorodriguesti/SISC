@echo off
setlocal

:: Nome da imagem Docker
set IMAGE_NAME=python_massa_dados

:: Passo 1: Compilar a imagem Docker
echo Construindo a imagem Docker...
cd .\massa_dados
docker build -f Dockerfile.python -t %IMAGE_NAME% .

:: Verifica se a imagem foi criada com sucesso
if %ERRORLEVEL% neq 0 (
    echo Erro ao construir a imagem Docker.
    exit /b 1
)

:: Passo 2: Executar o contêiner e rodar o script massa_dados.py
echo Executando o contêiner e o script massa_dados.py...
docker run --rm %IMAGE_NAME% python massa_dados.py

:: Verifica se o script foi executado com sucesso
if %ERRORLEVEL% neq 0 (
    echo Erro ao executar o script massa_dados.py.
    exit /b 1
)

echo Script massa_dados.py executado com sucesso no contêiner!
endlocal
