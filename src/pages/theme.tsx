import ColorCard from "@/components/color-card"
import { Button } from "@/components/ui/button"




const Theme=()=>{

    return (
        <div className="flex flex-col w-2xl mx-auto">

            Theme
            <div >
                <Button variant="default" >default</Button>
                <Button variant="outline" >outline</Button>
                <Button variant="secondary" >secondary</Button>
            </div>




    
            <div className="grid grid-cols-5 gap-4">
            {root.map((item)=>{
                return(
                    <ColorCard key={item.color} colorName={item.color} name={item.name}/>
                )
            })}
           
            </div>
        </div>
    )
}
export default Theme
const root = [
  { name: "Background", color: "bg-background" },
  { name: "Foreground", color: "bg-foreground" },
  { name: "Card", color: "bg-card" },
  { name: "Card Foreground", color: "bg-card-foreground" },
  { name: "Popover", color: "bg-popover" },
  { name: "Popover Foreground", color: "bg-popover-foreground" },
  { name: "Primary", color: "bg-primary" },
  { name: "Primary Foreground", color: "bg-primary-foreground" },
  { name: "Secondary", color: "bg-secondary" },
  { name: "Secondary Foreground", color: "bg-secondary-foreground" },
  { name: "Muted", color: "bg-muted" },
  { name: "Muted Foreground", color: "bg-muted-foreground" },
  { name: "Accent", color: "bg-accent" },
  { name: "Accent Foreground", color: "bg-accent-foreground" },
  { name: "Destructive", color: "bg-destructive" },
  { name: "Border", color: "bg-border" },
  { name: "Input", color: "bg-input" },
  { name: "Ring", color: "bg-ring" },
  { name: "Chart 1", color: "bg-chart-1" },
  { name: "Chart 2", color: "bg-chart-2" },
  { name: "Chart 3", color: "bg-chart-3" },
  { name: "Chart 4", color: "bg-chart-4" },
  { name: "Chart 5", color: "bg-chart-5" },
  { name: "Sidebar", color: "bg-sidebar" },
  { name: "Sidebar Foreground", color: "bg-sidebar-foreground" },
  { name: "Sidebar Primary", color: "bg-sidebar-primary" },
  { name: "Sidebar Primary Foreground", color: "bg-sidebar-primary-foreground" },
  { name: "Sidebar Accent", color: "bg-sidebar-accent" },
  { name: "Sidebar Accent Foreground", color: "bg-sidebar-accent-foreground" },
  { name: "Sidebar Border", color: "bg-sidebar-border" },
  { name: "Sidebar Ring", color: "bg-sidebar-ring" },
]