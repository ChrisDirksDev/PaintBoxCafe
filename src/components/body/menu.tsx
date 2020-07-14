import React from "react"
import ClassNames from "classnames"

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
        <p className="string-item" key={index}>
          {item}
        </p>
      ) : (
        <MenuItem key={index} {...item} />
      )
    )

  const getColumns = () => {
    let columns
    if (sectionColumns === 1) {
      columns = <div className="column-1">{getMenuItems(menuItems)}</div>
    } else {
      const mItems = [...menuItems]
      const half = Math.ceil(mItems.length / 2)
      const firstHalf = mItems.splice(0, half)
      const secondHalf = mItems.splice(-half)
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
  return data.map((section: MenuSectionProps, index: number) => (
    <MenuSection key={index} {...section} />
  ))
}

export const Menu = () => {
  console.log(data)
  const sections = getMenuSections(data)

  return (
    <div className="menu" key="menu">
      <div className="menu-content">
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
    </div>
  )
}

const data = [
  {
    title: "COMBOS",
    className: "combos",
    menuItems: [
      {
        name: "HALF AND HALF",
        description:
          "Create your own combo! Choose two smaller portions from any of our sandwiches, salads, or soup of the day!",
        price: "13.00",
      },
      {
        name: "ONE AND A HALF",
        description:
          "Create your own combo! Choose one whole portion of any sandwich, salad, or soup of the day and a half portion of any other!",
        price: "14.25",
      },
    ],
  },
  {
    title: "HOT SANDWICHES 9.25",
    className: "hot-sandwiches",
    menuItems: [
      {
        name: "BLAKE'S CHOICE",
        description:
          "Panini with sliced turkey, colby jack cheese, and Paint Box Bacon on whole wheat bread. Served with avacado ranch.",
      },
      {
        name: "NATHAN'S #1'",
        description:
          "Panini with our Paint Box Meatloaf, colby jack cheese, and Paint Box Bacon on whole wheat bread. Served with our Sister Sauce.",
      },
      {
        name: "JORDAN'S SPECIAL",
        description:
          "Warmed sliced turkey, colby jack cheese, and Paint Box bacon on a Paint Box Bun. Served with avacado ranch.",
      },
      {
        name: "ANNIE O'",
        description:
          "Panini with sliced chicken breast, pepper jack cheese, and Paint Box Bacon on Paint Box Bun. Served with chipotle ranch.",
      },
      {
        name: "JULIE",
        description:
          "Warmed sliced chicken breast, colby jack cheese, and Paint Box Bacon on a Paint Box Bun. Served with avacado ranch.",
      },
      {
        name: "CHEESE TO THE THIRD",
        description:
          "Our spin on a grilled cheese with gouda, provalone, and colby jack on a whole wheat bread. Served with our warm tomato basil sauce.",
      },
      {
        name: "PAINT BOX PICASSO",
        description:
          "Panini with sliced chicken breast, caramelized onions, and our Special Sauce on a Paint Box Bun.",
      },
    ],
  },
  {
    title: "COLD SANDWICHES 9.25",
    className: "cold-sandwiches",
    menuItems: [
      {
        name: "BERRIED TREASURE",
        description:
          "Sliced turkey whipped cream cheese, sweet red pepper relish, and spring mix greens served on a cranberry walnut bun.",
      },
      {
        name: "HEN-RIETTA",
        description:
          "Chicken salad and spring mix greens on your choice of a cranberry walnut bun or Paint Box Bun.",
      },
      {
        name: "PAINT BOX CLUB",
        description:
          "Sliced turkey, ham, salami, bacon, colby jack cheese, and lettuce on a Paint Box Bun. Served with a side of mayo.",
      },
    ],
  },
  {
    title: "SALADS 9.25",
    sectionColumns: 2,
    className: "salads",
    disclaimer:
      "All salads are served with two slices of baguette and dressing on the side.",
    menuItems: [
      {
        name: "PAINT BOX HOUSE",
        description:
          "Mixed greens, parmesan cheese, pine nuts, dried cranberries and our Paint Box Bacon. Pair with our cranberry citrus, jayne's sweet vinaigreete, or balsamic dressing!",
      },
      {
        name: "PB300",
        description:
          "Our 300 calorie answer to your prayers! Mixed greens, roasted veggies, diced chicken breast, and shaved parmesan. Pair with our balsamic dresssing!",
      },
      {
        name: "BROOKE O'BRIAN",
        description:
          "Mixed greens, feta, roasted veggies, and pine nuts. Pair with our balasmic dressing!",
      },
      {
        name: "OLD SCHOOL",
        description:
          "Mixed greens, diced turkey breast, colby jack cheese, diced eggs, and Paint Box Bacon. Pair with our house made ranch or avocado cream!",
      },
      {
        name: "CHICKEN SALAD",
        description:
          "Diced chicken breast, celery, grapes, and diced eggs in a mayo based dresssing. Served on a bed of mixed greens.",
      },
      {
        name: "SAVANNAH SALAD",
        description:
          "Mixed greens, diced turkey breast, parmesan cheese, carrots, cranberries, Paint Box Bacon, and glazed pecans. Pair with our house made ranch or chipotle ranch!",
      },
      {
        name: "SOUTHWEST CHICKEN",
        description:
          "Mixed greens, chicken breast, colby jack cheese, roaasted corn, black beans, and tortilla strips. Pair with our chipotle ranch, avocado cream, or house made ranch!",
      },
      {
        name: "INNER ARTIST",
        description:
          "Feed your inner artist and create your own salad by combining one protein with four other toppings artfully arranged over mixed greens.",
      },
    ],
  },
  {
    title: "FAMILY-SIZED SALADS 34.00",
    className: "family-salad",
    disclaimer:
      "Go big or go home(or back to work). Get any of our salads family-sized with a pint of our dressing to take away! (serves 6-8)",
  },
  {
    title: "SOUP OF THE DAY",
    sectionColumns: 2,
    className: "soup-of-day",
    disclaimer: "Ask about our hand-crafed soup of the day!",
    menuItems: [
      {
        name: "CUP 5.50",
      },
      {
        name: "BOWL 7.50",
      },
      "Pair with our almost famous ham and chedder melts",
    ],
  },
  {
    title: "FOR KID'S",
    className: "little-artist",
    menuItems: [
      {
        name: "THE LITTLE ARTIST",
        description:
          "Our tasty and fun kid-friendly option! Served in a muffin tray, you get your choice of a sandwich (however you'd like it) served with Cheez-its and fruit!",
        price: "5.70",
      },
    ],
  },
  {
    title: "OUR BAKERY CASE",
    className: "bakery-case",
    menuItems: [
      {
        name: "COOKIES",
        description: "1.50 per cookie or 13.00 per dozen",
      },
      {
        name: "HAM & CHEDDER ROLLS",
        description: "1.75 per roll or 18.00 per dozen",
      },
      {
        name: "TRIPLE CHOCOLATE CAKES",
        description: "2.25",
      },
      {
        name: "SCONES",
        description: "3.50 per scone or 30.00 per dozen",
      },
      {
        name: "CARROT CAKE",
        description: "3.50 per slice or 30.00 9x13 pan 35.00 triple layer",
      },
      {
        name: "CRANBERRY WALNUT ROLL",
        description: "1.75 per roll 18.00 per dozen",
      },
      {
        name: "PAINT BOX BUN",
        description: "1.50 per roll 15.00 per dozen",
      },
      {
        name: "GRANOLA",
        description: "9.50",
      },
    ],
  },
  {
    title: "SPECIAL ORDER BAKERY ITEMS",
    className: "special-order",
    menuItems: [
      {
        name: "CINNAMON ROLLS",
        description: "3.00",
      },
      {
        name: "SAUSAGE ROLLS",
        description: "3.50",
      },
      {
        name: "MUFFINS",
        description: "3.00 per muffin or 30.00 per dozen",
      },
      {
        name: "CUSTOM REQUESTS",
        description: "Inquire within",
      },
    ],
  },
  {
    title: "DRINKS",
    className: "drinks",
    menuItems: [
      {
        name: "UNSWEET TEA\n(BLACK TEA BLEND)",
        description: "2.00",
      },
      {
        name: "FRESHLY BREWED COFFEE",
        description: "2.00",
      },
      {
        name: "PINK LEMONADE",
        description: "2.00",
      },
      {
        name: "ASSORTED HOT TEAS",
        description: "2.00",
      },
    ],
  },
]
