

import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
const Components=()=>{



    return(
      <div className="w-80 mx-auto mt-20">
        <div className="flex flex-col gap-4 p-8 rounded bg-card border">
        <h1 className="text-2xl font-google">Form</h1>
        <Input placeholder="Input" className="bg-muted"/>
        <Input placeholder="Input" className="bg-muted"/>
       <Checkbox/>
        <Button>Button</Button>
        </div>
      </div>
    )
}
export default Components