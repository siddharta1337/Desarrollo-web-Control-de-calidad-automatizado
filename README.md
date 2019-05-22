# Desarrollo web: Control de calidad automatizado

Aprende a usar herramientas automatizadas de control de calidad para tus desarrollos web, para que sean consecuentes y anticiparte a los posibles problemas del código. Automatiza tus pruebas con PhantomJS, CasperJS y Gulp  y aprende a generar informes para asegurarte de que cuando un proyecto web sale a producción cumple todos los requisitos.


## UPDATE IMPORTANTE
Las versión de Gulp utilizada en este curso no es compatible con las últimas versiones de Node. Si tienes problemas para utilizar los ejemplos del curso tienes 2 posibles opciones:

- A) Reinstalar Node
- B) Actualizar Gulp

Ambas opciones tienen  ventajas y desventajas, por favor revisa el apartado correspondiente con detalles e instrucciones.

### Opcion A: Reinstalar Node

Las versiones más recientes de Node tienen problemas de compatibilidad con el código de este curso. Si deseas disfrutar el curso usando exactamente los mismo ejemplos y sin hacer ninguna modificación, debes seguir estos pasos:

- Desinstalar node de tu sistema
- Instalar la versión de node usada en el curso ( [Descarga del sitio de node aquí](https://nodejs.org/download/release/v6.10.0/) )
- Reiniciar tu equipo

Si todo sale correctamente podrás utilizar el mismo entorno de programación del curso y no será necesario hacer ninguna modificación a los ejercicios.

### Opcion B: Actualizar Gulp

Si deseas mantener la versión actual de node en tu sistema, es necesario que instales la versión más reciente de Gulp 4 y modificar ligeramente la sintaxis de las tareas que se muestran en el curso. Para actualizar tu código debes:

- localizar la carpeta update-2019
- reemplazar los archivos gulpfile.js y package.json del proyecto original por los que se encuentran en update-2019
- ejecutar el comando `npm install` para actualizar gulp

En el código actualizado se mantienen todas las tareas y librerías tal como se usan en el curso, pero con un formato actualizado para ejecutarse en la últimas versiones de Node y Gulp.


## Herramientas necesarias

Para este proyecto necesitarás:
- Un editor de código (Sublime Text, Visual Studio Code o Atom son recomendados)
- Acceso a la terminal de sistema
- NodeJS (instalado y configurado)
- Python (instalado y configurado)

## Instalación
Copia este repositorio en tu ordenador busca el archivo package.json y en esa carpeta ejecuta desde la terminal

```npm install```


### Descripción de carpetas
- *app* contiene el código fuente del proyecto que usaremos para pruebas
- *casper* contiene los archivos para ejecutar pruebas en CasperJS
- *phantom* contiene los archivos para ejecutar pruebas en PhantomJS

## Más información

Puedes contactarme en mis redes sociales

Facebook: https://www.facebook.com/carlos.solis1337
Youtube: www.youtube.com/user/RevolucionMobi?
