import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import Icon from "@/components/ui/icon"

const faqs = [
  {
    q: "С какого возраста можно официально работать в России?",
    a: "По Трудовому кодексу РФ (ст. 63), подростки могут работать с 14 лет с согласия одного из родителей. При этом работа должна быть лёгкой, не вредной и не мешать учёбе.",
  },
  {
    q: "Нужно ли согласие родителей для устройства на работу?",
    a: "Да, до 16 лет необходимо письменное согласие одного из родителей (или опекуна). С 16 лет можно устраиваться самостоятельно. В 18 лет все ограничения снимаются.",
  },
  {
    q: "Сколько часов в день можно работать школьнику?",
    a: "14-15 лет: не более 4 часов в день в учебное время (24 часа в неделю). 16-17 лет: не более 7 часов в день (35 часов в неделю). Летом ограничения немного мягче.",
  },
  {
    q: "Обязан ли работодатель платить несовершеннолетним МРОТ?",
    a: "Да! Работодатель не имеет права платить меньше МРОТ (пропорционально отработанному времени). Если платят меньше — это нарушение закона, можно жаловаться в трудовую инспекцию.",
  },
  {
    q: "Как избежать мошенников при поиске работы?",
    a: "Никогда не плати за трудоустройство. Проверяй компанию в интернете. Не отдавай оригиналы документов. Легальный работодатель всегда заключает договор и не просит денег.",
  },
  {
    q: "Можно ли работать онлайн и получать оплату на карту?",
    a: "Да! Фриланс, SMM, копирайтинг — всё это доступно с 14 лет. Оплату можно получать на карту родителя или, с 14 лет, на свою карту Сбера/Тинькофф для несовершеннолетних.",
  },
  {
    q: "Что делать, если работодатель нарушает права?",
    a: "Обратись в Государственную инспекцию труда (онлайн на сайте rostrud.gov.ru), прокуратуру или в комиссию по делам несовершеннолетних. Можно также позвонить на горячую линию Роструда: 8-800-707-88-41 (бесплатно).",
  },
  {
    q: "Как совмещать работу с учёбой и не выгореть?",
    a: "Выбирай работу с гибким графиком. Установи чёткие границы: учёба — приоритет. Начни с 1-2 смен в неделю. Следи за оценками — если падают, сокращай нагрузку.",
  },
]

export function FAQSection() {
  return (
    <section id="faq" className="bg-black py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-green-500/30 bg-green-500/10 text-green-400 text-sm font-geist mb-6">
            <Icon name="HelpCircle" size={14} />
            Частые вопросы
          </div>
          <h2 className="text-3xl md:text-5xl font-bold font-orbitron text-white mb-4">
            Отвечаем на <span className="text-green-400">главные вопросы</span>
          </h2>
          <p className="text-gray-400 font-geist text-lg max-w-2xl mx-auto">
            Собрали самые популярные вопросы о заработке подростков и дали честные ответы.
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((faq, i) => (
            <AccordionItem
              key={i}
              value={`item-${i}`}
              className="border border-gray-800 rounded-xl px-6 bg-gray-900/50 hover:border-green-500/30 transition-colors duration-300"
            >
              <AccordionTrigger className="text-white font-geist font-semibold text-left py-5 hover:no-underline hover:text-green-400 transition-colors">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-gray-400 font-geist text-sm leading-relaxed pb-5">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
