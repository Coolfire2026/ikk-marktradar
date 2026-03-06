import Sidebar from './Sidebar'
import Footer from './Footer'

export default function MainLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gray-50">
      <Sidebar />
      <div className="flex-1 flex flex-col mt-16 md:mt-0">
        <div className="flex-1 overflow-auto p-4 md:p-8">
          {children}
        </div>
        <Footer />
      </div>
    </div>
  )
}
