import { useState } from 'react'

const QuestionCard = ({ question, answerHandler }) => {
  const { title, answers, colors, helper } = question
  const { correctAnswer, nextQuestion } = answerHandler

  const [buttonClickable, setButtonClickable] = useState(true)
  const [showHint, setShowHint] = useState(false)

  const checkAnswer = (event) => {
    setButtonClickable(false)
    const correct = answers[event.target.value]?.correct
    event.target.innerHTML = correct ? 'Riktig!' : 'Feil!'

    if (correct) {
      setTimeout(() => {
        setButtonClickable(true)
        correctAnswer()
      }, 1500)
    } else setShowHint(true)
  }

  const nextQuiestionClick = () => {
    setShowHint(false)
    setButtonClickable(true)
    nextQuestion()
  }

  return (
    <>
      <section className="wrapper">
        <h1 className="header-xl text-center">{title}</h1>
      </section>
      <section className="wrapper grid grid-cols-2 justify-items-stretch gap-4">
        {answers.map((answer, i) => (
          <button
            type="button"
            key={i}
            value={i}
            onClick={buttonClickable ? checkAnswer : null}
            className={`answer ${colors[i]}`}
          >
            {answer.answere}
          </button>
        ))}
      </section>
      {showHint && (
        <section className="wrapper col bg-blue-100 animate-fade">
          <h1 className="header">Hint:</h1>
          <p className="font-mono">{helper}</p>
          <button
            type="button"
            className="btn-blue w-1/3 mx-auto"
            onClick={nextQuiestionClick}
          >
            Neste
          </button>
        </section>
      )}
    </>
  )
}

export default QuestionCard
