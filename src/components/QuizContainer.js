import { useMemo, useState } from 'react'

import QuestionCard from './QuestionCard'
import QuizStatus from './QuizStatus'
import Results from './Results'

const QuizContainer = ({ questions, startNewQuiz }) => {
  const [currentQuestionId, setCurrentQuestionId] = useState(0)
  const [correctAnswers, setCorrectAnswers] = useState(0)
  const [quizComplete, setQuizComplete] = useState(false)

  const totalQuestions = questions.length

  const questionInfo = (id) => questions[id]
  const { title, answers, helper } = questionInfo(currentQuestionId)

  const nextQuestion = () => {
    if (currentQuestionId === totalQuestions - 1) setQuizComplete(true)
    else setCurrentQuestionId(currentQuestionId + 1)
  }

  const correctAnswer = () => {
    setCorrectAnswers(correctAnswers + 1)
    nextQuestion()
  }

  const question = useMemo(() => {
    const colors = ['red', 'blue', 'green', 'yellow', 'purple', 'orange']
    return {
      title,
      helper: helper.text,
      answers: answers.sort(() => 0.5 - Math.random()),
      colors: colors.sort(() => 0.5 - Math.random()),
    }
  }, [title, answers, helper])

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
      <QuestionCard
        question={question}
        answerHandler={{ correctAnswer, nextQuestion }}
      />
    </>
  )
}

export default QuizContainer
