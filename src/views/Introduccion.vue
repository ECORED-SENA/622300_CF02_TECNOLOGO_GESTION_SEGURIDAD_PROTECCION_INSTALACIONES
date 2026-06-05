<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    .row.justify-content-center.align-items-center.mb-5
      .col-lg.mb-4.mb-lg-0
        .caja-1.mb-3(data-aos="fade-right")
          p.mb-0 La administración constituye una disciplina fundamental para el funcionamiento eficiente de las organizaciones, ya que integra procesos, estrategias y herramientas orientadas al cumplimiento de objetivos institucionales. En este componente formativo se abordan los principales fundamentos de la administración y la empresa, permitiendo comprender la evolución de las teorías administrativas, el proceso administrativo y la importancia de la planeación, organización, dirección y control en los entornos organizacionales.
        .row.align-items-center
          .col-lg-auto(data-aos="zoom-in")
            figure.d-none.d-xl-block
              img(src="@/assets/curso/intro/img1.svg", alt="" style="max-width: 70px").m-auto
          .col-lg
            p.mb-0 Asimismo, se estudian herramientas de planeación, estructuras organizacionales, liderazgo administrativo y normas internacionales relacionadas con la calidad y la gestión empresarial. De igual manera, se analizan la clasificación de las empresas, las figuras jurídicas y los diferentes tipos societarios existentes en Colombia.
      .col-lg-auto.col-md-9(data-aos="fade-left")
        figure
          img(src="@/assets/curso/intro/img2.png", alt="").m-auto
    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/intro/img3.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 El desarrollo de estos contenidos permitirá fortalecer competencias relacionadas con la gestión organizacional, la toma de decisiones, el análisis empresarial y la comprensión de los procesos administrativos aplicados en diferentes contextos productivos.
    p.mb-5 En el siguiente video se presentará, de forma general, la temática que se estudiará a lo largo del componente formativo.
    figure(data-aos="zoom-in")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption #[b Video]. Introducción a la administración
        
</template>

<script>
export default {
  name: 'Introduccion',
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
