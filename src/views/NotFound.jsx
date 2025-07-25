import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

export default function NotFound() {
  return (
    <>
      <SEO 
        title="Page Not Found - 404"
        description="The page you're looking for doesn't exist. Return to St. Jude Career Alliance homepage."
        noindex={true}
      />
      
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-blue-50 to-white px-4 py-8">
        <main className="text-center max-w-md" role="main">
          {/* Organization Name */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-blue-800 opacity-70">St. Jude Career Alliance</h3>
          </div>
          
          {/* 404 Message */}
          <h1 className="text-6xl font-bold text-blue-900 mb-4" role="alert">404</h1>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Page Not Found</h2>
          
          <p className="text-gray-600 mb-8 leading-relaxed">
            The page you're looking for doesn't exist. It may have been moved, 
            deleted, or you may have typed the address incorrectly.
          </p>
          
          {/* Action Buttons */}
          <div className="space-y-4">
            <Link 
              to="/"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-200"
            >
              Return to Homepage
            </Link>
            
            <div className="text-sm text-gray-500">
              <p>Or visit these popular pages:</p>
              <div className="mt-3 space-x-4">
                <Link to="/about" className="text-blue-600 hover:underline">About Us</Link>
                <Link to="/workshop" className="text-blue-600 hover:underline">Workshops</Link>
                <Link to="/contact" className="text-blue-600 hover:underline">Contact</Link>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
