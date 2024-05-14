FROM maven:3.6.3-openjdk-17

WORKDIR /deploy

COPY . /app

RUN rm -rf target/

RUN mvn clean package
RUN ls -la target/

EXPOSE 8080

ENTRYPOINT ["mvn", "spring-boot:run"]