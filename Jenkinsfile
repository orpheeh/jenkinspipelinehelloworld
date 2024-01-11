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
                sh "sudo chmod +x -R ${env.WORKSPACE}"
                sh "./deploy.sh" 
            }
        }
    }
}
