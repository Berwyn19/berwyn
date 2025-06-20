export default function Media({ icon, text, link }) {
    return (
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="block w-max"
      >
        <div className="flex items-center rounded-lg border border-gray-400 px-12 py-2 mt-6 gap-2 cursor-pointer transition-colors duration-300 hover:bg-gradient-to-r from-[#dbeafe] to-[#f3e8ff]">
          {icon}
          <h3 className="font-bold text-xl">{text}</h3>
        </div>
      </a>
    );
  }