import classNames from "classnames"
import { FC } from "react"

type Props = {
    text?: string,
    children?: React.ReactElement
    position?: 'start' | 'center' | 'end'
    color?: 'gray',

} & React.ButtonHTMLAttributes<HTMLButtonElement>

export const Button: FC<Props> = ({
    text, 
    children, 
    position, 
    color, 
    ...buttonAttrs
}) => {
    return (
        <div className={classNames('flex', {
            'justify-start': position === 'start',
            'justify-center': position === 'center',
            'justify-end': position === 'end'
            })}>
            <button 
                {...buttonAttrs} 
                className={classNames(' rounded ', {
                    'w-full': !position,
                    'px-4 py-2': text,
                    'text-gray-600': !color,
                    'bg-gray-600 text-white': color === 'gray'
                })}
            >
                {text || children}
            </button>
        </div>
    )
}