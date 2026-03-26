import Icon from "@/components/ui/icon"

const vacancies = [
  {
    company: "Яндекс.Лавка",
    role: "Курьер",
    age: "от 18",
    type: "Онлайн",
    pay: "от 2 500₽/день",
    icon: "Package",
    color: "yellow",
    hot: true,
  },
  {
    company: "McDonald's",
    role: "Работник кухни",
    age: "от 16",
    type: "Офлайн",
    pay: "от 170₽/час",
    icon: "UtensilsCrossed",
    color: "red",
    hot: false,
  },
  {
    company: "ВКонтакте",
    role: "SMM-стажёр",
    age: "от 14",
    type: "Онлайн",
    pay: "от 10 000₽/мес",
    icon: "Share2",
    color: "blue",
    hot: true,
  },
  {
    company: "Sber Student",
    role: "Стажёр IT",
    age: "от 16",
    type: "Онлайн",
    pay: "от 25 000₽/мес",
    icon: "Code",
    color: "green",
    hot: true,
  },
  {
    company: "Любой репетитор",
    role: "Помощник репетитора",
    age: "от 14",
    type: "Любой",
    pay: "от 300₽/час",
    icon: "BookOpen",
    color: "purple",
    hot: false,
  },
  {
    company: "Freelance-платформы",
    role: "Копирайтер / Дизайнер",
    age: "от 14",
    type: "Онлайн",
    pay: "от 500₽/задача",
    icon: "PenTool",
    color: "orange",
    hot: false,
  },
]

const colorMap: Record<string, string> = {
  yellow: "text-yellow-400 border-yellow-500/30 bg-yellow-500/10",
  red: "text-red-400 border-red-500/30 bg-red-500/10",
  blue: "text-blue-400 border-blue-500/30 bg-blue-500/10",
  green: "text-green-400 border-green-500/30 bg-green-500/10",
  purple: "text-purple-400 border-purple-500/30 bg-purple-500/10",
  orange: "text-orange-400 border-orange-500/30 bg-orange-500/10",
}

export function SafetySection() {
  return (
    <section id="vacancies" className="bg-black py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-400 text-sm font-geist mb-6">
            <Icon name="Search" size={14} />
            Актуальные вакансии
          </div>
          <h2 className="text-3xl md:text-5xl font-bold font-orbitron text-white mb-4">
            Где тебя <span className="text-green-400">ждут уже сейчас</span>
          </h2>
          <p className="text-gray-400 font-geist text-lg max-w-2xl mx-auto">
            Реальные работодатели, которые официально берут несовершеннолетних. Без хитростей.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {vacancies.map((v, i) => (
            <div
              key={i}
              className={`rounded-2xl border p-6 ${colorMap[v.color]} relative hover:scale-[1.02] transition-transform duration-300`}
            >
              {v.hot && (
                <div className="absolute top-4 right-4 bg-orange-500 text-white text-xs font-bold px-2 py-1 rounded-full font-geist">
                  🔥 Горячо
                </div>
              )}
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-black/40 flex items-center justify-center">
                  <Icon name={v.icon} size={20} className={colorMap[v.color].split(" ")[0]} fallback="Briefcase" />
                </div>
                <div>
                  <div className="text-white font-bold font-orbitron text-sm">{v.company}</div>
                  <div className="text-gray-500 font-geist text-xs">{v.role}</div>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-500 font-geist text-xs">Возраст</span>
                  <span className="text-white font-geist text-xs font-semibold">{v.age}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500 font-geist text-xs">Формат</span>
                  <span className="text-white font-geist text-xs font-semibold">{v.type}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500 font-geist text-xs">Доход</span>
                  <span className={`font-geist text-xs font-bold ${colorMap[v.color].split(" ")[0]}`}>{v.pay}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-500 font-geist text-sm">
            Данные носят ознакомительный характер. Условия уточняй у работодателя напрямую.
          </p>
        </div>
      </div>
    </section>
  )
}
