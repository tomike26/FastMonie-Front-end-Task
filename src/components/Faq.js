"use client"

import { useState } from 'react';
import { Plus, Check } from 'lucide-react';

export default function QASection() {
    const [expandedQuestion, setExpandedQuestion] = useState(null);

    const questions = [
        {
            id: 1,
            question: "THINK AHEAD AND BOOST YOUR BUSINESS?",
            answer: "There are many variations of passages the majority have suffered alteration in some form, injected humour, or randomised words believable."
        },
        {
            id: 2,
            question: "HOW CONSULTANCY EXPERTS WORK?",
            answer: "Our consultancy experts analyze your business needs, develop tailored strategies, and guide implementation to achieve measurable results."
        },
        {
            id: 3,
            question: "WHAT IS THE BEST ADVICE FOR GROWTH?",
            answer: "Focus on sustainable strategies, invest in innovation, and build strong customer relationships while maintaining operational excellence."
        },
        {
            id: 4,
            question: "HOW TO IMPROVE YOUR BUSINESS?",
            answer: "Streamline operations, invest in employee development, embrace digital transformation, and continuously refine your business model based on market feedback."
        }
    ];

    const checklistItems = [
        "Nectetur cing elit.",
        "Suspe ndisse suscipit sagittis leo.",
        "Entum estibulum dignissim posuere.",
        "If you are going to use a passage.",
        "If you are going to use a passage test data."
    ];

    const toggleQuestion = (id) => {
        if (expandedQuestion === id) {
            setExpandedQuestion(null);
        } else {
            setExpandedQuestion(id);
        }
    };

    return (
        <section className="bg-white text-gray-900 py-16 px-6">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-center text-3xl font-bold mb-2">QUESTION ANSWERS</h2>
                <p className="text-center text-gray-500 mb-12">We help our clients renew their business</p>

                <div className="flex flex-col lg:flex-row gap-12">
                    <div className="lg:w-2/3 space-y-6 ">
                        {questions.map((item) => (
                            <div key={item.id} className="border bg-[#F2F4F8] border-gray-200 rounded-md overflow-hidden">
                                <div
                                    className="flex justify-between items-center p-6 cursor-pointer"
                                    onClick={() => toggleQuestion(item.id)}
                                >
                                    <div className="flex items-center gap-8">
                                        <span className="text-blue-600 font-medium">{item.id}.</span>
                                        <h3 className="font-medium text-sm">{item.question}</h3>
                                    </div>
                                    <Plus
                                        size={20}
                                        className={`text-blue-600 transition-transform ${expandedQuestion === item.id ? 'rotate-45' : ''}`}
                                    />
                                </div>
                                {expandedQuestion === item.id && (
                                    <div className="px-8 py-4 bg-white">
                                        <p className="text-gray-600 text-sm">{item.answer}</p>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>

                    <div className="hidden lg:block lg:w-5/12 mt-40">
                        <div className="flex flex-col lg:flex-row gap-12">
                            <div className="lg:w-8/12 space-y-3">
                                {checklistItems.map((item, index) => (
                                    <div key={index} className="flex items-start gap-2">
                                        <div className="mt-1 text-blue-500">
                                            <Check size={16} />
                                        </div>
                                        <p className="text-sm text-gray-600">{item}</p>
                                    </div>
                                ))}
                            </div>

                            <div className="lg:w-7/12">
                                <div className="bg-blue-500 text-white p-12  text-center h-full flex flex-col justify-center">
                                    <div className="text-5xl font-bold">30</div>
                                    <div className="text-sm mt-1">Years of Experience</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
