import { FC } from "react"

interface Props {
    error?: string
}

export const FormFieldErrorMessage: FC<Props> = ({error}) => {
    return (
        <>
            {error 
                ? (
                    <div className="error-text text-xs">
                        {error}
                    </div>
                ) 
                : null} 
        </>
    )
}