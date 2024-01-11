#!/bin/bash

sudo git add .
sudo git commit -m "save for deploy"
sudo git checkout master
sudo git pull origin master

sudo docker compose down
sudo docker compose up --build -d
