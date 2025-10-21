export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-9xl font-bold text-blue-500 mb-4">404</h1>
        <h2 className="text-3xl font-bold mb-4">Anime Not Found</h2>
        <p className="text-gray-400 mb-8">
          The anime you're looking for doesn't exist or has been removed.
        </p>
        <a
          href="/"
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors"
        >
          Go Back Home
        </a>
      </div>
    </div>
  );
}
