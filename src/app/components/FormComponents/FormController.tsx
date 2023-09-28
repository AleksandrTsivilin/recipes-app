import { FC } from 'react'
import { Control, Controller, UseFormTrigger } from 'react-hook-form'
import { FormField } from './FormField'
import { TextField } from './TextField'
import React from 'react'

type Props = {
    name: string,
    control: Control<any, any>,
    trigger: UseFormTrigger<any>
    rules?: any,
} & React.InputHTMLAttributes<HTMLElement>
  
export const FormController: FC<Props> = ({name, control, trigger, rules, ...elementAttrs}) => {

    return (
        <Controller 
            control={control}
            name={name}               
            rules={rules}
            
            render={({field, fieldState}) =>  (                  
                <FormField name={field.name} error={fieldState.error?.message}> 
                    <TextField 
                        field={field} 
                        trigger={trigger} 
                        invalid={!!fieldState.error?.message} 
                        {...elementAttrs}/>
                </FormField>                  
                )
            }              
        />     
    )
}