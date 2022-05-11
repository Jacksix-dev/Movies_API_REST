[33mcommit 2d6ea9f347c3fa2983f96debf828035b301de6ec[m[33m ([m[1;36mHEAD -> [m[1;32mmaster[m[33m)[m
Author: Jacksix-dev <facundogasco@gmail.com>
Date:   Wed May 11 13:53:10 2022 -0300

    first commit

[1mdiff --git a/categorias.html b/categorias.html[m
[1mnew file mode 100644[m
[1mindex 0000000..ddebff3[m
[1m--- /dev/null[m
[1m+++ b/categorias.html[m
[36m@@ -0,0 +1,33 @@[m
[32m+[m[32m<!DOCTYPE html>[m
[32m+[m[32m<html lang="en">[m
[32m+[m[32m<head>[m
[32m+[m[32m    <meta charset="UTF-8">[m
[32m+[m[32m    <meta http-equiv="X-UA-Compatible" content="IE=edge">[m
[32m+[m[32m    <meta name="viewport" content="width=device-width, initial-scale=1.0">[m
[32m+[m[32m    <title>Accion</title>[m
[32m+[m[32m</head>[m
[32m+[m[32m<body>[m
[32m+[m
[32m+[m[32m    <section>[m
[32m+[m[32m       <a href="C:\Users\Jacksix\Desktop\Proyectos Personales Programacion\Portafolio\Movies_API\index.html">[m
[32m+[m[32m       <div><img src="" alt=""> </div>[m[41m [m
[32m+[m[32m       </a>[m
[32m+[m
[32m+[m[32m       <div>[m
[32m+[m[32m           <div></div> <p>Accion</p>[m
[32m+[m[32m       </div>[m
[32m+[m[41m            [m
[32m+[m
[32m+[m[32m    </section>[m
[32m+[m
[32m+[m[32m    <section>[m
[32m+[m[32m        <img alt="">[m
[32m+[m
[32m+[m[32m    </section>[m
[32m+[m
[32m+[m[32m    <footer>[m
[32m+[m
[32m+[m[32m        <div> <p> Hecho con amor por @JacksixDev</p></div>[m
[32m+[m[32m    </footer>[m
[32m+[m[32m</body>[m
[32m+[m[32m</html>[m
\ No newline at end of file[m
[1mdiff --git a/index.html b/index.html[m
[1mnew file mode 100644[m
[1mindex 0000000..ed49b29[m
[1m--- /dev/null[m
[1m+++ b/index.html[m
[36m@@ -0,0 +1,77 @@[m
[32m+[m[32m<!DOCTYPE html>[m
[32m+[m[32m<html lang="en">[m
[32m+[m[32m<head>[m
[32m+[m[32m    <meta charset="UTF-8">[m
[32m+[m[32m    <meta http-equiv="X-UA-Compatible" content="IE=edge">[m
[32m+[m[32m    <meta name="viewport" content="width=device-width, initial-scale=1.0">[m
[32m+[m[32m    <title>Movies</title>[m
[32m+[m[32m    <link rel="stylesheet" href="C:\Users\Jacksix\Desktop\Proyectos Personales Programacion\Portafolio\Movies_API\styles.css">[m
[32m+[m[32m</head>[m
[32m+[m[32m<body>[m
[32m+[m
[32m+[m[32m    <section>[m
[32m+[m[32m    <p id="main_title">JackMovies</p>[m
[32m+[m
[32m+[m[32m    <input type="text" placeholder="Buscar...">[m
[32m+[m
[32m+[m[32m    </section>[m
[32m+[m
[32m+[m[32m    <section>[m
[32m+[m
[32m+[m[32m    <p>Trending</p> <a href=""><p>Ver Mas</p></a>[m
[32m+[m
[32m+[m[32m    </section>[m
[32m+[m
[32m+[m[32m    <section>[m
[32m+[m
[32m+[m[32m        <img src="" alt="">[m
[32m+[m
[32m+[m[32m    </section>[m
[32m+[m
[32m+[m[32m    <section id="categorias">[m
[32m+[m
[32m+[m[32m        <h1>Categorias</h1>[m
[32m+[m[32m        <div id="cat_container">[m
[32m+[m
[32m+[m[32m                <a href="C:\Users\Jacksix\Desktop\Proyectos Personales Programacion\Portafolio\Movies_API\categorias.html">[m
[32m+[m[32m                 <div></div> <p>Accion</p>[m
[32m+[m[32m                </a>[m
[32m+[m
[32m+[m[32m                <a href="http://">[m
[32m+[m[32m                    <div></div> <p>Aventura</p>[m
[32m+[m[32m                   </a>[m
[32m+[m
[32m+[m[32m                   <a href="http://">[m
[32m+[m[32m                    <div></div> <p>Comedia</p>[m
[32m+[m[32m                   </a>[m
[32m+[m
[32m+[m[32m                   <a href="http://">[m
[32m+[m[32m                    <div></div> <p>Romance</p>[m
[32m+[m[32m                   </a>[m
[32m+[m
[32m+[m[32m                   <a href="http://">[m
[32m+[m[32m                    <div></div> <p>Musical</p>[m
[32m+[m[32m                   </a>[m
[32m+[m
[32m+[m[32m                   <a href="http://">[m
[32m+[m[32m                    <div></div> <p>Drama</p>[m
[32m+[m[32m                   </a>[m
[32m+[m
[32m+[m[41m                   [m
[32m+[m[41m            [m
[32m+[m
[32m+[m[41m            [m
[32m+[m
[32m+[m[32m        </div>[m
[32m+[m
[32m+[m[32m    </section>[m
[32m+[m
[32m+[m[32m    <footer>[m
[32m+[m
[32m+[m[32m        <div> <p> Hecho con amor por @JacksixDev</p></div>[m
[32m+[m[32m    </footer>[m
[32m+[m[41m    [m
[32m+[m
[32m+[m[32m    <script src="C:\Users\Jacksix\Desktop\Proyectos Personales Programacion\Portafolio\Movies_API\main.js"></script>[m
[32m+[m[32m</body>[m
[32m+[m[32m</html>[m
\ No newline at end of file[m
[1mdiff --git a/main.js b/main.js[m
[1mnew file mode 100644[m
[1mindex 0000000..e69de29[m
[1mdiff --git a/styles.css b/styles.css[m
[1mnew file mode 100644[m
[1mindex 0000000..e69de29[m
