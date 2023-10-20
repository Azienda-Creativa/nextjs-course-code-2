import { getFilteredEvents } from "../../data"
import { useRouter } from "next/router"
import { Fragment } from "react"
import EventList from "../../components/events/event-list"
import ResultsTitle from "../../components/events/results-title"
import ErrorAlert from "../../components/ui/error-alert/error-alert"
export default function FilteredEventsPage() {
  const router = useRouter()

  const filteredData = router.query.slug

  if (!filteredData) {
    return <p className="center">Loading...</p>
  }

  const filteredYear = filteredData[0]
  const filteredMonth = filteredData[1]
  const numYear = +filteredYear
  const numMonth = +filteredMonth

  if (isNaN(numYear) || isNaN(numMonth) || numYear > 2030 || numYear < 2021 || numMonth < 1 || numMonth > 12) {
    return (
      <Fragment>
        <h3>invalid filter adjust values</h3>
        <div className="center">
          <Button link="/events">Show all events</Button>
        </div>
      </Fragment>
    )
  }

  const filteredEvents = getFilteredEvents({
    year: numYear,
    month: numMonth,
  })

  if (!filteredEvents || filteredEvents.length === 0) {
    return (
      <Fragment>
        <ErrorAlert>
          <p>No events based on your filter</p>
        </ErrorAlert>
        <div className="center">
          <Button link="/events">Show all events</Button>
        </div>
      </Fragment>
    )
  }

  const date = new Date(numYear, numMonth - 1)

  return (
    <Fragment>
      <ResultsTitle date={date} />
      <EventList items={filteredEvents} />
    </Fragment>
  )
}
