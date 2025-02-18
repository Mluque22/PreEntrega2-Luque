# E-Commerce Store NBA

Este es un proyecto de un e-commerce para la venta de indumentaria de la NBA. Utiliza React para el desarrollo de la interfaz de usuario y Firebase como base de datos.

## Se utilizó:

- **React**: Librería de JavaScript para la construcción de la interfaz de usuario.
- **React Router**: Para la navegación entre diferentes vistas de la aplicación.
- **Firebase**: Utilizado para la base de datos en tiempo real.
- **PropTypes**: Para la validación de las propiedades de los componentes en React.
- **Tailwind CSS**: Framework CSS para un diseño rápido y adaptable.
- **React Context API**: Para el manejo global del carrito de compras.

## Características

- **Visualización de Productos**: Los productos se pueden ver en la página de inicio y se agrupan por categorías.
- **Detalle de Producto**: Los usuarios pueden ver los detalles completos de cada camiseta antes de añadirla al carrito.
- **Carrito de Compras**: Los usuarios pueden añadir productos al carrito, ver la cantidad seleccionada y eliminar productos.
- **Formulario de Checkout**: Los usuarios pueden completar su compra ingresando sus datos personales.
----------------------------------------------------------------------------------------------------------------------------------------------------
Funcionalidades

Visualización de productos: Filtrado de productos por categoría.
Carrito de compras: Añadir productos al carrito y cambiar la cantidad.
Checkout: Los usuarios pueden completar la compra y obtener un ID de orden simulado.
Validación de datos: Los campos del formulario de compra son validados.
Bibliotecas Utilizadas
React: Biblioteca principal para la construcción de la interfaz.
React Router: Para el enrutamiento de las páginas.
Firebase: Para almacenar los productos y gestionar el carrito de compras.
PropTypes: Para asegurar que los componentes reciban las propiedades correctas.
Tailwind CSS: Framework para diseñar rápidamente la interfaz con clases predefinidas.
----------------------------------------------------------------------------------------------------------------------------------------------------
Detalles de la Implementación

1. Contexto del Carrito de Compras
El carrito se maneja mediante la Context API de React. Los productos añadidos se almacenan globalmente y se pueden modificar desde cualquier componente que utilice el hook useCart.

2. Formulario de Checkout

El formulario captura los datos del usuario y simula la creación de una orden con un ID único. Al finalizar la compra, el carrito se limpia.

3. Rutas

Se utilizan rutas dinámicas con React Router para navegar entre páginas de categorías y detalles de productos.
----------------------------------------------------------------------------------------------------------------------------------------------------
Agradecimiento especial a Daniel Riverol, docente del curso de React en CoderHouse y al tutor Jerlib Gonzalez por su correcciones y ayudas en el transcurso de la clase.
----------------------------------------------------------------------------------------------------------------------------------------------------
Tu Nombre - Desarrollado por Matias Luque.