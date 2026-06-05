<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 5
      h1 Control
    .bloque-texto-g.color-acento-contenido.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/img85.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 El control es una función administrativa orientada a verificar el cumplimiento de los objetivos organizacionales mediante la medición, evaluación y corrección del desempeño (Chiavenato, 2019; Koontz & Weihrich, 2012). Además, permite monitorear las actividades, comparar resultados y aplicar acciones correctivas para garantizar que los procesos se desarrollen conforme a lo planeado (Robbins & Coulter, 2018; Daft & Marcic, 2019).
    p.mb-5 Lo invitamos a consultar el siguiente video como recurso complementario para fortalecer la comprensión del control dentro del proceso administrativo, reconociendo su importancia en el seguimiento, evaluación y cumplimiento de los objetivos organizacionales.
    figure(data-aos="zoom-in")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption #[b Video]. Proceso administrativo: fase control.
    Separador
    #t_5_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 5.1 Importancia
    .bloque-texto-g.bloque-texto-g--inverso.color-secundario.p-3.p-sm-4.p-md-5.mb-0(data-aos="zoom-in")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/img86.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 El control es importante porque permite verificar el cumplimiento de los objetivos organizacionales, identificar desviaciones y aplicar acciones correctivas oportunamente. Además, contribuye a mejorar la eficiencia, optimizar recursos y garantizar que las actividades se desarrollen conforme a lo planeado dentro de la organización.
    Separador
    #t_5_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 5.2 Características de la fase de control
    p.mb-5 En este apartado se describen las principales características relacionadas con la función de control administrativo organizacional.
    .bg-carrusel
      .px-5
        .row.align-items-center
          .col-xl-4(data-aos="fade-right")
            figure.d-none.d-xl-block
              img(src='@/assets/curso/temas/img88.png', alt='' style="max-width: 350px").m-auto
          .col-xl-8(data-aos="fade-left")
            SlyderF(columnas="col-lg-6 col-xl-6")
              .tarjeta.color-acento-botones.p-4
                .row.justify-content-center.mb-3
                  .col-8
                    img(src='@/assets/curso/temas/img89.svg' style="max-width: 90px").m-auto
                h4.mb-3.estilo-text Es un proceso continuo
                p.mb-0.text-center El control se desarrolla de manera permanente durante todas las actividades organizacionales (Chiavenato, 2019).
              .tarjeta.color-acento-botones.p-4
                .row.justify-content-center.mb-3
                  .col-8
                    img(src='@/assets/curso/temas/img90.svg' style="max-width: 90px").m-auto
                h4.mb-3.estilo-text Está vinculado con la planificación
                p.mb-0.text-center El control requiere objetivos y estándares previamente establecidos como referencia (Koontz & Weihrich, 2012).
              .tarjeta.color-acento-botones.p-4
                .row.justify-content-center.mb-3
                  .col-8
                    img(src='@/assets/curso/temas/img91.svg' style="max-width: 90px").m-auto
                h4.mb-3.estilo-text Evalúa y compara resultados
                p.mb-0.text-center Permite medir el desempeño real frente a lo planificado para detectar desviaciones (Robbins & Coulter, 2018).
              .tarjeta.color-acento-botones.p-4
                .row.justify-content-center.mb-3
                  .col-8
                    img(src='@/assets/curso/temas/img92.svg' style="max-width: 90px").m-auto
                h4.mb-3.estilo-text Incluye retroalimentación
                p.mb-0.text-center Facilita ajustar procesos y mejorar decisiones mediante el análisis de resultados (Daft, 2011).
              .tarjeta.color-acento-botones.p-4
                .row.justify-content-center.mb-3
                  .col-8
                    img(src='@/assets/curso/temas/img93.svg' style="max-width: 90px").m-auto
                h4.mb-3.estilo-text Es universal
                p.mb-0.text-center El control se aplica en todas las áreas y niveles jerárquicos de la organización (Drucker, 2014).
              .tarjeta.color-acento-botones.p-4
                .row.justify-content-center.mb-3
                  .col-8
                    img(src='@/assets/curso/temas/img94.svg' style="max-width: 90px").m-auto
                h4.mb-3.estilo-text Orienta a la acción correctiva
                p.mb-0.text-center El control busca corregir desviaciones y mejorar continuamente las actividades organizacionales conforme a lo planificado (Chiavenato, 2019).
        Separador
        #t_5_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 5.3 Evaluación y retroalimentación de resultados
        .bloque-texto-g.bloque-texto-g--inverso.color-secundario.p-3.p-sm-4.p-md-5.mb-0(data-aos="zoom-in")
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/temas/img95.jpg')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.mb-0 La evaluación y retroalimentación de resultados permite analizar el desempeño organizacional mediante la comparación entre los objetivos planteados y los resultados obtenidos. Este proceso facilita identificar fortalezas, debilidades y oportunidades de mejora, proporcionando información clave para la toma de decisiones y el ajuste de estrategias dentro de la organización.
    Separador
    #t_5_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 5.4 Acciones correctivas y mejora continua
    .caja-2.mb-0(data-aos="zoom-in")
      .row.align-items-center
        .col-xl-auto
          figure
            img(src='@/assets/curso/temas/img96.png', alt='').m-auto
        .col-xl.fit___box_container
          p.mb-0 Las acciones correctivas y la mejora continua buscan solucionar las desviaciones detectadas durante el proceso de control y optimizar permanentemente las actividades organizacionales. Estas acciones permiten fortalecer la eficiencia, prevenir errores futuros y promover una cultura de actualización y perfeccionamiento constante en la empresa.

</template>

<script>
export default {
  name: 'Tema5',
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
