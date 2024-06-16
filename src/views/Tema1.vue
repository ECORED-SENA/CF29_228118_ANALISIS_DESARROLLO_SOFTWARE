<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="zoom-in-left")
      .titulo-principal__numero
        span 1
      h1 Generalidades sobre requerimientos
      
    
    .row.bg2.align-items-center
      .col-lg-12.col-12.px-lg-5.px-4 
        .row.justify-content-center.align-items-center          
          .col-lg-12         
            .row.justify-content-center.mb-4  
              .col-lg-4.my-3
                .bg3.p-4.brad.h-100.j(data-aos="fade-left")
                  p(data-aos="fade-down").mb-0 El proceso de levantamiento de requerimientos es fundamental al momento de iniciar un proyecto de desarrollo de #[i software]; este permite identificar las características o funcionalidades que debe tener el #[em software] a construir o en algunos casos, también permite definir cuáles y qué tipo de restricciones deben ser cubiertas por el equipo de desarrollo, para que el producto sea recibido de manera satisfactoria por el cliente.   
              .col-lg-4.my-3
                img.img-t.img-a(data-aos="zoom-in")(src='@/assets/curso/temas/6.png', alt='')                             
              .col-lg-4.my-3
                .bg4.p-4.brad.h-100.j(data-aos="fade-left")
                  p(data-aos="fade-down").mb-0 Este proceso se hace con el fin que el equipo de trabajo pueda entender qué tipo de funcionalidades, complejidad, tiempos, herramientas y tecnologías podrían ser empleadas durante el proceso de construcción y posterior implementación de la solución. Este es un proceso bastante crítico, porque si no se hace de manera correcta y exhaustiva, el desarrollo del proyecto puede no ser exitoso.  

            h5(data-aos="fade-down").mb-5 Según Sommerville (2011), los requerimientos se pueden clasificar en:         

            .row.justify-content-center.mb-5
              .col-xl-6.col-md-9.col-11.mb-4.mb-xl-0.d-none.d-md-block
                .crd_hover_txt(data-aos="flip-left")
                  .crd_hover_txt--img
                    figure
                      img(src="@/assets/curso/temas/7.png", alt="alt")
                  .crd_hover_txt--body.text-white.text-center
                    h4.mb-3 Funcionales
                    p.mb-0 Hace referencia a lo que espera el usuario que ofrezca el sistema a nivel de servicios, como, por ejemplo: registrar comentarios, hacer búsquedas por nombre, etc.

              .col-xl-6.col-md-9.col-11.mb-4.mb-xl-0.d-none.d-md-block
                .crd_hover_txt(data-aos="flip-left")
                  .crd_hover_txt--img
                    figure
                      img(src="@/assets/curso/temas/8.png", alt="alt")
                  .crd_hover_txt--body.text-white.text-center
                    h4.mb-3 No funcionales
                    p.mb-0 Son las características y restricciones generales que debe satisfacer el sistema para poder ofrecer los servicios establecidos en los requisitos funcionales, con ciertos niveles de calidad requeridos, por ejemplo: arquitectura del sistema, tiempos de respuesta, capacidad de carga, etc.  

              .col-xl-6.col-md-6.col-11.mb-4.mb-xl-0.d-block.d-md-none
                .crd_txt.text-white.brad.p-3.text-center.h-100
                  img.img-a.img-t.mb-4(src="@/assets/curso/temas/7.png", alt="alt")
                  h4.mb-3 Funcionales
                  p.mb-0 Hace referencia a lo que espera el usuario que ofrezca el sistema a nivel de servicios, como, por ejemplo: registrar comentarios, hacer búsquedas por nombre, etc.

              .col-xl-6.col-md-6.col-11.mb-4.mb-xl-0.d-block.d-md-none
                .crd_txt.text-white.brad.p-3.text-center.h-100
                  img.img-a.img-t.mb-4(src="@/assets/curso/temas/8.png", alt="alt")
                  h4.mb-3 No funcionales
                  p.mb-0 Son las características y restricciones generales que debe satisfacer el sistema para poder ofrecer los servicios establecidos en los requisitos funcionales, con ciertos niveles de calidad requeridos, por ejemplo: arquitectura del sistema, tiempos de respuesta, capacidad de carga, etc.                     

            .row.justify-content-center.align-items-center.bgw.brad.mb-5(data-aos="flip-down")           
              .col-lg-auto.my-3
                img.img-a.img-t(src='@/assets/curso/temas/9.png', alt='')       
              .col.my-3
                p(data-aos="fade-down").mb-0 Para el desarrollo de este componente y dada la naturaleza de los requerimientos, se abordarán los no funcionales, de tal manera que se pueda, a partir de la definición de la arquitectura, ser utilizada en el proceso de desarrollo de #[em software], suplir y dar cumplimiento con los requerimientos.  

    Separador 
    #t_1_1.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2 1.1 Requerimientos no funcionales     

    .row.bg6.align-items-center
      .col-lg-12.col-12.px-lg-5.px-4 
        .row.justify-content-center.align-items-center          
          .col-lg-12 
            .row.justify-content-center.align-items-center.mb-4(data-aos="flip-down")           
              .col-lg-auto.my-3
                img.img-a.img-t(src='@/assets/curso/temas/11.png', alt='')       
              .col.my-3
                p(data-aos="fade-down").mb-0 Estos no están relacionados de forma directa a funciones específicas del sistema, por esta razón algunos equipos de trabajo no le dedican el tiempo necesario para su definición. 

            .row.justify-content-center.align-items-center.mb-4           
              .col-lg-7.my-3 
                p(data-aos="fade-down") Sin embargo, son los requerimientos no funcionales los que se asocian a propiedades clave que determinan en buena parte la calidad de los productos y servicios desarrollados, como, por ejemplo: la fiabilidad, los tiempos de respuesta a operaciones, la capacidad de almacenamiento, entre otros.   
                .bg3.p-4.brad.h-100.j(data-aos="fade-left")
                  p(data-aos="fade-down").mb-0 #[b Los requerimientos no funcionales deben surgir de las necesidades del usuario y el problema particular que se intenta resolver], e involucran temas presupuestales, políticas de la organización, posible interoperabilidad con otros sistemas de #[i software] o #[i hardware], además diferentes tipos de políticas como: la privacidad, la seguridad, políticas ambientales, de manejo de datos, entre otras; por lo anterior algunas veces resolver este tipo de requerimientos puede ser más crítico que los mismos requerimientos funcionales (Sommerville, 2011).     
              .col-lg-5.my-3 
                img.img-a.img-t(src='@/assets/curso/temas/12.png', alt='')   
            h5.t1.mb-5(data-aos="fade-down") En la siguiente figura se presentan los diferentes tipos de requerimientos no funcionales, según Sommerville.  

            .titulo-sexto.color-acento-contenido
              h5 Figura 1.
              span Clasificación de requerimientos no funcionales
            .bgfig.p-5.mb-5(data-aos="zoom-in") 
              img.img-a.img-t.d-block.d-lg-none(data-aos="zoom-in")(src='@/assets/curso/temas/15.svg', alt='La imagen presenta la clasificación de los requerimientos no funcionales, los cuales se dividen en requerimientos de producto, requerimientos organizacionales y requerimientos externos.')   
              img.img-a.img-t.d-none.d-lg-block(data-aos="zoom-in")(src='@/assets/curso/temas/14.svg', alt='La imagen presenta la clasificación de los requerimientos no funcionales, los cuales se dividen en requerimientos de producto, requerimientos organizacionales y requerimientos externos.')                                            

            .row.justify-content-center.align-items-center.bg7
              .col-lg-3
                img.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/17.png')     
              .col-lg-9(data-aos="fade-down")
                h5 #[mark.t3.px-2 ¡Importante!]
                p.mb-0.text-white Los requerimientos de producto incluyen los requerimientos de eficiencia, de usabilidad, de fiabilidad y de portabilidad. Un ejemplo de un requerimiento no funcional de producto podría ser que el producto sea desarrollado en HTML5, sin el applet de Java, ni Ajax, esto con el ánimo de garantizar que sea compatible con la mayoría de los navegadores en el mercado actual.

            p(data-aos="fade-down").my-5 Los requerimientos organizacionales provienen directamente de las características de la organización, objetivo para el producto o servicio de #[em software] a desarrollar, como, por ejemplo:  

            .row.justify-content-center.align-items-center.mb-4           
              .col-lg-7.my-3
                ol.lista-ol--cuadro
                  li 
                    .lista-ol--cuadro__vineta
                      span 1
                    | Estándares en los procesos.
                  li 
                    .lista-ol--cuadro__vineta
                      span 2
                    | Requerimientos de implementación, como lenguajes específicos de programación.
                  li 
                    .lista-ol--cuadro__vineta
                      span 3
                    | Metodologías de diseño.
                  li 
                    .lista-ol--cuadro__vineta
                      span 4
                    | Tiempos de entrega.
                  li 
                    .lista-ol--cuadro__vineta
                      span 5
                    | Documentación requerida por la organización.

                p(data-aos="fade-down") En los requerimientos externos se clasifican todos aquellos requerimientos no funcionales adicionales que no corresponden específicamente al producto, su proceso de desarrollo o a la organización. 

                .bg8.px-3.brad.h-100.j(data-aos="fade-left")
                  .row.justify-content-center.align-items-center(data-aos="flip-down")           
                    .col-lg-auto.my-3
                      img.img-a.img-t(src='@/assets/curso/temas/19.png', alt='')       
                    .col.my-3
                      p(data-aos="fade-down").mb-0 Entre este tipo de requerimientos están los relacionados con interoperabilidad con otros sistemas #[i software] o #[i hardware] de la empresa o terceros, lo relacionado con políticas y normativas gubernamentales o leyes, y los de tipo ético que se relacionan directamente con el público objetivo.     
              .col-lg-5.my-3 
                img.img-a.img-t(src='@/assets/curso/temas/18.png', alt='') 
                
            p(data-aos="fade-down") Un ejemplo de este tipo de requerimientos puede ser que debido a la política de protección de datos no se deben mostrar los datos personales de ninguna persona en los informes generados o por ejemplo, que el sistema sea compatible con los servicios de búsqueda de la Registraduría Nacional para el proceso de verificación de documentos en el registro.

            .row.justify-content-center.align-items-center.bg7
              .col-lg-3
                img.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/35.png')     
              .col-lg-9(data-aos="fade-down")
                h5 #[mark.t3.px-2 ¡Nota!]
                p.mb-0.text-white Se recomienda especificar los requerimientos no funcionales de forma cuantitativa o al menos que exista la definición de algunos criterios de aceptación, que facilite la verificación de su cumplimiento. Normalmente, los requerimientos no funcionales se especifican en el mismo documento de requerimientos, pero en una sección diferente a los requerimientos funcionales. 

    .row.justify-content-center.align-items-center.mb-5.mt-4(data-aos="flip-down")           
      .col-auto.my-3
        img.img-a.img-t.mov(src='@/assets/curso/temas/20.png', alt='')       
      .col.my-3
        p(data-aos="fade-down").mb-0 Existen dos corrientes para la documentación de requerimientos, independientemente de la corriente. Se recomienda utilizar la estructura de la siguiente tabla, para la documentación de requerimientos no funcionales. Sin embargo, se pueden realizar los ajustes y modificaciones que considere enriquecen el proceso.

    .titulo-sexto.color-acento-contenido
      h5 Tabla 1.
      span Propuesta para especificación de requisitos no funcionales   
    .tabla-a.color-acento-contenido(data-aos="fade-left")
      table
        thead.bgh
          tr
            th Nombre del requerimiento
            th Componente
        tbody.bgb
          tr
            td.ps-4.text-bold Identificador
            td.ps-4 [Identificador del requerimiento]
          tr
            td.ps-4.text-bold Descripción
            td.ps-4 [Describa la solicitud realizada por el cliente]
          tr
            td.ps-4.text-bold Propósito
            td.ps-4 [Escriba la finalidad del requerimiento]
          tr
            td.ps-4.text-bold Forma de verificación
            td.ps-4 [Escriba como se puede realizar la verificación de que el requerimiento fue alcanzado con éxito, en lo posible utilizar medidas cuantitativas]

</template>

<script>
export default {
  name: 'Tema1',
  components: {},
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
