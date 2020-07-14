import React, { useState } from "react"
import "./App.scss"

import { Header } from "./components/header/header"
import { Hero } from "./components/body/hero"
import { About } from "./components/body/about"
import { Testimonals } from "./components/body/testimonials/testimonials"
import { Menu } from "./components/body/menu"
import { Cater } from "./components/body/cater"
import { Footer } from "./components/footer/footer"

import VisibilitySensor from "react-visibility-sensor"

function App() {
  const [homeVisible, setHomeVisible] = useState(false)
  const [menuVisible, setMenuVisible] = useState(false)
  const [caterVisible, setCaterVisible] = useState(false)
  const [contactVisible, setContactVisible] = useState(false)

  return (
    <div className="app">
      <header className="app-header">
        <Header
          sections={[
            homeVisible ? "home" : "",
            menuVisible ? "menu" : "",
            caterVisible ? "cater" : "",
            contactVisible ? "contact" : "",
          ]}
        />
      </header>
      <VisibilitySensor onChange={setHomeVisible} partialVisibility>
        <div id="home">
          <Hero />
        </div>
      </VisibilitySensor>

      <About />

      <Testimonals />
      {/* <ImageBand /> */}
      <VisibilitySensor onChange={setMenuVisible} partialVisibility>
        <div id="menu">
          <Menu />
        </div>
      </VisibilitySensor>
      <VisibilitySensor onChange={setCaterVisible} partialVisibility>
        <div id="contact">
          <Cater />
        </div>
      </VisibilitySensor>
      <VisibilitySensor onChange={setContactVisible}>
        <Footer />
      </VisibilitySensor>
    </div>
  )
}

export default App
