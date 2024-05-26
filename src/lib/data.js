export const quiz = {
  totalQuestions: 3,
  questions: [
    {
      id: 1,
      question: "What would you like to do?",
      answers: [
        "Build a new product",
        "Update an existing product",
        "Hire a freelance developer",
        "Other",
      ],
    },
    {
      id: 2,
      question: "What is your budget for this project?",
      answers: [
        "Less than ₹4,00,000",
        "₹4,00,000 - ₹8,00,000",
        "₹8,00,000 - ₹16,00,000",
        "More than ₹16,00,000",
        "Not sure yet",
      ],
    },
    {
      id: 3,
      question: "How many employees does your organization have?",
      answers: ["1-10", "11-50", "51-200", "201-500", "More than 500"],
    },
    {
      id: 4,
      type: "GetInTouch",
      question: "Please provide your contact information.",
      answers: [],
    },
  ],
};
