import Icon from "@/components/ui/icon"

const tips = [
  {
    icon: "FileText",
    title: "Составь резюме",
    desc: "Даже без опыта. Укажи школьные достижения, навыки, хобби и готовность учиться.",
  },
  {
    icon: "Clock",
    title: "Планируй время",
    desc: "Расставь приоритеты: учёба на первом месте. Работа не должна мешать оценкам.",
  },
  {
    icon: "Shield",
    title: "Проверяй работодателя",
    desc: "Гугли отзывы, требуй договор. Легальный работодатель никогда не просит денег за трудоустройство.",
  },
  {
    icon: "PiggyBank",
    title: "Откладывай часть",
    desc: "Привычка откладывать 10-20% заработка с первой работы — основа финансового успеха.",
  },
  {
    icon: "Users",
    title: "Строй нетворкинг",
    desc: "Каждое место работы — новые знакомства. Рекомендации от первых работодателей очень ценны.",
  },
  {
    icon: "Star",
    title: "Расти в профессии",
    desc: "Выбирай работу, где можно чему-то научиться, а не просто получить деньги.",
  },
]

export function TechnologySection() {
  return (
    <section id="tips" className="bg-gray-950 py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-green-500/30 bg-green-500/10 text-green-400 text-sm font-geist mb-6">
            <Icon name="Lightbulb" size={14} />
            Практические советы
          </div>
          <h2 className="text-3xl md:text-5xl font-bold font-orbitron text-white mb-4">
            Советы для <span className="text-green-400">умного старта</span>
          </h2>
          <p className="text-gray-400 font-geist text-lg max-w-2xl mx-auto">
            Проверенные рекомендации, которые помогут найти хорошую работу и не облажаться на старте.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tips.map((tip, i) => (
            <div key={i} className="rounded-2xl border border-gray-800 bg-gray-900/50 p-6 hover:border-green-500/30 hover:bg-green-500/5 transition-all duration-300 group">
              <div className="w-12 h-12 rounded-xl bg-green-500/10 border border-green-500/20 flex items-center justify-center mb-4 group-hover:bg-green-500/20 transition-colors">
                <Icon name={tip.icon} size={22} className="text-green-400" fallback="Star" />
              </div>
              <h3 className="text-white font-bold font-orbitron text-lg mb-2">{tip.title}</h3>
              <p className="text-gray-400 font-geist text-sm leading-relaxed">{tip.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
