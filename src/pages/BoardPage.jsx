import React, { use, useEffect, useState } from 'react';
import { Plus, MoreHorizontal, X } from 'lucide-react';
import { addTask, deleteTask, fetchTasks } from '../api/tasks.api';
import { useParams } from 'react-router-dom';
import TaskCard from '../components/TaskCard';
import { useTask } from '../context/task.context.jsx';

export default function BoardPage() {
  
  const {projectId, projectName} = useParams();

  const [todo, setTodo] = useState([]);
  const [inProgress, setInProgress] = useState([]);
  const [done, setDone] = useState([]);
  const [newCardInputs, setNewCardInputs] = useState({});
  const [loading, setLoading] = useState(true);
  const {openTask,setOpenTask,selectedTaskId,setSelectedTaskId} = useTask();

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
    setLoading(false);

  },[projectId])

  
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
    let status = '';
    if(listId === 1){status = 'Todo'}
    else if(listId === 2){status = 'In Progress'}
    else if(listId === 3){status = 'Done'}

    async function assignTask(){

      const res = await addTask(projectId, cardText, status)

      setLists(lists.map(list => 
        list.id === listId 
          ? { ...list, cards: [...list.cards, { id: res.id, title: res.title }] }
          : list
      ));
    }

    assignTask()
    .then(() => {
      setNewCardInputs({ ...newCardInputs, [listId]: '' });
    })   
    
  };

  const deleteCard = (listId, cardId) => {

    async function deleteCard(){
      const res = await deleteTask(cardId);
    }

    deleteCard()

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

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-900">
        <div className="flex flex-col items-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500 mb-3"></div>
          <p className="text-gray-300">Loading ...</p>
        </div>
      </div>
    );
  }


  return (

    <div className="min-h-screen bg-gradient-to-br from-slate-800 via-blue-700 to-slate-900 p-3 sm:p-4 md:p-6">
      {/* Header */}
      <div className="mb-4 md:mb-6">
        <p className="text-xl sm:text-2xl font-bold text-white px-2 sm:px-3 py-1 rounded">
          {projectName}
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-3 md:gap-4 md:overflow-x-auto pb-4 min-h-screen">
        {lists.map(list => (
          <div key={list.id} className="w-full md:flex-shrink-0 md:w-72 lg:w-80">
            <div className="bg-black backdrop-blur rounded-lg shadow-xl">
              {/* List Header */}
              <div className="flex items-center justify-between p-3 border-b border-slate-700">
                <input
                  type="text"
                  value={list.title}
                  onChange={(e) => updateListTitle(list.id, e.target.value)}
                  className="font-semibold text-sm sm:text-base text-white bg-transparent border-none outline-none focus:bg-white/10 px-2 py-1 rounded flex-1 hover:cursor-pointer hover:bg-white/10 transition-colors"
                />
                <button
                  onClick={() => deleteList(list.id)}
                  className="text-slate-400 hover:text-white transition-colors ml-2"
                >
                  <MoreHorizontal size={20} />
                </button>
              </div>

              {/* Cards */}
              <div className="max-h-64 sm:max-h-80 md:max-h-96 overflow-y-auto">
                {list.cards.map(card => (
                  <div
                    key={card.id}
                    
                    className="bg-slate-800 p-3 rounded shadow group cursor-pointer transition-colors mx-0.5 my-1 hover:border hover:border-white active:bg-slate-700"
                  >
                    <div className="flex items-start justify-between" >
                      <p className="text-white text-sm flex-1" onClick={ () => { setOpenTask(true); setSelectedTaskId(card.id)} }>{card.title}</p>
                      <button
                        onClick={() => deleteCard(list.id, card.id)}
                        className="text-slate-400 hover:text-white opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity ml-2 hover:cursor-pointer"
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
                      placeholder="Enter a title"
                      value={newCardInputs[list.id] || ''}
                      onChange={(e) => setNewCardInputs({ ...newCardInputs, [list.id]: e.target.value })}
                      className="w-full bg-slate-700 text-white px-3 py-2 rounded outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                      autoFocus
                    />
                    <div className="flex gap-2">
                      <button
                        onClick={() => addCard(list.id)}
                        className="bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white px-4 py-1.5 rounded text-sm font-medium transition-colors hover:cursor-pointer"
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
                    className="flex items-center gap-2 text-slate-300 hover:text-white active:bg-slate-600 w-full p-2 hover:bg-slate-700 rounded transition-colors hover:cursor-pointer"
                  >
                    <Plus size={18} />
                    <span className="text-sm">Add a card</span>
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}

        {openTask && <TaskCard/>}

      </div>
    </div>
  );
}