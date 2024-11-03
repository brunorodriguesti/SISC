@echo off
setlocal

:: Nome do arquivo docker-compose
set COMPOSE_FILE=docker-compose.yml

:: Passo 1: Construir as imagens do Docker Compose
echo Construindo as imagens definidas no %COMPOSE_FILE%...
docker-compose -f %COMPOSE_FILE% build

:: Verifica se a construção foi bem-sucedida
if %ERRORLEVEL% neq 0 (
    echo Erro ao construir as imagens do Docker Compose.
    exit /b 1
)

:: Passo 2: Subir os serviços em segundo plano
echo Iniciando os serviços em segundo plano...
docker-compose -f %COMPOSE_FILE% up -d

:: Verifica se os serviços subiram corretamente
if %ERRORLEVEL% neq 0 (
    echo Erro ao iniciar os serviços do Docker Compose.
    exit /b 1
)

echo Serviços iniciados com sucesso!
endlocal
