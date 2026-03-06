'use client'

import { useState } from 'react'
import MainLayout from '@/components/MainLayout'
import { insuranceCompanies } from '@/data/mockData'
import { X } from 'lucide-react'

export default function VergleichPage() {
  const [selected, setSelected] = useState<string[]>(['tk', 'barmer'])

  const toggleSelection = (id: string) => {
    setSelected((prev) =>
      prev.includes(id) ? prev.filter((s) => s !== id) : [...prev, id]
    )
  }

  const selectedCompanies = insuranceCompanies.filter((kk) => selected.includes(kk.id))

  return (
    <MainLayout>
      <div>
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Vergleich Krankenkassen</h1>

        {/* Selection Cards */}
        <div className="mb-12">
          <h2 className="text-lg font-bold text-gray-900 mb-4">Krankenkassen zum Vergleich wählen:</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
            {insuranceCompanies.map((kk) => (
              <button
                key={kk.id}
                onClick={() => toggleSelection(kk.id)}
                className={`p-4 rounded-lg border-2 font-medium transition-colors text-center text-sm ${
                  selected.includes(kk.id)
                    ? 'border-blue-600 bg-blue-50 text-blue-600'
                    : 'border-gray-200 bg-white text-gray-700 hover:border-gray-300'
                }`}
              >
                {kk.name}
              </button>
            ))}
          </div>
        </div>

        {/* Comparison - Desktop Table */}
        {selectedCompanies.length > 0 && (
          <>
            {/* Desktop Table */}
            <div className="hidden md:block card overflow-x-auto">
              <table className="w-full">
                <thead className="border-b border-gray-200">
                  <tr>
                    <th className="text-left py-4 px-6 font-semibold text-gray-900">Merkmal</th>
                    {selectedCompanies.map((kk) => (
                      <th key={kk.id} className="text-left py-4 px-6 font-semibold text-gray-900">
                        <div className="flex items-center justify-between">
                          <span>{kk.name}</span>
                          <button
                            onClick={() => toggleSelection(kk.id)}
                            className="ml-2 text-gray-400 hover:text-gray-600"
                          >
                            <X size={18} />
                          </button>
                        </div>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-200">
                    <td className="py-4 px-6 font-semibold text-gray-900">Beitragssatz</td>
                    {selectedCompanies.map((kk) => (
                      <td key={kk.id} className="py-4 px-6 text-gray-700 font-bold text-lg">
                        {kk.beitragssatz}
                      </td>
                    ))}
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-4 px-6 font-semibold text-gray-900">Schwerpunkt</td>
                    {selectedCompanies.map((kk) => (
                      <td key={kk.id} className="py-4 px-6 text-gray-700">
                        {kk.schwerpunkt}
                      </td>
                    ))}
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-4 px-6 font-semibold text-gray-900">Website</td>
                    {selectedCompanies.map((kk) => (
                      <td key={kk.id} className="py-4 px-6">
                        <a href={`https://${kk.website}`} target="_blank" className="text-blue-600 hover:underline text-sm">
                          {kk.website}
                        </a>
                      </td>
                    ))}
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-4 px-6 font-semibold text-gray-900">Kurzbeschreibung</td>
                    {selectedCompanies.map((kk) => (
                      <td key={kk.id} className="py-4 px-6 text-gray-700 text-sm">
                        {kk.kurzbeschreibung}
                      </td>
                    ))}
                  </tr>
                  <tr>
                    <td className="py-4 px-6 font-semibold text-gray-900">Letzte Aktivität</td>
                    {selectedCompanies.map((kk) => (
                      <td key={kk.id} className="py-4 px-6 text-gray-700">
                        {kk.letzteAktivitaetDatum}
                      </td>
                    ))}
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Mobile Cards */}
            <div className="md:hidden space-y-6">
              {selectedCompanies.map((kk) => (
                <div key={kk.id} className="card">
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-lg font-bold text-gray-900">{kk.name}</h3>
                    <button
                      onClick={() => toggleSelection(kk.id)}
                      className="text-gray-400 hover:text-gray-600"
                    >
                      <X size={20} />
                    </button>
                  </div>
                  <div className="space-y-3 border-t border-gray-200 pt-4">
                    <div>
                      <p className="text-xs text-gray-500 uppercase mb-1">Beitragssatz</p>
                      <p className="text-xl font-bold text-gray-900">{kk.beitragssatz}</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 uppercase mb-1">Schwerpunkt</p>
                      <p className="text-sm text-gray-700">{kk.schwerpunkt}</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 uppercase mb-1">Website</p>
                      <a href={`https://${kk.website}`} target="_blank" className="text-sm text-blue-600 hover:underline">
                        {kk.website}
                      </a>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 uppercase mb-1">Kurzbeschreibung</p>
                      <p className="text-sm text-gray-700">{kk.kurzbeschreibung}</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 uppercase mb-1">Letzte Aktivität</p>
                      <p className="text-sm text-gray-700">{kk.letzteAktivitaetDatum}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}

        {selectedCompanies.length === 0 && (
          <div className="card text-center py-12">
            <p className="text-gray-600">Wählen Sie mindestens eine Krankenkasse zum Vergleich</p>
          </div>
        )}
      </div>
    </MainLayout>
  )
}
