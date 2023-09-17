# Recursos GCP
- Cloud Run
- Banco Cloud SQL (MySQL)
- Secret: curta-praia-database-name
- Secret: curta-praia-database-username
- Secret: curta-praia-database-password
- Secret: curta-praia-instance-connection-name

## Conectar via client no banco de dados
``cloud-sql-proxy intense-arbor-396801:us-central1:curta-praia-pi --port 3306``

## Build
mvn -T 2C clean package
docker build -f ./src/docker/Dockerfile . -t us-central1-docker.pkg.dev/intense-arbor-396801/curta-praia/curta-praia:latest
docker push us-central1-docker.pkg.dev/intense-arbor-396801/curta-praia/curta-praia:latest