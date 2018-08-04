[img1]: img1.png
[img2]: img2.png

# Examen tecnico

### Objetivo
Crear una aplicación de busqueda de hoteles, aplicando dos filtros. El examen contempla tanto la seccion Front-End( Responsive Desing ) como la Back-End (API).

### Tecnologias aplicadas

#### Front-End
* AngularJs 
* Flexboxgrid.css 
* Webpack
* SASS

#### Back-End
* NodeJs 
* Base de datos 
    * Desarrollo: Archivo json
    * Producción: MongoDb

### Muestra final

Desktop | Mobile 
--- | --- 
| ![alt][img1]| ![alt][img2]|


### Comandos para iniciar la aplicación

#### Clorar repositorio

```
git clone https://github.com/facundofernandez/TestAlMundo.git
```

#### Instalar dependencias

```
npm init
npm install
```

#### Iniciar Back-End

Para el desarrollo se utilizo nodemon. Si no lo dispone, instalarlo.

```
npm run server:dev
```

#### Iniciar Front-End

```
npm run watch:dev
```

#### Construir Aplicación para Producción
```
npm run build
```

# Extras

### Pruebas en Produccion (usando base de datos MongoDB en la nube)

```
npm run server:prod
```

### Iniciar Front-End

```
npm run watch:prod
```

### Uso de la api CRUD, se desarrollo R-U-D (solo en producción)

* Obtener hoteles

  * GET
  * http://localhost:8000/hotels/name/${name}
  * http://localhost:8000/hotels/stars/${stars}
  * http://localhost:8000/hotels/name/${name}/stars/${stars}

  > ${stars} es un string de numeros seguido de comas.
  > Ej: http://localhost:8000/hotels/name/Hotel/stars/3,2


* Crear hotel

  * POST
  * http://localhost:8000/hotels
  * Body Json
    ```
    {
        "id":"12345",
        "name":"Hotel Prueba 2",
        "stars": 1,
        "price": 2000,
        "image":"noim.png"
    }
    ```


* Modificar hotel

  * PUT
  * http://localhost:8000/hotels
  * Body Json
    ```
    {
        "id":"12345",
        "name":"Hotel Prueba Update",
        "stars": 3,
        "price": 2000,
        "image":"noim.png"
    }
    ```

* Eliminar hotel

  * DELETE
  * http://localhost:8000/hotels/${id}