'use client'

import { Minus, Plus } from "lucide-react"
import { useState } from "react"

const FAQAccordion = ({
    question, answer, showAnswer, onShowAnswer
}: {
    question: string,
    answer: string,
    showAnswer: boolean,
    onShowAnswer: () => void
}) => {
    return (
    <div className="border-2 border-black rounded-md px-6 py-3 bg-white">
        <div className="flex justify-between">
            <p className="font-bold">{question}</p>

            <div 
                className="w-6 h-6 bg-black text-gray-300 rounded-full"
                onClick={onShowAnswer}
            >
                {showAnswer ? (<Minus />) : (<Plus />)}
            </div>
        </div>

        {showAnswer && (
            <div className="mt-6">
                {answer}
            </div>
        )}
    </div>
  )
}

export default function FAQ () {
    const answer = "Zicket is a privacy-first event platform built on Aztec. It lets you discover and attend events anonymously, while keeping your personal data secure. You only share what you choose."
    const [showAnswer, setShowAnswer] = useState<number[]>([]);

    const handleShowAnswer = (number: number) => {
        if (showAnswer.includes(number)) {
            setShowAnswer((prev) => 
                prev.filter((item) => item !== number)
            );
        } else {
            setShowAnswer((prev) => [...prev, number]);
        }
    }
    return (
        <div className="px-2 md:px-30 py-6 md:py-16 bg-[#FEF7F1]">
            <div className="w-[60%] md:w-[30%] mx-auto my-4 md:my-10">
                <p className="text-center text-[35px] md:text-[60px] text-[#2C0A4A] font-bold">FAQs</p>
                <p className="text-center text-[#6C6C6C] text-[12px]">
                    Everything you need to know about using Zicket—how it works, 
                    what makes it private, and how you can join or host your next event.
                </p>
            </div>

            <div className="flex flex-col gap-4 mt-6 md:mt-0">
                <FAQAccordion 
                    question="What makes Zicket so unique ?"
                    answer={answer}
                    showAnswer={showAnswer.includes(0)}
                    onShowAnswer={() => handleShowAnswer(0)}
                />

                <FAQAccordion 
                    question="Do I need an account to get tickets?"
                    answer={answer}
                    showAnswer={showAnswer.includes(1)}
                    onShowAnswer={() => handleShowAnswer(1)}
                />

                <FAQAccordion 
                    question="Is my identity hidden when I attend events?"
                    answer={answer}
                    showAnswer={showAnswer.includes(2)}
                    onShowAnswer={() => handleShowAnswer(2)}
                />

                <FAQAccordion 
                    question="What kind of events are on Zicket?"
                    answer={answer}
                    showAnswer={showAnswer.includes(3)}
                    onShowAnswer={() => handleShowAnswer(3)}
                />


            </div>
        </div>
    )
}