import classNames from "classnames";
import React, { FC } from "react";
import { ControllerRenderProps, UseFormTrigger } from "react-hook-form";

type Props = {
  field: ControllerRenderProps<any, any>,
  invalid?: boolean,
  trigger: UseFormTrigger<any>
} & React.InputHTMLAttributes<HTMLInputElement>


export const TextField: FC<Props> = ({ field, invalid, trigger, ...rest}) => {
  const {name, value, onChange} = field;
  return (
    <input 
      {...rest}
      id={name}
      value={value || ''} 
      onChange={(e) => {
        onChange(e);
        trigger(name)
      }}
      onBlur={() => trigger(name)}
      className={classNames('bg-gray-200 appearance-none border border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-gray-900 mb-1', {
        'border-red-500': invalid
      })}
    /> 
  )
}