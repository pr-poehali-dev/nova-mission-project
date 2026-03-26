import Icon from "@/components/ui/icon"

export function Footer() {
  return (
    <footer className="bg-black border-t border-gray-900 py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-10">
          <div className="md:col-span-2">
            <h3 className="font-orbitron text-xl font-bold text-white mb-3">
              Юный<span className="text-green-400">Заработок</span>
            </h3>
            <p className="text-gray-500 font-geist text-sm leading-relaxed max-w-sm">
              Справочник о заработке для несовершеннолетних. Законно, безопасно, с умом.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold font-geist text-sm mb-4">Разделы</h4>
            <ul className="space-y-2">
              {[
                { href: "#types", label: "Типы работ" },
                { href: "#laws", label: "Законы" },
                { href: "#tips", label: "Советы" },
                { href: "#vacancies", label: "Вакансии" },
                { href: "#faq", label: "Вопросы" },
              ].map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-gray-500 hover:text-green-400 font-geist text-sm transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold font-geist text-sm mb-4">Полезное</h4>
            <ul className="space-y-2">
              {[
                "Трудовой кодекс РФ",
                "Роструд: 8-800-707-88-41",
                "Онлайн-биржи фриланса",
                "Шаблон резюме",
              ].map((item, i) => (
                <li key={i} className="text-gray-500 font-geist text-sm">{item}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-900 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-600 font-geist text-sm">
            © 2024 ЮныйЗаработок. Справочник носит информационный характер.
          </p>
          <div className="flex items-center gap-2 text-gray-600 font-geist text-xs">
            <Icon name="Scale" size={12} />
            Данные основаны на Трудовом кодексе РФ
          </div>
        </div>
      </div>
    </footer>
  )
}
