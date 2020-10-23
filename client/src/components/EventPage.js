import React from 'react'
import { useSelector } from 'react-redux'
import moment from 'moment'
import { eventToIcs } from '../utils/icsConverter'

const EventPage = ({ id }) => {
  const event = useSelector(state => state.events)
    .find(e => e.id.toString() === id)

  const users = useSelector(state => state.users)
  
  // No event found
  if (!event) {
    return (
      <div>
        Tapahtumaa ei löytynyt :(
      </div>
    )
  }

  const organizer = users.find(u => u.id === event.organizer_id)

  // Formatting date based on the length of the event
  const formatDate = () => {
    if (moment(event.start).utc().format('D') === moment(event.end).utc().format('D')) {
      return (
        moment(event.start).utc().format('dd D.M.YYYY H:mm') + ' - ' + moment(event.end).utc().format('H:mm')
      )
    } else {
      return (
        moment(event.start).utc().format('dd D.M.YYYY H:mm') + ' - ' + moment(event.end).utc().format('dd D.M.YYYY H:mm')
      )
    }
  }

  const downloadIcs = () => {
    const eventIcs = eventToIcs(event, organizer)
    console.log(eventIcs)
    const fileName = event.title.replace(/[^a-zA-Z]/g, '')

    const linkElement = document.createElement('a')

    const file = new Blob([eventIcs],    
      { type: 'text/calendar;charset=utf-8' })

    linkElement.href = window.URL.createObjectURL(file)
    linkElement.setAttribute('download', `${fileName}_import.ics`)

    document.body.appendChild(linkElement)
    linkElement.click()
  }

  return (
    <div className='event-page-wrapper'>
      <button onClick={downloadIcs}>
        Lisää tapahtuma omaan kalenteriin
      </button>

      <h1>{event.title}</h1>

      <div className='event-information-box'>
        <div>
          <b>{formatDate()}</b>
        </div>

        <div className='form-row'>
          <label className='form-row-label'>
            Paikka:
          </label>
          {event.location}
        </div>

        <div className='form-row'>
          <label className='form-row-label'>
            Järjestäjä:
          </label>
          <a href={organizer.link}>
            {organizer.name}
          </a>
        </div>
      </div>

      {
        !event.description
          ? null
          : <div className='event-description-box'>
              {event.description}
            </div>
      }
    </div>
  )
}

export default EventPage
