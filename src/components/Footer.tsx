export default function Footer() {
  const version = 'fef04df' // Latest commit SHA

  return (
    <footer className="border-t border-gray-200 bg-white mt-auto">
      <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-2 text-center sm:text-left">
          <p className="text-xs sm:text-sm text-gray-600">
            © 2026 Michael Müller – Konzept & Entwicklung
          </p>
          <p className="text-xs text-gray-500">
            Version: {version.substring(0, 8)}
          </p>
        </div>
      </div>
    </footer>
  )
}
