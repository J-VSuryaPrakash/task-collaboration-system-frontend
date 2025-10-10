import React, { use, useEffect, useState } from 'react';
import { Plus, MoreHorizontal, X } from 'lucide-react';
import { fetchTasks } from '../api/tasks.api';
import { useParams } from 'react-router-dom';
import TaskCard from '../components/TaskCard';

export default function BoardPage() {
  
  const {projectId, projectName} = useParams();

  const [todo, setTodo] = useState([]);
  const [inProgress, setInProgress] = useState([]);
  const [done, setDone] = useState([]);

  const [newCardInputs, setNewCardInputs] = useState({});
  const [openTask,setOpenTask] = useState(false)

  useEffect(() => {

    async function fetchAllTasks(projectId){

      const allTasks = await fetchTasks(projectId)

      const todoTasks = [];
      const inProgressTasks = [];
      const doneTasks = [];

      allTasks.data.forEach(task => {

        if(task.status === 'Todo'){
          todoTasks.push(task)
        }
        else if(task.status === 'In Progress'){
          inProgressTasks.push(task)
        }
        else{
          doneTasks.push(task)
        }

      });

      setTodo(todoTasks)
      setInProgress(inProgressTasks)
      setDone(doneTasks)
    }

    fetchAllTasks(projectId)

  },[projectId])

  
    console.log("Todo Tasks:", todo);
    console.log("In Progress Tasks:", inProgress);
    console.log("Done Tasks:", done);

    const [lists, setLists] = useState([
      { id: 1, title: 'To Do', cards: todo },
      { id: 2, title: 'In Progress', cards: inProgress },
      { id: 3, title: 'Done', cards: done }
    ]);

    useEffect(() => {
      setLists([
        { id: 1, title: 'To Do', cards: todo },
        { id: 2, title: 'In Progress', cards: inProgress },
        { id: 3, title: 'Done', cards: done }
      ]);
    }, [todo, inProgress, done]);

  const addCard = (listId) => {
    const cardText = newCardInputs[listId];
    if (!cardText || !cardText.trim()) return;

    setLists(lists.map(list => 
      list.id === listId 
        ? { ...list, cards: [...list.cards, { id: Date.now(), text: cardText }] }
        : list
    ));
    setNewCardInputs({ ...newCardInputs, [listId]: '' });
  };

  const deleteCard = (listId, cardId) => {
    setLists(lists.map(list =>
      list.id === listId
        ? { ...list, cards: list.cards.filter(card => card.id !== cardId) }
        : list
    ));
  };

  const updateListTitle = (listId, newTitle) => {
    setLists(lists.map(list =>
      list.id === listId ? { ...list, title: newTitle } : list
    ));
  };

  return (

    <div className="min-h-screen bg-gradient-to-br from-slate-800 via-blue-700 to-slate-900 p-6">
      {/* Header */}
      <div className="mb-6">
        <p className="text-2xl font-bold text-white px-3 py-1 rounded">
          {projectName}
        </p>
      </div>

      {/* Board Lists */}
      <div className="flex gap-4 overflow-x-auto pb-4 min-h-screen">
        {lists.map(list => (
          <div key={list.id} className="flex-shrink-0 w-72">
            <div className="bg-black backdrop-blur rounded-lg shadow-xl ">
              {/* List Header */}
              <div className="flex items-center justify-between p-3 border-b border-slate-700">
                <input
                  type="text"
                  value={list.title}
                  onChange={(e) => updateListTitle(list.id, e.target.value)}
                  className="font-semibold text-white bg-transparent border-none outline-none focus:bg-white/10 px-2 py-1 rounded flex-1 hover:cursor-pointer hover:bg-white/10 transition-colors"
                />
                <button
                  onClick={() => deleteList(list.id)}
                  className="text-slate-400 hover:text-white transition-colors ml-2"
                >
                  <MoreHorizontal size={20} />
                </button>
              </div>

              {/* Cards */}
              <div className="max-h-96 overflow-y-auto">
                {list.cards.map(card => (
                  <div
                    key={card.id}
                    onClick={ () => {setOpenTask(true)} }
                    className="bg-slate-800 p-3 rounded shadow group cursor-pointer transition-colors mx-0.5 my-1 hover:border hover:border-white"
                  >
                    <div className="flex items-start justify-between">
                      <p className="text-white text-sm flex-1">{card.title}</p>
                      <button
                        onClick={() => deleteCard(list.id, card.id)}
                        className="text-slate-400 hover:text-white opacity-0 group-hover:opacity-100 transition-opacity ml-2"
                      >
                        <X size={16} />
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              {/* Add Card Input */}
              <div className="p-3 border-t border-slate-700">
                {newCardInputs[list.id] !== undefined ? (
                  <div className="space-y-2">
                    <input
                      type="text"
                      placeholder="Enter a title or paste a link"
                      value={newCardInputs[list.id] || ''}
                      onChange={(e) => setNewCardInputs({ ...newCardInputs, [list.id]: e.target.value })}
                      onKeyPress={(e) => e.key === 'Enter' && addCard(list.id)}
                      className="w-full bg-slate-700 text-white px-3 py-2 rounded outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                      autoFocus
                    />
                    <div className="flex gap-2">
                      <button
                        onClick={() => addCard(list.id)}
                        className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-1.5 rounded text-sm font-medium transition-colors hover:cursor-pointer"
                      >
                        Add card
                      </button>
                      <button
                        onClick={() => setNewCardInputs({ ...newCardInputs, [list.id]: undefined })}
                        className="text-slate-400 hover:text-white transition-colors hover:cursor-pointer"
                      >
                        <X size={20} />
                      </button>
                    </div>
                  </div>
                ) : (
                  <button
                    onClick={() => setNewCardInputs({ ...newCardInputs, [list.id]: '' })}
                    className="flex items-center gap-2 text-slate-300 hover:text-white w-full p-2 hover:bg-slate-700 rounded transition-colors hover:cursor-pointer"
                  >
                    <Plus size={18} />
                    <span className="text-sm">Add a card</span>
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}

        {openTask && <TaskCard closeTask = {setOpenTask}/>}

      </div>
    </div>
  );
}