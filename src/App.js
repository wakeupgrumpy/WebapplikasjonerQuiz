import { useState } from 'react'

import QuizSetup from './components/QuizSetup'
import QuizContainer from './components/QuizContainer'

const App = () => {
  const [questions, setQuestions] = useState([])

  const startNewQuiz = () => {
    setQuestions([])
  }

  return (
    <main className="w-3/5 mb-auto mt-10 m-auto py-6 flex flex-col space-y-6">
      {questions.length === 0 ? (
        <QuizSetup setQuestions={setQuestions} />
      ) : (
        <QuizContainer questions={questions} startNewQuiz={startNewQuiz} />
      )}
    </main>
  )
}

export default App
