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
                sh "chmod +x -R ${env.WORKSPACE}"
                dir('/home/orphee/jenkinspipelinehelloworld') {
                    sh "./deploy.sh"
                }
            }
        }
    }
}
