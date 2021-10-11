import db from './all.json'

const getCategories = () => [...Object.keys(db)]

const getCategoryQuestionCount = (category) => db[category].questions.length
const getCategoryQuestions = (category) => db[category].questions

const getQuestionCount = (categoris = getCategories()) =>
  categoris.reduce(
    (total, category) => total + getCategoryQuestionCount(category),
    0
  )

const getRandomQuestion = (arr) =>
  arr.splice(Math.floor(Math.random() * arr.length), 1)[0]

const getQuestions = (numberOfQuestions, categoris) => {
  const questionsForQuiz = []
  const availableQuestions = categoris.reduce(
    (questions, category) => [...questions, ...getCategoryQuestions(category)],
    []
  )

  for (let i = 0; i < numberOfQuestions; i += 1) {
    questionsForQuiz.push(getRandomQuestion(availableQuestions))
  }

  return questionsForQuiz
}

export { getCategories, getQuestionCount, getQuestions }
