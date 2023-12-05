import React,{useState} from 'react'

import { Tasks } from './TaskClass/TaskClass'
import { TasksGroup } from './TaskGroup/TasksGroup'
import { Box,Text} from '@chakra-ui/react'
import TaskContainer from './TaskContainer/TaskContainer.jsx'


const TaskComponent = () => {
    return (
        <Box
        h='100vh' 
        color='#2c3e50' 
        bgColor='#ecf0f1'
        display='flex'
        flexDir='column'
        alignItems='center'
        >
            <Text fontSize='5xl' mb='20px'>Task manager</Text>
            <TaskContainer/>
        </Box>
    )
}

export default TaskComponent