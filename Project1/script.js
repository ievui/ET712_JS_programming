
const topics = {
  colors: {
    title: "🌈 Let's Learn Colors!",
    description: "Tap a card to learn a color.",
    items: [
      { name: "Red", emoji: "🍎", detail: "Red like an apple!", color: "#ff7171" },
      { name: "Blue", emoji: "🌊", detail: "Blue like the ocean!", color: "#9fccf6" },
      { name: "Yellow", emoji: "☀️", detail: "Yellow like the sun!", color: "#fee86a" },
      { name: "Green", emoji: "🐸", detail: "Green like a frog!", color: "#aeff97" },
      { name: "Orange", emoji: "🍊", detail: "Orange like an orange!", color: "#ffbe69" },
      { name: "Purple", emoji: "🍇", detail: "Purple like grapes!", color: "#c5a4ee" },
      { name: "Pink", emoji: "🌸", detail: "Pink like a flower!", color: "#ffb7e2"},
      { name: "Brown", emoji: "🍄‍🟫", detail: "Brown like a mushroom!", color: "#845844"},
      { name: "Black", emoji: "🌃", detail: "Black like the night sky!", color: "#1d1d1d"},
      { name: "White", emoji: "☁️", detail: "White like the clouds up above!", color: "#d3edff"},
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
      { name: "Dog", emoji: "🐶", detail: "A dog says woof!", color: "#ffce85" },
      { name: "Cat", emoji: "🐱", detail: "A cat says meow!", color: "#d5ffa1" },
      { name: "Cow", emoji: "🐮", detail: "A cow says moo!", color: "#acc2ff" },
      { name: "Duck", emoji: "🦆", detail: "A duck says quack!", color: "#ffec82" },
      { name: "Lion", emoji: "🦁", detail: "The lion makes a big roar!", color: "#ffd18b" },
      { name: "Pig", emoji: "🐖", detail: "A pig says oink!", color: "#f8a6d7" },
      { name: "Mouse", emoji: "🐁", detail: "A mouse likes to squeak!", color: "#eee9e3" },
      { name: "Sheep", emoji: "🐑", detail: "The sheep says baaa!", color: "#d3d9de" },
      { name: "Elephant", emoji: "🐘", detail: "The elephant makes a trumpet sound!", color: "#b3b2b1" },
      { name: "Horse", emoji: "🐎", detail: "The horse says neigh!", color: "#fc8570" },
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
      { name: "One", emoji: "🍓", detail: "1 strawberry!", color: "#fc8080" },
      { name: "Two", emoji: "🦋🦋", detail: "2 butterflies!", color: "#6faaf7" },
      { name: "Three", emoji: "🔔🔔🔔", detail: "3 bells!", color: "#f7e479" },
      { name: "Four", emoji: "🐞🐞🐞🐞", detail: "4 ladybugs!", color: "#8aef76" },
      { name: "Five", emoji: "🌸🌸🌸🌸🌸", detail: "5 pretty flowers!", color: "#f89cbe" },
      { name: "Six", emoji: "🦓🦓🦓🦓🦓🦓", detail: "6 zebras!", color: "#ebfafb" },
      { name: "Seven", emoji: "🎁🎁🎁🎁🎁🎁🎁", detail: "7 presents", color: "#fee87a" },
      { name: "Eight", emoji: "🪁🪁🪁🪁🪁🪁🪁🪁", detail: "8 kites", color: "#7afefe" },
      { name: "Nine", emoji: "🎸🎸🎸🎸🎸🎸🎸🎸🎸", detail: "9 guitars", color: "#fe7a7a" },
      { name: "Ten", emoji: "🧣🧣🧣🧣🧣🧣🧣🧣🧣🧣", detail: "10 scarves!", color: "#f7a5c2" },
      
    ],
    questions: [
      { question: "How many fingers are on one hand?", options: ["3", "5", "10"], answer: "5" },
      { question: "What number comes after 2?", options: ["1", "3", "5"], answer: "3" },
      { question: "How many Bells are here? ⭐⭐⭐", options: ["2", "3", "4"], answer: "3" }
    ]
  },

  shapes: {
    title: "🔷 Let's Discover Shapes!",
    description: "Tap a shape to learn its name.",
    items: [
      { name: "Circle", emoji: "🔴", detail: "A circle is round!", color: "#ff9696" },
      { name: "Square", emoji: "🟦", detail: "A square has four equal sides!", color: "#7cbffe" },
      { name: "Diamond", emoji: "🔶", detail: "A diamond also has four sides!", color: "#fdc774" },
      { name: "Triangle", emoji: "🔺", detail: "A triangle has three sides!", color: "#f78eac" },
      { name: "Pentagon", emoji: "⬟", detail: "A pentagon has five sides!", color: "#d08cfe" },
      { name: "Star", emoji: "⭐", detail: "This star also has five points!", color: "#fdfe8c" },
      { name: "Hexagon", emoji: "⬣", detail: "A hexagon contains six sides!", color: "#8cfebf" },
      { name: "Octagon", emoji: "🛑", detail: "A octagon has eight sides", color: "#f978a7" },
      { name: "Oval", emoji: "⬬", detail: "Ovals look simmilar to circles!", color: "#add66a" },
      { name: "Heart", emoji: "❤️", detail: "The heart is a popular shape!", color: "#fe94d9" }
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
