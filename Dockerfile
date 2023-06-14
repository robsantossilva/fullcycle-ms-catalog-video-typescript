FROM node:16.20.0-slim

RUN mkdir -p /usr/share/man/man1
#RUN echo 'deb [check-valid-until=no] http://archive.debian.org/debian stretch-backports main' | tee /etc/apt/sources.list.d/stretch-backports.list
RUN apt-get update 
RUN apt install -y git
RUN apt install -y openssh-client
RUN apt install -y ca-certificates
RUN apt install -y openjdk-11-jre

ENV JAVA_HOME="/usr/lib/jvm/java-11-openjdk-amd64"

USER node

WORKDIR /home/node/app

CMD [ "sh", "-c", "npm install && tail -f /dev/null" ]