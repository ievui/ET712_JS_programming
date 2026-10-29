
const topics = {
  colors: {
    title: "🌈 Let's Learn Colors!",
    description: "Tap a card to learn a color.",
    items: [
      { name: "Red", emoji: "🍎", detail: "Red like an apple!", color: "#fcbaba" },
      { name: "Blue", emoji: "🌊", detail: "Blue like the ocean!", color: "#dceeff" },
      { name: "Yellow", emoji: "☀️", detail: "Yellow like the sun!", color: "#fff3b0" },
      { name: "Green", emoji: "🐸", detail: "Green like a frog!", color: "#dff8d8" },
      { name: "Orange", emoji: "🍊", detail: "Orange like an orange!", color: "#ffe5c4" },
      { name: "Purple", emoji: "🍇", detail: "Purple like grapes!", color: "#eee0ff" },
      { name: "Pink", emoji: "🌸", detail: "Pink like a flower!", color: "#f7c4e3"},
      { name: "Brown", emoji: "🍄‍🟫", detail: "Brown like a mushroom!", color: "#cfae71"}
    ],
    questions: [
      { question: "Which fruit is red?", options: ["🍎 Apple", "🍌 Banana", "🍇 Grapes"], answer: "🍎 Apple" },
      { question: "What color is the sky on a clear day?", options: ["🟢 Green", "🔵 Blue", "🔴 Red"], answer: "🔵 Blue" },
      { question: "What color is a ripe banana?", options: ["🟣 Purple", "🟡 Yellow", "🔵 Blue"], answer: "🟡 Yellow" }
    ]
  },

  animals: {
    title: "🐶 Let's Meet Animals!",
    description: "Tap an animal to learn its name and sound.",
    items: [
      { name: "Dog", emoji: "🐶", detail: "A dog says woof!", color: "#fff0d9" },
      { name: "Cat", emoji: "🐱", detail: "A cat says meow!", color: "#ffe6ef" },
      { name: "Cow", emoji: "🐮", detail: "A cow says moo!", color: "#e9efff" },
      { name: "Duck", emoji: "🦆", detail: "A duck says quack!", color: "#fff3b0" },
      { name: "Lion", emoji: "🦁", detail: "A lion gives a big roar!", color: "#ffe3b8" },
      { name: "Monkey", emoji: "🐵", detail: "A monkey likes to climb!", color: "#f6e3cf" }
    ],
    questions: [
      { question: "Which animal says meow?", options: ["🐱 Cat", "🐮 Cow", "🦁 Lion"], answer: "🐱 Cat" },
      { question: "Which animal says moo?", options: ["🐶 Dog", "🐮 Cow", "🦆 Duck"], answer: "🐮 Cow" },
      { question: "Which animal is called the king of the jungle?", options: ["🐸 Frog", "🐱 Cat", "🦁 Lion"], answer: "🦁 Lion" }
    ]
  },

  numbers: {
    title: "🔢 Let's Count Together!",
    description: "Tap a number and count the objects.",
    items: [
      { name: "One", emoji: "🍓", detail: "1 strawberry!", color: "#ffe0e0" },
      { name: "Two", emoji: "🦋🦋", detail: "1, 2 butterflies!", color: "#e3efff" },
      { name: "Three", emoji: "⭐⭐⭐", detail: "1, 2, 3 stars!", color: "#fff3b0" },
      { name: "Four", emoji: "🐞🐞🐞🐞", detail: "Let's count to four!", color: "#e3f8df" },
      { name: "Five", emoji: "🌸🌸🌸🌸🌸", detail: "Five pretty flowers!", color: "#ffe6ef" },
      { name: "Ten", emoji: "🧣🧣🧣🧣🧣🧣🧣🧣🧣🧣", detail: "Great job! You found ten!", color: "#eee0ff" }
    ],
    questions: [
      { question: "How many fingers are on one hand?", options: ["3", "5", "10"], answer: "5" },
      { question: "What number comes after 2?", options: ["1", "3", "5"], answer: "3" },
      { question: "How many stars are here? ⭐⭐⭐", options: ["2", "3", "4"], answer: "3" }
    ]
  },

  shapes: {
    title: "🔷 Let's Discover Shapes!",
    description: "Tap a shape to learn its name.",
    items: [
      { name: "Circle", emoji: "🔴", detail: "A circle is round!", color: "#ffe0e0" },
      { name: "Square", emoji: "🟦", detail: "A square has four equal sides!", color: "#dceeff" },
      { name: "Triangle", emoji: "🔺", detail: "A triangle has three sides!", color: "#fff3b0" },
      { name: "Star", emoji: "⭐", detail: "A star has points!", color: "#eee0ff" },
      { name: "Heart", emoji: "❤️", detail: "A heart is a special shape!", color: "#ffe6ef" },
      { name: "Diamond", emoji: "💎", detail: "A diamond looks like a tilted square!", color: "#dff8f8" }
    ],
    questions: [
      { question: "Which shape is round?", options: ["🔴 Circle", "🔺 Triangle", "🟦 Square"], answer: "🔴 Circle" },
      { question: "How many sides does a triangle have?", options: ["2", "3", "4"], answer: "3" },
      { question: "Which shape has four equal sides?", options: ["⭐ Star", "🔴 Circle", "🟦 Square"], answer: "🟦 Square" }
    ]
  }
};

