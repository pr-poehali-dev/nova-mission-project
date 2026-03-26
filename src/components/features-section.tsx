import Icon from "@/components/ui/icon"

const features = [
  {
    icon: "Briefcase",
    title: "Типы работ",
    description: "От курьера и промоутера до фриланса и репетиторства — собрали все подходящие варианты для школьников.",
    color: "text-green-400",
    bg: "bg-green-500/10 border-green-500/20",
  },
  {
    icon: "Scale",
    title: "Трудовое законодательство",
    description: "Что говорит закон о работе несовершеннолетних: возраст, рабочие часы, права и обязанности.",
    color: "text-yellow-400",
    bg: "bg-yellow-500/10 border-yellow-500/20",
  },
  {
    icon: "Lightbulb",
    title: "Практические советы",
    description: "Как совмещать работу с учёбой, составить резюме и пройти первое собеседование.",
    color: "text-blue-400",
    bg: "bg-blue-500/10 border-blue-500/20",
  },
  {
    icon: "Search",
    title: "Актуальные вакансии",
    description: "Подборка реальных вакансий, которые берут школьников без опыта работы.",
    color: "text-purple-400",
    bg: "bg-purple-500/10 border-purple-500/20",
  },
  {
    icon: "Shield",
    title: "Безопасность",
    description: "Как не попасть на мошенников и распознать нелегальные предложения о работе.",
    color: "text-red-400",
    bg: "bg-red-500/10 border-red-500/20",
  },
  {
    icon: "TrendingUp",
    title: "Финансовая грамотность",
    description: "Первый заработок — первые уроки. Учим правильно тратить, копить и планировать бюджет.",
    color: "text-orange-400",
    bg: "bg-orange-500/10 border-orange-500/20",
  },
]

export function FeaturesSection() {
  return (
    <section id="types" className="bg-black py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-green-500/30 bg-green-500/10 text-green-400 text-sm font-geist mb-6">
            <Icon name="Star" size={14} />
            Всё в одном месте
          </div>
          <h2 className="text-3xl md:text-5xl font-bold font-orbitron text-white mb-4">
            Твой путь к <span className="text-green-400">первому заработку</span>
          </h2>
          <p className="text-gray-400 font-geist text-lg max-w-2xl mx-auto">
            Справочник собрал всё, что нужно знать подростку о законном заработке — от поиска работы до первой зарплаты.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <div
              key={i}
              className={`rounded-2xl border p-6 ${f.bg} backdrop-blur-sm hover:scale-[1.02] transition-transform duration-300 cursor-default`}
            >
              <div className={`w-12 h-12 rounded-xl bg-black/40 flex items-center justify-center mb-4`}>
                <Icon name={f.icon} size={24} className={f.color} fallback="Star" />
              </div>
              <h3 className="text-white font-bold font-orbitron text-lg mb-2">{f.title}</h3>
              <p className="text-gray-400 font-geist text-sm leading-relaxed">{f.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}