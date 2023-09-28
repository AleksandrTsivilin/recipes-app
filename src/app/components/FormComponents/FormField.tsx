import { FC } from "react"
import { FormLabel } from "./FormLabel"
import { FormFieldErrorMessage } from "./FormFieldErrorMessage"
import { ControllerFieldState, ControllerRenderProps } from "react-hook-form"

interface Props {
    error?: string,
    name: string,
    children: React.ReactElement,
}

export const FormField: FC<Props> = ({error, name, children}) => {
    return (
        <div className="mb-4">
            <FormLabel name={name} invalid={!!error}/>

            {children}

            <FormFieldErrorMessage error={error}/>
        </div>
    )
}