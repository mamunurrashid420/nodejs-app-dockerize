
# Node Js Install in linux
 ```
 rpm --import https://packages.microsoft.com/keys/microsoft.asc

 ```
# Create a vscode.repose 
 ```
vim /etc/yum.repos.d/vscode.repo

 ```

## Now packages Install
```

[code]
name=Visual Studio Code
baseurl=https://packages.microsoft.com/yumrepos/vscode
enabled=1
gpgcheck=1
gpgkey=https://packages.microsoft.com/key.microsoft.asc

```

## Now vscode.repose Install
```
yum install code -y
```
## Node Version check 

```
node -v
```

### Docker file Create

```
vim Dockerfile
```

## Dockerfile write
```
FROM node:slim
WORKDIR /app
COPY . /app
RUN npm install
EXPOSE 3000
CMD node index.js
```



## Docker file Image Build 

```
docker build -t node-app:v1.0.0 .
```

## Docker container RUN
```
docker run -d -p 3000:3000 node-app:v1.0.0
```
## Docker Container check 
```
docker ps
```