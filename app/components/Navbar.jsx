import Link from "next/link"
import Image from "next/image"

function Navbar() {
  return (
    <nav>
      <Image
        src="/logo.jpg"
        alt="helpdesk logo"
        width={70}
        height={50}
        quality={100}
        className="rounded-full"
      />
      <h1>Helpdesk</h1>
      <Link href="/">Dashboard</Link>
      <Link href="/tickets">Tickets</Link>
    </nav>
  )
}

export default Navbar
