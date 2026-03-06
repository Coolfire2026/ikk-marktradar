'use client'

import { useState, useEffect } from 'react'
import { X, Search } from 'lucide-react'
import { insuranceCompanies, activities, alerts, kategorien } from '@/data/mockData'

interface SearchResult {
  type: 'krankenkasse' | 'aktivitaet' | 'alert' | 'kategorie'
  title: string
  description?: string
  href?: string
  id: string
}

interface SearchModalProps {
  isOpen: boolean
  onClose: () => void
  searchTerm: string
  onSearchChange: (term: string) => void
}

export default function SearchModal({
  isOpen,
  onClose,
  searchTerm,
  onSearchChange,
}: SearchModalProps) {
  const [results, setResults] = useState<SearchResult[]>([])

  useEffect(() => {
    if (!searchTerm.trim()) {
      setResults([])
      return
    }

    const term = searchTerm.toLowerCase()
    const foundResults: SearchResult[] = []

    // Search Krankenkassen
    insuranceCompanies.forEach((kk) => {
      if (
        kk.name.toLowerCase().includes(term) ||
        kk.schwerpunkt.toLowerCase().includes(term)
      ) {
        foundResults.push({
          type: 'krankenkasse',
          id: kk.id,
          title: kk.name,
          description: kk.schwerpunkt,
          href: `/krankenkassen/${kk.id}`,
        })
      }
    })

    // Search Aktivitäten
    activities.forEach((activity) => {
      if (
        activity.titel.toLowerCase().includes(term) ||
        activity.zusammenfassung.toLowerCase().includes(term) ||
        activity.kategorie.toLowerCase().includes(term)
      ) {
        foundResults.push({
          type: 'aktivitaet',
          id: activity.id,
          title: activity.titel,
          description: `${activity.krankenkasse} • ${activity.kategorie}`,
          href: '/aktivitaeten',
        })
      }
    })

    // Search Alerts
    alerts.forEach((alert) => {
      if (
        alert.titel.toLowerCase().includes(term) ||
        alert.zusammenfassung.toLowerCase().includes(term)
      ) {
        foundResults.push({
          type: 'alert',
          id: alert.id,
          title: alert.titel,
          description: alert.krankenkasse,
          href: '/alerts',
        })
      }
    })

    // Search Kategorien
    kategorien.forEach((kat) => {
      if (kat.toLowerCase().includes(term)) {
        foundResults.push({
          type: 'kategorie',
          id: kat,
          title: kat,
          description: 'Kategorie',
          href: '/aktivitaeten',
        })
      }
    })

    setResults(foundResults.slice(0, 15))
  }, [searchTerm])

  if (!isOpen) return null

  const getIcon = (type: string) => {
    switch (type) {
      case 'krankenkasse':
        return '🏥'
      case 'aktivitaet':
        return '📄'
      case 'alert':
        return '⚠️'
      case 'kategorie':
        return '🏷️'
      default:
        return '🔍'
    }
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-start justify-center pt-20">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-2xl mx-4 max-h-96 overflow-hidden">
        {/* Search Input */}
        <div className="p-4 border-b border-gray-200 flex items-center gap-3">
          <Search size={20} className="text-gray-400" />
          <input
            type="text"
            placeholder="Suche nach Krankenkassen, Aktivitäten, Alerts..."
            value={searchTerm}
            onChange={(e) => onSearchChange(e.target.value)}
            className="flex-1 outline-none text-lg"
            autoFocus
          />
          <button
            onClick={onClose}
            className="p-1 hover:bg-gray-100 rounded"
          >
            <X size={20} />
          </button>
        </div>

        {/* Results */}
        <div className="overflow-y-auto max-h-80">
          {results.length > 0 ? (
            <div className="divide-y divide-gray-200">
              {results.map((result) => (
                <a
                  key={`${result.type}-${result.id}`}
                  href={result.href}
                  onClick={onClose}
                  className="flex items-center gap-4 p-4 hover:bg-gray-50 transition-colors"
                >
                  <span className="text-2xl flex-shrink-0">{getIcon(result.type)}</span>
                  <div className="flex-1 min-w-0">
                    <p className="font-medium text-gray-900 truncate">{result.title}</p>
                    {result.description && (
                      <p className="text-sm text-gray-600 truncate">{result.description}</p>
                    )}
                  </div>
                </a>
              ))}
            </div>
          ) : searchTerm.trim() ? (
            <div className="p-8 text-center text-gray-500">
              <p>Keine Ergebnisse für „{searchTerm}" gefunden</p>
            </div>
          ) : (
            <div className="p-8 text-center text-gray-500">
              <p>Geben Sie einen Suchbegriff ein</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
