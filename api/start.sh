docker-compose down

docker build -t backend-sisc:latest ./

docker-compose up --build --force-recreate --remove-orphans