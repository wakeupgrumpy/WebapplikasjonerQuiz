import { useState } from 'react'

import QuizSetup from './components/QuizSetup'
import QuizContainer from './components/QuizContainer'

import storage from './storage/3-CSS.json'

const App = () => {
  const { questions } = storage.quiz
  const quizCount = questions.length

  const [numQuesions, setNumQuesions] = useState(1)
  const [quizQuestions, setQuizQuestions] = useState([])

  const getRandomQuestion = (arr) =>
    arr.splice(Math.floor(Math.random() * arr.length), 1)[0]

  const startQuiz = () => {
    const selectQuestionsArr = [...questions]
    for (let i = 0; i < numQuesions; i += 1) {
      setQuizQuestions((arr) => [...arr, getRandomQuestion(selectQuestionsArr)])
    }
  }

  const startNewQuiz = () => {
    setQuizQuestions([])
  }

  return (
    <main className="w-3/5 mb-auto mt-10 m-auto py-6 flex flex-col space-y-6">
      {quizQuestions.length === 0 ? (
        <QuizSetup
          props={{ startQuiz, quizCount, numQuesions, setNumQuesions }}
        />
      ) : (
        <QuizContainer questions={quizQuestions} startNewQuiz={startNewQuiz} />
      )}
    </main>
  )
}

export default App
