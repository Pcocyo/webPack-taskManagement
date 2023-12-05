// Import necessary dependencies
import React from 'react';
import { createRoot } from 'react-dom/client';
import TaskComponent from './Component/Task/TaskComponent.jsx'
import { ChakraProvider } from '@chakra-ui/react'
import './Index.css'

const Index = () => {
  return (
    <ChakraProvider>
        <TaskComponent/>
    </ChakraProvider>
    
  )
}

// Use createRoot instead of ReactDOM.render
const root = createRoot(document.getElementById('root'));

// Render your app within the root
root.render(<Index/>)
