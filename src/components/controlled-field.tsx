import { Controller} from "react-hook-form"
import type {  Control, FieldValues, Path } from "react-hook-form"
import { Field, FieldError, FieldLabel } from "./ui/field"
import { Input } from "./ui/input"
import { InputGroup, InputGroupAddon, InputGroupInput } from "./ui/input-group"
import { useState } from "react"
import { EyeIcon, EyeOffIcon } from "lucide-react"

type ControlledFieldProps<T extends FieldValues> = {
  control: Control<T>
  label: string
  name: Path<T>
  placeholder?: string,
  type?: "password" | "text"
}

const ControlledField = <T extends FieldValues>({
  control,
  label,
  name,
  placeholder,
  type = "text"
}: ControlledFieldProps<T>) => {
        const [inputType, setInputType]=useState<"text" | "password">("password")

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState }) => (
        <Field data-invalid={fieldState.invalid}>
          <FieldLabel htmlFor={name}>
            {label}
          </FieldLabel>

         {type==="text" ? <Input
            {...field}
            id={name}
            aria-invalid={fieldState.invalid}
            placeholder={placeholder}
            autoComplete="off"
          />:
           <InputGroup>
                    <InputGroupInput
                      {...field}
                      id="password"
                      type={inputType}
                      placeholder={placeholder}
                      aria-invalid={fieldState.invalid}
                    />
                    <InputGroupAddon align="inline-end">
                     {inputType==="password"? <EyeOffIcon className="cursor-pointer" onClick={()=>setInputType("text")}/>
                     : <EyeIcon className="cursor-pointer" onClick={()=>setInputType("password")}/>}
                    </InputGroupAddon>
                  
                  </InputGroup>
        
        
        }

          {fieldState.invalid && (
            <FieldError errors={[fieldState.error]} />
          )}
        </Field>
      )}
    />
  )
}

export default ControlledField