import React from "react"
import Link from "next/link"
import classes from "./main-header.module.css"
export default function MainHeader() {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>
        <Link href="/">Next event</Link>
      </div>
      <nav className={classes.navigation}>
        <ul>
          <li>
            <Link href="/events">All events</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}