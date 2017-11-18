#!/usr/bin/env bash

for server in  ip-172-31-19-131   ip-172-31-21-242  ip-172-31-21-242  bankinstance5-worker
do
#    eval `docker-machine env $server`

 #   echo $(env | grep DOCKER)

 #   docker rm -f api-gateway-service

 #   docker rmi api-gateway-service

  #  docker image prune

   # docker volume prune

  #  docker build -t api-gateway-service .

  #  docker run --name api-gateway-service -v /Users/Cramirez/.docker/machine/machines/$server:/certs --net='host' --env-file env -d api-gateway-service
eval `docker-machine env bankinstance01`
docker rm -f api-gateway-service
docker rmi api-gateway-service
docker image prune
docker volume prune
docker build -t api-gateway-service .
docker run --name api-gateway-service -v /home/ubuntu/.docker/machine/machines/manager1:/certs --net='host' --env-file env -d api-gateway-service
#docker run --name api-gateway-service  --net='host' --env-file env -d api-gateway-service
done
