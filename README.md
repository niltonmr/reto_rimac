# reto_rimac

<!--
title: 'APIs - Integración SWAPI - DYNAMODB'
description: 'Creación de APIs con Node.js usando el framework Serverless y con despliegue en AWS.'
layout: Doc
framework: v1
platform: AWS
language: nodeJS

-->
## Serverless REST API

- Integración con DynamoDB - Base de datos de clientes
- Integración con servicios externos SWAPI - https://swapi.py4e.com/ 

## Setup

Pasos para la instalación:

- Paso #1 
  - npm install serverless -g
- Paso #2 
  - serverless install -u https://github.com/niltonmr/reto_rimac.git -n reto-rimac

## Deploy

Paso #1
Ubicarse en el directorio del proyecto y abrir la consola para comandos en línea (PowerShell)

Paso #2
Desde el puntero de comandos ejecutar el siguiente comando:
serverless deploy

Paso #2 (Alternativo)
Desde el puntero de comandos ejecutar el siguiente comando:
yarn deploy
## Endpoints

Servicios de consulta a SWAPI:
  GET - https://pxn6ss8xbd.execute-api.us-east-1.amazonaws.com/dev/api/people/{id}
  GET - https://pxn6ss8xbd.execute-api.us-east-1.amazonaws.com/dev/api/people
  GET - https://pxn6ss8xbd.execute-api.us-east-1.amazonaws.com/dev/api/vehicle/{id}
  GET - https://pxn6ss8xbd.execute-api.us-east-1.amazonaws.com/dev/api/vehicles

Servicios de escritura y lectura a la base de datos clientes:
  POST - https://pxn6ss8xbd.execute-api.us-east-1.amazonaws.com/dev/api/putclient
  GET - https://pxn6ss8xbd.execute-api.us-east-1.amazonaws.com/dev/api/getClient/{id}


### Uso
CONSULTAS SOBRE LA SAGA STAR WAR:
=================================
Puede consultar detalles todas de los personajes de la saga Star War
  GET - https://pxn6ss8xbd.execute-api.us-east-1.amazonaws.com/dev/api/people
Puede consultar detalles un personaje en particular de la saga Star War
  GET - https://pxn6ss8xbd.execute-api.us-east-1.amazonaws.com/dev/api/people/{id}
Puede consultar detalles todos de los vehiculos de la saga Star War
  GET - https://pxn6ss8xbd.execute-api.us-east-1.amazonaws.com/dev/api/vehicles
Puede consultar detalles un vehiculo en particular de la saga Star War
  GET - https://pxn6ss8xbd.execute-api.us-east-1.amazonaws.com/dev/api/vehicle/{id}

REGISTRO Y CONSULTA A LA BASE DE DATOS CLIENTES:
================================================
Puede registrar clientes en la base de datos 
  POST - https://pxn6ss8xbd.execute-api.us-east-1.amazonaws.com/dev/api/putclient
Puede consultar detalles de un cliente en particular a traves de su identificador
  GET - https://pxn6ss8xbd.execute-api.us-east-1.amazonaws.com/dev/api/getClient/{id}



### Consultar detalles todas de los personajes
  Tipo: GET
  Endpoint: https://pxn6ss8xbd.execute-api.us-east-1.amazonaws.com/dev/api/people
  Ejemplo: https://pxn6ss8xbd.execute-api.us-east-1.amazonaws.com/dev/api/people

### Consultar detalles un personaje en particular 
  Tipo: GET
  Endpoint: https://pxn6ss8xbd.execute-api.us-east-1.amazonaws.com/dev/api/people/{id}
  Ejemplo: https://pxn6ss8xbd.execute-api.us-east-1.amazonaws.com/dev/api/people/1
  
### Consultar detalles todos de los vehiculos 
  Tipo: GET
  Endpoint: https://pxn6ss8xbd.execute-api.us-east-1.amazonaws.com/dev/api/vehicles
  Ejemplo: https://pxn6ss8xbd.execute-api.us-east-1.amazonaws.com/dev/api/vehicles

### Consultar detalles un vehiculo en particular
  Tipo: GET
  Endpoint: https://pxn6ss8xbd.execute-api.us-east-1.amazonaws.com/dev/api/vehicle/{id}
  Ejemplo: https://pxn6ss8xbd.execute-api.us-east-1.amazonaws.com/dev/api/vehicle/4

### Registrar clientes en la base de datos 
  Tipo: POST
  Endpoint: https://pxn6ss8xbd.execute-api.us-east-1.amazonaws.com/dev/api/putclient
  Ejemplo: https://pxn6ss8xbd.execute-api.us-east-1.amazonaws.com/dev/api/putclient
            body en formato JSON:
                {
                "dni": "10102020",
                "name": "Juanito",
                "lastName": "Alimaña",
                "address": "Los Moches 138",
                "birthday": "28/2/2019",
                "salary": "15000"
                }

### Consultar detalles de un cliente en particular
  Tipo: GET
  Endpoint: https://pxn6ss8xbd.execute-api.us-east-1.amazonaws.com/dev/api/getClient/{id}
  Ejemplo: https://pxn6ss8xbd.execute-api.us-east-1.amazonaws.com/dev/api/getClient/8b5d76be-8031-4122-9318-26bb6a548495
