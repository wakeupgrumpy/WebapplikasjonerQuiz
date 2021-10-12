import { useEffect, useState } from 'react'

import QuestionCard from './QuestionCard'
import QuizStatus from './QuizStatus'
import Results from './Results'

const QuizContainer = ({ questions, startNewQuiz }) => {
  const [currentQuestionId, setCurrentQuestionId] = useState(0)
  const [correctAnswers, setCorrectAnswers] = useState(0)
  const [quizComplete, setQuizComplete] = useState(false)
  const [question, setQuestion] = useState()

  const totalQuestions = questions.length

  const nextQuestion = () => {
    if (currentQuestionId === totalQuestions - 1) setQuizComplete(true)
    else setCurrentQuestionId(currentQuestionId + 1)
  }

  const correctAnswer = () => {
    setCorrectAnswers(correctAnswers + 1)
    nextQuestion()
  }

  useEffect(() => {
    const colors = ['red', 'blue', 'green', 'yellow', 'purple', 'orange']
    const { title, answers, helper } = questions[currentQuestionId]

    setQuestion({
      title,
      helper: helper?.text || 'Ingen hint til dette spørsmålet.',
      answers: answers.sort(() => 0.5 - Math.random()),
      colors: colors.sort(() => 0.5 - Math.random()),
    })
  }, [currentQuestionId, questions])

  return quizComplete ? (
    <Results
      result={{ correctAnswers, totalQuestions }}
      startNewQuiz={startNewQuiz}
    />
  ) : (
    <>
      <QuizStatus
        quizInfo={{ currentQuestionId, totalQuestions, correctAnswers }}
        startNewQuiz={startNewQuiz}
      />
      {question && (
        <QuestionCard
          question={question}
          answerHandler={{ correctAnswer, nextQuestion }}
        />
      )}
    </>
  )
}

export default QuizContainer
