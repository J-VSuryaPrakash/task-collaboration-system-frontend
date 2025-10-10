import { useState } from "react";
import { X } from "lucide-react";

export default function TaskCard({closeTask}) {
  
  const [title, setTitle] = useState("My Task");
  const [description, setDescription] = useState("");
  const [isEditingDesc, setIsEditingDesc] = useState(false);

  const [comments, setComments] = useState([]);
  const [comment, setComment] = useState("");

  const handleAddComment = () => {
    if (comment.trim() === "") return;
    setComments([...comments, comment]);
    setComment("");
  };

  const handleDescSave = () => {
    setIsEditingDesc(false);
  };

  return (

    <div className="fixed top-0 left-0 w-screen h-screen bg-gray-600 opacity-95 flex justify-center items-center z-10">

      <div className="w-full max-w-7xl mx-auto mt-6 p-6 bg-gray-950 text-white rounded-lg shadow space-y-6">
      {/* Title */}
      <div className="flex items-center justify-between">
          <h2
            className="text-2xl font-semibold inline-block"
          >
            {title}
          </h2>
        <button
          onClick={() => {closeTask(false)}}
          className="text-slate-400 hover:text-white transition-colors hover:cursor-pointer"
        >
          <X size={20} />
        </button>
      </div>

      <div className="flex flex-col md:flex-row gap-6">
        {/* Description */}
        <div className="flex-1">
          <label className="block text-lg mb-3 font-medium">Description</label>
            {isEditingDesc ? (
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Click to add a description..."
                autoFocus
                className="w-full px-3 py-2 rounded-md bg-gray-800 border border-gray-600 focus:outline-none focus:border-blue-500 resize-none min-h-32"
              />
            ) : (
              <div
                onClick={() => setIsEditingDesc(true)}
                className="w-full px-3 py-2 rounded-md bg-gray-800 border border-gray-600 text-gray-400 cursor-text min-h-32 flex items-start"
              >
                {description || "Click to add a description..."}
              </div>
            )}

            <button
              onClick={handleDescSave} 
              className="px-4 py-2 rounded-md bg-blue-600 hover:bg-blue-700 transition text-white text-sm mt-4 hover:cursor-pointer"
            >
              Save
            </button>
        </div>

        {/* Comments */}
        <div className="flex-1">
          <h4 className="text-lg mb-2">Comments</h4>
          <div className="space-y-2 mb-3">
            {comments.map((c, i) => (
              <p
                key={i}
                className="px-3 py-2 bg-gray-800 rounded-md text-sm border border-gray-700"
              >
                {c}
              </p>
            ))}
          </div>
          <div className="flex items-center gap-2">
            <input
              type="text"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              placeholder="Write a comment..."
              className="flex-1 px-3 py-2 rounded-md bg-gray-800 border border-gray-600 focus:outline-none focus:border-blue-500"
            />
            <button
              onClick={handleAddComment}
              className="px-4 py-2 rounded-md bg-blue-600 hover:bg-blue-700 transition text-white text-sm"
            >
              Add
            </button>
          </div>
        </div>
      </div>
    </div>

    </div>


  );
}
