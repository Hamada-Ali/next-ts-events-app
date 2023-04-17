import React, { Fragment } from 'react'
import { useRouter } from 'next/router'
import { getFilteredEvents } from '@/data/data'
import EventList from '@/components/events/EventList'
import ResultsTitle from '../../components/events/event-list/results-title'

const FilteredEventPage = () => {

  const router = useRouter()

  // filtering queries
  const slug = router.query.slug;

  if(!slug) (
    <h1>Loading...</h1>
  )


    const filteredYear = Number(slug?.[0])
    const filteredMonth = Number(slug?.[1])

  if(isNaN(filteredMonth) ||  isNaN(filteredYear) || filteredYear < 2020 || filteredYear > 2027) {
    return <h1>Invalid Query</h1>
  } 


  const filteredEvents = getFilteredEvents({
    year: filteredYear,
    month: filteredMonth
  })

  if(!filteredEvents || filteredEvents.length === 0) {
      return <h2>no events founed for the chosen filter</h2>
  }

const date = new Date(filteredYear, filteredMonth -1)

  return (
    <Fragment>
      <ResultsTitle date={date}/>
      <EventList data={filteredEvents}/>
    </Fragment>
  )
}

export default FilteredEventPage