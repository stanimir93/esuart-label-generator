import {useState} from 'react'
import './App.css'
import {Lang, Scent} from "./data/types.ts";

function App() {
    const [language, setLanguage] = useState<Lang>(Lang.en)
    const [scent, setScent] = useState<Scent>(Scent.lavender)

    const [option1, setOption1] = useState<Scent>()
    const [option2, setOption2] = useState<Scent>()
    const [option3, setOption3] = useState<Scent>()
    const [option4, setOption4] = useState<Scent>()
    const [option5, setOption5] = useState<Scent>()
    const [option6, setOption6] = useState<Scent>()

    return (
        <>

        </>
    )
}

export default App
