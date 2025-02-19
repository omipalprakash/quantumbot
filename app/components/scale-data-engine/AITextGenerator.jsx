"use client"
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";


export default function AITextGenerator() {
    const [question, setQuestion] = useState("");
    const [textComplete, setTextComplete] = useState(false);
    const [phase, setPhase] = useState("typing");
    const fullQuestion = "Why is human feedback necessary for accurate llm responses?";
    const responses = [
        "LLMs are trained by garden gnomes, who are known to lie",
        "LLMs are not always truthful or aligned with human preferences",
        "Humans enjoy giving opinions. It makes them feel important",
    ];

    useEffect(() => {
        let i = 0;
        const interval = setInterval(() => {
            setQuestion(fullQuestion.slice(0, i));
            i++;
            if (i > fullQuestion.length) {
                clearInterval(interval);
                setTextComplete(true);
                setPhase("showResponses");
            }
        }, 50);
        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        if (textComplete) {
            const cycleLoop = setInterval(() => {
                setPhase("showResponses");
                setTimeout(() => {
                    setPhase("hideResponses");
                    setTimeout(() => {
                        setPhase("showSingle");
                        setTimeout(() => {
                            setPhase("hideSingle");
                            setTimeout(() => {
                                setQuestion("");
                                setTextComplete(false);
                                setPhase("typing");
                                let i = 0;
                                const interval = setInterval(() => {
                                    setQuestion(fullQuestion.slice(0, i));
                                    i++;
                                    if (i > fullQuestion.length) {
                                        clearInterval(interval);
                                        setTextComplete(true);
                                        setPhase("showResponses");
                                    }
                                }, 50);
                            }, 1000);
                        }, 1000);
                    }, 500);
                }, 1000);
            }, 5000);
            return () => clearInterval(cycleLoop);
        }
    }, [textComplete]);

    return (
        <div className="w-full">
            <div className="mt-4 p-4 rounded-lg flex items-center gap-2">
                <p className="flex px-1.5 md:pr-3 md:pl-[7px] md:py-[4.5px] w-fit py-[3px] space-x-1 sm:space-x-2 bg-white/5 border border-white border-opacity-[0.16] items-center rounded-[18px]">
                    <Image className="inline-block h-2 sm:w-[18px] w-2 sm:h-[18px] rounded-full mr-2" src="/assets/images/avtar.avif" width={18} height={18} alt="avtar" />
                    {question}</p>
            </div>
            <div className="mt-4 border-t border-gray-700 pt-4">
                <h3 className="text-center text-sm text-purple-400">Human Feedback Ranking</h3>
                <div className="mt-2 space-y-2 flex justify-center items-center flex-col">
                    {phase === "showResponses" && responses.map((response, index) => (
                        <motion.div
                            key={index}
                            initial={{ scale: 0, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0, opacity: 0 }}
                            transition={{ duration: 0.5 }}
                            className="flex px-1.5 md:pr-3 md:pl-[7px] md:py-[4.5px] w-fit py-[3px] space-x-1 sm:space-x-2 bg-white/5 border border-white border-opacity-[0.16] items-center rounded-[18px]"
                        >
                            {response}
                        </motion.div>
                    ))}
                    {phase === "showSingle" && (
                        <motion.div
                            initial={{ scale: 0, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0, opacity: 0 }}
                            transition={{ duration: 0.5 }}
                            className="flex px-1.5 md:pr-3 md:pl-[7px] md:py-[4.5px] w-fit py-[3px] space-x-1 sm:space-x-2 bg-white/5 border border-white border-opacity-[0.16] items-center rounded-[18px]"
                        >
                            {responses[1]}
                        </motion.div>
                    )}
                </div>
            </div>
        </div>
    );
}
