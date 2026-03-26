import Icon from "@/components/ui/icon"

const jobTypes = [
  {
    icon: "Package",
    title: "Курьер",
    pay: "от 800₽/смена",
    desc: "Доставка еды, посылок, документов. Можно на велосипеде или пешком.",
    tags: ["14+", "Офлайн", "Гибкий график"],
    color: "green",
  },
  {
    icon: "Megaphone",
    title: "Промоутер",
    pay: "от 600₽/час",
    desc: "Раздача листовок, дегустации, промо-акции у торговых центров.",
    tags: ["14+", "Офлайн", "Выходные"],
    color: "yellow",
  },
  {
    icon: "Monitor",
    title: "Фриланс онлайн",
    pay: "от 500₽/задание",
    desc: "Дизайн, тексты, SMM, переводы. Работа из дома в любое время.",
    tags: ["14+", "Онлайн", "Из дома"],
    color: "blue",
  },
  {
    icon: "BookOpen",
    title: "Репетитор",
    pay: "от 400₽/час",
    desc: "Помогай младшим школьникам по предметам, в которых ты силён.",
    tags: ["15+", "Онлайн/Офлайн", "По знаниям"],
    color: "purple",
  },
  {
    icon: "Camera",
    title: "Фото/Видео",
    pay: "от 1000₽/съёмка",
    desc: "Фотографируй события, снимай Reels, редактируй контент для блогеров.",
    tags: ["14+", "Творческая", "Портфолио"],
    color: "orange",
  },
  {
    icon: "Gamepad2",
    title: "Игровой контент",
    pay: "от 2000₽/месяц",
    desc: "Стримы, YouTube-канал, Telegram-блог, монетизация в соцсетях.",
    tags: ["14+", "Онлайн", "Постепенный рост"],
    color: "pink",
  },
]

const colorMap: Record<string, string> = {
  green: "text-green-400 bg-green-500/10 border-green-500/20",
  yellow: "text-yellow-400 bg-yellow-500/10 border-yellow-500/20",
  blue: "text-blue-400 bg-blue-500/10 border-blue-500/20",
  purple: "text-purple-400 bg-purple-500/10 border-purple-500/20",
  orange: "text-orange-400 bg-orange-500/10 border-orange-500/20",
  pink: "text-pink-400 bg-pink-500/10 border-pink-500/20",
}

const tagColor: Record<string, string> = {
  green: "bg-green-500/20 text-green-400",
  yellow: "bg-yellow-500/20 text-yellow-400",
  blue: "bg-blue-500/20 text-blue-400",
  purple: "bg-purple-500/20 text-purple-400",
  orange: "bg-orange-500/20 text-orange-400",
  pink: "bg-pink-500/20 text-pink-400",
}

export function AboutSection() {
  return (
    <section className="bg-black py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-sm font-geist mb-6">
            <Icon name="Briefcase" size={14} />
            Популярные направления
          </div>
          <h2 className="text-3xl md:text-5xl font-bold font-orbitron text-white mb-4">
            Где можно <span className="text-green-400">заработать</span>
          </h2>
          <p className="text-gray-400 font-geist text-lg max-w-2xl mx-auto">
            Реальные способы заработка для школьников. Без обмана, без рисков — только проверенные варианты.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {jobTypes.map((job, i) => (
            <div
              key={i}
              className={`rounded-2xl border p-6 ${colorMap[job.color]} hover:scale-[1.02] transition-transform duration-300 cursor-default`}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-black/40 flex items-center justify-center">
                  <Icon name={job.icon} size={24} className={colorMap[job.color].split(" ")[0]} fallback="Briefcase" />
                </div>
                <span className={`text-sm font-bold font-orbitron ${colorMap[job.color].split(" ")[0]}`}>{job.pay}</span>
              </div>
              <h3 className="text-white font-bold font-orbitron text-lg mb-2">{job.title}</h3>
              <p className="text-gray-400 font-geist text-sm leading-relaxed mb-4">{job.desc}</p>
              <div className="flex flex-wrap gap-2">
                {job.tags.map((tag, j) => (
                  <span key={j} className={`text-xs px-2 py-1 rounded-full font-geist ${tagColor[job.color]}`}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
