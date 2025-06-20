import avtr from "../assets/avatar.jpg"
import { FaBook, FaComments, FaGithub, FaEnvelope, FaLinkedin, FaBookOpen, FaCommentDots } from "react-icons/fa"
import Button from "./Button"
import Skills from "./Skills"
import Media from "./Media"
import Offering from "./Offering"

export default function HomePage() {
    return(
        <div>
            <img src={avtr} alt="My photo" className="w-80 h-80 rounded-full shadow-lg border-5 border-white mx-auto mt-20"/>
            <h1 className="font-bold text-8xl animate-color-change text-center mt-20">Hello, I'm Berwyn</h1>
            <p className="max-w-2xl mx-auto text-center mt-[16px] text-2xl text-gray-600 font-bold">
                A passionate <span className="text-blue-500">developer</span>, <span className="text-indigo-500">writer</span>, and <span className="text-purple-500">AI enthusiast</span> dedicating to creating meaningful digital experiences and sharing knowledge through code and words.
            </p>
            <div className="mt-[28px] gap-4 flex align-items justify-center">
                <Button text="Read My Writings" bgColor="bg-gradient-to-r from-blue-500 to-purple-500" textColor="text-white" icon={<FaBook/>} border="rounded-md" to="/writing"/>
                <Button text="Chat with Me" bgColor="bg-white" textColor="text-black" icon={<FaComments/>} border="rounded-md border-gray-600 shadow-lg" to="/chatbot"/>
            </div>
            <h2 className="text-center text-4xl text-gray-800 font-bold mt-[128px]">About Me</h2>
            <div className="flex flex-row align-items justify-center gap-24 mt-[80px] items-center">
                <div>
                    <p className="max-w-2xl text-gray-500 font-bold text-xl">
                        I'm a software developer with a passion for creating innovative solutions and sharing thoughts through writing. My journey
                        in technology has led me to explore various domains, from web development to AI.
                    </p>
                    <p className="max-w-2xl mt-[20px] text-gray-500 font-bold text-xl">
                        When I'm not coding, you'll find me writing about technology, life, and lessons learned from my college journey and life in general.
                        I believe in the power of sharing knowledge to inspire others
                    </p>
                    <div className="flex flex-row gap-10">
                        <Media icon={<FaGithub/>} text="GitHub" link="https://github.com/Berwyn19"/>
                        <Media icon={<FaLinkedin/>} text="LinkedIn" link="https://www.linkedin.com/in/berwynb/"/>
                    </div>
                </div>
                <Skills/>
            </div>
            <h2 className="text-center text-4xl text-gray-800 font-bold mt-[128px]">What I Offer</h2>
            <div className="flex flex-row justify-evenly align-items mt-[48px] mb-[24px]">
                <Offering icon={<FaBookOpen/>} 
                          title="Writings" 
                          desc="Explore my colllection of articles covering AI and reflection on different topics surrounding life" 
                          buttonText="View Articles" 
                          bgColor="bg-blue-500"
                          textColor="bg-gradient-to-r from-blue-500 to-indigo-500"
                          onHoverOut="hover:bg-gradient-to-br from-blue-50 to-indigo-50"
                          to="/writing"
                />
                <Offering icon={<FaCommentDots/>} 
                          title="AI Assistant" 
                          desc="Chat with my personal AI assistant to learn more about my school and physics olympiad journey" 
                          buttonText="Start Chatting" 
                          bgColor="bg-gradient-to-bl from-purple-500 to-pink-500"
                          textColor="bg-gradient-to-r from-purple-500 to-pink-500"
                          onHoverOut="hover:bg-gradient-to-br from-purple-50 to-pink-50"
                          to="/chatbot"
                />
            </div>
        </div>
    )
}