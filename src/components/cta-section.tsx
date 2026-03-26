import { Button } from "@/components/ui/button"
import Icon from "@/components/ui/icon"

export function CTASection() {
  return (
    <section className="bg-gray-950 py-24 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <div className="relative rounded-3xl border border-green-500/20 bg-gradient-to-br from-green-500/10 via-black to-yellow-500/10 p-12 md:p-16 overflow-hidden">
          {/* Decorative blobs */}
          <div className="absolute top-0 left-0 w-64 h-64 bg-green-500/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-yellow-500/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-green-500/30 bg-green-500/10 text-green-400 text-sm font-geist mb-8">
              <Icon name="Rocket" size={14} />
              Начни прямо сейчас
            </div>

            <h2 className="text-3xl md:text-5xl font-bold font-orbitron text-white mb-6">
              Твой первый заработок —<br />
              <span className="text-green-400">ближе, чем кажется</span>
            </h2>

            <p className="text-gray-400 font-geist text-lg max-w-2xl mx-auto mb-10">
              Тысячи подростков уже зарабатывают свои первые деньги. Законно, безопасно и не в ущерб учёбе. Присоединяйся!
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button className="bg-green-500 hover:bg-green-400 text-black font-bold font-geist text-lg px-8 py-6 border-0">
                <Icon name="Search" size={20} />
                Найти работу
              </Button>
              <Button variant="outline" className="border-green-500/40 text-white hover:bg-green-500/10 font-geist text-lg px-8 py-6">
                <Icon name="BookOpen" size={20} />
                Читать справочник
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-6 border-t border-gray-800 pt-10">
              {[
                { icon: "Shield", text: "Только легальные способы" },
                { icon: "Heart", text: "Без ущерба для учёбы" },
                { icon: "Zap", text: "Реальные вакансии" },
              ].map((item, i) => (
                <div key={i} className="flex flex-col items-center gap-2">
                  <Icon name={item.icon} size={20} className="text-green-400" fallback="Star" />
                  <span className="text-gray-400 font-geist text-sm">{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
