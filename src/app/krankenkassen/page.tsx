'use client'

import Link from 'next/link'
import MainLayout from '@/components/MainLayout'
import { insuranceCompanies } from '@/data/mockData'
import { ArrowRight } from 'lucide-react'

export default function KrankenkassenPage() {
  return (
    <MainLayout>
      <div>
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Beobachtete Krankenkassen</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {insuranceCompanies.map((kk) => (
            <div key={kk.id} className="card hover:shadow-lg transition-shadow">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h2 className="text-xl font-bold text-gray-900">{kk.name}</h2>
                  <p className="text-sm text-gray-600 mt-1">{kk.schwerpunkt}</p>
                </div>
                <div className="text-3xl">🏥</div>
              </div>

              <div className="space-y-3 mb-6 py-4 border-y border-gray-200">
                <div>
                  <p className="text-xs text-gray-500 uppercase">Beitragssatz</p>
                  <p className="text-lg font-bold text-gray-900">{kk.beitragssatz}</p>
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase">Letzte Aktivität</p>
                  <p className="text-sm text-gray-700">{kk.letzteAktivitaetDatum}</p>
                </div>
              </div>

              <p className="text-sm text-gray-600 mb-4">{kk.kurzbeschreibung}</p>

              <Link
                href={`/krankenkassen/${kk.id}`}
                className="flex items-center gap-2 text-blue-600 font-medium hover:text-blue-700"
              >
                Details anzeigen <ArrowRight size={16} />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </MainLayout>
  )
}
