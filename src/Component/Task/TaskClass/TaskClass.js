import { v4 as uuidv4 } from 'uuid';
export class Tasks{
    constructor(name,description){
        this.id = uuidv4()
        this.name = name
        this.description = description
        this.status = false
    }
    changeName(name){
        this.name = name
    }
    changeDescription(description){
        this.description = description
    }
    changeStatus(){
        const prevStatus = this.status
        this.status = !prevStatus
    }
}