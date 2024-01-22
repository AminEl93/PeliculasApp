# PeliculasApp
Esta aplicación consiste en poder obtener los estrenos y las películas más recientes. Al clicar en cualquier película, obtendremos toda su información de manera dinámica: **título**, **sinopsis**, **valoración**, **calificación por estrellas** y **reparto de actores/actrices**. Adicionalmente, también hay un buscador para encontrar la información de cualquier película que queramos ver.

La extensa base de datos para obtener todas las películas proviene de [TheMovieDB](https://www.themoviedb.org/?language=ca-ES) y su respectiva [API](https://developer.themoviedb.org/reference/intro/getting-started) para hacer las llamadas correspondientes. El código de este proyecto se ha generado con la versión 16.0.0 de [Angular CLI](https://github.com/angular/angular-cli), con la versión 18.16.0 de NodeJS y con la versión 9.6.6 de npm.

TheMovieDB requiere una API Key obligatoria que se obtiene al registrarse en la plataforma. Sin esa llave de acceso, no se pueden obtener las películas. Para configurar la llave, se ha de crearla dentro de la ruta `src/environments/environment.ts`. 