import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import Icon from "@/components/ui/icon"

export const Hero3DWebGL = () => {
  const titleWords = ["Заработай", "Уже", "Сегодня"]
  const subtitle = "Справочник о заработке для несовершеннолетних"
  const [visibleWords, setVisibleWords] = useState(0)
  const [subtitleVisible, setSubtitleVisible] = useState(false)

  useEffect(() => {
    if (visibleWords < titleWords.length) {
      const timeout = setTimeout(() => setVisibleWords(visibleWords + 1), 500)
      return () => clearTimeout(timeout)
    } else {
      const timeout = setTimeout(() => setSubtitleVisible(true), 600)
      return () => clearTimeout(timeout)
    }
  }, [visibleWords])

  return (
    <div className="h-screen bg-black relative overflow-hidden flex items-center justify-center">
      {/* Animated background grid */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(rgba(74, 222, 128, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(74, 222, 128, 0.3) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      {/* Glowing orbs */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-green-500/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-yellow-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-green-400/5 rounded-full blur-2xl" />

      {/* Gradient edges */}
      <div className="absolute inset-0 pointer-events-none z-10">
        <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-black to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent" />
        <div className="absolute top-0 bottom-0 left-0 w-32 bg-gradient-to-r from-black to-transparent" />
        <div className="absolute top-0 bottom-0 right-0 w-32 bg-gradient-to-l from-black to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-20 text-center px-6 max-w-5xl mx-auto">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-green-500/30 bg-green-500/10 text-green-400 text-sm font-geist mb-8">
          <Icon name="Sparkles" size={14} />
          Для подростков от 14 лет
        </div>

        {/* Title */}
        <h1 className="text-4xl md:text-6xl xl:text-7xl font-extrabold font-orbitron mb-6 leading-tight">
          <div className="flex flex-wrap justify-center gap-3 md:gap-4">
            {titleWords.map((word, index) => (
              <span
                key={index}
                className={`transition-all duration-700 ${
                  index < visibleWords
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                } ${index === 1 ? "text-green-400" : "text-white"}`}
              >
                {word}
              </span>
            ))}
          </div>
        </h1>

        {/* Subtitle */}
        <p
          className={`text-lg md:text-xl text-gray-400 font-geist mb-4 transition-all duration-700 ${
            subtitleVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          {subtitle}
        </p>
        <p
          className={`text-base text-gray-500 font-geist mb-10 max-w-2xl mx-auto transition-all duration-700 ${
            subtitleVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
          style={{ transitionDelay: "0.1s" }}
        >
          Узнай, как законно зарабатывать деньги, не бросая учёбу. Реальные способы, проверенные советы и актуальные вакансии.
        </p>

        {/* CTA Buttons */}
        <div
          className={`flex flex-col sm:flex-row gap-4 justify-center transition-all duration-700 ${
            subtitleVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
          style={{ transitionDelay: "0.2s" }}
        >
          <Button className="bg-green-500 hover:bg-green-400 text-black font-bold font-geist text-lg px-8 py-6 border-0">
            <Icon name="Briefcase" size={20} />
            Смотреть вакансии
          </Button>
          <Button variant="outline" className="border-green-500/40 text-white hover:bg-green-500/10 font-geist text-lg px-8 py-6">
            <Icon name="BookOpen" size={20} />
            Читать справочник
          </Button>
        </div>

        {/* Stats */}
        <div
          className={`grid grid-cols-3 gap-8 mt-16 transition-all duration-700 ${
            subtitleVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
          style={{ transitionDelay: "0.3s" }}
        >
          {[
            { value: "14+", label: "лет — можно работать" },
            { value: "20+", label: "способов заработка" },
            { value: "100%", label: "законно и безопасно" },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <div className="text-2xl md:text-3xl font-bold font-orbitron text-green-400">{stat.value}</div>
              <div className="text-xs md:text-sm text-gray-500 font-geist mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 text-gray-600 animate-bounce">
        <Icon name="ChevronDown" size={24} />
      </div>
    </div>
  )
}
