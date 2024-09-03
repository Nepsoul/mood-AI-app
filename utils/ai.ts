// import { OpenAI } from "langchain/llms/openai";
import { ChatOpenAI } from "@langchain/openai"; //doc changed

export const analyze = async (prompt) => {
  const model = new ChatOpenAI({ temperature: 0, modelName: "gpt-3.5-turbo" });
  const result = await model.invoke(prompt);
  console.log(result, "use of ai"); //it gives prompt
  // console.log(prompt, "from promt ai");//it gives whole string
};
