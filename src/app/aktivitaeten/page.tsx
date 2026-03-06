'use client'

import { useState } from 'react'
import MainLayout from '@/components/MainLayout'
import { activities, kategorien, insuranceCompanies } from '@/data/mockData'
import { Filter, X } from 'lucide-react'

export default function AktivitaetenPage() {
  const [selectedKK, setSelectedKK] = useState<string>('')
  const [selectedKategorien, setSelectedKategorien] = useState<string[]>([])
  const [filterOpen, setFilterOpen] = useState(false)

  const filteredActivities = activities.filter((activity) => {
    const matchKK = !selectedKK || activity.krankenkasseId === selectedKK
    const matchKat = selectedKategorien.length === 0 || selectedKategorien.includes(activity.kategorie)
    return matchKK && matchKat
  })

  const toggleKategorie = (kategorie: string) => {
    setSelectedKategorien((prev) =>
      prev.includes(kategorie) ? prev.filter((k) => k !== kategorie) : [...prev, kategorie]
    )
  }

  return (
    <MainLayout>
      <div>
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Alle Aktivitäten</h1>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Mobile Filter Button */}
          <div className="lg:hidden mb-6">
            <button
              onClick={() => setFilterOpen(!filterOpen)}
              className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-700 w-full justify-center"
            >
              <Filter size={20} /> Filter {filterOpen ? 'ausblenden' : 'anzeigen'}
            </button>
          </div>

          {/* Sidebar Filter */}
          <div className={`lg:col-span-1 ${filterOpen ? 'block' : 'hidden'} lg:block`}>
            <div className="card sticky top-8">
              <h3 className="text-lg font-bold text-gray-900 mb-6 flex items-center gap-2">
                <Filter size={20} /> Filter
              </h3>

              {/* Krankenkasse Filter */}
              <div className="mb-8">
                <p className="text-sm font-semibold text-gray-900 mb-3">Krankenkasse</p>
                <select
                  value={selectedKK}
                  onChange={(e) => setSelectedKK(e.target.value)}
                  className="input text-sm"
                >
                  <option value="">Alle anzeigen</option>
                  {insuranceCompanies.map((kk) => (
                    <option key={kk.id} value={kk.id}>
                      {kk.name}
                    </option>
                  ))}
                </select>
              </div>

              {/* Kategorie Filter */}
              <div>
                <p className="text-sm font-semibold text-gray-900 mb-3">Kategorie</p>
                <div className="space-y-2">
                  {kategorien.map((kat) => (
                    <label key={kat} className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={selectedKategorien.includes(kat)}
                        onChange={() => toggleKategorie(kat)}
                        className="w-4 h-4 rounded"
                      />
                      <span className="text-sm text-gray-700">{kat}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Aktivitäten Liste */}
          <div className="lg:col-span-3">
            <div className="space-y-4">
              {filteredActivities.length > 0 ? (
                filteredActivities.map((activity) => (
                  <div key={activity.id} className="card">
                    <div className="flex justify-between items-start gap-4 mb-4">
                      <div>
                        <h3 className="text-lg font-bold text-gray-900 mb-2">{activity.titel}</h3>
                        <div className="flex items-center gap-2 mb-2">
                          <span className="text-xs font-semibold text-blue-600 uppercase">
                            {activity.krankenkasse}
                          </span>
                          <span className="badge badge-info">{activity.kategorie}</span>
                        </div>
                      </div>
                      <span className="text-xs text-gray-500 whitespace-nowrap">{activity.datum}</span>
                    </div>

                    <p className="text-gray-700 mb-4">{activity.zusammenfassung}</p>

                    <div className="bg-gray-50 p-4 rounded-lg mb-4">
                      <p className="text-sm font-semibold text-gray-900 mb-1">Warum relevant?</p>
                      <p className="text-sm text-gray-700">{activity.warum_relevant}</p>
                    </div>

                    <a href={activity.quellenlink} target="_blank" className="text-sm text-blue-600 hover:underline">
                      Quelle: {activity.quelle}
                    </a>
                  </div>
                ))
              ) : (
                <div className="card text-center py-12">
                  <p className="text-gray-600">Keine Aktivitäten mit den gewählten Filtern gefunden</p>
                </div>
              )}
            </div>
            <p className="text-sm text-gray-600 mt-8 text-center">
              {filteredActivities.length} von {activities.length} Aktivitäten angezeigt
            </p>
          </div>
        </div>
      </div>
    </MainLayout>
  )
}
