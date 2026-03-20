pipeline {
    agent any

    environment {
        AWS_REGION = "ap-south-1"
        ECR_REPO = "634526447081.dkr.ecr.us-east-1.amazonaws.com/devops-app"
        IMAGE_TAG = "${BUILD_NUMBER}"
    }

    stages {

        stage('Checkout Code') {
            steps {
                git 'https://github.com/tushar9861/blue-green-devops-app.git'
            }
        }

        stage('Build Docker Image') {
            steps {
                script {
                    sh "docker build -t devops-app:${IMAGE_TAG} ."
                }
            }
        }

        stage('Tag Image') {
            steps {
                script {
                    sh "docker tag devops-app:${IMAGE_TAG} ${ECR_REPO}:${IMAGE_TAG}"
                }
            }
        }

        stage('Push to ECR') {
            steps {
                script {
                    sh """
                    aws ecr get-login-password --region ${AWS_REGION} | \
                    docker login --username AWS --password-stdin ${ECR_REPO}
                    docker push ${ECR_REPO}:${IMAGE_TAG}
                    """
                }
            }
        }
    }
}
