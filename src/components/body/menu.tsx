import React from "react"
import ClassNames from "classnames"

import data from "./menuData.json"
import Fork from "../images/fork.svg"
import "./menu.scss"

export interface menuItemProps {
  name: string
  description?: string
  price?: string
}

export const MenuItem = (props: menuItemProps) => {
  return (
    <div className="menu-item">
      <div className="text-container">
        <h4>{props.name}</h4>
        {props.description && <p>{props.description}</p>}
      </div>
      {props.price && <span className="price">{props.price}</span>}
    </div>
  )
}

export interface MenuSectionProps {
  title?: string
  sectionColumns?: number
  className?: string
  disclaimer?: string
  menuItems?: (menuItemProps | string)[]
}

export const MenuSection = ({
  className = "",
  sectionColumns = 2,
  title,
  menuItems = [],
  disclaimer = "",
}: MenuSectionProps) => {
  const name = ClassNames("menu-section", className)

  const getMenuItems = (arr: (menuItemProps | string)[]) =>
    arr.map((item, index) =>
      typeof item === "string" ? (
        <p className="string-item">{item}</p>
      ) : (
        <MenuItem key={index} {...item} />
      )
    )

  const getColumns = () => {
    let columns
    if (sectionColumns === 1) {
      columns = <div className="column-1">{getMenuItems(menuItems)}</div>
    } else {
      const half = Math.ceil(menuItems.length / 2)
      const firstHalf = menuItems.splice(0, half)
      const secondHalf = menuItems.splice(-half)
      columns = (
        <>
          <div className="column">{getMenuItems(firstHalf)}</div>
          <div className="column">{getMenuItems(secondHalf)}</div>
        </>
      )
    }

    return <div className="menu-items">{columns}</div>
  }

  return (
    <div className={name}>
      <h2 className="title">{title}</h2>
      {disclaimer && <p className="disclaimer">{disclaimer}</p>}
      {getColumns()}
    </div>
  )
}

const getMenuSections = (data: MenuSectionProps[]) => {
  return data.map((section: MenuSectionProps) => <MenuSection {...section} />)
}

export const Menu = () => {
  const sections = getMenuSections(data)

  return (
    <div className="menu">
      <h1>PAINTBOX MENU</h1>
      <img src={Fork} alt="fork" />
      <div className="menu-page page-1">
        {sections[0]}
        <div className="menu-section-group">
          <h2 className="group-header">SANDWICHES</h2>
          <p className="group-disclaimer">
            All sandwiches come with a side of sea-salt chips, sweet potato
            chips, or fruit.
          </p>
          {/* <img className="paintbox-sandwich" src={Sandwich} alt="sandwich" /> */}
          <div className="group-sections">
            {sections[1]}
            {sections[2]}
          </div>
        </div>
        {sections[3]}
      </div>
      <div className="menu-page page-2">
        {sections[4]}
        <div className="menu-section-group">
          <div className="group-sections">
            {sections[5]}
            {sections[6]}
          </div>
        </div>
        <div className="menu-section-group">
          <div className="group-sections">
            {sections[7]}
            {/* carrot image */}
          </div>
        </div>
        <div className="menu-section-group">
          <div className="group-sections">
            {sections[8]}
            {sections[9]}
          </div>
        </div>
        <div className="menu-section-group">
          <div className="group-sections">
            {sections[10]}
            {/* socials */}
          </div>
        </div>
      </div>
    </div>
  )
}
