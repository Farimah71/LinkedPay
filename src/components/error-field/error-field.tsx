import { ErrorFieldProps } from "./error-field.types"

export const ErrorField : React.FC<ErrorFieldProps> = ({
    text,
} : ErrorFieldProps) => {
    if(text) {
        return (
            <div className="w-fit text-sm text-center px-10 py-2 rounded-lg bg-error/5 text-error mx-auto">
                {text}
            </div>
        )
    }
}