import React from "react"

import { Navbar } from "./navbar"
import Headroom from "react-headroom"
import _ from "lodash"
import "./header.scss"

interface headerProps {
  sections: string[]
}

export const Header = ({ sections }: headerProps) => {
  const lastIndex = _.findLastIndex([...sections], item => item !== "")
  return (
    <>
      <Navbar visibleSection={sections[lastIndex]} />
      <Headroom disableInlineStyles pinStart={200}>
        <Navbar visibleSection={sections[lastIndex]} className="sticky" />
      </Headroom>
    </>
  )
}
