import SkillsCard from "./SkillsCard"

export default function Skills () {
    return (
        <div className="flex flex-col shadow-xl px-8 py-8 rounded-xl hover:scale-110 transition-transform duration-300">
            <h2 className="font-bold text-3xl bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">Skills & Technologies</h2>
            <div className="grid grid-cols-2 gap-4 mt-[30px]">
                <SkillsCard skill="JavaScript"/>
                <SkillsCard skill="PyTorch"/>
                <SkillsCard skill="Large Language Models"/>
                <SkillsCard skill="Computer Vision"/>
                <SkillsCard skill="React.js"/>
                <SkillsCard skill="Next.js"/>
                <SkillsCard skill="Olympiad Physics"/>
                <SkillsCard skill="Agentic AI"/>
            </div>
        </div>
    )
}