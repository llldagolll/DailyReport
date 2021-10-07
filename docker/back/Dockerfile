FROM python:3.8.2-buster

ENV LANG C.UTF-8
ENV TZ Asia/Tokyo

# pip installs
COPY ./docker/back/requirements.txt requirements.txt
RUN apt-get update
RUN /usr/local/bin/python -m pip install --upgrade pip
RUN pip install -r requirements.txt

WORKDIR /app
