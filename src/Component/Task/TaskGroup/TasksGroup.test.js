import { TasksGroup } from "./TasksGroup";
import { Tasks } from "../TaskClass/TaskClass";

describe('TasksGroup class test suite',()=>{
    test('TasksGroup has a parameter called tasksGroup',()=>{
        const newTaskGroup = new TasksGroup()
        expect(newTaskGroup.hasOwnProperty('tasksGroup')).toBe(true)
    })
    test('expect TasksGroup.tasksGroup to be an array',()=>{
        const newTaskGroup = new TasksGroup()
        expect(newTaskGroup.tasksGroup).toBeInstanceOf(Array)
    })
    test('expect TasksGroup has a method called addTask()',()=>{
        expect(TasksGroup.prototype.addTask).toBeDefined()
    })
    test('expect TaskGroup.addTasks() append the TasksGroup.tasksGroup',()=>{
        const newTaskGroup = new TasksGroup()

        const newTasks = new Tasks('name','description')

        newTaskGroup.addTask(newTasks)
        expect(newTaskGroup.tasksGroup).toContain(newTasks)
    })
    test('expect TaskGroup has a method called deleteTask',()=>{
        expect(TasksGroup.prototype.deleteTask).toBeDefined()
    })
    test('expect TaskGroup.deleteTask() to delete a provided tasksClass in the TaskGroup.taskGroup',()=>{
        const newTaskGroup = new TasksGroup()
        const newTasks = new Tasks('nameTest','descTest')
        newTaskGroup.addTask(newTasks)
        newTaskGroup.deleteTask(newTasks)
        expect(newTaskGroup.tasksGroup).not.toContain(newTasks)
    })
})