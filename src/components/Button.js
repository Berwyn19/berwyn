import { Link } from "react-router-dom";

export default function Button ( {text, bgColor, textColor, icon, border, to} ) {
    return (
        <Link to={to} className={`${bgColor} flex flex-row inline-flex px-4 py-4 items-center justify-center gap-2 ${border} hover:scale-110 hover:brightness-75 cursor-pointer`}>
            <div>{icon}</div>
            <h2 className={`${textColor} font-bold`} >{text}</h2>
        </Link>
    )
}