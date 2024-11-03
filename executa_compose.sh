#!/bin/bash

# Nome do arquivo docker-compose
COMPOSE_FILE="docker-compose.yml"

# Passo 1: Construir as imagens do Docker Compose
echo "Construindo as imagens definidas no $COMPOSE_FILE..."
docker-compose -f $COMPOSE_FILE build

# Verifica se a construção foi bem-sucedida
if [ $? -ne 0 ]; then
  echo "Erro ao construir as imagens do Docker Compose."
  exit 1
fi

# Passo 2: Subir os serviços em segundo plano
echo "Iniciando os serviços em segundo plano..."
docker-compose -f $COMPOSE_FILE up -d

# Verifica se os serviços subiram corretamente
if [ $? -ne 0 ]; then
  echo "Erro ao iniciar os serviços do Docker Compose."
  exit 1
fi

echo "Serviços iniciados com sucesso!"
