import { FaArrowRight } from 'react-icons/fa'
import { Link } from "react-router-dom"

export default function Offering ( {icon, title, desc, buttonText, bgColor, textColor, onHoverOut, to} ) {
    return (
        <div className={`max-w-lg flex flex-col shadow-lg px-12 py-8 rounded-lg ${onHoverOut} hover:scale-105`}>
            <div className={`${bgColor} w-14 aspect-square flex justify-center items-center text-xl text-white rounded-xl`}>
                {icon}
            </div>
            <h3 className={`${textColor} text-transparent bg-clip-text text-3xl font-bold mt-[24px]`}>{title}</h3>
            <p className="mt-[20px]">{desc}</p>
            <Link to={to} className="flex flex-row items-center gap-2 border w-fit px-2 py-2 rounded-lg mt-[12px] font-bold hover:bg-gradient-to-r from-[#dbeafe] to-[#f3e8ff] hover:scale-105">
                <h4>{buttonText}</h4>
                {<FaArrowRight/>}
            </Link>
        </div>
    )
}