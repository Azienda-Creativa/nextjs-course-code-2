import { getAllEvents } from "../../data"
import { useRouter } from "next/router"
import EventList from "../../components/events/event-list"
import EventSearch from "../../components/events-search"
import { Fragment } from "react"

export default function EventsPage() {
  const events = getAllEvents()
  const router = useRouter()
  const findEventsHandler = (year, month) => {
    const path = `/events/${year}/${month}`
    router.push(path)
  }

  return (
    <Fragment>
      <EventSearch onSearch={findEventsHandler} />
      <EventList items={events} />
    </Fragment>
  )
}
