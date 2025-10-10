import React, { useCallback, useEffect, useState } from 'react';
import NavBar from '../components/NavBar';
import { fetchProjects } from '../api/project.api';
import { useNavigate } from 'react-router-dom';

const BoardCard = ({ title, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="relative w-60 h-32 rounded-lg cursor-pointer overflow-hidden group transition-all hover:opacity-90 bg-black"
    >
      <div className="absolute bottom-0 left-0 right-0 p-4">
        <h3 className="text-white font-semibold text-2xl">{title}</h3>
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

export default function Dashboard() {

  const navigate = useNavigate();


  const [boards, setBoards] = useState([]);

  useEffect(() => {

    const fetchBoards = async() => {
      const projects = await fetchProjects() 
      setBoards(projects.data || []);
    }

    fetchBoards();

  },[])

  const handleBoardClick = useCallback((projectId,projectName) => {

    navigate(`/board/${projectId}/${projectName}`);

  },[])

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
                title={board.projectName}
                onClick={() => handleBoardClick(board.id,board.projectName)}
              />
            ))}
            <CreateBoardCard onClick={handleCreateBoard} />
          </div>
        </main>
      </div>
    </div>
  );
}