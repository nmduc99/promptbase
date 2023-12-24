
export default function Home() {
  return (
    <body>
      <div>
        <div className="px-16 py-48 max-w-7xl mx-auto">
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-gray-200 p-4">Column 1</div>
            <div className="bg-gray-300 p-4">Column 2</div>
            <div className="bg-gray-400 p-4">Column 3</div>
          </div>
        </div>
      </div>
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4">
          {/* Your footer content here */}
          <p>&copy; 2023 Your Website. All rights reserved.</p>
        </div>
      </footer>
    </body>

  )
}
