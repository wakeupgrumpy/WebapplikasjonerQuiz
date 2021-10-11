const QuizSetup = ({ questionData, quizHandlers }) => {
  const { startQuiz, setNumQuesions } = quizHandlers
  const { quizCount, numQuesions } = questionData

  const updateNum = (event) => setNumQuesions(event.target.value)
  const setSliderMax = () => setNumQuesions(quizCount)
  const startQuizHandler = () => startQuiz()

  return (
    <section className="wrapper col w-1/2 m-auto animate-fade">
      <h1 className="header">Hvor mange spørsmål?</h1>
      <div className="items-baseline">
        <input
          type="range"
          min="1"
          max={quizCount}
          value={numQuesions}
          onChange={updateNum}
          className="appearance-none w-full h-1 bg-gray-400 rounded outline-none slider-thumb"
        />
        <button type="button" className="btn-white" onClick={setSliderMax}>
          Alle
        </button>
      </div>
      <div className="items-baseline">
        <p>
          Start quiz med<span className="font-bold"> {numQuesions} </span>
          spørsmål
        </p>
        <button type="button" onClick={startQuizHandler} className="btn-blue">
          GO!
        </button>
      </div>
    </section>
  )
}
export default QuizSetup
