export default function SkillsCard( {skill} ) {
    return (
        <div className="bg-gradient-to-r from-[#dbeafe] to-[#f3e8ff] px-3 py-3 rounded-xl hover:scale-105">
            <h3 className="font-bold text-center">{skill}</h3>
        </div>
    )
}