const navButtons = document.querySelectorAll(".nav-btn");
const cardsContainer = document.getElementById("learning-cards");
const topicTitle = document.getElementById("topic-title");
const topicDescription = document.getElementById("topic-description");
const quizQuestion = document.getElementById("quiz-question");
const quizOptions = document.getElementById("quiz-options");
const quizFeedback = document.getElementById("quiz-feedback");
const nextButton = document.getElementById("next-question");

let currentTopic = "colors";
let questionIndex = 0;
let answered = false;

// Read a word aloud when supported by the browser.
function speak(text) {
  if (!("speechSynthesis" in window)) return;

  window.speechSynthesis.cancel();

  const message = new SpeechSynthesisUtterance(text);
  message.lang = "en-US";
  message.rate = 0.8;
  window.speechSynthesis.speak(message);
}

// Display the learning cards for the selected topic.
function showTopic(topicName) {
  currentTopic = topicName;
  questionIndex = 0;

  const topic = topics[topicName];

  navButtons.forEach(button => {
    const selected = button.dataset.topic === topicName;
    button.classList.toggle("active", selected);
    button.setAttribute("aria-pressed", String(selected));
  });

  topicTitle.textContent = topic.title;
  topicDescription.textContent = topic.description;
  cardsContainer.replaceChildren();

  topic.items.forEach(item => {
    const card = document.createElement("button");
    card.className = "card";
    card.type = "button";
    card.style.backgroundColor = item.color;
    card.setAttribute("aria-label", `${item.name}. Tap to learn.`);

    const emoji = document.createElement("span");
    emoji.className = "card-emoji";
    emoji.textContent = item.emoji;

    const heading = document.createElement("h3");
    heading.textContent = item.name;

    const detail = document.createElement("p");
    detail.textContent = item.detail;

    const hint = document.createElement("span");
    hint.className = "hint";
    hint.textContent = "🔊 Tap to learn!";

    card.append(emoji, heading, detail, hint);

    card.addEventListener("click", () => {
      speak(`${item.name}! ${item.detail}`);
      hint.textContent = "🌟 Great exploring!";
    });

    cardsContainer.appendChild(card);
  });

  showQuestion();
}

// Display one quiz question.
function showQuestion() {
  const questions = topics[currentTopic].questions;
  const question = questions[questionIndex];

  answered = false;
  quizFeedback.textContent = "";
  quizQuestion.textContent = question.question;
  quizOptions.replaceChildren();

  question.options.forEach(option => {
    const button = document.createElement("button");
    button.className = "quiz-option";
    button.type = "button";
    button.textContent = option;

    button.addEventListener("click", () => {
      if (answered) return;
      answered = true;

      if (option === question.answer) {
        quizFeedback.textContent = "🎉 Hooray! That's correct! Great job!";
        speak("Hooray! That's correct! Great job!");
      } else {
        quizFeedback.textContent =
          `Good try! The answer is ${question.answer}. Let's keep learning!`;
        speak(`Good try! The answer is ${question.answer}.`);
      }

      // Prevent repeated answers.
      quizOptions.querySelectorAll("button").forEach(choice => {
        choice.disabled = true;
      });
    });

    quizOptions.appendChild(button);
  });
}

// Change the learning topic.
navButtons.forEach(button => {
  button.addEventListener("click", () => {
    showTopic(button.dataset.topic);
  });
});

// Move to the next quiz question.
nextButton.addEventListener("click", () => {
  const questions = topics[currentTopic].questions;
  questionIndex = (questionIndex + 1) % questions.length;
  showQuestion();
});

// Load the first topic when the page opens.
showTopic("colors");
