'use client'

import { useState } from 'react'
import { X } from 'lucide-react'

interface EmailAlertModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function EmailAlertModal({ isOpen, onClose }: EmailAlertModalProps) {
  const [sent, setSent] = useState(false)

  const handleSend = () => {
    setSent(true)
    setTimeout(() => {
      setSent(false)
      onClose()
    }, 2000)
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-lg max-w-md w-full">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <h2 className="text-xl font-bold text-gray-900">Marktalert versenden</h2>
          <button
            onClick={onClose}
            className="p-1 hover:bg-gray-100 rounded"
          >
            <X size={20} />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          {!sent ? (
            <div className="space-y-4">
              {/* Alert Content */}
              <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                <p className="text-sm font-semibold text-blue-900 mb-3">
                  Neue Marktaktivität erkannt
                </p>
                <div className="space-y-3">
                  <div>
                    <p className="text-xs text-blue-600 font-semibold uppercase">Krankenkasse</p>
                    <p className="text-sm font-bold text-gray-900">Techniker Krankenkasse</p>
                  </div>
                  <div>
                    <p className="text-xs text-blue-600 font-semibold uppercase">Aktivität</p>
                    <p className="text-sm font-bold text-gray-900">Neue TK-Fit App mit AI-Coach</p>
                  </div>
                  <div>
                    <p className="text-xs text-blue-600 font-semibold uppercase">Kategorie</p>
                    <span className="inline-block badge badge-info">App & Digital</span>
                  </div>
                  <div>
                    <p className="text-xs text-blue-600 font-semibold uppercase">Warum relevant?</p>
                    <p className="text-sm text-gray-700 mt-1">
                      Zeigt starke Investitionen in digitale Gesundheitsangebote.
                    </p>
                  </div>
                  <div>
                    <p className="text-xs text-blue-600 font-semibold uppercase">Quelle</p>
                    <a href="#" className="text-sm text-blue-600 hover:underline">
                      tk.de/news
                    </a>
                  </div>
                </div>
              </div>

              {/* Recipient */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Empfänger (Demo)
                </label>
                <div className="px-3 py-2 border border-gray-300 rounded-lg bg-gray-50">
                  <p className="text-sm text-gray-900">strategie@ikk-suedwest.de</p>
                </div>
              </div>

              {/* Send Button */}
              <button
                onClick={handleSend}
                className="btn btn-primary w-full"
              >
                E-Mail senden (Demo)
              </button>
            </div>
          ) : (
            <div className="text-center py-8">
              <div className="text-4xl mb-4">✅</div>
              <p className="text-lg font-semibold text-green-600 mb-2">
                Demo-Benachrichtigung erfolgreich gesendet
              </p>
              <p className="text-sm text-gray-600">
                E-Mail würde an strategie@ikk-suedwest.de versendet
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
