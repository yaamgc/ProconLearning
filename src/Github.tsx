import {
  Link,
} from "react-router";
import Quiz from "./quiz";
import { useState } from "react";


export default function Github() {
  const quizes = [
    {
      question: "プッシュについての説明は？",
      option1: "ローカルリポジトリの変更をローカルリポジトリに記録する操作",
      option2: "ローカルリポジトリの変更をリモートリポジトリに記録する操作",
      option3: "リモートリポジトリの最新状態をローカルリポジトリに落とし込む操作",
      answer: 2,
    },
    {
      question: "プルリクは何をしても大丈夫かチェックする仕組み？",
      option1: "プル",
      option2: "コミット",
      option3: "マージ",
      answer: 3,
    }

  ];
  const [test, setTest] = useState(false);
  return (
    <div className="static w-[85%] max-w-180 m-auto bg-white p-2 rounded-xl shadow-xs mb-10">
      <title>PROGYM | GitHubの基礎を学ぼう</title>

      <div className="bg-green-400 rounded-xl p-2 m-2 shadow-xs text-center">
        <h1 className="text-3xl font-bold text-white m-2">GitHubの基礎を学ぼう</h1>
      </div>
      <div className="flex">
        <h1 className="bg-green-100 ml-8 m-5 w-20 rounded-xl pb-1 text-center text-green-500 font-bold text-2xl">Day1</h1>
        <h1 className="mt-6 text-xl">GitHubの概要、基本操作を理解する</h1>
      </div>
      <Link to='/github/1'>
        <div className="border-green-400 border-3 rounded-xl p-2 m-2 shadow-xs w-[85%] m-auto mb-5">
          <h1 className="text-3xl ml-5 m-1 text-[25px] font-bold text-green-500">1.はじめに</h1>
          <p className="ml-5 m-1">講座概要とGit,GitHubについて軽く説明します。</p>
        </div>
      </Link >
      <Link to='/github/2'>
        <div className="border-green-400 border-3 rounded-xl p-2 m-2 shadow-xs w-[85%] m-auto mb-5">
          <h1 className="text-3xl ml-5 m-1 text-[25px] font-bold text-green-500">2.Github導入＆基本操作①</h1>
          <p className="ml-5 m-1">GitHub Desktopの導入と、リポジトリ、クローン、コミット、プッシュ、プルについて学びます。</p>
        </div>
      </Link>
      <Link to='/github/3'>
        <div className="border-green-400 border-3 rounded-xl p-2 m-2 shadow-xs w-[85%] m-auto mb-5">
          <h1 className="text-3xl ml-5 m-1 text-[25px] font-bold text-green-500">3.基本操作②</h1>
          <p className="ml-5 m-1">ブランチ、マージ、プルリクについて学習します。</p>
        </div>
      </Link>
        <div className="bg-gray-300 rounded-xl p-2 m-2 shadow-xs w-[40%] m-auto mb-5">
          <h1 className="font-bold mt-1 text-white text-[25px] text-center">完成品を共有＆見る</h1>
        </div>
      {
        test ?
        <>
        <button className="block mx-auto bg-red-500 p-2 w-[30%] rounded-xl mb-5" onClick={() => setTest(!test)}>
          <h1 className="font-bold text-white">確認テストをしまう</h1>
        </button>
        <div className="absolute bottom-15 left-1/2 -translate-x-1/2">
          <Quiz quizes={quizes} />
        </div>
        </>
        :
        <button className="block mx-auto bg-red-500 p-2 w-[30%] rounded-xl mb-5" onClick={() => setTest(!test)}>
          <h1 className="font-bold text-white">確認テストをみる</h1>
        </button>
      }
    </div>
  )
}