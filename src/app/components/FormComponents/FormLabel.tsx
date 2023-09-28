import classNames from "classnames";
import { FC } from "react";

interface Props {
    name: string,
    invalid?: boolean
}

export const FormLabel: FC<Props> = ({name, invalid}) => {
    return (
        <label 
            htmlFor={name}
            className={classNames(
                'block uppercase tracking-wide text-gray-700 text-xs font-bold mb-1',
                {
                    'error-text': invalid,
                }
            )}
        >
            {name}
        </label>
    )
}