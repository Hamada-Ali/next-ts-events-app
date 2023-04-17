import React, { ReactNode } from 'react'
import { getEventById } from '@/data/data'
import { NextRouter, useRouter } from 'next/router'
import { Fragment } from 'react'
import EventSummary from '../../components/events/event-list/event-summary'
import EventLogistics from '../../components/events/event-list/event-logistics'
import EventContent from '../../components/events/event-list/event-content'
import LogisticsItem from '../../components/events/event-list/logistics-item'

const EventDetailPage = ():ReactNode => {

const router:NextRouter = useRouter()

const evnetId: string | string[] | undefined = router.query.eventId

const event = getEventById(evnetId)

console.log(event)

if (!event) {
  return <h1>There is no Content Here Related to this ID</h1>
}

  return (
    <Fragment>
      <EventSummary title={event.title}/>
      <EventLogistics date={event.date} address={event.location} image={event.image} imageAlt={event.title}/>
      <EventContent>
        <p>
          {event.description}
        </p>
      </EventContent>
    </Fragment>
  )
}

export default EventDetailPage