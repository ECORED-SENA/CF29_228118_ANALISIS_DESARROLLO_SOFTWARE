<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.pb-md-0
  
    .titulo-principal.color-acento-contenido(data-aos="zoom-in-left")
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    .row.bgi.align-items-center
      .col-lg-12.col-12.px-lg-5.px-4 
        .row.justify-content-center.align-items-center          
          .col-lg-12    
            .row.justify-content-center.align-items-center.bg1.brad(data-aos="flip-down")           
              .col-lg-auto.my-3
                img.img-a.img-t(src='@/assets/curso/temas/2.svg', alt='')       
              .col.my-3
                p(data-aos="fade-down").mb-0 En este componente formativo se estudiarán las generalidades que soportan la importancia de la realización de un alistamiento de infraestructura, para el adelanto de actividades en el marco del desarrollo y despliegue de software, de acuerdo con el análisis de las necesidades particulares de los clientes.    

            .row.justify-content-center.align-items-center        
              .col-lg-8.my-3
                h5.t1.mb-4(data-aos="fade-down") Además, se presentan los diferentes tipos de configuraciones tradicionales de plataformas para el desarrollo e implementación de aplicaciones y servicios, como:
            
                .row    
                  .col-lg-3.my-1.col-md-6
                    .bgw.brad.h-100.px-2
                      .row(data-aos="flip-down")           
                        .col-auto.my-2
                          img.img-t(src='@/assets/curso/temas/4.svg', alt='')       
                        .col.my-2.j
                          p.mb-0 LAMP      
                  .col-lg-3.my-1.col-md-6
                    .bgw.brad.h-100.px-2
                      .row(data-aos="flip-down")           
                        .col-auto.my-2
                          img.img-t(src='@/assets/curso/temas/4.svg', alt='')       
                        .col.my-2.j
                          p.mb-0 WAMP 
                  .col-lg-3.my-1.col-md-6
                    .bgw.brad.h-100.px-2
                      .row(data-aos="flip-down")           
                        .col-auto.my-2
                          img.img-t(src='@/assets/curso/temas/4.svg', alt='')       
                        .col.my-2.j
                          p.mb-0 XAMP      
                  .col-lg-3.my-1.col-md-6
                    .bgw.brad.h-100.px-2
                      .row(data-aos="flip-down")           
                        .col-auto.my-2
                          img.img-t(src='@/assets/curso/temas/4.svg', alt='')       
                        .col.my-2.j
                          p.mb-0 WXCF 

                  .col-lg-3.my-1.col-md-6
                    .bgw.brad.h-100.px-2
                      .row(data-aos="flip-down")           
                        .col-auto.my-2
                          img.img-t(src='@/assets/curso/temas/4.svg', alt='')       
                        .col.my-2.j
                          p.mb-0 XATMJ      
                  .col-lg-3.my-1.col-md-6
                    .bgw.brad.h-100.px-2
                      .row(data-aos="flip-down")           
                        .col-auto.my-2
                          img.img-t(src='@/assets/curso/temas/4.svg', alt='')       
                        .col.my-2.j
                          p.mb-0 WIMA
              .col-lg-4.my-3
                img.img-a.img-t(src='@/assets/curso/temas/3.svg', alt='')         

            p(data-aos="fade-down").mt-4 Se trabajará en las generalidades de los requerimientos y sobre todo, situándolos en aquellos que no son funcionales en el proceso de desarrollo; posteriormente, se abordará la arquitectura y el despliegue de aplicaciones y servicios, que posibilitará conocer las necesidades de los clientes a partir de los requisitos no funcionales definidos. 
            h5.mb-5(data-aos="fade-down") #[mark.t2.px-2 Bienvenido.]

</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
