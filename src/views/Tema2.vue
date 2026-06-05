<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 2
      h1 Planeación
    .caja-5.mb-5(data-aos="zoom-in")
      .row.align-items-center
        .col-xl.order-2.order-lg-1.fit___box_container
          p.mb-0 La planeación permite anticipar escenarios, definir objetivos y establecer acciones para optimizar recursos y reducir riesgos (Chiavenato, 2019). Además, orienta la toma de decisiones y facilita el cumplimiento de metas organizacionales mediante la definición de estrategias, recursos y acciones concretas. Asimismo, proporciona bases para la evaluación y mejora continua dentro de las organizaciones (Robbins, S. P., & Coulter, M., 2018).
        .col-xl-auto.order-1.order-lg-2
          figure
            img(src='@/assets/curso/temas/img29.png', alt='').m-auto
    #t_2_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 2.1 Importancia de la planeación
    .caja-2.mb-0(data-aos="zoom-in")
      .row.align-items-center
        .col-xl-auto
          figure
            img(src='@/assets/curso/temas/img30.png', alt='').m-auto
        .col-xl.fit___box_container
          p.mb-0 La planeación es importante porque permite orientar las acciones organizacionales, optimizar recursos, anticipar riesgos y facilitar la toma de decisiones para alcanzar los objetivos de manera eficiente y organizada.
    Separador
    #t_2_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 2.2 Herramientas o técnicas de planeación
    .row.justify-content-center.align-items-center.mb-5
      .col-lg.mb-4.mb-lg-0
        .caja-1.mb-3(data-aos="fade-right")
          p.mb-0 Las herramientas o técnicas de planeación son métodos y recursos que permiten organizar actividades, optimizar recursos y facilitar la toma de decisiones dentro de las organizaciones. Estas herramientas apoyan el proceso de planeación mediante bases científicas, lógicas y racionales (Münch, s.f.), contribuyendo al cumplimiento de objetivos y a la selección de estrategias según el tipo, tamaño y necesidades de cada organización (Robbins, S. P., & Coulter, M., 2018).
        p.mb-0 Dentro de las herramientas o técnicas de planeación, se destacan las siguientes:
      .col-lg-auto.col-md-9(data-aos="fade-left")
        figure
          img(src="@/assets/curso/temas/img31.png", alt="").m-auto
    .caja-6.mb-5(data-aos="fade-right")
      .col-lg-auto
        figure
          img(src="@/assets/curso/temas/img32.svg" style="max-width: 60px").m-auto
      .col
        h3 Técnicas cuantitativas 
    p.mb-5 Las técnicas cuantitativas utilizan datos numéricos y herramientas de análisis para apoyar la planeación, la toma de decisiones y el control de proyectos organizacionales. En este apartado se conocerá las principales técnicas existentes:
    .row.mb-5
      .col-xl-auto(data-aos="fade-right")
        figure.d-none.d-xl-block
          img(src="@/assets/curso/temas/img33.png", alt="" ).m-auto
      .col-xl
        AcordionA(tipo="a" clase-tarjeta="tarjeta acordeonA")(data-aos="fade-left")
          .row(titulo="Diagrama de Gantt").ajuste-cajaAcordion
            p.mb-3 El diagrama de Gantt es una técnica cuantitativa utilizada para planificar, organizar y controlar proyectos mediante la representación gráfica de tareas y tiempos de ejecución. Esta herramienta permite visualizar la duración, secuencia y avance de las actividades, facilitando la coordinación del trabajo y la gestión del tiempo (Kerzner, 2022). Además, representa las tareas en el eje vertical y el tiempo en el eje horizontal, utilizando barras que indican el inicio, duración y finalización de cada actividad, lo que permite identificar dependencias, retrasos y asignación de recursos dentro del proyecto.
          .row(titulo="Análisis de Ruta Crítica (CPM)").ajuste-cajaAcordion
            p.mb-3 Identifica las tareas críticas de un proyecto   que no pueden retrasarse sin afectar la fecha de finalización (Kerzner, 2022).
          .row(titulo="Diagrama PERT").ajuste-cajaAcordion
            p.mb-3 Es una herramienta útil en la gestión de proyectos para identificar tareas críticas y estimar tiempos. (Kerzner, 2022).
          .row(titulo="Análisis del Punto de Equilibrio").ajuste-cajaAcordion
            p.mb-3 Determina el punto en el que los ingresos cubren los costos totales, útil para la toma de decisiones financieras.  (Horngren et al, 2021).
          .row(titulo="Pronósticos").ajuste-cajaAcordion
            p.mb-3 Permiten predecir tendencias futuras basadas en datos históricos, lo que es crucial para la planificación a largo plazo. 
    .caja-6.mb-5(data-aos="fade-right")
      .col-lg-auto
        figure
          img(src="@/assets/curso/temas/img32.svg" style="max-width: 60px").m-auto
      .col
        h3 Técnicas cualitativas
    .row.align-items-center.mb-5
      .col-lg-auto(data-aos="zoom-in")
        figure.d-none.d-xl-block
          img(src="@/assets/curso/temas/img26.svg", alt="" style="max-width: 70px").m-auto
      .col-lg
        p.mb-0 Las técnicas cualitativas permiten analizar situaciones organizacionales, generar estrategias y apoyar la toma de decisiones mediante la interpretación de información, experiencias y opiniones. Las principales técnicas son:
    .row.align-items-center.mb-0
      .col-xl-auto(data-aos="fade-right")
        figure.d-none.d-xl-block
          img(src="@/assets/curso/temas/img34.png", alt="" ).m-auto
      .col-xl
        AcordionA(tipo="a" clase-tarjeta="tarjeta acordeonA")(data-aos="fade-left")
          .row(titulo="Análisis DOFA").ajuste-cajaAcordion
            p.mb-3 La DOFA (Fortalezas, Debilidades, Oportunidades y Amenazas) es una herramienta estratégica que permite evaluar la situación interna y externa de la organización para identificar áreas de mejora y oportunidades. 
          .row(titulo="Análisis CAME").ajuste-cajaAcordion
            p.mb-3 El análisis CAME (Corregir, Afrontar, Mantener, Explotar), es una técnica que se deriva del análisis FODA y ayuda a desarrollar estrategias para aprovechar las oportunidades y mitigar las amenazas. 
          .row(titulo="Lluvia de Ideas (<em>Brainstorming</em>)").ajuste-cajaAcordion
            p.mb-3 La técnica de Lluvia de Ideas (#[i Brainstorming]) fomenta la generación de ideas creativas para la resolución de problemas y la toma de decisiones.
    Separador
    #t_2_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 2.3 Herramientas de #[i software] para la planeación
    p.mb-5 Las herramientas de #[i software] para la planeación permiten organizar actividades, gestionar recursos, optimizar procesos y facilitar la toma de decisiones dentro de las organizaciones. En este sentido, se destacan las siguientes:
    .bg-slider.mb-0
      .px-5
        .ajuste-slider(data-aos="zoom-in")
          SlyderA(tipo="b")
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Sistemas de Planificación de Recursos Empresariales (ERP)
                p Los sistemas ERP integran y gestionan procesos empresariales relacionados con proyectos, finanzas, recursos humanos, inventarios y cadena de suministro.
                h5.mb-0 Ejemplos:
                ul.fa-ul.estilo___ul.mb-0
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | Oracle NetSuite. 
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | SAP Business One. 
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | Acumatica Cloud ERP.
              .col-xl-6
                figure
                  img(src='@/assets/curso/temas/img35.png', alt='' style="max-width: 500px").m-auto
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 #[i Software] de gestión de proyectos
                p Estos programas permiten planificar, ejecutar y controlar proyectos mediante la asignación de recursos, seguimiento de actividades y control de tiempos.
                h5.mb-0 Ejemplos:
                ul.fa-ul.estilo___ul.mb-0
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | Trello. 
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | Jira. 
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | Asana. 
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | Basecamp.
              .col-xl-6
                figure
                  img(src='@/assets/curso/temas/img36.png', alt='' style="max-width: 500px").m-auto
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 #[i Software] de gestión de la cadena de suministro (SCM)
                p Los #[i softwares] SCM optimizan la gestión y coordinación de la cadena de suministro desde la adquisición hasta la entrega del producto final.
                h5.mb-0 Ejemplos:
                ul.fa-ul.estilo___ul.mb-0
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | Infor SCM. 
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | SAP SCM. 
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | Oracle Supply Chain Planning.
              .col-xl-6
                figure
                  img(src='@/assets/curso/temas/img37.png', alt='' style="max-width: 500px").m-auto
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Tableros Kanban
                p Los tableros Kanban facilitan la organización visual del trabajo y el seguimiento de actividades para mejorar la productividad.
                h5.mb-0 Ejemplos:
                ul.fa-ul.estilo___ul.mb-0
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | Trello. 
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | Wrike. 
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | Jira. 
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | Businessmap.
              .col-xl-6
                figure
                  img(src='@/assets/curso/temas/img38.png', alt='' style="max-width: 500px").m-auto
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 #[i Software] para presupuestos
                p Estas herramientas ayudan a planificar ingresos, gastos y controlar las finanzas organizacionales.
                h5.mb-0 Ejemplos:
                ul.fa-ul.estilo___ul.mb-0
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | SIIGO nube. 
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | QuickBooks. 
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | Excel. 
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | Holded.
              .col-xl-6
                figure
                  img(src='@/assets/curso/temas/img39.png', alt='' style="max-width: 500px").m-auto
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 #[i Software] para diagramas de Gantt
                p Permiten elaborar cronogramas y controlar tiempos, actividades y avances de proyectos organizacionales.
                h5.mb-0 Ejemplos:
                ul.fa-ul.estilo___ul.mb-0
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | Monday.com. 
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | ClickUp. 
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | GanttProject. 
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | Smartsheet.
              .col-xl-6
                figure
                  img(src='@/assets/curso/temas/img40.png', alt='' style="max-width: 500px").m-auto
    Separador
    #t_2_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 2.4 Tipos de planeación
    p.mb-5 Existen los siguientes tipos de planeación clasificados según su alcance, tiempo y función dentro de una organización. 
    .caja-6.mb-5(data-aos="fade-right")
      .col-lg-auto
        figure
          img(src="@/assets/curso/temas/img32.svg" style="max-width: 60px").m-auto
      .col
        h3 Planeación Estratégica
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-auto.col-md-9.mb-4.mb-lg-0(data-aos="fade-right")
        figure
          img(src="@/assets/curso/temas/img41.png", alt="").m-auto
      .col-lg
        .caja-1.mb-3(data-aos="fade-left")
          p.mb-0 La planeación estratégica es el proceso mediante el cual una organización define objetivos a largo plazo y establece estrategias para alcanzarlos, considerando los recursos internos y las condiciones del entorno (Chiavenato, 2019). Además, permite proyectar el futuro organizacional, identificar oportunidades y riesgos, y orientar decisiones que favorezcan la sostenibilidad y el crecimiento empresarial.
    p.mb-5 El siguiente video presenta una explicación general sobre la planeación estratégica y su importancia en la definición de acciones y objetivos para el fortalecimiento organizacional.
    figure(data-aos="zoom-in").mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption #[b Video]. Proceso de planeación
    p.mb-5 Las características de la planeación estratégica son:
    .row.align-items-center.mb-5
      .col-xl-auto(data-aos="fade-right")
        figure.d-none.d-xl-block
          img(src="@/assets/curso/temas/img42.png", alt="" ).m-auto
      .col-xl
        AcordionA(tipo="a" clase-tarjeta="tarjeta acordeonA")(data-aos="fade-left")
          .row(titulo="Enfoque a largo plazo").ajuste-cajaAcordion
            p.mb-3 Define los objetivos generales y la dirección de la organización para varios años, generalmente cinco o más (Chiavenato, 2019).
          .row(titulo="Define la identidad institucional").ajuste-cajaAcordion
            p.mb-3 Establece la misión, visión y los valores organizacionales, elementos que determinan la cultura y el propósito de la empresa (Robbins & Coulter, 2018).
          .row(titulo="Guía la toma de decisiones").ajuste-cajaAcordion
            p.mb-3 Proporciona el marco de referencia para que los directivos tomen decisiones coherentes y alineadas a los objetivos globales (Koontz, Weihrich & Cannice, 2022).
    .row.align-items-center.mb-5
      .col-xl
        AcordionA(tipo="a" clase-tarjeta="tarjeta acordeonA")(data-aos="fade-right")
          .row(titulo="Orientada al entorno").ajuste-cajaAcordion
            p.mb-3 Tiene en cuenta las condiciones externas, las tendencias del mercado, los cambios tecnológicos y sociales, anticipándose a posibles oportunidades o amenazas (Chiavenato, 2019).
          .row(titulo="Responsabilidad de la alta dirección").ajuste-cajaAcordion
            p.mb-3 Es elaborada principalmente por los niveles directivos más altos, como la junta directiva o la gerencia general (Koontz, Weihrich & Cannice, 2022).
          .row(titulo="Facilita el alineamiento organizacional").ajuste-cajaAcordion
            p.mb-3 Sirve como base para que las diferentes áreas o departamentos definan sus propios planes tácticos y operativos en coherencia con los lineamientos globales.
      .col-xl-auto(data-aos="fade-left")
        figure.d-none.d-xl-block
          img(src="@/assets/curso/temas/img43.png", alt="" ).m-auto
    .bloque-texto-g.color-acento-contenido.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/img44.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 La planeación estratégica u organizacional define el rumbo general de la empresa mediante la misión, visión, principios y objetivos institucionales (Chiavenato, 2019). Además, orienta la toma de decisiones y proyecta el futuro organizacional mediante estrategias y metas que favorecen el crecimiento y la sostenibilidad empresarial (Koontz, Weihrich & Cannice, 2012; Robbins & Coulter, 2018).
    p.mb-5 El plan estratégico es como un rompecabezas, compuesto por diferentes piezas las cuales se presentan a continuación: 
    .row.align-items-center.mb-5
      .col-xl-6.mb-4.mb-lg-0(data-aos="fade-right")
        LineaTiempoD.color-secundario
          p(numero="1" titulo="Misión") La misión expresa los valores, propósitos y dirección estratégica de una organización, orientando sus objetivos y acciones institucionales (David & David, 2017). Además, una misión bien formulada debe responder preguntas relacionadas con la identidad, propósito y alcance de la empresa, convirtiéndose en una herramienta clave para la toma de decisiones organizacionales (Chiavenato, 2019; David & David, 2017).
          p(numero="2" titulo="Visión") La visión representa la proyección futura de lo que la organización desea llegar a ser, definiendo metas y propósitos a largo plazo que orientan el direccionamiento estratégico (Robles & Alcérreca, 2021; Chiavenato, 2019). Además, debe ser clara, realista y motivadora, sirviendo como guía para la toma de decisiones y la alineación de esfuerzos organizacionales (David & David, 2017).
          p(numero="3" titulo="Objetivos estratégicos") Los objetivos estratégicos son resultados de alto nivel que orientan el rumbo, las prioridades y las metas de la organización, permitiendo materializar la misión y la visión institucional (Chiavenato, 2019). Además, deben ser medibles, coherentes y alcanzables, guiando la toma de decisiones y alineando las acciones organizacionales con los propósitos estratégicos de la empresa (Koontz, Weihrich & Cannice, 2012; Robbins & Coulter, 2018).
          p(numero="4" titulo="Estrategias organizacionales") Constituyen los lineamientos que definen cómo alcanzar los objetivos propuestos, actuando como el puente entre la formulación de metas y su ejecución práctica.   Se relaciona con los planteamientos de cómo se pueden llegar a cumplir los objetivos. Pueden darse tantas estrategias como objetivos se planteen y son los vehículos para llevar las acciones al cumplimiento de los objetivos.  (David & David, 2017).
          p(numero="5" titulo="Programas o proyectos") Comprenden la secuencia estructurada de actividades necesarias para materializar dichas estrategias, donde se especifican tiempos, responsables y recursos. Se refiere a la secuencia de actividades desplegadas para el desarrollo y materialización de la estrategia; se plasman los tiempos requeridos y los responsables de estos proyectos.  (Pearce & Robinson, 2015).
      .col-xl-6(data-aos="fade-left")
        figure
          img(src="@/assets/curso/temas/img45.png", alt="").m-auto
    .row.align-items-center.mb-5
      .col-xl-6.mb-4.mb-lg-0(data-aos="fade-right")
        figure
          img(src="@/assets/curso/temas/img46.png", alt="").m-auto
      .col-xl-6(data-aos="fade-left")
        LineaTiempoD.color-secundario
          p(numero="6" titulo="Presupuestos") Representan una herramienta anticipada de asignación de recursos financieros y no financieros, que contribuye a la viabilidad de los programas y, en consecuencia, al cumplimiento de los objetivos estratégicos.  Son aquellas herramientas que permiten plasmar, de manera anticipada, los recursos requeridos (financieros y no financieros) para el cumplimiento de las actividades; por consiguiente, de las estrategias y de los objetivos. (Hill, Jones & Schilling, 2017).
          p(numero="7" titulo="Cultura organizacional") La cultura organizacional comprende los valores, creencias, normas y comportamientos compartidos que orientan la interacción y el funcionamiento de una organización (Chiavenato, 2019). Además, representa la “personalidad” de la empresa y se refleja en sus prácticas, actitudes y formas de comunicación (Robbins & Coulter, 2018). Según Schein (2017), esta cultura se fortalece mediante el liderazgo, la socialización y la transmisión de valores organizacionales.
          p(numero="8" titulo="Filosofía y valores ") Establece la identidad institucional y proporciona un marco de referencia para las relaciones internas y externas, sirviendo como guía en la manera en que se alcanzan los objetivos (Chiavenato, 2019). Los valores organizacionales son principios y creencias que orientan el comportamiento, las decisiones y las relaciones dentro de la empresa, fortaleciendo la identidad institucional y el cumplimiento de los objetivos organizacionales.
          p(numero="9" titulo="Código de ética") El código de ética empresarial es un documento que establece principios, normas y valores para orientar el comportamiento y la toma de decisiones dentro de la organización, promoviendo la integridad, la transparencia y la responsabilidad social (Chiavenato, 2019). Además, fortalece la cultura organizacional y las relaciones entre colaboradores, clientes y proveedores.
    .caja-6.mb-5(data-aos="fade-right")
      .col-lg-auto
        figure
          img(src="@/assets/curso/temas/img32.svg" style="max-width: 60px").m-auto
      .col
        h3 Planeación Táctica
    .row.justify-content-center.align-items-center.mb-5
      .col-lg.mb-4.mb-lg-0
        .caja-1.mb-3(data-aos="fade-right")
          p.mb-0 La planeación táctica consiste en desarrollar planes y acciones específicas para que las diferentes áreas de la organización contribuyan al cumplimiento de los objetivos estratégicos (Chiavenato, 2019). Se caracteriza por enfocarse en el mediano plazo y por traducir las estrategias generales en programas y proyectos concretos, facilitando la coordinación, la asignación de recursos y la ejecución eficiente de las actividades organizacionales (Koontz, Weihrich & Cannice, 2012).
      .col-lg-auto.col-md-9(data-aos="fade-left")
        figure
          img(src="@/assets/curso/temas/img47.png", alt="").m-auto
    .row.align-items-center.mb-5
      .col-lg-auto(data-aos="zoom-in")
        figure.d-none.d-xl-block
          img(src="@/assets/curso/temas/img48.svg", alt="" style="max-width: 70px").m-auto
      .col-lg
        p.mb-0 La planeación táctica actúa como enlace entre los lineamientos estratégicos y las acciones operativas de la organización, permitiendo convertir los objetivos generales en actividades concretas para cada área empresarial (Chiavenato, 2019; Koontz & Weihrich, 2012).
    .bg-1
      .px-5
        .row.align-items-center.mb-5
          .col-xl-4(data-aos="fade-right")
            figure.d-none.d-xl-block
              img(src='@/assets/curso/temas/img50.png', alt='' style="max-width: 350px").m-auto
          .col-xl-8(data-aos="fade-left")
            SlyderF(columnas="col-lg-6 col-xl-6")
              .tarjeta.color-acento-botones.p-4
                .row.justify-content-center.mb-3
                  .col-8
                    img(src='@/assets/curso/temas/img51.svg' style="max-width: 90px").m-auto
                h4.mb-3.estilo-text Enfoque en el mediano plazo
                p.mb-0.text-center La planeación táctica se proyecta generalmente entre uno y tres años, permitiendo que los departamentos o áreas se preparen para cumplir con los objetivos estratégicos de la organización (Chiavenato, 2019).
              .tarjeta.color-acento-botones.p-4
                .row.justify-content-center.mb-3
                  .col-8
                    img(src='@/assets/curso/temas/img52.svg' style="max-width: 90px").m-auto
                h4.mb-3.estilo-text Desarrollo a nivel intermedio
                p.mb-0.text-center Es responsabilidad de los mandos medios, como gerentes o jefes de departamento, quienes traducen las directrices generales en metas específicas para sus equipos (Koontz & Weihrich, 2022).
              .tarjeta.color-acento-botones.p-4
                .row.justify-content-center.mb-3
                  .col-8
                    img(src='@/assets/curso/temas/img53.svg' style="max-width: 90px").m-auto
                h4.mb-3.estilo-text Orientación a áreas o unidades específicas
                p.mb-0.text-center Cada departamento o área funcional diseña su propio plan táctico, alineado con la estrategia global de la organización (Robbins & Coulter, 2018).
              .tarjeta.color-acento-botones.p-4
                .row.justify-content-center.mb-3
                  .col-8
                    img(src='@/assets/curso/temas/img54.svg' style="max-width: 90px").m-auto
                h4.mb-3.estilo-text Mayor nivel de detalle
                p.mb-0.text-center A diferencia de la planeación estratégica, la táctica profundiza en los recursos necesarios, los tiempos de ejecución y los responsables de cada acción (Chiavenato, 2019).
              .tarjeta.color-acento-botones.p-4
                .row.justify-content-center.mb-3
                  .col-8
                    img(src='@/assets/curso/temas/img55.svg' style="max-width: 90px").m-auto
                h4.mb-3.estilo-text Flexibilidad dentro de límites
                p.mb-0.text-center Aunque debe alinearse con los objetivos estratégicos, la planeación táctica permite cierto grado de ajuste en función de las condiciones específicas de cada área (Koontz & Weihrich, 2022).
              .tarjeta.color-acento-botones.p-4
                .row.justify-content-center.mb-3
                  .col-8
                    img(src='@/assets/curso/temas/img56.svg' style="max-width: 90px").m-auto
                h4.mb-3.estilo-text Busca la eficiencia en la asignación de recursos
                p.mb-0.text-center Su propósito es optimizar el uso de los recursos disponibles y garantizar que todas las unidades trabajen de manera coordinada (Robbins & Coulter, 2018).
        .caja-6.mb-5(data-aos="fade-right")
          .col-lg-auto
            figure
              img(src="@/assets/curso/temas/img32.svg" style="max-width: 60px").m-auto
          .col
            h3 Planeación operativa
        .bloque-texto-g.bloque-texto-g--inverso.color-acento-contenido.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/temas/img57.jpg')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.mb-0 La planeación operativa consiste en programar de manera detallada las actividades diarias necesarias para ejecutar los planes tácticos y cumplir los objetivos organizacionales (Koontz & Weihrich, 2012). Además, define procedimientos, recursos y responsabilidades específicas para garantizar la eficiencia y el control de las operaciones cotidianas dentro de la organización (Chiavenato, 2019; Robbins & Coulter, 2018).
    p.mb-5 Las características de la planeación operativa son:
    .row.mb-5
      .col-xl-auto(data-aos="fade-right")
        figure.d-none.d-xl-block
          img(src="@/assets/curso/temas/img58.png", alt="" ).m-auto
      .col-xl
        AcordionA(tipo="a" clase-tarjeta="tarjeta acordeonA")(data-aos="fade-left")
          .row(titulo="Corto plazo").ajuste-cajaAcordion
            p.mb-3 Está centrada en el cumplimiento de metas inmediatas (generalmente en periodos mensuales, semanales o diarios). Daft (2021); Chiavenato (2019).
          .row(titulo="Alta especificidad").ajuste-cajaAcordion
            p.mb-3 Se enfoca en tareas concretas, detallando quién las realiza, cómo y cuándo. Robbins, S. P., & Coulter, M. (2018).
          .row(titulo="Orientada a la acción").ajuste-cajaAcordion
            p.mb-3 Permite llevar a cabo directamente las actividades productivas y administrativas. Hellriegel, Jackson & Slocum (2020).
          .row(titulo="Asignación precisa de recursos").ajuste-cajaAcordion
            p.mb-3 Distribuye recursos humanos, materiales y técnicos según las necesidades operativas. Stoner, Freeman & Gilbert (2020).
          .row(titulo="Facilita el control y seguimiento").ajuste-cajaAcordion
            p.mb-3 Permite monitorear el cumplimiento de tareas y ajustar rápidamente en caso de desvíos. Griffin (2020).
          .row(titulo="Desarrollada por mandos medios o bajos").ajuste-cajaAcordion
            p.mb-3 Es elaborada por supervisores o jefes operativos, no por la alta dirección.  Koontz & Weihrich (2012).
          .row(titulo="Flexible ante imprevistos cotidianos").ajuste-cajaAcordion
            p.mb-3 A pesar de su especificidad, debe adaptarse a cambios menores del entorno diario. Chiavenato (2019).
    .caja-6.mb-5(data-aos="fade-right")
      .col-lg-auto
        figure
          img(src="@/assets/curso/temas/img32.svg" style="max-width: 60px").m-auto
      .col
        h3 Planeación contingente
    .bloque-texto-g.bloque-texto-g--inverso.color-acento-contenido.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/img57.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 La planeación contingente consiste en diseñar estrategias y planes alternativos para responder ante situaciones imprevistas o cambios del entorno que puedan afectar a la organización (Robbins & Coulter, 2018). Además, permite actuar de manera rápida y flexible frente a riesgos o crisis, minimizando su impacto y garantizando la continuidad de las operaciones (Koontz, Weihrich & Cannice, 2012).
    p.mb-5 Las características de la planeación contingente son:
    .row.mb-0
      .col-xl-auto(data-aos="fade-right")
        figure.d-none.d-xl-block
          img(src="@/assets/curso/temas/img58.png", alt="" ).m-auto
      .col-xl
        AcordionA(tipo="a" clase-tarjeta="tarjeta acordeonA")(data-aos="fade-left")
          .row(titulo="Orientada a la incertidumbre").ajuste-cajaAcordion
            p.mb-3 Se diseña para hacer frente a situaciones imprevistas o de crisis (Robbins & Coulter, 2018).
          .row(titulo="Planificación alternativa").ajuste-cajaAcordion
            p.mb-3 Establece planes de respaldo que se implementan si el plan principal falla o las condiciones cambian significativamente (Koontz et al., 2022).
          .row(titulo="Flexible y adaptable").ajuste-cajaAcordion
            p.mb-3 Permite realizar ajustes rápidos en la estrategia y en la asignación de recursos.
          .row(titulo="Requiere análisis del entorno").ajuste-cajaAcordion
            p.mb-3 Para su diseño, es necesario identificar los riesgos potenciales y los factores externos que podrían afectar a la organización.
          .row(titulo="Minimiza el impacto de los imprevistos").ajuste-cajaAcordion
            p.mb-3 Su propósito es reducir los efectos negativos de los cambios bruscos o de las crisis organizacionales.

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
