import { Tasks } from "../TaskClass/TaskClass"
export class TasksGroup{
    constructor(taskList=[]){
        this.tasksGroup = taskList
    }
    addTask(TasksClass){
        try{
            if(!(TasksClass instanceof Tasks)){
                throw new Error('invalid parameter for addTask, addTask parameter must be Tasks Class')
            }
            this.tasksGroup.push(TasksClass)
        }catch(err){
            console.log(err.message)
        }
    }
    deleteTask(TasksClass){
        try{
            this.tasksGroup = this.tasksGroup.filter(task => task.id !== TasksClass.id)
        }catch(err){
            console.log(err.message)
        }
    }
    
}