# Blog API

- Front: 
    - Obtener todas las publicaciónes
    - Obtener una en especifico
    - Obtener todas las categorias
    - Obtener todos los post de una categoria en especifico
    - Obtener todos los posts que he creado
    - Obtener todos los posts de un usuario en especifico
    - Podemos paginar los posts
    - Acciones de CRUD sobre Posts
    - Crear categorias


```json
    {
        "total": 68,
        "prev": "localhost:9000/api/v1/posts?start=51&limit=60",
        "next": "localhost:9000/api/v1/posts?start=61&limit=68",
        "data": [
            {
                "id": "665df962-8083-4e73-a664-f92d734d0404",
                "title": "Ejemplo",
                "content": "lorem ipsun",
                "createBy": {
                    "id": "51462dbb-47c1-400e-9d3f-7376dff1fba5",
                    "name": "Juan",
                    "email": "juan@gmail.com"
                },
                "category":{
                    "id": 13,
                    "name": "Technology"
                }
            }
        ]
    }

```
