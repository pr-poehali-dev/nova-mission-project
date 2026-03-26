import Icon from "@/components/ui/icon"

const steps = [
  {
    age: "14 лет",
    icon: "GraduationCap",
    title: "Первые шаги",
    description: "С 14 лет можно официально работать с письменного согласия одного из родителей. Рабочий день — не более 4 часов. Отличный старт: промоутер, курьер, помощник на складе.",
    color: "text-green-400",
    border: "border-green-500",
    bg: "bg-green-500/10",
  },
  {
    age: "15 лет",
    icon: "Laptop",
    title: "Больше возможностей",
    description: "В 15 лет можно работать уже до 5 часов в день. Открываются возможности для фриланса, работы в кафе или магазине. Можно начать удалённую работу: дизайн, текст, SMM.",
    color: "text-yellow-400",
    border: "border-yellow-500",
    bg: "bg-yellow-500/10",
  },
  {
    age: "16 лет",
    icon: "TrendingUp",
    title: "Почти взрослый",
    description: "С 16 лет рабочий день увеличивается до 7 часов. Доступны большинство вакансий. Самое время попробовать репетиторство, продажи или работу в сфере услуг.",
    color: "text-blue-400",
    border: "border-blue-500",
    bg: "bg-blue-500/10",
  },
  {
    age: "18 лет",
    icon: "Trophy",
    title: "Полная свобода",
    description: "С 18 лет все ограничения снимаются. Полный рабочий день, любые виды занятости. Но уже сейчас у тебя есть опыт — это огромное преимущество перед сверстниками!",
    color: "text-purple-400",
    border: "border-purple-500",
    bg: "bg-purple-500/10",
  },
]

export function ApplicationsTimeline() {
  return (
    <section id="laws" className="bg-gray-950 py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-yellow-500/30 bg-yellow-500/10 text-yellow-400 text-sm font-geist mb-6">
            <Icon name="Scale" size={14} />
            Трудовое законодательство РФ
          </div>
          <h2 className="text-3xl md:text-5xl font-bold font-orbitron text-white mb-4">
            Что говорит <span className="text-yellow-400">закон</span>
          </h2>
          <p className="text-gray-400 font-geist text-lg max-w-2xl mx-auto">
            Права подростков в сфере труда защищены законом. Узнай, что тебе уже можно делать в твоём возрасте.
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-green-500/50 via-yellow-500/50 to-purple-500/50 md:-translate-x-px" />

          <div className="space-y-12">
            {steps.map((step, i) => (
              <div
                key={i}
                className={`relative flex flex-col md:flex-row gap-8 ${i % 2 === 1 ? "md:flex-row-reverse" : ""}`}
              >
                <div className="md:w-1/2 flex md:justify-end pl-20 md:pl-0 md:pr-12">
                  {i % 2 === 1 ? (
                    <div className="md:pl-12 md:pr-0 w-full max-w-sm">
                      <div className={`rounded-2xl border ${step.border}/30 ${step.bg} p-6`}>
                        <div className={`text-xs font-bold font-orbitron ${step.color} mb-2 uppercase tracking-widest`}>{step.age}</div>
                        <h3 className="text-white font-bold font-orbitron text-xl mb-2">{step.title}</h3>
                        <p className="text-gray-400 font-geist text-sm leading-relaxed">{step.description}</p>
                      </div>
                    </div>
                  ) : (
                    <div className="w-full max-w-sm">
                      <div className={`rounded-2xl border ${step.border}/30 ${step.bg} p-6`}>
                        <div className={`text-xs font-bold font-orbitron ${step.color} mb-2 uppercase tracking-widest`}>{step.age}</div>
                        <h3 className="text-white font-bold font-orbitron text-xl mb-2">{step.title}</h3>
                        <p className="text-gray-400 font-geist text-sm leading-relaxed">{step.description}</p>
                      </div>
                    </div>
                  )}
                </div>

                <div className="absolute left-8 md:left-1/2 top-6 -translate-x-1/2 z-10">
                  <div className={`w-10 h-10 rounded-full border-2 ${step.border} ${step.bg} flex items-center justify-center`}>
                    <Icon name={step.icon} size={18} className={step.color} fallback="Star" />
                  </div>
                </div>

                <div className="md:w-1/2" />
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 rounded-2xl border border-green-500/20 bg-green-500/5 p-6 flex gap-4 items-start">
          <Icon name="Info" size={20} className="text-green-400 mt-0.5 flex-shrink-0" />
          <p className="text-gray-400 font-geist text-sm leading-relaxed">
            <span className="text-white font-semibold">Важно:</span> Работодатель обязан заключить с тобой официальный трудовой договор. Отказ от оформления — нарушение закона. Всегда требуй договор!
          </p>
        </div>
      </div>
    </section>
  )
}
