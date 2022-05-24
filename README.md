# angular-games-crud-mysql
Antes de comenzar debes tener instalado Visual studio Code, NodeJS, Git, TypeScript, Angular CLI y XAMPP

Pasos para arrancar el proyecto
1) Abrir terminal de Git y clonar el proyecto, usar el comando: git clone https://github.com/RickZF/angular-games-crud-mysql.git
2) Abrir XAMPP activar Apache y MySQL, en phpmyadmin crear la base de datos con el archivo database/database.sql
3) Abrir la carpeta del proyecto con Visual Studio Code y abrir una terminal con ctrl+shift+ñ
4) Moverse a la carpeta server con el comando: cd server
5) Dentro de server instalar las dependencias con el comando: npm install 
6) Dentro de server activar el watch mode de TypeScript con el comando: npm run build
7) Abrimos otra terminal nos movemos a server y arrancamos la REST API con el comando: npm run dev
8) Abrimos otra terminal (esta sería la tercera terminal abierta) y nos movemos a la carpeta client con el comando: cd client
9) Dentro de client escribimos el comando: npm install
10) Arrancamos el servidor de angular con el comando: npm run start
11) Abrimos el navegador chrome y en la barra de direcciones escribimos http://localhost:4200/
12) Observaremos la barra de navegación del proyecto, ir a la pestaña add game para comenzar a agregar juegos en la base de datos

![](docs/screenshot.png)
![](docs/screenshot2.png)
