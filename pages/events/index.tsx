import React, {Fragment, ReactNode} from 'react'
import { getAllEvents } from '@/data/data'
import EventList from '@/components/events/EventList'
import EventSearch from '@/components/events/EventSearch'
import { useRouter } from 'next/router'

const AllEventsPage = ():ReactNode => {
  
  const allEvents = getAllEvents()
  
  const router = useRouter()
  const receiveDate = (year: string, month: string): void => {
    const path = `/events/${year}/${month}`

    router.push(path)

  }
  
  return (
    <Fragment>
      <EventSearch onSearch={receiveDate}/>
      <EventList data={allEvents}/>
    </Fragment>
  )
}

export default AllEventsPage