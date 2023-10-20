import { getAllEvents } from "../../data"
import EventList from "../../components/events/event-list"
import EventSearch from "../../components/events-search"
import { Fragment } from "react"
export default function EventsPage() {
  const events = getAllEvents()
  return (
    <Fragment>
      <EventSearch />
      <EventList items={events} />
    </Fragment>
  )
}
