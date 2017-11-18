#!/usr/bin/env bash

eval `docker-machine env bankinstance02`

array=('./portainer_elk'
)

# we go to the root of the project
cd ..

for ((i = 0; i < ${#array[@]}; ++i)); do
  # we go to each folder
  cd ${array[$i]}
  sh ./start-service.sh
  # and we go back to the root again :D
  cd ..
done
