import React, { useState } from 'react';
import { Plus, Grid3x3 } from 'lucide-react';
import NavBar from '../components/NavBar';

const BoardCard = ({ title, background, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="relative w-60 h-32 rounded-lg cursor-pointer overflow-hidden group transition-all hover:opacity-90"
      style={{
        background: background.type === 'gradient' 
          ? background.value 
          : 'transparent'
      }}
    >
      {background.type === 'image' && (
        <img 
          src={background.value} 
          alt={title}
          className="w-full h-full object-cover"
        />
      )}
      <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-30 transition-all" />
      <div className="absolute bottom-0 left-0 right-0 p-4">
        <h3 className="text-white font-semibold text-sm">{title}</h3>
      </div>
    </div>
  );
};

const CreateBoardCard = ({ onClick }) => {
  return (
    <div
      onClick={onClick}
      className="w-60 h-32 rounded-lg cursor-pointer bg-gray-700 hover:bg-gray-600 transition-all flex items-center justify-center"
    >
      <span className="text-gray-300 text-sm">Create new board</span>
    </div>
  );
};

export default function TrelloDashboard() {
  const [boards, setBoards] = useState([
    {
      id: 1,
      title: 'My Trello board',
      background: {
        type: 'gradient',
        value: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
      }
    },
    {
      id: 2,
      title: 'Testing',
      background: {
        type: 'image',
        value: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop'
      }
    }
  ]);

  const handleBoardClick = (id) => {
    console.log('Board clicked:', id);
  };

  const handleCreateBoard = () => {
    console.log('Create new board');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
        {/* Navbar */}
            <NavBar />

      {/* Sidebar */}
      <div className="flex">
        <aside className="w-64 bg-gray-900 bg-opacity-30 backdrop-blur-sm min-h-screen border-r border-gray-800">
          <div className="p-4">
            <button className="w-full flex items-center gap-3 px-4 py-2 bg-blue-500 bg-opacity-20 text-blue-400 rounded">
              <span className="text-sm font-medium text-white">Boards</span>
            </button>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-8">
          <div className="flex flex-wrap gap-6">
            {boards.map((board) => (
              <BoardCard
                key={board.id}
                title={board.title}
                background={board.background}
                onClick={() => handleBoardClick(board.id)}
              />
            ))}
            <CreateBoardCard onClick={handleCreateBoard} />
          </div>
        </main>
      </div>
    </div>
  );
}