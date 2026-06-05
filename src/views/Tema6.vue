<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 6
      h1 Normas ISO y gestión organizacional
    .bloque-texto-g.bloque-texto-g--inverso.color-acento-contenido.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/img97.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Las normas ISO (Organización Internacional de Normalización) son marcos de referencia internacionales para sistemas de gestión que se estructuran típicamente para facilitar su integración. Estos se basan en principios como el enfoque por procesos, la política de calidad alineada con los objetivos, el compromiso de la alta dirección y la mejora continua, basada en el ciclo PHVA (Planificar-Hacer-Verificar-Actuar) (ISO, 2015; Goetsch & Davis, 2021).
    #t_6_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 6.1 Algunas normas ISO existentes
    p.mb-5 Algunas de estas normas ISO son:
    .bg-carrusel
      .px-5
        .row.align-items-center
          .col-xl-4(data-aos="fade-right")
            figure.d-none.d-xl-block
              img(src='@/assets/curso/temas/img98.png', alt='' style="max-width: 350px").m-auto
          .col-xl-8(data-aos="fade-left")
            SlyderF(columnas="col-lg-6 col-xl-6")
              .tarjeta.color-acento-botones.p-4
                .row.justify-content-center.mb-3
                  .col-8
                    img(src='@/assets/curso/temas/img99.svg' style="max-width: 90px").m-auto
                h4.mb-3.estilo-text ISO 9001
                p.mb-0.text-center Sistemas de gestión de la calidad.
              .tarjeta.color-acento-botones.p-4
                .row.justify-content-center.mb-3
                  .col-8
                    img(src='@/assets/curso/temas/img100.svg' style="max-width: 90px").m-auto
                h4.mb-3.estilo-text ISO 14001
                p.mb-0.text-center Sistemas de gestión ambiental.
              .tarjeta.color-acento-botones.p-4
                .row.justify-content-center.mb-3
                  .col-8
                    img(src='@/assets/curso/temas/img101.svg' style="max-width: 90px").m-auto
                h4.mb-3.estilo-text ISO 27001
                p.mb-0.text-center Sistemas de gestión de seguridad de la información.
              .tarjeta.color-acento-botones.p-4
                .row.justify-content-center.mb-3
                  .col-8
                    img(src='@/assets/curso/temas/img102.svg' style="max-width: 90px").m-auto
                h4.mb-3.estilo-text ISO 22000
                p.mb-0.text-center Sistemas de gestión de la seguridad alimentaria.
              .tarjeta.color-acento-botones.p-4
                .row.justify-content-center.mb-3
                  .col-8
                    img(src='@/assets/curso/temas/img103.svg' style="max-width: 90px").m-auto
                h4.mb-3.estilo-text ISO 45001
                p.mb-0.text-center Sistemas de gestión de la seguridad y salud en el trabajo.
              .tarjeta.color-acento-botones.p-4
                .row.justify-content-center.mb-3
                  .col-8
                    img(src='@/assets/curso/temas/img104.svg' style="max-width: 90px").m-auto
                h4.mb-3.estilo-text ISO 18788
                p.mb-0.text-center Sistemas de Gestión de Operaciones de Seguridad Privada.
        Separador
        #t_6_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 6.2 Características generales y principios de gestión de calidad
    .row.justify-content-center.align-items-center.mb-5
      .col-lg.mb-4.mb-lg-0
        .caja-1.ajuste-1.p-4(data-aos="fade-right")
          p Las normas reconocidas globalmente son aplicables a organizaciones de diferentes sectores y tamaños, permitiendo fortalecer la gestión organizacional mediante enfoques orientados a la mejora continua, la gestión por procesos y el cumplimiento de objetivos estratégicos. Las características generales son:
          ul.fa-ul.estilo___ul.mb-0
            li.mb-0
              span.fa-li
                i.fas.fa-check-circle
              |  Aplicables a organizaciones de distintos sectores y tamaños. 
            li.mb-0
              span.fa-li
                i.fas.fa-check-circle
              |  Promueven la mejora continua de los procesos. 
            li.mb-0
              span.fa-li
                i.fas.fa-check-circle
              |  Se enfocan en la gestión basada en procesos y resultados. 
            li.mb-0
              span.fa-li
                i.fas.fa-check-circle
              |  Incorporan el análisis y gestión de riesgos. 
            li.mb-0
              span.fa-li
                i.fas.fa-check-circle
              |  Favorecen el liderazgo y la participación organizacional. 
            li.mb-0
              span.fa-li
                i.fas.fa-check-circle
              |  Están orientadas a la satisfacción del cliente y las partes interesadas. 
            li.mb-0
              span.fa-li
                i.fas.fa-check-circle
              |  Facilitan la eficiencia, el control y la toma de decisiones.
      .col-lg-auto.col-md-9(data-aos="fade-left")
        figure
          img(src="@/assets/curso/temas/img105.png", alt="").m-auto
    p.mb-5 Los sistemas de gestión de calidad se fundamentan en principios orientados a fortalecer la eficiencia organizacional, mejorar los procesos y garantizar el cumplimiento de los objetivos institucionales. Los principios de la gestión de calidad son:
    .bg-carrusel
      .px-5
        .row.align-items-center
          .col-xl-4(data-aos="fade-right")
            figure.d-none.d-xl-block
              img(src='@/assets/curso/temas/img106.png', alt='' style="max-width: 350px").m-auto
          .col-xl-8(data-aos="fade-left")
            SlyderF(columnas="col-lg-6 col-xl-6")
              .tarjeta.color-acento-botones.p-4
                .row.justify-content-center.mb-3
                  .col-8
                    img(src='@/assets/curso/temas/img107.svg' style="max-width: 90px").m-auto
                h4.mb-3.estilo-text Enfoque basado en procesos
                p.mb-0.text-center Identifica, gestiona y controla los procesos y sus interacciones.
              .tarjeta.color-acento-botones.p-4
                .row.justify-content-center.mb-3
                  .col-8
                    img(src='@/assets/curso/temas/img108.svg' style="max-width: 90px").m-auto
                h4.mb-3.estilo-text Mejora continua
                p.mb-0.text-center Promueve la optimización permanente de las actividades y resultados.
              .tarjeta.color-acento-botones.p-4
                .row.justify-content-center.mb-3
                  .col-8
                    img(src='@/assets/curso/temas/img109.svg' style="max-width: 90px").m-auto
                h4.mb-3.estilo-text Liderazgo
                p.mb-0.text-center Orienta y compromete a la organización hacia el logro de objetivos comunes.
              .tarjeta.color-acento-botones.p-4
                .row.justify-content-center.mb-3
                  .col-8
                    img(src='@/assets/curso/temas/img110.svg' style="max-width: 90px").m-auto
                h4.mb-3.estilo-text Enfoque al cliente
                p.mb-0.text-center Busca satisfacer las necesidades y expectativas de los usuarios.
              .tarjeta.color-acento-botones.p-4
                .row.justify-content-center.mb-3
                  .col-8
                    img(src='@/assets/curso/temas/img111.svg' style="max-width: 90px").m-auto
                h4.mb-3.estilo-text Participación del personal
                p.mb-0.text-center Involucra activamente a todos los niveles de la organización.
              .tarjeta.color-acento-botones.p-4
                .row.justify-content-center.mb-3
                  .col-8
                    img(src='@/assets/curso/temas/img112.svg' style="max-width: 90px").m-auto
                h4.mb-3.estilo-text Toma de decisiones basada en evidencia
                p.mb-0.text-center Utiliza información y datos confiables para decidir.
              .tarjeta.color-acento-botones.p-4
                .row.justify-content-center.mb-3
                  .col-8
                    img(src='@/assets/curso/temas/img113.svg' style="max-width: 90px").m-auto
                h4.mb-3.estilo-text Gestión de relaciones
                p.mb-0.text-center Fortalece la interacción con proveedores y partes interesadas.
        Separador
        #t_6_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 6.3 ISO 9000: Cuando la calidad empieza por el cliente
        .bloque-texto-g.bloque-texto-g--inverso.color-secundario.p-3.p-sm-4.p-md-5.mb-0(data-aos="zoom-in")
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/temas/img114.jpg')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.mb-0 La norma ISO 9000 orienta a las organizaciones hacia la gestión de la calidad, promoviendo la realización adecuada de los procesos desde el inicio y enfocándose en la satisfacción del cliente. Además, establece principios y lineamientos que permiten gestionar la calidad de manera coherente, facilitando que toda la organización trabaje con objetivos claros y un enfoque común orientado al mejoramiento continuo y al servicio al cliente.
    Separador
    #t_6_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 6.4 ISO 18788 – Sistema de gestión para operaciones de seguridad
    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-0(data-aos="zoom-in")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/img115.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 La norma ISO 18788 establece un sistema de gestión para operaciones de seguridad privada, orientado a planificar, ejecutar, supervisar y mejorar continuamente las actividades de seguridad. Además, promueve principios relacionados con la ética, los derechos humanos y la gobernanza, fortaleciendo el cumplimiento legal, la gestión de riesgos y la credibilidad de las organizaciones que prestan o implementan servicios de seguridad privada.
    Separador
    #t_6_5.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 6.5 Análisis comparativo entre la ISO 9001 y la 18788
    p.mb-5 La siguiente tabla presenta una comparación entre las normas ISO 9001 e ISO 18788, destacando sus principales diferencias en cuanto al ámbito de aplicación, enfoque y beneficios organizacionales.
    .row.justify-content-center
      .col-xl-10
        .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
          h5 Tabla 3.
          span Comparativa de la ISO 9001 y la 18788
        .tabla-a(data-aos="zoom-in").mb-3
          table
            thead
              tr
                th.ajuste-border-tabla.texto-left Elemento
                th.ajuste-border-tabla.texto-left ISO 18788
                th.texto-left ISO 9001
            tbody
              tr.ajuste-color-tabla
                td.ajuste-border-tabla.texto-left.text-weight-bold Ámbito
                td.ajuste-border-tabla.texto-left Operaciones de seguridad privada
                td.texto-left Gestión de calidad en cualquier sector
              tr
                td.ajuste-border-tabla.texto-left.text-weight-bold Enfoque principal
                td.ajuste-border-tabla.texto-left Riesgos, derechos humanos, ética
                td.texto-left Calidad, satisfacción del cliente, mejora continua
              tr.ajuste-color-tabla
                td.ajuste-border-tabla.texto-left.text-weight-bold Beneficios clave
                td.ajuste-border-tabla.texto-left Transparencia, legalidad, reputación en seguridad
                td.texto-left Eficiencia, confianza del cliente, competitividad
        .caja-3.color-1(data-aos="flip-up")
          .row.align-items-center
            .col-xl-auto.col-md-2.mb-3.mb-lg-0(data-aos="fade-right")
              figure
                img(src='@/assets/curso/intro/img1.svg', alt='' style="width: 80px").m-auto
            .col-xl.col-md-10
              p.mb-0 Esta comparación permite comprender cómo cada norma responde a necesidades específicas de gestión y mejora dentro de las organizaciones.

</template>

<script>
export default {
  name: 'Tema6',
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
