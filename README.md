# Como crear un API con Loopback



Para hacer un API hecho con Loopback

npm install -g @loopback/cli
lb4 --version  
lb4 app 
-- Seguir con el wizard de loopback

// Generar un endpoint 
lb4 controller hola   

// En el hola.controller.ts creado 
import {get} from '@loopback/openapi-v3';

export class HolaController {
constructor() {}
@get('/hola')
hola():string {
return 'Hola banda'
    }
}

## Hacer un CRUD

lb4 model // seguir con wizard
tipo entity
no a additional properties

## Para datasource que va a usar LoopBack
lb4 datasource

➜  alumnos-api-loopback git:(master) ✗ lb4 datasource
? Datasource name: mongo_connection
? Select the connector for mongo_connection: MongoDB (supported by StrongLoop)
? Connection String url to override other settings (eg: mongodb://username:passw
ord@hostname:port/database): 
? host: cluster0-av09l.mongodb.net
? port: 27017
? user: salochara
? password: [hidden]
? database: desarrolloweb_clase
? Feature supported by MongoDB v3.1.0 and above: Yes

## repository
lb4 repository

 lb4 controller

