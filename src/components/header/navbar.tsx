import React from "react"
import logo from "../images/paintboxcafe.svg"
import "./navbar.scss"
import AnchorLink from "react-anchor-link-smooth-scroll"
import { motion, AnimateSharedLayout } from "framer-motion"
import Classnames from "classnames"

interface navbarProps {
  className?: string
  visibleSection: string
}

export const Navbar = ({ className, visibleSection }: navbarProps) => {
  const name = Classnames("navbar", [className])

  return (
    <div className={name}>
      <AnimateSharedLayout>
        <div>
          <AnchorLink href="#home" offset="50">
            {visibleSection === "home" && (
              <motion.div layoutId="underline" className="underline" />
            )}
            HOME
          </AnchorLink>
        </div>
        <div>
          <AnchorLink offset="100" href="#menu">
            {visibleSection === "menu" && (
              <motion.div layoutId="underline" className="underline" />
            )}
            MENU
          </AnchorLink>
        </div>
        <img className="logo" src={logo} alt="Paint Box Cafe"></img>
        <div>
          <AnchorLink offset="100" href="#cater">
            {visibleSection === "cater" && (
              <motion.div layoutId="underline" className="underline" />
            )}
            CATERING
          </AnchorLink>
        </div>
        <div>
          <AnchorLink href="#contact">
            {visibleSection === "contact" && (
              <motion.div layoutId="underline" className="underline" />
            )}
            CONTACT
          </AnchorLink>
        </div>
      </AnimateSharedLayout>
    </div>
  )
}
