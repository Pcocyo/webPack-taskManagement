//Task class test

import { Tasks } from "./TaskClass"

describe('Task Class tests',()=>{
    //testing if TaskClass has 4 parameter called name description status and id
    test('Task class has 4 parameter called (name,description,status,id)',()=>{
        const newTask = new Tasks('name','description')

        expect(newTask.hasOwnProperty('name')).toBe(true)
        expect(newTask.hasOwnProperty('description')).toBe(true)
        expect(newTask.hasOwnProperty('status')).toBe(true)
        expect(newTask.hasOwnProperty('id')).toBe(true)
    })
    // test if Tasks has changename() function 
    test('Tasks class has a method called changeName()',()=>{
        expect(Tasks.prototype.changeName).toBeDefined();
    })
    //test the Tasks.changeName()
    test('if changeName() is used, it will change the name parameter',()=>{
        const newTask = new Tasks('name','description')
        const nameChange = 'name2'
        newTask.changeName(nameChange)
        expect(newTask.name).toBe(nameChange)        
    })
    //test if Tasks has changeDescription() function
    test('Tasks class has a method called changeDescription()',()=>{
        expect(Tasks.prototype.changeDescription).toBeDefined();
    })
    //test the Tasks.changeDescription()
    test('if changeDescription() is used, it will change the description parameter',()=>{
        const newTask = new Tasks('name','description')
        const descriptionChange = 'description2'
        newTask.changeDescription(descriptionChange)
        expect(newTask.description).toBe(descriptionChange)
    })
    //test if Tasks has changeStatus() function
    test('Tasks class has a method called changeStatus()',()=>{
        expect(Tasks.prototype.changeStatus).toBeDefined()
    })
    //test Tasks.changeStatus
    test('if Tasks.changeStatus is used, Tasks.status changed',()=>{
        const newTasks = new Tasks('name','description')
        const prevStatus = Tasks.status
        newTasks.changeStatus()
        expect(newTasks.status).not.toBe(prevStatus)
    })
})