export default {
  global: {
    Name: 'Fundamentos de administración y empresa',
    Description:
      'El componente formativo aborda los fundamentos de la administración y la empresa, integrando conceptos, teorías administrativas, proceso administrativo, planeación, organización, dirección, control, normas ISO y clasificación empresarial. Además, permite comprender la importancia de la gestión estratégica y organizacional en diferentes contextos empresariales.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
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
        titulo: 'Introducción a la administración',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Concepto de administración',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Orígenes y enfoques administrativos',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Universalidad de la administración',
            hash: 't_1_3',
          },
          {
            numero: '1.4',
            titulo: 'Proceso Administrativo',
            hash: 't_1_4',
          },
          {
            numero: '1.5',
            titulo: 'Relación entre administración y proceso administrativo',
            hash: 't_1_5',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Planeación',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Importancia de la planeación',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Herramientas o técnicas de planeación',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Herramientas de software para la planeación',
            hash: 't_2_3',
          },
          {
            numero: '2.4',
            titulo: 'Tipos de planeación',
            hash: 't_2_4',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Organización',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'División del trabajo ',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Coordinación de actividades',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Principios de organización',
            hash: 't_3_3',
          },
          {
            numero: '3.4',
            titulo: 'Estructura organizacional',
            hash: 't_3_4',
          },
          {
            numero: '3.5',
            titulo: 'Organigrama',
            hash: 't_3_5',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Dirección ',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Características de la dirección',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Liderazgo administrativo',
            hash: 't_4_2',
          },
          {
            numero: '4.3',
            titulo: 'Herramientas de dirección y liderazgo administrativo',
            hash: 't_4_3',
          },
          {
            numero: '4.4',
            titulo: 'Importancia de la dirección',
            hash: 't_4_4',
          },
          {
            numero: '4.5',
            titulo: 'Etapas de la Dirección ',
            hash: 't_4_5',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Control',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '5.1',
            titulo: 'Importancia',
            hash: 't_5_1',
          },
          {
            numero: '5.2',
            titulo: 'Características de la fase de control',
            hash: 't_5_2',
          },
          {
            numero: '5.3',
            titulo: 'Evaluación y retroalimentación de resultados',
            hash: 't_5_3',
          },
          {
            numero: '5.4',
            titulo: 'Acciones correctivas y mejora continua',
            hash: 't_5_4',
          },
        ],
      },
      {
        nombreRuta: 'tema6',
        numero: '6',
        titulo: 'Normas ISO y gestión organizacional',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '6.1',
            titulo: 'Algunas normas ISO existentes',
            hash: 't_6_1',
          },
          {
            numero: '6.2',
            titulo:
              'Características generales y principios de gestión de calidad',
            hash: 't_6_2',
          },
          {
            numero: '6.3',
            titulo: 'ISO 9000: Cuando la calidad empieza por el cliente',
            hash: 't_6_3',
          },
          {
            numero: '6.4',
            titulo:
              'ISO 18788 – Sistema de gestión para operaciones de seguridad',
            hash: 't_6_4',
          },
          {
            numero: '6.5',
            titulo: 'Análisis comparativo entre la ISO 9001 y la 18788',
            hash: 't_6_5',
          },
        ],
      },
      {
        nombreRuta: 'tema7',
        numero: '7',
        titulo: 'Empresa y clasificación empresarial',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '7.1',
            titulo: 'Concepto',
            hash: 't_7_1',
          },
          {
            numero: '7.2',
            titulo: 'Persona natural',
            hash: 't_7_2',
          },
          {
            numero: '7.3',
            titulo: 'Persona jurídica',
            hash: 't_7_3',
          },
          {
            numero: '7.4',
            titulo: 'Clasificación de las empresas',
            hash: 't_7_4',
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
        download: 'downloads/dist.pdf',
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
      tema: '',
      referencia: '',
      tipo: 'Sitio web',
      link: '',
    },
  ],
  glosario: [
    {
      termino: 'Término',
      significado: 'Definición',
    },
  ],
  referencias: [
    {
      referencia: '',
      link: '',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Nombre completo',
          cargo: 'Responsable del ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Nombre completo',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro XYZ - Regional XYZ',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Nombre responsable',
          cargo: 'Nombre del rol',
          centro: 'Centro XYZ - Regional XYZ',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Nombre responsable',
          cargo: 'Diseñador de contenidos',
          centro: 'Centro XYZ - Regional XYZ',
        },
        {
          nombre: 'Nombre responsable',
          cargo: 'Desarrollador <i>full stack</i>',
          centro: 'Centro XYZ - Regional XYZ',
        },
        {
          nombre: 'Nombre responsable',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro XYZ - Regional XYZ',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Nombre responsable',
          cargo: 'Validador y vinculador de recursos educativos digitales',
          centro: 'Centro XYZ - Regional XYZ',
        },
        {
          nombre: 'Nombre responsable',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro XYZ - Regional XYZ',
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
}
