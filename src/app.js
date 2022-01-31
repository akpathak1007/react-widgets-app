import React from 'react';
import Accordion from './components/Accordion';
const items = [
    {
        title: 'What is React?',
        content:'React is an JavaScript fronted libraby.'
    },
    {
        title: 'Why we use React?',
        content:'React is quite famous among frontend developers.'
    },
    {
        title: 'How to use React?',
        content: 'React can be used by the using components.'
    }
]

const App = () => {
    return <Accordion items={items} />

};

export default App;