import { useEffect, useState } from 'react'
import { getCategories, getQuestionCount, getQuestions } from '../storage/db'

const QuizSetup = ({ setQuestions }) => {
  const [categories, setCategories] = useState([])
  const [availableQuestions, setAvailableQuestions] = useState(1)
  const [numQuestions, setNumQuestions] = useState(0)

  const updateNum = (event) => setNumQuestions(event.target.value)
  const setSliderMax = () => setNumQuestions(availableQuestions)

  const startQuizHandler = () => {
    setQuestions(getQuestions(numQuestions, categories))
  }

  const handleSelectCategories = (event) => {
    let tempSelectedCategories = [...categories, event.target.id]
    if (categories.includes(event.target.id))
      tempSelectedCategories = categories.filter(
        (category) => category !== event.target.id
      )
    setCategories(tempSelectedCategories)
  }

  useEffect(() => {
    const count = getQuestionCount(categories)
    setAvailableQuestions(count)
    if (numQuestions > count) setNumQuestions(count)
  }, [categories, numQuestions])

  return (
    <>
      <section className="wrapper col w-1/2 m-auto animate-fade">
        <h1 className="header">Velg kategorier:</h1>
        <ul className="ul-col-2 w-100">
          {getCategories().map((cat, i) => (
            <li key={i} className="p-1">
              <input
                id={cat}
                name={cat}
                type="checkbox"
                onChange={handleSelectCategories}
                className="mr-2"
              />
              <label htmlFor={cat}>{cat}</label>
            </li>
          ))}
        </ul>
      </section>

      {categories.length > 0 && (
        <section className="wrapper col w-1/2 m-auto animate-fade">
          <h1 className="header">Hvor mange spørsmål?</h1>
          <div className="items-baseline">
            <input
              type="range"
              min="1"
              max={availableQuestions}
              value={numQuestions}
              onChange={updateNum}
              className="appearance-none w-full h-1 bg-gray-400 rounded outline-none slider-thumb"
            />
            <button type="button" className="btn-white" onClick={setSliderMax}>
              Alle
            </button>
          </div>
          <div className="items-baseline">
            <p>
              Start quiz med<span className="font-bold"> {numQuestions} </span>
              spørsmål
            </p>
            <button
              type="button"
              onClick={startQuizHandler}
              className="btn-blue disabled:opacity-50"
              disabled={numQuestions === 0}
            >
              GO!
            </button>
          </div>
        </section>
      )}
    </>
  )
}
export default QuizSetup
