import { Box } from '@chakra-ui/react'
import React from 'react'
import TaskList from './TaskList/TaskList.jsx'
const TaskContainer = () => {
  return (
    <Box 
    data-testid="TaskContainer"
    w='90%'h='100%'>
        <TaskList />
    </Box>
  )
}

export default TaskContainer