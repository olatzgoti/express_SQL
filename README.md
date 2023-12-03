# express_SQL

# FASE 1
# Creación de main.js para la creación de bases de datos desde el vscode utilizando NODE JS, express.

- Importo express y mysql2 y creo puerto de conexión al localhost
- Creación de conexión a la bbdd de SQL

- Creación de endpoints para:
 - creación de base de datos, tablas y relaciones N:M
 - inserción de productos y categorias vía .post
 - getAll (products y categories)
 - getAll con relación INNER JOIN



  Ejercicio 4

Crea un endpoint que muestra todos los productos con sus categorías 
Crea un endpoint donde puedas seleccionar un producto por id
Crea un endpoint que muestre de forma descendente los productos.
Crea un endpoint donde puedas seleccionar una categoría por id
Crea un endpoint donde puedas buscar un producto por su nombre

  Ejercicio 5
Crea un endpoint donde puedas eliminar un producto por su id




Incidentes:

# FASE 2
# Implementar el patrón de diseño MVC

 - Creación de carpeta config
Crea una carpeta config  con mis datos de acceso a la base de datos SQL y creación de ejemplo de acceso a  con archivo => database.example.js . Contiene lo mismo sin mis credenciales. Recuerda no subir tu archivo database.js a tu repositorio github.


 - Crear estructura de carpetas

Creación de Routes para las distintas funcionalidades del MVC.
  Products
Creación de archivo products.js dentro de una carpeta routes que contenga todas las rutas de products
Crea un ProductController.js que contenga todas las acciones de los productos

  Categories

Crea un archivo categories.js dentro de una carpeta routes que contenga todas las rutas de categories
Crea un CategoryController.js que contenga todas las acciones de los categories
