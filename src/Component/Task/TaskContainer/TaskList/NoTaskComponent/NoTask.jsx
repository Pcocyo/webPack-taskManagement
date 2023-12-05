import React,{useState} from 'react'
import { Box,Input,Button } from '@chakra-ui/react'
import {Tasks} from '../../../TaskClass/TaskClass'
import {TasksGroup} from '../../../TaskGroup/TasksGroup'
import { save,get} from '../localStorage'
const NoTask = (props) => {
    const [taskName,setTaskName] = useState('')
    const [taskDescription,setTaskDescription] = useState('')
    
    function handleTaskNameInputRoleChange(e){
        setTaskName(e.target.value)
    }
    function handleDescriptionInputRoleChange(e){
        setTaskDescription(e.target.value)
    }
    function createTaskButonOncllick(){
        const newTask = new Tasks(taskName,taskDescription)
        const newTasksGroup =  new TasksGroup()
        newTasksGroup.addTask(newTask)
        save(newTasksGroup)
        props.setTaskGroupState(get())
    }
    return(
        <Box display='flex' justifyContent='center' >
            <Box data-testid='NoTask'  borderRadius='18px 18px 18px 18px' display='flex' flexDir='column' mt='20px' w='50%'alignItems='center'>

                <Input bgColor='white' border='2px solid #95a5a6'placeholder='Task Name' role='taskNameInput' onChange={(e)=>{handleTaskNameInputRoleChange(e)}}/>
                <Input bgColor='white' border='2px solid #95a5a6'placeholder='Task Description' role ='taskDescriptionInput'onChange={(e)=>{handleDescriptionInputRoleChange(e)}}/>

                <Button w='50%' variant='outline' colorScheme='blue'role='createTaskButton' onClick={()=>{createTaskButonOncllick()}}>Create Task</Button>
            </Box>
        </Box>
        
    )
}

export default NoTask