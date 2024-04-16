<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="zoom-in-left")
      .titulo-principal__numero
        span 2
      h1 Arquitectura de despliegue de aplicaciones y servicios

    p(data-aos="fade-down").mb-5 En el desarrollo de aplicaciones, es necesario tener claridad sobre la pertinencia de cada herramienta de desarrollo según el proyecto, debido a que el uso o no de una herramienta, tiene costos asociados que pueden impactar el alcance y recursos del proyecto. 

    .row.justify-content-center.align-items-center.mb-4           
      .col-lg-9.my-3
        .bg8.px-3.brad.h-100.j(data-aos="fade-left")
          .row.justify-content-center.align-items-center(data-aos="flip-down")           
            .col-lg-auto.my-3
              img.img-a.img-t(src='@/assets/curso/temas/21.png', alt='')       
            .col.my-3
              p(data-aos="fade-down").mb-0 Es importante analizar los diferentes tipos de licencias pagadas y libres a nivel de sistemas operativos, lo mismo aplica con herramientas usadas para el desarrollo de un producto como IDE, sistemas gestores de bases de datos, herramientas para la ejecución de pruebas, entre otros.    

        .row.justify-content-center.align-items-center.my-3(data-aos="flip-down")           
          .col-auto.my-3
            img.img-a.img-t.mov(src='@/assets/curso/temas/23.png', alt='')       
          .col.my-3
            p(data-aos="fade-down").mb-0 También se debe hacer un balance y un análisis serio sobre las mejores opciones, de acuerdo con las necesidades de los clientes y teniendo en cuenta los requisitos no funcionales definidos. 

        p(data-aos="fade-down") Por esta razón, es importante elegir las herramientas que harán parte de la arquitectura tecnológica definida para el desarrollo y posterior despliegue e implementación de la solución tecnológica, construida de acuerdo con el tipo de proyecto y tipo de cliente para el cual se pretende desarrollar el proyecto.     

        h5.t1(data-aos="fade-down") En el siguiente video, podemos estudiar los componentes de una arquitectura de #[i software]:               
      .col-lg-3.my-3
        img.img-a.img-t(src='@/assets/curso/temas/22.png', alt='')       

    .row.justify-content-center.align-items-center.mb-5           
      .col-lg-12(data-aos="fade-left")     
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    Separador 
    #t_2_1.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2 2.1 Plataformas de desarrollo e implantación de aplicaciones y servicios   

    p(data-aos="fade-down").mb-5 A continuación, se relacionan algunas de las plataformas de desarrollo e implantación de aplicaciones y servicios más comunes o de mayor popularidad, dependiendo del proyecto a construir:

    .row.bg10.align-items-center
      .col-lg-12.col-12.px-lg-5.p-5 
        .row.justify-content-center.align-items-center          
          .col-lg-12 
            .tarjeta.tarjeta--gris.bgw.p-4(data-aos="fade-left")
              SlyderA(tipo="b")
                .row.justify-content-center.p-2
                  .col-lg-6.my-3.col-md-auto
                    h4.t1 LAMP
                    p Es quizá la plataforma tecnológica más utilizada y popular en el ámbito del desarrollo web, es el acrónimo usado para describir un sistema de infraestructura de internet que usa las siguientes herramientas:
                    ul.lista-ul.fa-ul.mb-0                   
                      li 
                        i.fas.fa-code.color1
                        | Linux, el sistema operativo.
                      li 
                        i.fas.fa-code.color1
                        | Apache, el servidor web.
                      li 
                        i.fas.fa-code.color1
                        | MySQL/MariaDB, el gestor de bases de datos.
                      li 
                        i.fas.fa-code.color1
                        | PHP, PERL, PYTHON, el lenguaje de programación. 

                    p Este tipo de plataforma es muy común, debido a su fácil implementación y despliegue, además de utilizar herramientas tecnológicas todas de tipo GPL.                          
                  .col-lg-5.my-3.mb-4.mb-md-0
                    img.img-a.img-t(src='@/assets/curso/temas/25.png', alt="")             

                .row.justify-content-center.p-2
                  .col-lg-6.my-3.col-md-auto
                    h4.t1 WAMP
                    p Este tipo de plataformas se utilizan más en entornos locales (ON PREMISE) de despliegue, donde el acceso es a través de la red local al igual que la plataforma anterior utiliza casi los mismos componentes, a excepción del sistema operativo que en este caso es reemplazado por Windows en lugar de Linux. Incluye los siguientes componentes:
                    ul.lista-ul.fa-ul.mb-0                   
                      li 
                        i.fas.fa-code.color1
                        | Windows, el sistema operativo.
                      li 
                        i.fas.fa-code.color1
                        | Apache, el servidor web.
                      li 
                        i.fas.fa-code.color1
                        | MySQL/MariaDB, el gestor de bases de datos.
                      li 
                        i.fas.fa-code.color1
                        | PHP, PERL, PYTHON, el lenguaje de programación.  
                  .col-lg-5.my-3.mb-4.mb-md-0
                    img.img-a.img-t(src='@/assets/curso/temas/26.png', alt="")  

                .row.justify-content-center.p-2
                  .col-lg-6.my-3.col-md-auto
                    h4.t1 XAMPP
                    p Es una plataforma tecnológica utilizada como un paquete integrando varios componentes de tipo multiplataforma, de ahí el origen de la primera letra X que significa cualquiera de los diferentes sistemas operativos; este paquete es distribuido con licencia GNU y es una plataforma para despliegue de aplicaciones y servicios web de muy fácil instalación y utilización. Incluye los siguientes componentes:
                    ul.lista-ul.fa-ul.mb-0                   
                      li 
                        i.fas.fa-code.color1
                        | X, diferentes sistemas operativos (multiplataforma).
                      li 
                        i.fas.fa-code.color1
                        | Apache, el servidor web.
                      li 
                        i.fas.fa-code.color1
                        | MariaDB, el gestor de bases de datos.
                      li 
                        i.fas.fa-code.color1
                        | PHP, PERL, el lenguaje de programación.  
                  .col-lg-5.my-3.mb-4.mb-md-0
                    img.img-a.img-t(src='@/assets/curso/temas/27.png', alt="")     

                .row.justify-content-center.p-2
                  .col-lg-6.my-3.col-md-auto
                    h4.t1 WXCF 
                    p Esta plataforma utiliza ColdFusion para el desarrollo y despliegue de aplicaciones de tipo web, permite programar páginas o aplicaciones web a través de etiquetas similares a HTML y que además es multiplataforma, utiliza los siguientes componentes:
                    ul.lista-ul.fa-ul.mb-0                   
                      li 
                        i.fas.fa-code.color1
                        | Windows, el sistema operativo.
                      li 
                        i.fas.fa-code.color1
                        span X: puede utilizar servidores web como Apache o #[i Internet Information services].
                      li 
                        i.fas.fa-code.color1
                        | Soporta bases de datos como: Sybase, Oracle, MySQL, SQL Server.  
                  .col-lg-5.my-3.mb-4.mb-md-0
                    img.img-a.img-t(src='@/assets/curso/temas/28.png', alt="")             

                .row.justify-content-center.p-2
                  .col-lg-6.my-3.col-md-auto
                    h4.t1 XATMJ 
                    p Este tipo de plataforma web es muy poco común encontrarla en los proveedores de hosting, se utiliza específicamente cuando el desarrollo web es realizado con JSP, incluye los siguientes componentes:
                    ul.lista-ul.fa-ul.mb-0                   
                      li 
                        i.fas.fa-code.color1
                        | X, diferentes sistemas operativos (multiplataforma).
                      li 
                        i.fas.fa-code.color1
                        | Apache.
                      li 
                        i.fas.fa-code.color1
                        | Tomcat como servidor web.
                      li 
                        i.fas.fa-code.color1
                        | MySQL, como gestor de bases de datos.
                      li 
                        i.fas.fa-code.color1
                        | JSP como lenguaje de programación.  
                  .col-lg-5.my-3.mb-4.mb-md-0
                    img.img-a.img-t(src='@/assets/curso/temas/29.png', alt="")  

                .row.justify-content-center.p-2
                  .col-lg-6.my-3.col-md-auto
                    h4.t1 WIMA 
                    p Este tipo de plataforma es muy popular en los desarrolladores que utilizan herramientas y plataformas tecnológicas propietarias de Microsoft, involucran desarrollos en ASP y ASP.net, e incluye los siguientes componentes:
                    ul.lista-ul.fa-ul.mb-0                   
                      li 
                        i.fas.fa-code.color1
                        | Windows, el sistema operativo.
                      li 
                        i.fas.fa-code.color1
                        span IIS (#[i Internet Information Services]) como servidor web.
                      li 
                        i.fas.fa-code.color1
                        | MS SQL Server como gestor de bases de datos.
                      li 
                        i.fas.fa-code.color1
                        | ASP.net como lenguaje de programación.  
                  .col-lg-5.my-3.mb-4.mb-md-0
                    img.img-a.img-t(src='@/assets/curso/temas/30.png', alt="")         

    Separador 
    #t_2_2.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2 2.2 Introducción a las máquinas virtuales y contenedores                                                   
    
    .row.bg11.align-items-center
      .col-lg-12.col-12.px-lg-5.px-4 
        .row.justify-content-center.align-items-center          
          .col-lg-12         
            .row.justify-content-center.mb-4  
              .col-lg-4.my-3
                .bg3.p-4.brad.h-100.j(data-aos="fade-left")
                  p(data-aos="fade-down").mb-0 En la definición de la arquitectura de despliegue de aplicaciones y servicios, es muy importante la definición de los componentes desde el punto de vista de la plataforma tecnológica que serán utilizados en el momento de iniciar el proceso de desarrollo y en el de hacer el despliegue o puesta en producción, para lo cual el equipo de desarrollo deberá elegir qué tipo de plataforma tecnológica será la utilizada.   
              .col-lg-4.my-3
                img.img-t.img-a(data-aos="zoom-in")(src='@/assets/curso/temas/32.png', alt='')                             
              .col-lg-4.my-3
                .bg12.p-4.brad.h-100.j(data-aos="fade-left")
                  p(data-aos="fade-down").mb-0 Si bien la plataforma tecnológica exige la selección de varios componentes como sistema operativo, servidor web, gestor de base de datos y lenguaje de programación, en la actualidad se debe tener claro qué tipo de despliegue se requiere para la construcción local del producto en las máquinas de los equipos de desarrollo y para el despliegue en producción (generalmente debe ser el mismo).     
            h5(data-aos="fade-down").t1.mb-5 Lo anterior puede sugerir la necesidad de máquinas virtuales o contenedores, para lo cual se dará una definición que permita diferenciar un concepto de otro.  

            .row.justify-content-start.mb-4 
              .col-auto(data-aos="flip-down")
                .list
                  .list__item
                    .list__item__icon
                      img(src='@/assets/curso/temas/icon.svg', alt='')
                  .list__txt.bgicon.p-0.px-4.text-white
                    h3.mb-0 Máquinas virtuales             

            p(data-aos="fade-down").mb-5 Las máquinas virtuales #[b.t1 son un sistema operativo completo funcionando de manera aislada dentro de otro sistema operativo anfitrión (Alarcón, 2018)]. De igual manera, debe existir un componente de infraestructura de tipo #[i hardware] que soporte todo lo anterior, que en últimas es el servidor o equipo donde se haga el desarrollo y creación de la máquina virtual o si se trata del despliegue y puesta en producción final de la aplicación, puede referirse a un proveedor que suministra el #[i hardware] necesario que soportará la máquina virtual como Azure, Google Cloud, AWS, Digital Ocean, entre otras.

            .titulo-sexto.color-acento-contenido
              h5 Figura 2.
              span Funcionamiento de una máquina virtual 
            
            img.img-a.img-t.d-block.d-lg-none(data-aos="zoom-in")(src='@/assets/curso/temas/34.svg', alt='El esquema representa el funcionamiento de la máquina virtual. Se aprovecha un hipervisor para virtualizar el hardware físico. Cada máquina virtual, contiene un SO huésped, una copia virtual del hardware que el sistema operativo necesita para ejecutarse, junto con aplicaciones, sus bibliotecas y dependencias asociadas.')   
            img.img-a.img-t.d-none.d-lg-block(data-aos="zoom-in")(src='@/assets/curso/temas/33.svg', alt='El esquema representa el funcionamiento de la máquina virtual. Se aprovecha un hipervisor para virtualizar el hardware físico. Cada máquina virtual, contiene un SO huésped, una copia virtual del hardware que el sistema operativo necesita para ejecutarse, junto con aplicaciones, sus bibliotecas y dependencias asociadas.')   

            .row.justify-content-start.mb-4.mt-5 
              .col-auto(data-aos="flip-down")
                .list
                  .list__item
                    .list__item__icon
                      img(src='@/assets/curso/temas/icon.svg', alt='')
                  .list__txt.bgicon.p-0.px-4.text-white
                    h3.mb-0 Contenedores  

            .row.justify-content-center.align-items-center.mb-4           
              .col-lg-9.my-3
                p(data-aos="fade-down").mb-4 Los contenedores por su parte, a diferencia de las máquinas virtuales, #[b.t1 no requieren tener un sistema operativo completo aislado, lo que hacen es aislar las aplicaciones, compartiendo los recursos del sistema operativo sobre el cual se ejecutan.]  

                .bgw.p-3.brad.h-100.j(data-aos="fade-left")
                  p(data-aos="fade-down").mb-0 La contenerización de aplicaciones lo que hace es compartir todos esos recursos del equipo anfitrión entre todas las aplicaciones que se generen a través de contenedores, es decir, que ya no se requiere disponer de una capacidad determinada de recursos como memoria RAM, procesador, almacenamiento y #[i networking], como se hace en las máquinas virtuales, lo que permite optimizar el recurso.
              .col-lg-3.my-3
                img.img-a.img-t(src='@/assets/curso/temas/36.png', alt='')   

            .titulo-sexto.color-acento-contenido
              h5 Figura 3.
              span Funcionamiento contenedores
            
            img.img-a.img-t.d-block.d-lg-none(data-aos="zoom-in")(src='@/assets/curso/temas/38.svg', alt='Esquema que representa el funcionamiento de contenedores, que a diferencia de las máquinas virtuales, virtualizan el sistema operativo para que cada contenedor individual contenga solo la aplicación, sus bibliotecas y dependencias.')   
            img.img-a.img-t.d-none.d-lg-block(data-aos="zoom-in")(src='@/assets/curso/temas/37.svg', alt='Esquema que representa el funcionamiento de contenedores, que a diferencia de las máquinas virtuales, virtualizan el sistema operativo para que cada contenedor individual contenga solo la aplicación, sus bibliotecas y dependencias.')    

            .bg13.px-3.brad.h-100.j.mt-5(data-aos="fade-left")
              .row.justify-content-center.align-items-center(data-aos="flip-down")           
                .col-lg-auto.my-3
                  img.img-a.img-t(src='@/assets/curso/temas/39.png', alt='')       
                .col.my-3
                  p(data-aos="fade-down").mb-0 Al igual que en las máquinas virtuales, los contenedores requieren de un componente de infraestructura que soporte el sistema operativo anfitrión, el #[i Docker Engine] y la creación o aislamiento de las diferentes aplicaciones a través de contenedores que es entregado por el servidor de desarrollo, pruebas y puesta en producción, sea local o propio del equipo de desarrollo o entregado a través de un proveedor como Azure, Google Cloud, AWS, Digital Ocean, entre otras.                    
</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
