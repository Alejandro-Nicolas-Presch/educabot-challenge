import React from 'react'
import './CardContainer.css'
import Card from '../Card/Card'
import { ReactComponent as Lectura } from '../../Icons/Lectura.svg'
import { ReactComponent as Calendar } from '../../Icons/calendar.svg'
import { ReactComponent as CalendarEntregado } from '../../Icons/CalendarEntregado.svg'
import { ReactComponent as Preguntas } from '../../Icons/Preguntas.svg'
import { ReactComponent as Checking } from '../../Icons/checking.svg'
import { ReactComponent as DoneGreen } from '../../Icons/doneGreen.svg'

const CardContainer = () => {
  const data = [
    {
      id: 'asdqwd3123',
      mainIcon: Lectura,
      title: 'Lectura',
      subTitle: 'Cuentos para aprender ortografía',
      titleDate: 'Fecha de Entrega',
      date: '15 de Abril',
      progressText: 'Progreso',
      progressValue: 25,
      buttonText: 'Continuar',
      tagText: 'Lengua',
      calendarIcon: Calendar,
      status: 'none',
      textStatus: '',
      auxIcon: ''
    },
    {
      id: 'sd213gza',
      mainIcon: Lectura,
      title: 'Lectura',
      subTitle: 'Cuentos para aprender ortografía',
      titleDate: 'Fecha de Entrega',
      date: '15 de Abril',
      progressText: 'Progreso',
      progressValue: 0,
      buttonText: 'Continuar',
      tagText: 'Lengua',
      calendarIcon: Calendar,
      status: 'new',
      textStatus: '¡NUEVA!',
      auxIcon: ''
    },
    {
      id: '*/sda2321',
      mainIcon: Lectura,
      title: 'Lectura',
      subTitle: 'Cuentos para aprender ortografía',
      titleDate: 'Fecha de Entrega',
      date: '15 de Abril',
      progressText: 'Progreso',
      progressValue: 25,
      buttonText: 'Continuar',
      tagText: 'Lengua',
      calendarIcon: Calendar,
      status: 'late',
      textStatus: '¡Estás demorad@!',
      auxIcon: ''
    },
    {
      id: '$31dffaDasWGH',
      mainIcon: Lectura,
      title: 'Lectura',
      subTitle: 'Cuentos para aprender ortografía',
      titleDate: 'Fecha de Entrega',
      date: '15 de Abril',
      progressText: 'Progreso',
      progressValue: 25,
      buttonText: 'Continuar',
      tagText: 'Lengua',
      calendarIcon: CalendarEntregado,
      status: 'finished',
      textStatus: 'Actividad Completada',
      auxIcon: DoneGreen
    }, ///  /// /// /// ///
    {
      id: '213asdd',
      mainIcon: Preguntas,
      title: 'ACTIVIDAD CON PREGUNTAS',
      subTitle: '¿Qué es la potencia y la raiz cuadrada un número?',
      titleDate: 'Fecha de Entrega',
      date: '15 de Abril',
      progressText: 'Progreso',
      progressValue: 25,
      buttonText: 'Continuar',
      tagText: 'Lengua',
      calendarIcon: Calendar,
      status: 'none',
      textStatus: '',
      auxIcon: ''
    },
    {
      id: '3312hgjgh',
      mainIcon: Preguntas,
      title: 'ACTIVIDAD CON PREGUNTAS',
      subTitle: '¿Qué es la potencia y la raiz cuadrada un número?',
      titleDate: 'Fecha de Entrega',
      date: '15 de Abril',
      progressText: 'Progreso',
      progressValue: 25,
      buttonText: 'Continuar',
      tagText: 'Lengua',
      calendarIcon: Calendar,
      status: 'new',
      textStatus: '¡NUEVA!',
      auxIcon: ''
    },
    {
      id: 'hdkmcw89oe2',
      mainIcon: Preguntas,
      title: 'ACTIVIDAD CON PREGUNTAS',
      subTitle: '¿Qué es la potencia y la raiz cuadrada un número?',
      titleDate: 'Fecha de Entrega',
      date: '15 de Abril',
      progressText: 'Progreso',
      progressValue: 25,
      buttonText: 'Continuar',
      tagText: 'Lengua',
      calendarIcon: Calendar,
      status: 'late',
      textStatus: '¡Estás demorad@!',
      auxIcon: ''
    },
    {
      id: 'a´+{}1scn.23dsjakc29',
      mainIcon: Preguntas,
      title: 'ACTIVIDAD CON PREGUNTAS',
      subTitle: 'Cuentos para aprender ortografía',
      titleDate: 'Fecha de Entrega',
      date: '15 de Abril',
      progressText: 'Progreso',
      progressValue: 25,
      buttonText: 'Continuar',
      tagText: 'Lengua',
      calendarIcon: CalendarEntregado,
      status: 'checking',
      textStatus: 'Esperando correción',
      auxIcon: Checking
    },
    {
      id: 'asd1823dsjakc29',
      mainIcon: Preguntas,
      title: 'ACTIVIDAD CON PREGUNTAS',
      subTitle: 'Cuentos para aprender ortografía',
      titleDate: 'Fecha de Entrega',
      date: '15 de Abril',
      progressText: 'Progreso',
      progressValue: 25,
      buttonText: 'Continuar',
      tagText: 'Lengua',
      calendarIcon: CalendarEntregado,
      status: 'finished',
      textStatus: 'Actividad Completada',
      auxIcon: DoneGreen
    }
  ]
  data.map(data => {
    return data
  })
  const cards = data.map((element, i) => {
    return <Card datos={element} key={element.id} />
  })
  return (
    <>
      {/* <Card datos={data[0]} /> */}
      {cards}
    </>
  )
}

export default CardContainer
