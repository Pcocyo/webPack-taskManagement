import React,{useState} from 'react'
import {Box,Grid,GridItem,Text,Checkbox,Input,Button} from '@chakra-ui/react'

import {Tasks} from '../../../TaskClass/TaskClass'
import {TasksGroup} from '../../../TaskGroup/TasksGroup'
import { save,get} from '../localStorage'


const DisplayTask = (props) => {
    console.log(props.taskGroupState.tasksGroup)
    const [taskName,setTaskName] = useState('')
    const [taskDescription,setTaskDescription] = useState('')

    function handleAddTask(){
        const newTask = new Tasks(taskName,taskDescription)
        //save(props.taskGroupState.addTask(newTask))
        setTaskName('')
        setTaskDescription('')
        const newTaskGroup = new TasksGroup(props.taskGroupState.tasksGroup)
        newTaskGroup.addTask(newTask)
        save(newTaskGroup)
        props.setTaskGroupState(get())
    }
        
    function displayTask(taskArray){
        const tasks = taskArray.map((ele)=>{
            function handleStatusClick(){
                const taskGroup = new TasksGroup(taskArray)
                taskGroup.deleteTask(ele)
                console.log(taskGroup)
                save(taskGroup)
                props.setTaskGroupState(get())
            }
            return(
                <GridItem minH='100px' minW='200px' bgColor='white' key = {ele.id} borderRadius='18px 18px 18px 18px' border='2px solid #95a5a6'>
                    <Box display='flex'w="100%" borderBottom='solid black 1px' justifyContent='space-between'>
                        <Text as='b'fontSize='3xl' ml='2px' overflow='auto'>
                        {ele.name}
                        </Text>
                        {
                            ele.status?<Checkbox defaultChecked onChange={()=>{handleTrueStatusClick()}}>status</Checkbox>:
                            <Checkbox onChange={()=>{handleStatusClick()}}>status</Checkbox>
                        }
                        
                    </Box>
                    
                    <Text fontSize='md' ml='8px'>
                        {ele.description}
                    </Text>
                    
                </GridItem>
            )
        })
        return tasks
    }
    return (
        <Box display='flex' flexDir='column' alignItems='center'>
        
        <Grid templateColumns='repeat(5, 2fr)' gap={6}>
            {displayTask(props.taskGroupState.tasksGroup)}
        </Grid>
        <Box borderRadius='18px 18px 18px 18px' display='flex' flexDir='column' mt='20px' w='50%' alignItems='center'>
            <Input border='2px solid #95a5a6' variant='filled'bgColor='white'mb='10px'value={taskName} placeholder='Task name' onChange={(e)=>{setTaskName(e.target.value)}}></Input>
            <Input border='2px solid #95a5a6' variant='filled'bgColor='white' mb='10px'value={taskDescription} placeholder='Task description'onChange={(e)=>{setTaskDescription(e.target.value)}}></Input>
            <Button w='50%' variant='outline' colorScheme='blue'onClick={()=>{handleAddTask()}}>Add Task</Button>
        
        </Box>
    </Box>
        
    )
}

export default DisplayTask