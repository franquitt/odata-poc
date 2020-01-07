# odata-poc
La finalidad de este repositorio es mostrar una rapida implementacion de **odata** en node e interactuar con ella a traves de una sencilla app
en react.
Esta pensado para correrse en dos contenedores docker, uno para backend y otro para el front. Para iniciarlos basta con correr **sudo docker-compose up**
en el directorio del backend y luego en el del frontend.

## Binding
Los contenedores docker van a brindar 3 servicios en los siguientes puertos
- http://localhost:3000/books  => API Endpoint de Odata
- http://localhost:3001        => MongoDB
- http://localhost:3002        => FrontEnd

# Tools
- node-odata: https://github.com/TossShinHwa/node-odata
- react
- docker
