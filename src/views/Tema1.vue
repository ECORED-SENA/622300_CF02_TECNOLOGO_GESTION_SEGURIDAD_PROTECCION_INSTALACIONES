<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 1
      h1 Introducción a la administración
    .bloque-texto-g.bloque-texto-g--inverso.color-acento-contenido.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/img1.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 La administración es una disciplina que permite planear, organizar, dirigir y controlar recursos para alcanzar objetivos de manera eficiente y eficaz. Su aplicación facilita la toma de decisiones, la coordinación de actividades y el adecuado funcionamiento de las organizaciones.
    #t_1_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.1 Concepto de administración
    .caja-2.mb-0(data-aos="zoom-in")
      .row.align-items-center
        .col-xl-auto
          figure
            img(src='@/assets/curso/temas/img2.png', alt='').m-auto
        .col-xl.fit___box_container
          p.mb-0 La administración consiste en coordinar actividades y recursos para alcanzar los objetivos organizacionales de manera eficiente y eficaz (Robbins & Coulter, 2018). Según Chiavenato (2018), es el proceso de planear, organizar, dirigir y controlar los recursos de la organización para lograr resultados efectivos. Con el tiempo, este concepto ha evolucionado hacia un enfoque estratégico orientado a la toma de decisiones y al cumplimiento de los fines institucionales mediante la aplicación integral del proceso administrativo.
    Separador
    #t_1_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.2 Orígenes y enfoques administrativos
    p.mb-5 En este apartado se abordará la evolución de la administración, las bases de la administración moderna y los principales enfoques de las teorías administrativas.
    .tarjeta--container.row.justify-content-center.mb-5.m-0(data-aos="zoom-in")
      .col-xl-6.col-md-10.tarjeta.color-acento-contenido.p-5.mb-4.mb-lg-0
        .row.d-flex.align-items-end.mb-4
          .col-xl-auto.mb-3.mb-lg-0(data-aos="fade-right")
            figure
              img(src='@/assets/curso/temas/img3.svg', alt='' style="max-width: 100px")
          .col-xl
            h2 Evolución de la administración
        p.mb-0 La administración surgió y evolucionó con mayor fuerza durante la Revolución Industrial, gracias a los aportes de filósofos, científicos, economistas y empresarios que buscaron optimizar la organización y gestión de las empresas (Chiavenato, 2019; Robbins & Coulter, 2018).
      .col-xl-6.col-md-10.tarjeta.color-primario.text-white.p-5
        .row.d-flex.align-items-end.mb-4
          .col-xl-auto.mb-3.mb-lg-0(data-aos="fade-right")
            figure
              img(src='@/assets/curso/temas/img4.svg', alt='' style="max-width: 100px")
          .col-xl
            h2 Bases de la administración moderna
        p.mb-0 Desde la antigüedad, civilizaciones y organizaciones militares, políticas y religiosas presentaban estructuras jerárquicas y modelos de autoridad que sirvieron como base para la administración moderna. Además, pensadores como Platón, Maquiavelo y Adam Smith aportaron conceptos relacionados con la organización y gestión de recursos (Koontz, Weihrich & Cannice, 2022).
    .row.justify-content-center.mb-5
      .col-lg-10
        .caja-3.mb-5(data-aos="flip-up")
          .row.align-items-center
            .col-xl-auto.col-md-2.mb-3.mb-lg-0(data-aos="fade-right")
              figure
                img(src='@/assets/curso/intro/img1.svg', alt='' style="width: 80px").m-auto
            .col-xl.col-md-10
              p.mb-0 A continuación, se presenta una línea de tiempo con las principales teorías administrativas, la cual permite identificar la evolución histórica de la administración y los aportes más representativos de sus principales enfoques y autores.
    .row.justify-content-center.mb-5
      .col-lg-10
        PasosA.color-acento-contenido(tipo="n")
          .row.align-items-center
            .col-lg.mb-4.mb-lg-0
              h3 1903 Administración científica
              p.mb-0 Enfoque orientado a mejorar la eficiencia y productividad del trabajo mediante métodos científicos.
            .col-auto(data-aos="zoom-in")
              figure
                img(src='@/assets/curso/temas/img5.png', alt='' style="width: 300px").m-auto
          .row.align-items-center
            .col-auto.mb-4.mb-lg-0(data-aos="zoom-in")
              figure
                img(src='@/assets/curso/temas/img6.png', alt='' style="width: 300px").m-auto
            .col-lg.fit___pasosA-left
              h3 1909 Teoría clásica
              p.mb-0 Propone principios administrativos y funciones organizacionales para mejorar la estructura empresarial.
          .row.align-items-center
            .col-lg.mb-4.mb-lg-0
              h3 1916 Teoría burocrática
              p.mb-0 Establece normas, jerarquías y procedimientos formales para organizar las empresas.
            .col-auto(data-aos="zoom-in")
              figure
                img(src='@/assets/curso/temas/img7.png', alt='' style="width: 300px").m-auto
          .row.align-items-center
            .col-auto.mb-4.mb-lg-0(data-aos="zoom-in")
              figure
                img(src='@/assets/curso/temas/img8.png', alt='' style="width: 300px").m-auto
            .col-lg.fit___pasosA-left
              h3 1954 Teoría de las relaciones humanas
              p.mb-0 Resalta la importancia de las personas, la motivación y el trabajo en equipo.
          .row.align-items-center
            .col-lg.mb-4.mb-lg-0
              h3 1957 Teoría estructuralista
              p.mb-0 Integra la estructura organizacional y las relaciones humanas dentro de la empresa.
            .col-auto(data-aos="zoom-in")
              figure
                img(src='@/assets/curso/temas/img9.png', alt='' style="width: 300px").m-auto
          .row.align-items-center
            .col-auto.mb-4.mb-lg-0(data-aos="zoom-in")
              figure
                img(src='@/assets/curso/temas/img10.png', alt='' style="width: 300px").m-auto
            .col-lg.fit___pasosA-left
              h3 1962 Teoría organizacional
              p Analiza la organización como un sistema compuesto por diferentes áreas interrelacionadas.
              p.mb-0 #[b Nuevos enfoques]
              p.mb-0 Incorporan modelos modernos basados en calidad, tecnología, sistemas y gestión del conocimiento.
    .row.align-items-center.mb-3
      .col-lg-auto(data-aos="zoom-in")
        figure.d-none.d-xl-block
          img(src="@/assets/curso/temas/img11.svg", alt="" style="max-width: 70px").m-auto
      .col-lg
        p.mb-0 Desde inicios del siglo XXI, las teorías administrativas han evolucionado hacia enfoques más flexibles centrados en la gestión de la calidad, los sistemas organizacionales, los modelos de contingencia y la gestión del conocimiento, destacando la importancia del comportamiento organizacional y del talento humano (Robles & Alcérreca, 2021; Chiavenato, 2019).
    p.mb-5 Según Robbins y Coulter (2018), las teorías administrativas han contribuido al desarrollo y desempeño eficiente de las organizaciones a lo largo de la historia. Desde esta perspectiva, se describen los principales enfoques de las teorías administrativas y su evolución en el ámbito empresarial.
    .bg-slider.mb-0
      .px-5
        .ajuste-slider(data-aos="zoom-in")
          SlyderA(tipo="b")
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 En las tareas
                p.mb-0 #[b Administración científica:] optimiza la productividad laboral mediante métodos científicos y especialización de tareas.
              .col-xl-6
                figure
                  img(src='@/assets/curso/temas/img13.png', alt='' style="max-width: 500px").m-auto
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 En las personas
                ul.fa-ul.estilo___ul.mb-0
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | #[b Teoría de las relaciones humanas:] destaca la importancia del bienestar, motivación y trabajo en equipo.
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | #[b Teoría del comportamiento organizacional:] analiza la conducta humana y el liderazgo dentro de las organizaciones.
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | #[b Teoría del desarrollo organizacional:] promueve cambios organizacionales orientados al mejoramiento continuo y adaptación.
              .col-xl-6
                figure
                  img(src='@/assets/curso/temas/img14.png', alt='' style="max-width: 500px").m-auto
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 En la estructura organizacional
                ul.fa-ul.estilo___ul.mb-0
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | #[b Teoría clásica:] establece principios administrativos y funciones para fortalecer la organización empresarial.
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | #[b Teoría burocrática:] organiza la empresa mediante normas, jerarquías y procedimientos formales.
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | #[b Teoría estructuralista:] integra la estructura organizacional y las relaciones humanas dentro de la empresa.
              .col-xl-6
                figure
                  img(src='@/assets/curso/temas/img15.png', alt='' style="max-width: 500px").m-auto
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 En el ambiente
                p.mb-0 #[b Teoría estructuralista:] integra la estructura organizacional y su relación con el entorno empresarial.
              .col-xl-6
                figure
                  img(src='@/assets/curso/temas/img16.png', alt='' style="max-width: 500px").m-auto
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 En la tecnología
                p.mb-0 #[b Teoría contingencial:] las decisiones administrativas dependen de las condiciones tecnológicas y del entorno.
              .col-xl-6
                figure
                  img(src='@/assets/curso/temas/img17.png', alt='' style="max-width: 500px").m-auto
    Separador
    #t_1_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.3 Universalidad de la administración
    p.mb-5 La universalidad de la administración hace referencia a que esta es esencial en todo tipo de organizaciones, independientemente de su tamaño, área funcional, nivel jerárquico o contexto donde operen (Chiavenato, 2019). A partir de esto, se presenta su aplicación:
    .row.justify-content-center.mb-5
      .col-xl-4.col-md-9.mb-4.mb-lg-0(data-aos="fade-right")
        .caja-4.h-100
          .row.justify-content-center.mb-3
            .col-12
              figure.mb-4
                img(src='@/assets/curso/temas/img18.jpg', alt="" ).m-auto
            h4.text-center En las funciones administrativas
            .caja-4_p
              p.mb-0.text-center Los administradores, sin importar el sector donde se desempeñen, desarrollan funciones de planeación, organización, dirección y control, consideradas esenciales dentro del proceso administrativo (Koontz, Weihrich & Cannice, 2012).
      .col-xl-4.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
        .caja-4.h-100
          .row.justify-content-center.mb-3
            .col-12
              figure.mb-4
                img(src='@/assets/curso/temas/img19.jpg', alt="" ).m-auto
            h4.text-center En las organizaciones
            .caja-4_p
              p.mb-0.text-center La administración se aplica en empresas, instituciones y organizaciones de diferentes sectores, adaptándose a las necesidades y características de cada entorno organizacional (Chiavenato, 2019).
      .col-xl-4.col-md-9(data-aos="fade-left")
        .caja-4.h-100
          .row.justify-content-center.mb-3
            .col-12
              figure.mb-4
                img(src='@/assets/curso/temas/img20.jpg', alt="" ).m-auto
            h4.text-center Según el nivel jerárquico
            .caja-4_p
              p.mb-0.text-center Las funciones administrativas no se ejecutan de igual manera en todos los cargos, ya que el nivel de responsabilidad, alcance y toma de decisiones varía según el puesto desempeñado (Robbins, S. P., & Coulter, M., 2018).
    .row.justify-content-center.align-items-center.mb-0
      .col-lg.mb-4.mb-lg-0
        .caja-1.mb-3(data-aos="fade-right")
          p Seguidamente, se expondrá un ejemplo de universalidad administrativa:
          p.mb-0 Según Robbins, S. P., & Coulter, M. (2018), un supervisor de pruebas de software y un director general aplican las mismas funciones administrativas, aunque con diferentes niveles de responsabilidad y enfoque.
      .col-lg-auto.col-md-9(data-aos="fade-left")
        figure
          img(src="@/assets/curso/temas/img21.png", alt="").m-auto
    Separador
    #t_1_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.4 Proceso Administrativo
    p.mb-5 En la presente sección se analizará el origen, la importancia, concepto, etapas y funciones del proceso administrativo:
    TabsC.color-acento-contenido.mb-0(data-aos="zoom-in")
      .py-3.py-md-4(titulo="Origen e importancia")
        .row.justify-content-center.align-items-center
          .col-xl-5.order-2.order-lg-1
            figure
              img(src='@/assets/curso/temas/img22.png', alt="" ).m-auto
          .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
            h4.txt--purpura.mb-4 Origen e importancia
            p.mb-0 El proceso administrativo surge a partir de los aportes de Henri Fayol, quien identificó las funciones esenciales de la administración: planear, organizar, dirigir y controlar. Este enfoque permitió sistematizar y optimizar el trabajo organizacional, consolidando la administración como una disciplina aplicable a cualquier tipo de organización (Chiavenato, 2019).
      .py-3.py-md-4(titulo="Concepto")
        .row.justify-content-center.align-items-center
          .col-xl-5.order-2.order-lg-1
            figure
              img(src='@/assets/curso/temas/img23.png', alt="" ).m-auto
          .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
            h4.txt--purpura.mb-4 Concepto
            p.mb-0 El proceso administrativo comprende etapas interrelacionadas orientadas al logro eficiente y eficaz de los objetivos organizacionales (Chiavenato, 2019). Además, facilita la toma de decisiones y la asignación de recursos, funcionando como un ciclo dinámico y flexible que requiere seguimiento y ajustes continuos según las condiciones del entorno (Koontz, Weihrich & Cannice, 2012; Robbins & Coulter, 2018).
      .py-3.py-md-4(titulo="Etapas del proceso administrativo")
        .row.justify-content-center.align-items-center
          .col-xl-5.order-2.order-lg-1
            figure
              img(src='@/assets/curso/temas/img24.png', alt="" ).m-auto
          .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
            h4.txt--purpura.mb-4 Etapas del proceso administrativo
            p.mb-0 Las etapas se aplican de forma lógica, continua y coordinada para garantizar el adecuado funcionamiento organizacional (Chiavenato, 2019). Las etapas del proceso administrativo son: planeación, organización, dirección y control.
      .py-3.py-md-4(titulo="Funciones de cada etapa del proceso administrativo")
        .row.justify-content-center.align-items-center
          .col-xl-5.order-2.order-lg-1
            figure
              img(src='@/assets/curso/temas/img25.png', alt="" ).m-auto
          .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
            h4.txt--purpura.mb-4 Funciones de cada etapa del proceso administrativo
            p Basado en Blandez (2014), se presentan las funciones de cada etapa del proceso administrativo:
            ul.fa-ul.estilo___ul.mb-0
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | #[b Planeación:] para determinar los objetivos en los cursos de acción que van a seguirse.
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | #[b Organización:] para distribuir el trabajo entre los miembros del grupo y para establecer y reconocer las relaciones necesarias.
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | #[b Dirección:] es la etapa que implica guiar, motivar, supervisar y coordinar al personal para alcanzar los objetivos organizacionales.
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | #[b Control:] revisar constantemente las actividades para que se desarrollen de acuerdo con los planes trazados.
    Separador
    #t_1_5.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.5 Relación entre administración y proceso administrativo
    .row.align-items-center.mb-5
      .col-lg-auto(data-aos="zoom-in")
        figure.d-none.d-xl-block
          img(src="@/assets/curso/temas/img26.svg", alt="" style="max-width: 70px").m-auto
      .col-lg
        p.mb-0 La administración estratégica integra el diagnóstico y análisis empresarial con las etapas del proceso administrativo: planeación, organización, dirección y control. Estas funciones permiten orientar las acciones organizacionales y facilitar el cumplimiento de los objetivos empresariales. Estas se relacionan así:
    .row.justify-content-center.mb-5
      .col-xl-4.col-md-9.mb-4.mb-lg-0(data-aos="fade-right")
        .caja-4.h-100
          .row.justify-content-center.mb-3
            .col-12
              figure.mb-4
                img(src='@/assets/curso/temas/img27.jpg', alt="" ).m-auto
            h4.text-center Administración estratégica
            .caja-4_p
              p.mb-0.text-center Orienta la organización mediante el análisis, la toma de decisiones y la definición de objetivos estratégicos.
      .col-xl-4.col-md-9(data-aos="fade-left")
        .caja-4.h-100
          .row.justify-content-center.mb-3
            .col-12
              figure.mb-4
                img(src='@/assets/curso/temas/img28.jpg', alt="" ).m-auto
            h4.text-center Proceso administrativo
            .caja-4_p
              p.mb-0.text-center Integra las etapas de planeación, organización, dirección y control para ejecutar las actividades organizacionales.
    p.mb-0 La administración estratégica define el rumbo organizacional, mientras el proceso administrativo permite ejecutar y controlar las acciones necesarias para alcanzar los objetivos empresariales.

</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({
    mostrarIndicadorTarjetaAudio: true,
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
