const QuizStatus = ({ quizInfo, startNewQuiz }) => {
  const { currentQuestionId, totalQuestions, correctAnswers } = quizInfo
  const startNewQuizHandler = () => startNewQuiz()
  return (
    <section className="wrapper row-even text-gray-700 hover:text-gray-900">
      <p>
        Spørsmål <span className="font-bold">{currentQuestionId + 1}</span> av{' '}
        <span className="font-bold">{totalQuestions}</span>
      </p>
      <button className="btn-white" type="button" onClick={startNewQuizHandler}>
        Start ny quiz
      </button>
      <p>
        Riktige svar <span className="font-bold">{correctAnswers}</span>
      </p>
    </section>
  )
}

export default QuizStatus
