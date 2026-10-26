import { useState } from "react";

  type Quiz = {
    question: string;
    option1: string;
    option2: string;
    option3: string;
    answer: number;
  }
  type Quiz1Props = {
    quizes:Quiz[];
  };
  // const quizes: quiz[] =
  //   [
  //     {
  //       question: "HTMLで一番大きい見出しは？",
  //       option1: "h1",
  //       option2: "h6",
  //       option3: "p",
  //       answer: 2
  //     }, {
  //       question: "サイトの内容はどの要素に記述する？",
  //       option1: "body",
  //       option2: "head",
  //       option3: "leg",
  //       answer: 3
  //     },
  //   ];
export default function Quiz({ quizes }: Quiz1Props) {
  const [check, setCheck] = useState(false);
  const [answers, setAnswers] = useState<number[]>([]);
  return (
    <div className="bg-gray-50 rounded-xl p-4 shadow-xl text-center">
      <div className="text-left">
      {
        quizes.map((map, index) => (
          <>
            <h2 className="text-red-500 font-bold text-[25px]">Q{index + 1}.{map.question}</h2>
            <label className="flex m-1 text-[19px]">
              <input
                type="radio"
                name={`${index}`}
                value={1}
                onChange={(e) => {
                  const newAnswers = [...answers];
                  newAnswers[index] = Number(e.target.value);
                  setAnswers(newAnswers);
                }} />
              <p className="ml-2">{map.option1}</p>
            </label>
            <label className="flex m-1 text-[19px]">
              <input
                type="radio"
                name={`${index}`}
                value={2}
                onChange={(e) => {
                  const newAnswers = [...answers];
                  newAnswers[index] = Number(e.target.value);
                  setAnswers(newAnswers);
                }} />        
                <p className="ml-2">{map.option2}</p>
            </label>
            <label className="flex m-1 text-[19px]">
              <input
                type="radio"
                name={`${index}`}
                value={3}
                onChange={(e) => {
                  const newAnswers = [...answers];
                  newAnswers[index] = Number(e.target.value);
                  setAnswers(newAnswers);
                }} />        
                <p className="ml-2">{map.option3}</p>
            </label>
            {
              check && (
                <>
                  {answers[index] === map.answer
                    ? <p className="text-[25px] text-red-500 font-bold">正解！</p>
                    : <p className="text-[25px] text-blue-500 font-bold">不正解...</p>
                  }
              <p className="mb-4">(答え：{map.answer})</p>

                </>
              )
            }
          </>
        ))
      }
      </div>

      <button className="bg-red-500 text-white p-2 rounded-xl" onClick={() => { setCheck(!check) }}>
        {
          check
          ? <p>答えを隠す</p>
          : <p>答え合わせ</p>
        }
      </button>
    </div>
  )
}