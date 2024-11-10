import { IconArrowDown } from "../../../../components/icons/icons"
import { SelectProps } from "../../../../components/select/select.types"

export const CustomSelect : React.FC<SelectProps> = ({
    className,
} : SelectProps) => {
    return (
        <div className={`${className} w-[120px] h-[34px] flex justify-end items-center pr-4 relative bg-[#F7FAFB] rounded-2.5xl overflow-hidden`}>
            <select className="w-full h-full absolute right-0 pl-4 text-xs bg-[unset] appearance-none cursor-pointer" name="" id="">
                <option value="Son 30 Gün" className="text-xs">Son 30 Gün</option>
            </select>
            <IconArrowDown width={18} height={18} viewBox="0 0 18 18" />
        </div>
    )
}