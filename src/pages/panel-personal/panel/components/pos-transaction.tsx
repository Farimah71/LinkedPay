type PosTransactionProps = {
    title:string,
    subTitle:string,
    price:string,
    image:string,
    isLast?:boolean
}

export const PosTransaction:React.FC<PosTransactionProps> = ({
    title,
    subTitle,
    price,
    image,
    isLast=false
} : PosTransactionProps) => {
    return (
        <div className="w-full flex items-start gap-2 py-2">
                            <div>
                                <img src={image} alt="" />
                            </div>
                            <div className={`flex flex-grow justify-between items-center ${!isLast && "border-b"} pb-4`}>
                                <div>
                                    <h3 className="text-lg text-base-content font-medium">{title}</h3>
                                    <p className="text-sm text-base-content-40 mt-1">{subTitle}</p>
                                </div>
                                <p className="text-lg text-success font-medium">{price}</p>
                            </div>
                        </div>
    )
}