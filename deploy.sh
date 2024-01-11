#!/bin/bash

cd /home/orphee/jenkinspipelinehelloworld 

sudo git checkout master
sudo git pull origin master

sudo docker compose down
sudo docker compose up --build -d
