'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { BarChart3, Building2, Activity, TrendingUp, AlertCircle, Home, Menu, X } from 'lucide-react'
import SearchModal from './SearchModal'

export default function Sidebar() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)
  const [searchTerm, setSearchTerm] = useState('')
  const [searchModalOpen, setSearchModalOpen] = useState(false)

  const navItems = [
    { href: '/', label: 'Dashboard', icon: Home },
    { href: '/krankenkassen', label: 'Krankenkassen', icon: Building2 },
    { href: '/aktivitaeten', label: 'Aktivitäten', icon: Activity },
    { href: '/vergleich', label: 'Vergleich', icon: TrendingUp },
    { href: '/alerts', label: 'Alerts', icon: AlertCircle },
    { href: '/timeline', label: 'Timeline', icon: BarChart3 },
  ]

  // Handle search
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const term = e.target.value
    setSearchTerm(term)
    if (term.trim()) {
      setSearchModalOpen(true)
    }
  }

  const handleSearchChange = (term: string) => {
    setSearchTerm(term)
  }

  return (
    <>
      <SearchModal
        isOpen={searchModalOpen}
        onClose={() => {
          setSearchModalOpen(false)
          setSearchTerm('')
        }}
        searchTerm={searchTerm}
        onSearchChange={handleSearchChange}
      />

      {/* Mobile Header */}
      <div className="md:hidden fixed top-0 left-0 right-0 bg-white border-b border-gray-200 p-4 z-50 flex items-center justify-between">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="p-2 hover:bg-gray-100 rounded-lg"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold">
            📡
          </div>
          <span className="font-bold text-gray-900">MarktRadar</span>
        </div>
        <div className="w-8"></div>
      </div>

      {/* Mobile Overlay */}
      {isOpen && (
        <div
          className="md:hidden fixed inset-0 bg-black bg-opacity-50 z-30 mt-16"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div
        className={`fixed md:static top-16 md:top-0 left-0 w-64 bg-white border-r border-gray-200 min-h-screen p-6 transition-transform z-40 ${
          isOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'
        }`}
      >
        {/* Desktop Header */}
        <div className="hidden md:block mb-12">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-lg">
              📡
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900">IKK MarktRadar</h1>
              <p className="text-xs text-gray-600">Wettbewerbsmonitor</p>
            </div>
          </div>
        </div>

        {/* Search */}
        <div className="mb-8">
          <input
            type="text"
            placeholder="Suchen..."
            value={searchTerm}
            onChange={handleSearch}
            className="input text-sm w-full"
          />
        </div>

        {/* Navigation */}
        <nav className="space-y-2">
          {navItems.map((item) => {
            const Icon = item.icon
            const isActive = pathname === item.href
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={`flex items-center gap-3 px-4 py-3 rounded-lg font-medium transition-colors ${
                  isActive
                    ? 'bg-blue-100 text-blue-600'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                <Icon size={20} />
                <span>{item.label}</span>
              </Link>
            )
          })}
        </nav>
      </div>
    </>
  )
}
