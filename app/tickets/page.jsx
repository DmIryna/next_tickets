import { Suspense } from "react"
import TicketList from "./TicketList"
import Loading from "../loading"
import Link from "next/link"

function Tickets() {
  return (
    <main>
      <nav className="flex justify-between items-center">
        <div>
          <h2>Tickets</h2>
          <p>
            <small>Currently open tickets.</small>
          </p>
        </div>
        <button className="text-primary py-2 px-2 border rounded-md bg-indigo-200">
          <Link href="/tickets/create">Add ticket</Link>
        </button>
      </nav>

      <Suspense fallback={<Loading />}>
        <TicketList />
      </Suspense>
    </main>
  )
}

export default Tickets
