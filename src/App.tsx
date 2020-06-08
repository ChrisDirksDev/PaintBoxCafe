import React from "react"
import "./App.scss"

import { Header } from "./components/header/header"
import { Hero } from "./components/body/hero"
import { About } from "./components/body/about"
import { Testimonals } from "./components/body/testimonials/testimonials"
import { ImageBand } from "./components/body/imageBand"
import { Menu } from "./components/body/menu"

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <Header />
      </header>
      <body>
        <Hero />

        <About />

        <Testimonals />
        <ImageBand />
        <div id={"menu"}>
          <Menu />
        </div>
      </body>
    </div>
  )
}

export default App
