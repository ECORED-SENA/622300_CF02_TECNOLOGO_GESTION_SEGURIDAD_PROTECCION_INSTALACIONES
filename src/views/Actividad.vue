<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
  
      #Actividad                
        <Actividad :cuestionario="cuestionario"/>
  
  </template>

<script>
import Actividad from 'ecored-pkg-fliz/plugin/components/actividad/Actividad.vue'
export default {
  name: 'ActividadDidactica',
  components: {
    Actividad,
  },
  data: () => ({
    cuestionario: {
      tema: 'Microcontroladores y sensores',
      titulo: 'Cuestionario',
      introduccion:
        '<b> Objetivo:</b> Evaluar la comprensión y el uso adecuado de las herramientas básicas en la ventana <em>Board</em> del <em>software</em> EAGLE.',
      barajarPreguntas: true,
      titulo_aprobado: '¡BUEN TRABAJO!',
      titulo_reprobado: 'VUELVA A INTENTARLO.',
      preguntas: [
        {
          id: 1,
          texto: '¿Cuál es una función esencial del proceso administrativo?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Decorar oficinas y vitrinas.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Planear, dirigir y controlar.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Elaborar productos manuales.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Organizar ferias comerciales.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 2,
          texto: '¿Qué busca principalmente la planeación administrativa?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Reducir salarios del personal.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Evitar reuniones empresariales.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Anticipar acciones y objetivos.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Eliminar normas institucionales.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 3,
          texto: '¿Qué elemento define la razón de ser de una empresa?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'El reglamento disciplinario.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'La estructura presupuestal.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'La política de incentivos.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'La misión organizacional.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 4,
          texto: '¿Qué representa la visión organizacional?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'El futuro deseado empresarial.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'El historial contable interno.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'El manual de contratación.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'El control de inventarios.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 5,
          texto: '¿Cuál técnica pertenece a la planeación cuantitativa?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Análisis de clima laboral.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Lluvia creativa de ideas.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Diagrama de Gantt aplicado.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Evaluación ética empresarial.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 6,
          texto: '¿Qué permite identificar el análisis DOFA?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Horarios diarios de trabajo.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Fortalezas y debilidades.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Costos salariales mensuales.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Tipos de sociedades legales.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 7,
          texto: '¿Qué característica tiene la planeación estratégica?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Se enfoca en corto plazo.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Se aplica solo en ventas.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Se limita al nivel técnico.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Proyecta metas a largo plazo.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 8,
          texto: '¿Quién desarrolla principalmente la planeación táctica?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Los mandos medios empresariales.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Los clientes de la empresa.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Los proveedores internacionales.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Los operarios de producción.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 9,
          texto: '¿Qué caracteriza la planeación operativa?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Define misión institucional.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Ejecuta tareas específicas.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Analiza riesgos globales.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Formula políticas generales.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 10,
          texto: '¿Cuál es el propósito de la planeación contingente?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Diseñar campañas publicitarias.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Aumentar precios comerciales.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Prevenir situaciones imprevistas.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Eliminar procesos contables.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 11,
          texto: '¿Qué busca la división del trabajo?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Incrementar tareas repetitivas.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Reducir procesos productivos.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Evitar funciones específicas.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Especializar responsabilidades.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 12,
          texto: '¿Qué representa un organigrama empresarial?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Un informe financiero anual.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Una estrategia comercial externa.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'La estructura organizacional.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'El cronograma de producción.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 13,
          texto: '¿Cuál es una característica de la estructura lineal?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Posee mando jerárquico único.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Elimina funciones operativas.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Utiliza autoridad compartida.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Funciona sin supervisores.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 14,
          texto: '¿Qué función cumple la dirección administrativa?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Registrar impuestos comerciales.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Liderar y motivar personal.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Diseñar empaques industriales.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Clasificar recursos minerales.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 15,
          texto: '¿Qué elemento fortalece la comunicación organizacional?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Información clara y efectiva.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Eliminación de reuniones grupales.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Restricción total de opiniones.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Centralización de documentos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 16,
          texto: '¿Cuál es la finalidad principal del control?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Sustituir la planeación táctica.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Medir y corregir resultados.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Incrementar costos financieros.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Crear campañas publicitarias.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 17,
          texto: '¿Qué promueve el ciclo PHVA en las normas ISO?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Reducción de clientes activos.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Eliminación del control interno.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Mejora continua organizacional.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Suspensión de auditorías técnicas.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 18,
          texto: '¿Qué caracteriza a una persona jurídica?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Carece de obligaciones legales.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Solo puede tener un dueño.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'No requiere representación.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Tiene derechos y obligaciones.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 19,
          texto: '¿Qué sector económico transforma materias primas?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Sector secundario industrial.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Sector financiero bancario.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Sector cuaternario digital.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Sector agrícola extractivo.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 20,
          texto: '¿Qué identifica el código CIIU empresarial?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'El salario de trabajadores.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'La actividad económica realizada.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'El número de accionistas activos.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'La ubicación física empresarial.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
      ],
      mensaje_final_aprobado: '¡Excelente! Ha superado la actividad.',
      mensaje_final_reprobado:
        'Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
}
</script>
