import { useRouter } from "next/router"
import { getEventById } from "../../data"
export default function EventDetailPage() {
  const router = useRouter()
  const id = router.query.eventId
  const event = getEventById(id)

  !event && <h3>Not event found!</h3>

  return (
    <div>
      <h1>Single Event Page</h1>
    </div>
  )
}
