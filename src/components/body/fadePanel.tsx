import React from "react"
import cs from "classnames"

import "./fadePanel.scss"

interface panelProps {
  children?: React.ReactNode
  className?: string
}

export const FadePanel = ({ children, className }: panelProps) => {
  const name = cs("fade-panel", [className])

  return (
    <div className={name}>
      <div className="panel-wrapper">
        <div className="panel-content">{children}</div>
      </div>
    </div>
  )
}
