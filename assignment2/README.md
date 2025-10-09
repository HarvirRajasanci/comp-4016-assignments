# Assignment 2 - Kubernetes Deployment

## Overview
This is a Node.js/Express.js application designed for Kubernetes deployment with three specific endpoints that demonstrate ConfigMap, Secret, and environment variable usage.

## Endpoints
- `GET /configValue` - Returns value from ConfigMap
- `GET /secretValue` - Returns value from Secret  
- `GET /envValue` - Returns value from environment variable
- `GET /foo` - Returns "bar" (original endpoint)
- `POST /hello` - Accepts JSON with name field
- `GET /kill` - Terminates the container

## Building and Deploying

### 1. Build Docker Image
```bash
docker build -t harvirr/assignment2-app:latest .
```

### 2. Push to DockerHub
```bash
docker push harvirr/assignment2-app:latest
```

### 3. Deploy to Kubernetes
Apply the YAML files in this order:
```bash
kubectl apply -f namespace.yaml
kubectl apply -f configmap.yaml
kubectl apply -f secret.yaml
kubectl apply -f deployment.yaml
kubectl apply -f service.yaml
```

### 4. Test Endpoints
```bash
curl localhost:30000/configValue
curl localhost:30000/secretValue
curl localhost:30000/envValue
```

## Files
- `server.js` - Express.js application
- `Dockerfile` - Container configuration
- `namespace.yaml` - Kubernetes namespace
- `configmap.yaml` - ConfigMap with configValue
- `secret.yaml` - Secret with secretValue
- `deployment.yaml` - Deployment with volume mounts
- `service.yaml` - NodePort service on port 30000
- `submission.txt` - Submission information
