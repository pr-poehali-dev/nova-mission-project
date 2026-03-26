import Icon from "@/components/ui/icon"

const testimonials = [
  {
    name: "Даша, 15 лет",
    role: "Копирайтер-фрилансер",
    avatar: "Д",
    color: "bg-green-500",
    text: "Начала писать тексты на бирже в 15 лет. За первый месяц заработала 4 000₽ — купила себе наушники! Теперь зарабатываю 15 000₽ в месяц и всё успеваю в школе.",
  },
  {
    name: "Артём, 16 лет",
    role: "Промоутер / SMM",
    avatar: "А",
    color: "bg-yellow-500",
    text: "Работал промоутером летом — неплохо, но скучно. Потом освоил SMM и теперь веду 3 аккаунта для местных кафе. Это и интереснее, и платят больше.",
  },
  {
    name: "Маша, 14 лет",
    role: "Репетитор по математике",
    avatar: "М",
    color: "bg-blue-500",
    text: "У меня пятёрка по математике, и я начала помогать соседскому ребёнку. Его родители платят 300₽ в час. Это честно и приятно — видишь результат!",
  },
  {
    name: "Никита, 17 лет",
    role: "Фотограф-фрилансер",
    avatar: "Н",
    color: "bg-purple-500",
    text: "Снимал выпускные вечера, дни рождения. Папин фотоаппарат + немного практики = 20 000₽ за лето. В этом году купил свой.",
  },
  {
    name: "Соня, 15 лет",
    role: "Курьер Яндекс.Еды",
    avatar: "С",
    color: "bg-orange-500",
    text: "Работаю курьером на велосипеде по выходным. 2-3 смены в неделю — и у меня есть карманные деньги на всё что захочу. Главное — планировать учёбу заранее.",
  },
  {
    name: "Влад, 16 лет",
    role: "IT-стажёр",
    avatar: "В",
    color: "bg-pink-500",
    text: "Прошёл стажировку в небольшой IT-компании — бесплатно, но получил опыт и рекомендации. Сейчас уже работаю там за зарплату. Начинайте раньше!",
  },
]

export function TestimonialsSection() {
  return (
    <section className="bg-gray-950 py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-green-500/30 bg-green-500/10 text-green-400 text-sm font-geist mb-6">
            <Icon name="MessageSquare" size={14} />
            Истории успеха
          </div>
          <h2 className="text-3xl md:text-5xl font-bold font-orbitron text-white mb-4">
            Они уже <span className="text-green-400">зарабатывают</span>
          </h2>
          <p className="text-gray-400 font-geist text-lg max-w-2xl mx-auto">
            Реальные истории подростков, которые нашли работу и совмещают её с учёбой.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="rounded-2xl border border-gray-800 bg-gray-900/50 p-6 hover:border-green-500/20 transition-colors duration-300"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className={`w-10 h-10 rounded-full ${t.color} flex items-center justify-center text-white font-bold font-orbitron text-sm`}>
                  {t.avatar}
                </div>
                <div>
                  <div className="text-white font-bold font-geist text-sm">{t.name}</div>
                  <div className="text-gray-500 font-geist text-xs">{t.role}</div>
                </div>
              </div>
              <div className="flex gap-0.5 mb-3">
                {[...Array(5)].map((_, s) => (
                  <Icon key={s} name="Star" size={12} className="text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <p className="text-gray-400 font-geist text-sm leading-relaxed">"{t.text}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
