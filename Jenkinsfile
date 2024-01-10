pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                echo 'Building..'
            }
        }
        stage('Test') {
            steps {
                echo 'Testing..'
            }
        }
        stage('Deploy') {
            steps {
                cd /home/orphee/jenkinspipelinehelloword
                git pull origin main
                docker compose down
                docker compose up --build -d
            }
        }
    }
}
