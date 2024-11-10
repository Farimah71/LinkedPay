import { SvgIconProps } from "./icon.types";

const BaseIcon:React.FC<SvgIconProps> = ({
    color="currentColor",
    width=28,
    height=28,
    strokeWidth="1.5",
    viewBox="0 0 28 28",
    children,
    ...rest
}) => {
    return (
        <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        viewBox={viewBox}
        fill="none"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        stroke={color}
        {...rest}
        >
            {children}
        </svg>
    )
}

export default BaseIcon;