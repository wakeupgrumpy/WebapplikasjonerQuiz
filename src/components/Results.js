const Results = ({ result, startNewQuiz }) => {
  const { correctAnswers, totalQuestions } = result

  const calcPercent = (num, total) => Math.round((num / total) * 100, 2)
  const startNew = () => startNewQuiz()

  return (
    <section className="wrapper col w-1/2 m-auto animate-fade">
      <p className="text-center text-3xl font-semibold">
        {calcPercent(correctAnswers, totalQuestions)}% riktig,
      </p>
      <p className="text-center text-xl font-semibold">
        {correctAnswers} av {totalQuestions}
      </p>
      <button
        type="button"
        onClick={startNew}
        className="btn-blue w-1/2 mx-auto"
      >
        Start ny quiz
      </button>
    </section>
  )
}
export default Results
