



const Colors=()=> {
  return (
    <div className="grid grid-cols-4 gap-8 mx-10 mt-10">
      <h1 className="col-span-4 text-2xl">Colors</h1>
      {colorsData.map((colorGroup) => {
        return (
          <ColorCardGroup key={colorGroup.groupTitle} colorItem={colorGroup} />
        )
      })}
    </div>
  )
}
export default Colors

const ColorCard = ({
  color,
  title,
  colorTitle,
}: {
  color: string
  title: string
  colorTitle: string
}) => {
  return (
    <div className={`w-60 h-20 p-4 rounded ${color}`}>
      <p className={` ${colorTitle}`}> {title}</p>
    </div>
  )
}
interface Color {
  color: string
  title: string
  colorTitle: string
  id: number
}
type Colors = Color[]
interface ColorItem {
  groupTitle: string
  colors: Colors
  description: string
}
type ColorsData = ColorItem[]

const ColorCardGroup = ({ colorItem }: { colorItem: ColorItem }) => {
  return (
    <div className="inline-flex p-8 flex-col gap-2 border">
      <h2 className="text-lg text-bold">{colorItem.groupTitle}</h2>
      <p className="text-secondary-foreground">{colorItem.description}</p>
      <div className="flex flex-col gap-4">
        {colorItem.colors.map((color) => {
          return (
            <ColorCard
              key={color.id}
              color={color.color}
              colorTitle={color.colorTitle}
              title={color.title}
            />
          )
        })}
      </div>
    </div>
  )
}

const colorsData: ColorsData = [
  {
    groupTitle: 'Background & Foreground',
    description: "The default app background and text color. The page shell, page sections, and default text.",
    colors: [
      {
        id: 1,
        title: 'background',
        color: 'bg-background',
        colorTitle: 'text-foreground',
      },
      {
        id: 2,
        title: 'foreground',
        color: 'bg-foreground',
        colorTitle: 'text-background',
      },
    ],
  }, {
    groupTitle: 'secondary',
    description: "Lower-emphasis filled actions and supporting surfaces. Secondary buttons, secondary badges, and supporting UI.",
    colors: [
      {
        id: 1,
        title: 'secondary',
        color: 'bg-secondary',
        colorTitle: 'text-secondary-foreground',
      },
      {
        id: 2,
        title: 'secondary-foreground',
        color: 'bg-secondary-foreground',
        colorTitle: 'text-secondary',
      },
    ],
  },

  {
    groupTitle: 'muted',
    description: "Subtle surfaces and lower-emphasis content. Descriptions, placeholders, empty states, helper text, and subdued surfaces.",
    colors: [
      {
        id: 1,
        title: 'muted',
        color: 'bg-muted',
        colorTitle: 'text-muted-foreground',
      },
      {
        id: 2,
        title: 'muted-foreground',
        color: 'bg-muted-foreground',
        colorTitle: 'text-muted',
      },
    ],
  },

  {
    groupTitle: 'accent',
    description: "Interactive hover, focus, and active surfaces. Ghost buttons, menu highlight states, hovered rows, and selected items.",
    colors: [
      {
        id: 1,
        title: 'accent',
        color: 'bg-accent',
        colorTitle: 'text-accent-foreground',
      },
      {
        id: 2,
        title: 'accent-foreground',
        color: 'bg-accent-foreground',
        colorTitle: 'text-accent',
      },
    ],
  },


  {
    groupTitle: 'Card & Card-Foreground',
    description: "Elevated surfaces and the content inside them. Card, dashboard panels, settings panels.",
    colors: [
      {
        id: 1,
        title: 'card',
        color: 'bg-card',
        colorTitle: 'text-card-foreground',
      },
      {
        id: 2,
        title: 'card-foreground',
        color: 'bg-card-foreground',
        colorTitle: 'text-card',
      },
    ],
  },

  {
    groupTitle: 'popover / popover forground',
    description: "Floating surfaces and the content inside them. Popover, DropdownMenu, ContextMenu, and other overlays.",
    colors: [
      {
        id: 1,
        title: 'popver',
        color: 'bg-popover',
        colorTitle: 'text-popover-foreground',
      },
      {
        id: 2,
        title: 'popover-foreground',
        color: 'bg-popover-foreground',
        colorTitle: 'text-popover',
      },
    ],
  },

  {
    groupTitle: 'primary',
    description: "High-emphasis actions and brand surfaces. Default Button, selected states, badges, and active accents.",
    colors: [
      {
        id: 1,
        title: 'primary',
        color: 'bg-primary',
        colorTitle: 'text-primary-foreground',
      },
      {
        id: 2,
        title: 'primary-foreground',
        color: 'bg-primary-foreground',
        colorTitle: 'text-primary',
      },
    ],
  },

 
  {
    groupTitle: 'border',
    description: "Default borders and separators. Cards, menus, tables, separators, and layout dividers.",
    colors: [
      {
        id: 1,
        title: 'border',
        color: 'bg-border',
        colorTitle: 'text-black',
      },
    ],
  },
  {
    groupTitle: 'ring',
    description: "Focus rings and outlines. Buttons, inputs, checkboxes, menus, and other focusable controls.",
    colors: [
      {
        id: 1,
        title: 'ring',
        color: 'bg-ring',
        colorTitle: 'text-black',
      },
    ],
  },

  {
    groupTitle: 'input',
    description: "Form control borders and input surface treatment. Input, Textarea, Select, and outline-style controls.",
    colors: [
      {
        id: 1,
        title: 'input',
        color: 'bg-input',
        colorTitle: 'text-black',
      },
    ],
  },
]