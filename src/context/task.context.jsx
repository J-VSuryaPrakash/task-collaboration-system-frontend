import { useContext, createContext, useState } from "react";

const TaskContext = createContext({
    openTask: false,
    setOpenTask: () => {},
    selectedTaskId: null,
    setSelectedTaskId: () => {}
})


export function TaskContextProvider({children}){

    const [openTask,setOpenTask] = useState(false)
    const [selectedTaskId,setSelectedTaskId] = useState(null)

    return(
        <TaskContext.Provider value={{openTask,setOpenTask,selectedTaskId,setSelectedTaskId}}>
            {children}
        </TaskContext.Provider>
    )

}

export const useTask = () => {
    return useContext(TaskContext);
}