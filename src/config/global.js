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
      termino: 'Administración',
      significado:
        'Proceso de planear, organizar, dirigir y controlar recursos para alcanzar objetivos.',
    },
    {
      termino: 'Código CIIU',
      significado:
        'Sistema de clasificación de actividades económicas empresariales.',
    },
    {
      termino: 'Control',
      significado:
        'Función administrativa orientada a verificar resultados y aplicar correctivos.',
    },
    {
      termino: 'Dirección',
      significado:
        'Etapa administrativa relacionada con liderazgo, motivación y supervisión.',
    },
    {
      termino: 'Empresa',
      significado:
        'Organización económica dedicada a producir bienes o servicios.',
    },
    {
      termino: 'Estrategia',
      significado:
        'Conjunto de acciones orientadas al logro de objetivos organizacionales.',
    },
    {
      termino: 'Estructura organizacional',
      significado:
        'Forma en que se distribuyen cargos y funciones dentro de una empresa.',
    },
    {
      termino: 'Liderazgo',
      significado:
        'Capacidad de influir y orientar personas hacia objetivos comunes.',
    },
    {
      termino: 'Misión',
      significado: 'Razón de ser y propósito principal de una organización.',
    },
    {
      termino: 'Organigrama',
      significado: 'Representación gráfica de la estructura organizacional.',
    },
    {
      termino: 'Organización',
      significado: 'Proceso de distribuir funciones y coordinar recursos.',
    },
    {
      termino: 'Planeación',
      significado: 'Proceso de definir objetivos y acciones futuras.',
    },
    {
      termino: 'Planeación contingente',
      significado:
        'Planeación orientada a responder ante situaciones imprevistas.',
    },
    {
      termino: 'Planeación estratégica',
      significado: 'Planeación de largo plazo enfocada en objetivos generales.',
    },
    {
      termino: 'Planeación operativa',
      significado: 'Planeación detallada de actividades cotidianas.',
    },
    {
      termino: 'Planeación táctica',
      significado: 'Planeación de mediano plazo enfocada en áreas específicas.',
    },
    {
      termino: 'Proceso administrativo',
      significado: 'Conjunto de etapas administrativas interrelacionadas.',
    },
    {
      termino: 'Visión',
      significado: 'Proyección futura deseada de la organización.',
    },
  ],
  referencias: [
    {
      referencia:
        'Bernal Torres, C. A. (2007). Introducción a la administración de las organizaciones. Pearson Educación.',
      link: '',
    },
    {
      referencia:
        'Chiavenato, I. (2000). Introducción a la teoría general de la administración. McGraw-Hill.',
      link: '',
    },
    {
      referencia:
        'Chiavenato, I. (2016). Planeación estratégica: Fundamentos y aplicaciones.',
      link:
        'https://www.gob.mx/cms/uploads/attachment/file/911563/127-Planeacion-estrategica-fundametos-chiavenato-idalberto.pdf',
    },
    {
      referencia: 'Código de Comercio de Colombia. (2021). LEGIS.',
      link: '',
    },
    {
      referencia:
        'Daft, R. L., & Marcic, D. (2011). Teoría y diseño organizacional (10.ª ed.). Cengage Learning.',
      link: '',
    },
    {
      referencia:
        'David, F. R. (2008). Conceptos de administración estratégica (10.ª ed.).',
      link: '',
    },
    {
      referencia:
        'Drucker, P. F. (2014). La gerencia efectiva. Harper Collins.',
      link: '',
    },
    {
      referencia:
        'Hellriegel, D. (2020). Administración: Un enfoque basado en competencias. Cengage Learning Editores.',
      link: '',
    },
    {
      referencia:
        'Hernández, S. (1994). Introducción a la administración: Un enfoque teórico práctico. McGraw-Hill.',
      link: '',
    },
    {
      referencia:
        'International Organization for Standardization (ISO). (2015). ISO 9001:2015 Sistemas de gestión de la calidad — Requisitos.',
      link: '',
    },
    {
      referencia:
        'International Organization for Standardization (ISO). (2018). ISO 18788: Sistema de gestión para operaciones de seguridad.',
      link: '',
    },
    {
      referencia:
        'Koontz, H., Weihrich, H., & Cannice, M. (2012). Administración: Una perspectiva global y empresarial. McGraw-Hill.',
      link: '',
    },
    {
      referencia:
        'Münch Galindo, L. (s.f.). Planeación estratégica: El rumbo hacia el éxito.',
      link: '',
    },
    {
      referencia:
        'Robbins, S. P., & Coulter, M. (2018). Administración (14.ª ed.). Pearson.',
      link: '',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo:
            'Profesional 06 - Responsable ecosistema virtual de recursos educativos digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Olga Constanza Bermúdez',
          cargo: 'Responsable de Línea de Producción Huila',
          centro: 'Dirección General',
        },
      ],
    },

    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Paola Andrea Tello Zambrano',
          cargo: 'Experto temático',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Paola Alexandra Moya',
          cargo: 'Evaluadora instruccional',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
      ],
    },

    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Juan José Calderon Gutiérrez',
          cargo: 'Diseñador de contenidos digitales',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Cielo Damaris Angulo Rodríguez',
          cargo: 'Desarrollador fullstack',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Alejandro Delgado Acosta',
          cargo: 'Intérprete lenguaje de señas',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Cristhian Giovanni Gordillo Segura',
          cargo: 'Intérprete lenguaje de señas',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Juan Pablo Rojas Polania',
          cargo: 'Animador y productor multimedia',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'María Carolina Tamayo López',
          cargo: 'Locución',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'German Acosta Ramos',
          cargo: 'Locución',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
      ],
    },

    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Ricardo Oliveros Zambrano',
          cargo: 'Validador de recursos educativos digitales',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Aixa Natalia Sendoya Fernández',
          cargo: 'Validador de recursos educativos digitales',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Daniel Ricardo Mutis Gómez',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Anyerson Wilfredo Pizo Ossa',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
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
