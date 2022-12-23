import { Configuration, OpenAIApi } from "openai";

const configuartion = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
})

const openai = new OpenAIApi(configuartion)

const basePromptPrefix = "Write me a love letter to my "
const generateAction = async (req, res) => {

  const baseCompletion = await openai.createCompletion({
    model: 'text-davinci-003',
    prompt: `${basePromptPrefix}${req.body.userInput}`,
    temperature: 0.7,
    max_tokens: 250,
  })

  const basePromptOutput = baseCompletion.data.choices.pop()

res.status(200).json({output: basePromptOutput})
}

export default generateAction