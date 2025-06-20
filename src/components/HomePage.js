import avtr from "../assets/avatar.jpg"
import { FaBook, FaComments, FaGithub, FaEnvelope, FaLinkedin, FaBookOpen, FaCommentDots } from "react-icons/fa"
import Button from "./Button"
import Skills from "./Skills"
import Media from "./Media"
import Offering from "./Offering"

export default function HomePage() {
    return (
        <div className="px-4 sm:px-6 lg:px-12">
            {/* Avatar */}
            <img 
                src={avtr} 
                alt="My photo" 
                className="w-40 h-40 sm:w-60 sm:h-60 lg:w-80 lg:h-80 rounded-full shadow-lg border-4 border-white mx-auto mt-12 sm:mt-16 lg:mt-20"
            />

            {/* Heading */}
            <h1 className="font-bold text-4xl sm:text-6xl lg:text-8xl animate-color-change text-center mt-8 sm:mt-12">
                Hello, I'm Berwyn
            </h1>

            {/* Intro paragraph */}
            <p className="max-w-2xl mx-auto text-center mt-4 sm:mt-6 text-lg sm:text-xl lg:text-2xl text-gray-600 font-bold">
                A passionate <span className="text-blue-500">developer</span>, <span className="text-indigo-500">writer</span>, and <span className="text-purple-500">AI enthusiast</span> dedicating to creating meaningful digital experiences and sharing knowledge through code and words.
            </p>

            {/* Buttons */}
            <div className="mt-6 sm:mt-8 gap-4 flex flex-col sm:flex-row items-center justify-center">
                <Button 
                    text="Read My Writings" 
                    bgColor="bg-gradient-to-r from-blue-500 to-purple-500" 
                    textColor="text-white" 
                    icon={<FaBook />} 
                    border="rounded-md" 
                    to="/writing" 
                />
                <Button 
                    text="Chat with Me" 
                    bgColor="bg-white" 
                    textColor="text-black" 
                    icon={<FaComments />} 
                    border="rounded-md border-gray-600 shadow-lg" 
                    to="/chatbot" 
                />
            </div>

            {/* About Me */}
            <h2 className="text-center text-3xl sm:text-4xl text-gray-800 font-bold mt-20 sm:mt-28">
                About Me
            </h2>

            <div className="flex flex-col lg:flex-row items-center justify-center gap-12 sm:gap-16 mt-12">
                <div className="px-4 sm:px-0 max-w-2xl">
                    <p className="text-gray-500 font-bold text-lg sm:text-xl">
                        I'm a software developer with a passion for creating innovative solutions and sharing thoughts through writing. My journey
                        in technology has led me to explore various domains, from web development to AI.
                    </p>
                    <p className="mt-4 text-gray-500 font-bold text-lg sm:text-xl">
                        When I'm not coding, you'll find me writing about technology, life, and lessons learned from my college journey and life in general.
                        I believe in the power of sharing knowledge to inspire others.
                    </p>
                    <div className="flex flex-wrap gap-6 mt-6">
                        <Media icon={<FaGithub />} text="GitHub" link="https://github.com/Berwyn19" />
                        <Media icon={<FaLinkedin />} text="LinkedIn" link="https://www.linkedin.com/in/berwynb/" />
                    </div>
                </div>
                <Skills />
            </div>

            {/* What I Offer */}
            <h2 className="text-center text-3xl sm:text-4xl text-gray-800 font-bold mt-24">
                What I Offer
            </h2>

            <div className="flex flex-col lg:flex-row justify-center items-center gap-8 mt-12 mb-12 px-4">
                <Offering 
                    icon={<FaBookOpen />} 
                    title="Writings" 
                    desc="Explore my collection of articles covering AI and reflection on different topics surrounding life" 
                    buttonText="View Articles" 
                    bgColor="bg-blue-500"
                    textColor="bg-gradient-to-r from-blue-500 to-indigo-500"
                    onHoverOut="hover:bg-gradient-to-br from-blue-50 to-indigo-50"
                    to="/writing"
                />
                <Offering 
                    icon={<FaCommentDots />} 
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
