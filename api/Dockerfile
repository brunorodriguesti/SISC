FROM ubuntu:latest AS build

RUN apt-get update
RUN apt-get install openjdk-17-jdk -y


RUN apt-get install maven -y
COPY . .
RUN mvn clean install -DskipTests

FROM openjdk:17-jdk-slim
COPY . .

EXPOSE 8080

COPY --from=build /target/sisc-0.0.1-SNAPSHOT.jar app.jar

ENTRYPOINT [ "java", "-jar", "app.jar" ]