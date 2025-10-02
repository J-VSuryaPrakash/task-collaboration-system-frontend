import { useState } from "react";

export default function TaskCard() {
  const [title, setTitle] = useState("My Task");
  const [isEditingTitle, setIsEditingTitle] = useState(false);

  const [description, setDescription] = useState("Click to add description...");
  const [isEditingDesc, setIsEditingDesc] = useState(false);

  const [comments, setComments] = useState([]);
  const [comment, setComment] = useState("");

  const handleAddComment = () => {
    if (comment.trim() === "") return;
    setComments([...comments, comment]);
    setComment("");
  };

  const handleTitleSave = () => {
    setIsEditingTitle(false);
    if (title.trim() === "") {
      setTitle("Untitled Task");
    }
  };

  const handleDescSave = () => {
    setIsEditingDesc(false);
    if (description.trim() === "") {
      setDescription("Click to add description...");
    }
  };

  return (
    <div className="w-full max-w-7xl mx-auto mt-6 p-6 bg-gray-900 text-white rounded-lg shadow space-y-6">
      {/* Title */}
      <div>
        {isEditingTitle ? (
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            onBlur={handleTitleSave}
            onKeyDown={(e) => e.key === "Enter" && handleTitleSave()}
            autoFocus
            className="w-full text-2xl font-semibold bg-gray-800 border border-gray-600 px-3 py-2 rounded-md focus:outline-none focus:border-blue-500"
          />
        ) : (
          <h2
            className="text-2xl font-semibold cursor-pointer hover:border-b border-gray-500 inline-block"
            onClick={() => setIsEditingTitle(true)}
          >
            {title}
          </h2>
        )}
      </div>

      <div className="flex flex-col md:flex-row gap-6">
        {/* Description */}
        <div className="flex-1">
          <label className="block text-lg mb-3 font-medium">Description</label>
          {isEditingDesc ? (
            <textarea               
              type="text"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              onBlur={handleDescSave}
              onKeyDown={(e) => e.key === "Enter" && handleDescSave()}
              autoFocus
              className="w-full px-3 py-2 rounded-md bg-gray-800 border border-gray-600 focus:outline-none focus:border-blue-500" />
            ) : (
            <p
              onClick={() => setIsEditingDesc(true)}
              className="px-3 py-2 rounded-md bg-gray-800 border border-gray-600 text-gray-300 cursor-pointer hover:border-blue-500"
            >
              {description}
            </p>
          )}
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
  );
}
