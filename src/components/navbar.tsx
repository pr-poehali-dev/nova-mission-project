import { useState } from "react"
import { Button } from "@/components/ui/button"
import Icon from "@/components/ui/icon"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-[9999] bg-black/95 backdrop-blur-md border-b border-green-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <h1 className="font-orbitron text-xl font-bold text-white">
              Юный<span className="text-green-400">Заработок</span>
            </h1>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a href="#types" className="font-geist text-white hover:text-green-400 transition-colors duration-200">
                Типы работ
              </a>
              <a href="#laws" className="font-geist text-white hover:text-green-400 transition-colors duration-200">
                Законы
              </a>
              <a href="#tips" className="font-geist text-white hover:text-green-400 transition-colors duration-200">
                Советы
              </a>
              <a href="#vacancies" className="font-geist text-white hover:text-green-400 transition-colors duration-200">
                Вакансии
              </a>
              <a href="#faq" className="font-geist text-white hover:text-green-400 transition-colors duration-200">
                Вопросы
              </a>
            </div>
          </div>

          <div className="hidden md:block">
            <Button className="bg-green-500 hover:bg-green-600 text-black font-bold font-geist border-0">
              Найти работу
            </Button>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-green-400 transition-colors duration-200"
            >
              {isOpen ? <Icon name="X" size={24} /> : <Icon name="Menu" size={24} />}
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-black/98 border-t border-green-500/20">
              <a href="#types" className="block px-3 py-2 font-geist text-white hover:text-green-400 transition-colors duration-200" onClick={() => setIsOpen(false)}>Типы работ</a>
              <a href="#laws" className="block px-3 py-2 font-geist text-white hover:text-green-400 transition-colors duration-200" onClick={() => setIsOpen(false)}>Законы</a>
              <a href="#tips" className="block px-3 py-2 font-geist text-white hover:text-green-400 transition-colors duration-200" onClick={() => setIsOpen(false)}>Советы</a>
              <a href="#vacancies" className="block px-3 py-2 font-geist text-white hover:text-green-400 transition-colors duration-200" onClick={() => setIsOpen(false)}>Вакансии</a>
              <a href="#faq" className="block px-3 py-2 font-geist text-white hover:text-green-400 transition-colors duration-200" onClick={() => setIsOpen(false)}>Вопросы</a>
              <div className="px-3 py-2">
                <Button className="w-full bg-green-500 hover:bg-green-600 text-black font-bold font-geist border-0">
                  Найти работу
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
