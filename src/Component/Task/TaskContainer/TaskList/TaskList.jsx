import React, { useState } from 'react'
import { save,get } from './localStorage'
import { Box, Button } from '@chakra-ui/react'
import NoTask from './NoTaskComponent/NoTask.jsx'
import DisplayTask from './DisplayTaskComponent/DisplayTask.jsx'
const TaskList = ({taskGroup = get()}) => {
    console.log(taskGroup)
  const [taskGroupState,setTaskGroupState] = useState(taskGroup)
  return (
    <Box>
        {taskGroup ?
        <DisplayTask taskGroupState= {taskGroupState} setTaskGroupState={setTaskGroupState}/>
        :
        <NoTask setTaskGroupState={setTaskGroupState}/>}
    </Box>
  )
}

export default TaskList