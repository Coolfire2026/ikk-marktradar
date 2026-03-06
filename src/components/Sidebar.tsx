'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { BarChart3, Building2, Activity, TrendingUp, AlertCircle, Home } from 'lucide-react'

export default function Sidebar() {
  const pathname = usePathname()

  const navItems = [
    { href: '/', label: 'Dashboard', icon: Home },
    { href: '/krankenkassen', label: 'Krankenkassen', icon: Building2 },
    { href: '/aktivitaeten', label: 'Aktivitäten', icon: Activity },
    { href: '/vergleich', label: 'Vergleich', icon: TrendingUp },
    { href: '/alerts', label: 'Alerts', icon: AlertCircle },
  ]

  return (
    <div className="w-64 bg-white border-r border-gray-200 min-h-screen p-6">
      {/* Header */}
      <div className="mb-12">
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
          className="input text-sm"
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
  )
}
