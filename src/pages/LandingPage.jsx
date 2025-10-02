import React from 'react';
import { CheckCircle, FolderKanban, MessageSquare, Users } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function LandingPage() {

  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Task Collaboration
              </span>
              <br />
              System
            </h1>
            
            <p className="text-xl text-gray-600 leading-relaxed">
              Organize your work, collaborate with your team, and track progress easily.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-lg shadow-lg hover:shadow-xl hover:cursor-pointer transition-all duration-300"
                onClick={() => navigate('/register')}
                >
                Sign Up
              </button>
              <button className="bg-white hover:bg-gray-50 text-gray-800 font-semibold px-8 py-4 rounded-lg shadow-md hover:shadow-lg border border-gray-200 transition-all duration-300 hover:cursor-pointer"
                onClick={() => navigate('/login')}>
                Log In
              </button>
            </div>
          </div>
          
          {/* Right Illustration */}
          <div className="relative">
            <div className="bg-gradient-to-br from-blue-200 to-purple-200 rounded-3xl p-8 shadow-2xl">
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-3 h-3 rounded-full bg-red-400"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                  <div className="w-3 h-3 rounded-full bg-green-400"></div>
                </div>
                
                <div className="space-y-3">
                  <div className="flex gap-3">
                    <div className="bg-pink-100 rounded-lg p-4 flex-1">
                      <div className="w-8 h-8 bg-pink-300 rounded mb-2"></div>
                      <div className="space-y-1">
                        <div className="h-2 bg-pink-200 rounded w-3/4"></div>
                        <div className="h-2 bg-pink-200 rounded w-1/2"></div>
                      </div>
                    </div>
                    <div className="bg-blue-100 rounded-lg p-4 flex-1">
                      <div className="w-8 h-8 bg-blue-300 rounded mb-2"></div>
                      <div className="space-y-1">
                        <div className="h-2 bg-blue-200 rounded w-3/4"></div>
                        <div className="h-2 bg-blue-200 rounded w-1/2"></div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex gap-3">
                    <div className="bg-purple-100 rounded-lg p-4 flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <div className="w-6 h-6 bg-purple-300 rounded-full"></div>
                        <CheckCircle className="w-5 h-5 text-green-500" />
                      </div>
                      <div className="space-y-1">
                        <div className="h-2 bg-purple-200 rounded w-2/3"></div>
                        <div className="h-2 bg-purple-200 rounded w-1/2"></div>
                      </div>
                    </div>
                    <div className="bg-yellow-100 rounded-lg p-4 flex-1">
                      <div className="w-8 h-8 bg-yellow-300 rounded mb-2"></div>
                      <div className="space-y-1">
                        <div className="h-2 bg-yellow-200 rounded w-3/4"></div>
                        <div className="h-2 bg-yellow-200 rounded w-1/2"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Features Section */}
      <div className="bg-white py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Everything You Need to Succeed
            </h2>
            <p className="text-xl text-gray-600">
              Powerful features designed to help your team work better together
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Feature 1 */}
            <div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-blue-100">
              <div className="bg-blue-600 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                <FolderKanban className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                Create and Manage Projects
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Organize your work into projects and keep everything structured and easy to find.
              </p>
            </div>
            
            {/* Feature 2 */}
            <div className="bg-gradient-to-br from-purple-50 to-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-purple-100">
              <div className="bg-purple-600 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                <CheckCircle className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                Assign and Track Tasks
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Delegate tasks to team members and monitor progress in real-time with ease.
              </p>
            </div>
            
            {/* Feature 3 */}
            <div className="bg-gradient-to-br from-pink-50 to-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-pink-100">
              <div className="bg-pink-600 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                <MessageSquare className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                Real-time Collaboration
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Communicate seamlessly with comments and updates directly on tasks.
              </p>
            </div>
            
            {/* Feature 4 */}
            <div className="bg-gradient-to-br from-indigo-50 to-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-indigo-100">
              <div className="bg-indigo-600 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                Kanban Board
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Visualize your workflow with To-do, In Progress, and Done columns.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-400">
            © 2025 Task Collaboration System
          </p>
        </div>
      </footer>
    </div>
  );
}