import React, { useState } from "react";
import { createProject } from '../api/project.api';

export default function NewBoard({ onClose}) {
  const [boardTitle, setBoardTitle] = useState("");

  const handleCreate = () => {
    if (!boardTitle.trim()) return alert("Board title is required");
    async function createNewBoard() {
      const res = await createProject(boardTitle);
      console.log(res.data);
      onClose(false);
    }

    createNewBoard();

  };

  return (
    <div className="fixed inset-0 bg-black/60 flex justify-center items-center z-50">
      <div className="bg-gray-900 text-white rounded-xl w-96 p-5 shadow-2xl">
        {/* Header */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold">Create board</h2>
          <button
            onClick={() => {onClose(false)}}
            className="text-gray-400 hover:text-white transition hover:cursor-pointer"
          >
            ✕
          </button>
        </div>

        {/* Board Title */}
        <div className="mb-4">
          <label className="text-sm text-gray-400 mb-1 block">
            Board title *
          </label>
          <input
            type="text"
            value={boardTitle}
            onChange={(e) => setBoardTitle(e.target.value)}
            placeholder="Enter board title"
            className="w-full px-3 py-2 rounded-md bg-gray-800 border border-gray-700 focus:outline-none focus:border-blue-500"
          />
        </div>

        {/* Create Button */}
        <button
          onClick={handleCreate}
          disabled={!boardTitle.trim()}
          className={`w-full py-2 rounded-md font-medium transition hover:cursor-pointer ${
            boardTitle.trim()
              ? "bg-blue-600 hover:bg-blue-500"
              : "bg-gray-700 cursor-not-allowed"
          }`}
        >
          Create
        </button>
      </div>
    </div>
  );
}
