export default function Footer() {
  const version = process.env.NEXT_PUBLIC_GIT_SHA || '54d3898a'

  return (
    <footer className="border-t border-gray-200 bg-white mt-12">
      <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <p className="text-xs sm:text-sm text-gray-600">
            © 2026 IKK MarktRadar – KI-gestützter Wettbewerbsmonitor für Krankenkassenmarkt
          </p>
          <p className="text-xs text-gray-500">
            Version: {version.substring(0, 8)}
          </p>
        </div>
      </div>
    </footer>
  )
}
