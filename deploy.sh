cd /home/orphee/jenkinspipelinehelloworld 
sudo git pull origin master
sudo git checkout master
sudo docker compose down
sudo docker compose up --build -d
