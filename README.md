# odata-poc
La finalidad de este repositorio es mostrar una rapida implementacion de **odata** en node e interactuar con ella a traves de una sencilla app en react. La libreria utiliza OData v4 aunque no completamente adoptada, faltandole acciones y operadores para una cobertura del 100% del estandar.

### Tecnologías:
- NodeJS
- MongoDB
- node-odata: https://github.com/TossShinHwa/node-odata
- react


### Despliegue
Esta pensado para correrse en dos contenedores docker, uno para backend y otro para el front. Para iniciarlos basta con correr en el directorio del backend y luego en el del frontend:

1. Clonar el repo o descargar el repositorio:
```bash
	git clone https://github.com/franquitt/odata-poc
```
2. Posicionarse sobre la carpeta container y ejecutar el siguiente comando para contruir la imagen y el contenedor:
```bash
	cd odata-poc/backendOdata
```
3. Levantar los contenedores
```bash
	sudo docker-compose up
```


## Uso
Los contenedores docker van a brindar 3 servicios en los siguientes puertos
- http://localhost:3000/books  => API Endpoint de Odata
- http://localhost:3001        => MongoDB
- http://localhost:3002        => FrontEnd
