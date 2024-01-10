cd /home/orphee/jenkinspipelinehelloword
git pull origin main
docker compose down
docker compose up --build -d
