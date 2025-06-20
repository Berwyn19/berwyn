export default function Writing() {
    const categories = [
        {
            title: "Technology",
            description: "Insights on software, AI, tools, and trends that excite me.",
            emoji: "💻",
        },
        {
            title: "Life Lessons",
            description: "Reflections and thoughts on growth, mindset, and purpose.",
            emoji: "🌱",
        },
        {
            title: "My Journey",
            description: "Stories and milestones from my academic and career path.",
            emoji: "🚀",
        },
    ]

    return (
        <div className="px-6 py-20">
            <h1 className="text-6xl font-bold text-center text-gray-800 mb-6 animate-color-change">My Writings</h1>
            <p className="text-xl text-center text-gray-600 max-w-3xl mx-auto mb-12">
                I write to document my thoughts, share what I learn, and inspire others on their journey. These pieces reflect my passion for technology, my reflections on life, and the experiences that shape who I am.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
                {categories.map((cat, idx) => (
                    <div
                        key={idx}
                        className="bg-white shadow-md p-6 rounded-2xl border border-gray-100 hover:shadow-xl transition-shadow"
                    >
                        <div className="text-4xl mb-4">{cat.emoji}</div>
                        <h2 className="text-2xl font-bold text-gray-800 mb-2">{cat.title}</h2>
                        <p className="text-gray-600 text-md">{cat.description}</p>
                        <div className="mt-4 text-sm font-semibold text-blue-600 underline cursor-pointer">
                            Coming soon...
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
