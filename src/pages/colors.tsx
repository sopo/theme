import ColorCard from "@/components/color-card";

const Colors = () => {
  return (
    <div className="flex flex-col mx-auto p-10">
      <h1 className="text-3xl font-medium font-google">Colors</h1>
      <div className="grid grid-cols-5 gap-4">
        {root.map((item) => {
          return (
            <ColorCard
              key={item.id}
              color={item.color}
              name={item.name}
              text={item.text}
            />
          );
        })}
      </div>
    </div>
  );
};
export default Colors;
const root = [
  {
    id: 1,
    name: "Background",
    color: "bg-background",
    text: "text-black/40",
  },
  {
    id: 2,
    name: "Foreground",
    color: "bg-foreground",
    text: "text-white/40",
  },
  {
    id: 3,
    name: "Card",
    color: "bg-card",
    text: "text-black/40",
  },
  {
    id: 4,
    name: "Card Foreground",
    color: "bg-card-foreground",
    text: "text-white/40",
  },
  {
    id: 5,
    name: "Popover",
    color: "bg-popover",
    text: "text-black/40",
  },
  {
    id: 6,
    name: "Popover Foreground",
    color: "bg-popover-foreground",
    text: "text-white/40",
  },
  {
    id: 7,
    name: "Primary",
    color: "bg-primary",
    text: "text-white/40",
  },
  {
    id: 8,
    name: "Primary Foreground",
    color: "bg-primary-foreground",
    text: "text-black/40",
  },
  {
    id: 9,
    name: "Secondary",
    color: "bg-secondary",
    text: "text-black/40",
  },
  {
    id: 10,
    name: "Secondary Foreground",
    color: "bg-secondary-foreground",
    text: "text-white/40",
  },
  {
    id: 11,
    name: "Muted",
    color: "bg-muted",
    text: "text-black/40",
  },
  {
    id: 12,
    name: "Muted Foreground",
    color: "bg-muted-foreground",
    text: "text-white/40",
  },
  {
    id: 13,
    name: "Accent",
    color: "bg-accent",
    text: "text-black/40",
  },
  {
    id: 14,
    name: "Accent Foreground",
    color: "bg-accent-foreground",
    text: "text-white/40",
  },
  {
    id: 15,
    name: "Destructive",
    color: "bg-destructive",
    text: "text-white/40",
  },
  {
    id: 16,
    name: "Border",
    color: "bg-border",
    text: "text-black/40",
  },
  {
    id: 17,
    name: "Input",
    color: "bg-input",
    text: "text-black/40",
  },
  {
    id: 18,
    name: "Ring",
    color: "bg-ring",
    text: "text-white/40",
  },
  {
    id: 19,
    name: "Chart 1",
    color: "bg-chart-1",
    text: "text-black/40",
  },
  {
    id: 20,
    name: "Chart 2",
    color: "bg-chart-2",
    text: "text-white/40",
  },
  {
    id: 21,
    name: "Chart 3",
    color: "bg-chart-3",
    text: "text-white/40",
  },
  {
    id: 22,
    name: "Chart 4",
    color: "bg-chart-4",
    text: "text-white/40",
  },
  {
    id: 23,
    name: "Chart 5",
    color: "bg-chart-5",
    text: "text-white/40",
  },
  {
    id: 24,
    name: "Sidebar",
    color: "bg-sidebar",
    text: "text-black/40",
  },
  {
    id: 25,
    name: "Sidebar Foreground",
    color: "bg-sidebar-foreground",
    text: "text-white/40",
  },
  {
    id: 26,
    name: "Sidebar Primary",
    color: "bg-sidebar-primary",
    text: "text-white/40",
  },
  {
    id: 27,
    name: "Sidebar Primary Foreground",
    color: "bg-sidebar-primary-foreground",
    text: "text-black/40",
  },
  {
    id: 28,
    name: "Sidebar Accent",
    color: "bg-sidebar-accent",
    text: "text-black/40",
  },
  {
    id: 29,
    name: "Sidebar Accent Foreground",
    color: "bg-sidebar-accent-foreground",
    text: "text-white/40",
  },
  {
    id: 30,
    name: "Sidebar Border",
    color: "bg-sidebar-border",
    text: "text-black/40",
  },
  {
    id: 31,
    name: "Sidebar Ring",
    color: "bg-sidebar-ring",
    text: "text-white/40",
  },
];
