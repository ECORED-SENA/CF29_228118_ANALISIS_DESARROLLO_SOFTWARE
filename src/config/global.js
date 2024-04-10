export default {
  global: {
    componenteFormativo: 'Identificación de requerimientos',
    descripcionCurso:
      'El despliegue e implementación de sistemas, requiere de una serie de componentes de infraestructura y plataforma tecnológica, dentro de los cuales se encuentran los sistemas operativos, sistemas de gestión de base de datos, servidores web, lenguajes o intérpretes de programación, los cuales deben ser definidos antes del inicio del proyecto.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/1.png'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/2.png'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/3.png'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Generalidades sobre requerimientos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Requerimientos no funcionales',
            hash: 't_1_1',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Arquitectura de despliegue de aplicaciones y servicios',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo:
              'Plataformas de desarrollo e implantación de aplicaciones y servicios',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Introducción a las máquinas virtuales y contenedores',
            hash: 't_2_2',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/prueba.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema:
        'Plataformas de desarrollo e implantación de aplicaciones y servicios.',
      referencia:
        'Facultad Autodidacta. (2021). <i>Instalar la pila de LAMP (Linux, apache, MariaDB y php) en Debian 10</i> [video]. YouTube',
      tipo: 'Video',
      link: 'https://youtu.be/AGF4fFuwCEU',
    },
    {
      tema:
        'Plataformas de desarrollo e implantación de aplicaciones y servicios.',
      referencia:
        'Informática DP. (2021). <i>WampServer 3.2.0 - Instalación paso a paso</i> [video]. YouTube',
      tipo: 'Video',
      link: 'https://youtu.be/LIubtGr63RM',
    },
    {
      tema:
        'Plataformas de desarrollo e implantación de aplicaciones y servicios.',
      referencia:
        'Ada Lovecode- Didacticode. (2021).  <i>Cómo descargar e instalar XAMPP en Windows 10 2020 para trabajar con Apache, PHP, MySQL, Perl</i> [video]. YouTube',
      tipo: 'Video',
      link: 'https://youtu.be/DOZPG4V6-JU',
    },
  ],
  glosario: [
    {
      termino: 'Interoperabilidad',
      significado:
        'capacidad de un sistema de comunicarse con otros sistemas para intercambiar y usar información entre ellos.',
    },
    {
      termino: 'IDE',
      significado:
        'acrónimo en inglés de <i>Integrated Development Environment</i> (Entornos de Desarrollo Integrado). Es un software especializado que ofrece servicios que facilitan el proceso de construcción de software a desarrolladores.',
    },
    {
      termino: 'HTML5',
      significado: 'es una versión de HTML.',
    },
    {
      termino: 'HTML',
      significado:
        'acrónimo en inglés de <i>HyperText Markup Language</i> (Lenguaje de Marcado de Hipertexto). HTML es el lenguaje de marcado estándar para crear páginas web y se usa para describir la estructura de una página web.',
    },
    {
      termino: '<em>Hosting</em>',
      significado:
        'servicio de alojamiento de sitios web indispensable para que sea visualizado por cualquier usuario por medio de internet.',
    },
  ],
  referencias: [
    {
      referencia:
        'Alarcón, J. M. (2018, 14 junio). <i>¿Qué diferencia hay entre Docker (Contenedores) y Máquinas virtuales (VMware, VirtualBox)?</i> campusMVP.es. ',
      link:
        'https://www.campusmvp.es/recursos/post/que-diferencia-hay-entre-docker-contenedores-y-maquinas-virtuales.aspx',
    },
    {
      referencia:
        'Arroyave, M. H. T., & Cardona, D. (2012). <i>Criterios de evaluación de plataformas de desarrollo de aplicaciones empresariales para ambientes web</i> (Doctoral dissertation, Universidad Tecnológica de Pereira. Facultad de Ingenierías Eléctrica, Electrónica, Física y Ciencias de la Computación. Ingeniería de Sistemas y Computación).',
    },
    {
      referencia:
        'Lazarte Méndez, J. P. (2019). <i>Contenedores Docker como estrategia de virtualización</i> (Doctoral dissertation).',
    },
    {
      referencia:
        'Mariño, S. I., Godoy, M. V., Alfonzo, P. L., Acevedo, J. J., Solís, L. G., & Vázquez, A. F. (2012). <i>Accesibilidad en la definición de requerimientos no funcionales</i>. Revisión de herramientas. Multiciencias, 12(3), 305-312.',
    },
    {
      referencia:
        'Pardo, M. R. V., Tapia, J. A. H., Moreno, A. S. G., & Sánchez, L. F. V. (2018). <i>Comparación de tendencias tecnológicas en aplicaciones web</i>.',
    },
    {
      referencia:
        'Rodríguez Ramírez, A. M., & Obando Ortiz, F. R. (2005). <i>Análisis comparativo de sistemas operativos de red</i> (Bachelor&#8219;s thesis, QUITO/PUCE/2005).',
    },
    {
      referencia:
        'Rojo, S. D. V. (2012). <i>Requerimientos No funcionales para aplicaciones Web (Doctoral dissertation, Universidad Nacional de La Plata)</i>.',
    },
    {
      referencia:
        'Sommerville I. (2011).  <i>Ingeniería del software</i>. México: Addison-Wesley',
    },
    {
      referencia:
        'Torrico Rojas, L. (2019). <i>Comparar “Máquinas virtuales vs Docker”</i> (Doctoral dissertation).',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo: 'Responsable del Ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Olga Constanza Bermúdez Jaimes',
          cargo: 'Responsable de Línea de Producción',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Jonathan Guerrero Astaiza',
          cargo: 'Experto Temático',
          centro:
            'Centro de Teleinformática y Producción Industrial - Regional Cauca',
        },
        {
          nombre: 'Ana Catalina Córdoba Sus',
          cargo: 'Evaluadora instruccional',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Yerson Fabian Zarate Saavedra',
          cargo: 'Diseñador de Contenidos Digitales',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Edward Leonardo Pico Cabra',
          cargo: 'Desarrollador Fullstack',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Edgar Mauricio Cortes',
          cargo: 'Actividad Didáctica',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Luis Gabriel Urueta Alvarez',
          cargo: 'Validador de Recursos Educativos Digitales',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Jaime Hernán Tejada Llano',
          cargo: 'Validador de Recursos Educativos Digitales',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Daniel Ricardo Mutis Gómez',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Margarita Marcela Medrano Gómez',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
