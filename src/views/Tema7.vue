<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 7
      h1 Empresa y clasificación empresarial
    .bloque-texto-g.bloque-texto-g--inverso.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/img116.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 La empresa constituye una organización orientada al desarrollo de actividades económicas para producir bienes o prestar servicios. Su clasificación permite identificar características relacionadas con su tamaño, actividad económica, propiedad y finalidad, facilitando su comprensión dentro del entorno organizacional y empresarial.
    #t_7_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 7.1 Concepto
    .bloque-texto-g.color-acento-contenido.p-3.p-sm-4.p-md-5.mb-0(data-aos="zoom-in")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/img117.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 La empresa es una organización económica y social que integra recursos humanos, materiales, tecnológicos y financieros para producir bienes o servicios orientados a satisfacer necesidades del mercado y generar beneficios. Además, funciona como un sistema interrelacionado que transforma recursos en resultados mediante procesos planificados y estrategias organizacionales (Chiavenato, 2019; Hellriegel, Jackson & Slocum, 2020). Asimismo, opera en un entorno competitivo buscando crear valor económico y social a través de la eficiencia y la innovación (Daft, 2011).
    Separador
    #t_7_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 7.2 Persona natural
    p.mb-5 En esta sección se detallará el concepto y características de la persona natural:
    TabsC.color-acento-contenido.mb-0(data-aos="zoom-in")
      .py-3.py-md-4(titulo="Concepto")
        .row.justify-content-center.align-items-center
          .col-xl-5.order-2.order-lg-1
            figure
              img(src='@/assets/curso/temas/img118.png', alt="" ).m-auto
          .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
            h4.txt--purpura.mb-4 Concepto
            p.mb-0 La persona natural es un ser humano con capacidad para adquirir derechos y asumir obligaciones, que puede desarrollar actividades comerciales a su nombre y responder directamente por ellas (Bernal Torres, 2020). Además, el Código de Comercio colombiano establece que una persona natural se considera comerciante cuando ejerce actividades mercantiles de manera habitual y profesional (Código de Comercio de Colombia, art. 10).
      .py-3.py-md-4(titulo="Características")
        .row.justify-content-center.align-items-center
          .col-xl-5.order-2.order-lg-1
            figure
              img(src='@/assets/curso/temas/img119.png', alt="" ).m-auto
          .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
            h4.txt--purpura.mb-4 Características
            p Una persona natural mercantil se caracteriza por:
            ul.fa-ul.estilo___ul.mb-0
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                |  Ejercer actividades comerciales de forma habitual. 
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                |  Estar inscrita en el Registro Mercantil. 
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                |  Actuar en nombre propio y responder personalmente por sus obligaciones comerciales.
    Separador
    #t_7_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 7.3 Persona jurídica
    p.mb-5 A continuación, se estudiará el concepto de persona jurídica y las características:
    TabsC.color-acento-contenido.mb-0(data-aos="zoom-in")
      .py-3.py-md-4(titulo="Concepto")
        .row.justify-content-center.align-items-center
          .col-xl-5.order-2.order-lg-1
            figure
              img(src='@/assets/curso/temas/img120.png', alt="" ).m-auto
          .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
            h4.txt--purpura.mb-4 Concepto
            p.mb-0 La persona jurídica es una entidad reconocida legalmente para ejercer derechos y asumir obligaciones. Puede constituirse como empresa, sociedad, fundación o asociación (Guzmán Valenzuela, 2019).
      .py-3.py-md-4(titulo="Características")
        .row.justify-content-center.align-items-center
          .col-xl-5.order-2.order-lg-1
            figure
              img(src='@/assets/curso/temas/img121.png', alt="" ).m-auto
          .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
            h4.txt--purpura.mb-4 Características
            p El Código Civil Colombiano (art. 633) establece que la persona jurídica puede ejercer derechos, contraer obligaciones y ser representada legalmente.
            p Características:
            ul.fa-ul.estilo___ul.mb-0
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Tiene reconocimiento legal. 
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                |  Puede celebrar contratos y asumir obligaciones. 
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                |  Actúa mediante representantes legales. 
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                |  Posee patrimonio independiente.
    Separador
    #t_7_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 7.4 Clasificación de las empresas
    p.mb-5 Las empresas se clasifican así:
    .bg-slider.mb-5
      .px-5
        .ajuste-slider(data-aos="zoom-in")
          SlyderA(tipo="b")
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Por tamaño
                p Se clasifica por tamaño, según empleados e ingresos anuales así:
                ul.fa-ul.estilo___ul.mb-0
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | #[b Microempresa:] cuenta con hasta 10 empleados y registra ingresos anuales de hasta 23.563 UVT. 
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | #[b Pequeña empresa:] posee entre 11 y 50 empleados, con ingresos entre 23.563 y 204.995 UVT. 
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | #[b Mediana empresa:] tiene entre 51 y 200 empleados y genera ingresos entre 204.996 y 1.736.565 UVT. 
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | #[b Gran empresa:] supera los 200 empleados y registra ingresos mayores a 1.736.565 UVT (Ministerio de Comercio, Industria y Turismo, 2019; Bernal Torres, 2020).
              .col-xl-6
                figure
                  img(src='@/assets/curso/temas/img122.png', alt='' style="max-width: 500px").m-auto
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Por sector económico
                p Por sector económico se clasifican, según la actividad, así:
                ul.fa-ul.estilo___ul.mb-0
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | #[b Sector primario:] comprende actividades relacionadas con la extracción directa de recursos naturales, como agricultura y pesca.
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | #[b Sector secundario:] incluye procesos de transformación de materias primas, como industria, manufactura y construcción.
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | #[b Sector terciario:] corresponde a la prestación de servicios, entre ellos comercio, turismo, transporte, educación, salud, sector financiero y seguros.
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | #[b Sector cuaternario:] agrupa servicios basados en el conocimiento, como tecnología, investigación, finanzas e innovación (I+D).
              .col-xl-6
                figure
                  img(src='@/assets/curso/temas/img123.png', alt='' style="max-width: 500px").m-auto
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Código CIIU
                p El Código CIIU es un sistema estandarizado que clasifica las actividades económicas de las empresas y organizaciones, permitiendo identificar el sector económico, registrar actividades ante entidades oficiales y facilitar estadísticas y comparaciones internacionales.
                p.mb-0 En Colombia, el código CIIU 8010 corresponde a las actividades de seguridad privada, incluyendo servicios de vigilancia, escoltas, transporte seguro de valores y otras actividades relacionadas con protección y seguridad. Sin embargo, no incluye funciones de orden público como policía o bomberos.
              .col-xl-6
                figure
                  img(src='@/assets/curso/temas/img124.png', alt='' style="max-width: 500px").m-auto
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Por tipo de capital
                p La clasificación por tipo de capital es la siguiente:
                ul.fa-ul.estilo___ul.mb-0
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | Empresa privada: pertenece a individuos o corporaciones particulares. 
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | Empresa pública: es propiedad del Estado o del gobierno. 
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | Empresa mixta: combina capital del sector público y privado.
              .col-xl-6
                figure
                  img(src='@/assets/curso/temas/img125.png', alt='' style="max-width: 500px").m-auto
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Por finalidad
                p Clasificación por finalidad:
                ul.fa-ul.estilo___ul.mb-0
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | Con ánimo de lucro: buscan obtener rentabilidad financiera y crecimiento económico.
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | Sin ánimo de lucro: persiguen fines sociales, culturales, ambientales o educativos.
              .col-xl-6
                figure
                  img(src='@/assets/curso/temas/img126.png', alt='' style="max-width: 500px").m-auto
    p.mb-5 En Colombia, las empresas se pueden clasificar por tipo de sociedad según el Código de Comercio Colombiano y normas posteriores, como la Ley 1258 de 2008. A continuación, se presenta un resumen de las principales formas societarias, sus características y normativas aplicables:
    .bg-slider
      .px-5
        .ajuste-slider(data-aos="zoom-in")
          SlyderA(tipo="b")
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Sociedad Anónima (S.A.)
                p.mb-0 El capital se divide en acciones, requiere mínimo cinco accionistas y la responsabilidad se limita al aporte realizado. Normativa: Código de Comercio, arts. 373-460.
              .col-xl-6
                figure
                  img(src='@/assets/curso/temas/img127.png', alt='' style="max-width: 500px").m-auto
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Sociedad Limitada (Ltda.)
                p.mb-0 Puede tener hasta 25 socios, el capital se representa en cuotas y la responsabilidad es limitada. Normativa: Código de Comercio, arts. 353-372.
              .col-xl-6
                figure
                  img(src='@/assets/curso/temas/img128.png', alt='' style="max-width: 500px").m-auto
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Sociedad por Acciones Simplificada (S.A.S.)
                p.mb-0 Puede constituirse por una sola persona, ofrece flexibilidad administrativa y responsabilidad limitada. Normativa: Ley 1258 de 2008.
              .col-xl-6
                figure
                  img(src='@/assets/curso/temas/img129.png', alt='' style="max-width: 500px").m-auto
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Sociedad Colectiva
                p.mb-0 Los socios responden de manera solidaria e ilimitada por las obligaciones sociales. Normativa: Código de Comercio, arts. 294-322.
              .col-xl-6
                figure
                  img(src='@/assets/curso/temas/img130.png', alt='' style="max-width: 500px").m-auto
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Sociedad en Comandita Simple (S. en C.)
                p.mb-0 Integra socios gestores con responsabilidad ilimitada y socios comanditarios con responsabilidad limitada. Normativa: Código de Comercio, arts. 323-340.
              .col-xl-6
                figure
                  img(src='@/assets/curso/temas/img131.png', alt='' style="max-width: 500px").m-auto
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Sociedad en Comandita por Acciones (S.C.A.)
                p.mb-0 Similar a la comandita simple, pero el capital de los socios comanditarios se divide en acciones. Normativa: Código de Comercio, arts. 341-372.
              .col-xl-6
                figure
                  img(src='@/assets/curso/temas/img132.png', alt='' style="max-width: 500px").m-auto
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Empresa Unipersonal (E.U.)
                p.mb-0 Pertenece a un solo titular y la responsabilidad se limita al patrimonio aportado. Normativa: Ley 222 de 1995.
              .col-xl-6
                figure
                  img(src='@/assets/curso/temas/img133.png', alt='' style="max-width: 500px").m-auto
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Empresa de Economía Solidaria
                p.mb-0 Organización sin ánimo de lucro basada en la asociación voluntaria para fines comunes. Normativa: Ley 79 de 1988 y Ley 454 de 1998.
              .col-xl-6
                figure
                  img(src='@/assets/curso/temas/img134.png', alt='' style="max-width: 500px").m-auto
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Sucursales de Sociedad Extranjera
                p.mb-0 Empresas extranjeras autorizadas para desarrollar operaciones permanentes en Colombia. Normativa: Código de Comercio, arts. 471-481.
              .col-xl-6
                figure
                  img(src='@/assets/curso/temas/img135.png', alt='' style="max-width: 500px").m-auto

</template>

<script>
export default {
  name: 'Tema7',
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
