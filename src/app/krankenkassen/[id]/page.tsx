'use client'

import Link from 'next/link'
import MainLayout from '@/components/MainLayout'
import { insuranceCompanies, activities } from '@/data/mockData'
import { ArrowLeft, Globe, Mail, Facebook } from 'lucide-react'

export default async function DetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const company = insuranceCompanies.find((kk) => kk.id === id)
  const companyActivities = activities.filter((a) => a.krankenkasseId === id)

  if (!company) {
    return (
      <MainLayout>
        <div className="text-center py-12">
          <p className="text-gray-600">Krankenkasse nicht gefunden</p>
        </div>
      </MainLayout>
    )
  }

  return (
    <MainLayout>
      <div>
        {/* Back Link */}
        <Link href="/krankenkassen" className="flex items-center gap-2 text-blue-600 font-medium mb-8 hover:text-blue-700">
          <ArrowLeft size={18} /> Zurück zur Übersicht
        </Link>

        {/* Header */}
        <div className="card mb-8">
          <div className="flex items-start justify-between mb-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">{company.name}</h1>
              <p className="text-gray-600 mt-2">{company.kurzbeschreibung}</p>
            </div>
            <div className="text-5xl">🏥</div>
          </div>

          {/* Kurzprofil */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-6 border-t border-gray-200">
            <div>
              <p className="text-xs text-gray-500 uppercase mb-1">Beitragssatz</p>
              <p className="text-xl font-bold text-gray-900">{company.beitragssatz}</p>
            </div>
            <div>
              <p className="text-xs text-gray-500 uppercase mb-1">Schwerpunkt</p>
              <p className="text-sm font-semibold text-gray-900">{company.schwerpunkt}</p>
            </div>
            <div>
              <p className="text-xs text-gray-500 uppercase mb-1">Website</p>
              <a href={`https://${company.website}`} target="_blank" className="text-sm text-blue-600 hover:underline">
                {company.website}
              </a>
            </div>
            <div>
              <p className="text-xs text-gray-500 uppercase mb-1">Kanäle</p>
              <div className="flex gap-2">
                {company.kommunikationskanale.slice(0, 2).map((kanal) => (
                  <span key={kanal} className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">
                    {kanal}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Letzte Aktivitäten */}
        <div className="card">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Letzte Aktivitäten</h2>
          <div className="space-y-6">
            {companyActivities.length > 0 ? (
              companyActivities.map((activity) => (
                <div key={activity.id} className="border-l-4 border-blue-600 pl-6 pb-6 last:pb-0">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="text-lg font-semibold text-gray-900">{activity.titel}</h3>
                    <span className="text-xs text-gray-500">{activity.datum}</span>
                  </div>
                  <span className="inline-block badge badge-info mb-3">{activity.kategorie}</span>
                  <p className="text-gray-700 mb-3">{activity.zusammenfassung}</p>
                  <div className="bg-gray-50 p-4 rounded-lg mb-3">
                    <p className="text-sm font-semibold text-gray-900 mb-1">Warum relevant?</p>
                    <p className="text-sm text-gray-700">{activity.warum_relevant}</p>
                  </div>
                  <a href={activity.quellenlink} target="_blank" className="text-sm text-blue-600 hover:underline">
                    Quelle: {activity.quelle}
                  </a>
                </div>
              ))
            ) : (
              <p className="text-gray-600">Keine Aktivitäten erfasst</p>
            )}
          </div>
        </div>
      </div>
    </MainLayout>
  )
}
