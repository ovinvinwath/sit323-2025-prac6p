**Steps to test out Kubernetes functionality using my simple calculator app as a base application example**
1.	Clone this repository
2.	Navigate to the repository directory or just download the files here on this repo and place them in a folder, then navigate to it.
3.	Make sure to have Docker installed and running.
4.	Enable the Docker Kubernetes cluster via the settings on the Docker desktop, or have a local Kubernetes cluster setup like Minikube.
5.	Make sure you have “kubectl” installed and configured. (Chances are, if you have installed Docker, this is installed into your CLI, but to make sure, type “kubectl version” on your CLI)
6.	After checking all this, open VS Code in your navigated folder
7.	Assuming you are using Docker Kubernetes going forward, build your Docker image by typing this in your CLI or VS Code terminal:
   
-	docker build -t your-docker-username/sit323-2025-prac5p-app:latest
  
8.	Deploy Kubernetes by typing the following on the terminal
   
-	kubectl apply -f feploy deployment.yaml
-	kubectl apply -f service.yaml
  
9.	Verify deployment by typing this in your terminal
    
-	kubectl get pods
-	kubectl get services
  
10.	Check the nodeport assigned, eg; 31244, and navigate to http://localhost:[NodePort]
11.	You should see the landing text for the calculator application
    
**Troubleshooting**
If you are denied access to the application on the webpage or get a 403/404 error, it's most likely that you may need to push this code to Docker Hub.
-	Log in to Docker Hub via browser or type “docker login” on your terminal
-	Create a new public repository called sit323-2025-prac5p-app
-	On your terminal, type "docker push docker push <your docker hub username>/sit323-2025-prac5p-app:[tagname]"
-	You can use the tagname “latest”
-	Now, try accessing the app on your browser.
