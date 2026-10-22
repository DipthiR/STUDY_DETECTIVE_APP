
const rooms = [
  {
    id: "bio", name: "Bio Lab", subject: "Biology", cat: "science",
    icon: "🧬", diff: "Easy", desc: "Recover the specimen-vault code.",
    items: [
      ["mic", "🔬", "Microscope", "What controls most cell activities?", ["Cell wall", "Nucleus", "Ribosome"], 1, "N"],
      ["tube", "🧪", "Test Tubes", "Neutral pH is…", ["2", "7", "14"], 1, "7"],
      ["note", "📓", "Notebook", "DNA contains…", ["Deoxyribose", "Glucose", "Lactose"], 0, "D"],
      ["desk", "🗄️", "Lab Drawer", "The ATP powerhouse is…", ["Mitochondria", "Nucleus", "Golgi"], 0, "M"],
      ["door", "🚪", "Exit Door", "Select the correct specimen code.", ["M7ND", "CELL", "BIO1"], 0, "M7ND"]
    ]
  },
  {
    id: "chem", name: "Chemical Vault", subject: "Chemistry", cat: "science",
    icon: "⚗️", diff: "Medium", desc: "Unlock the reaction chamber.",
    items: [
      ["flask", "⚗️", "Flask Rack", "The pH of pure water is…", ["5", "7", "9"], 1, "7"],
      ["table", "🧪", "Periodic Table", "Atomic number 6 belongs to…", ["Carbon", "Oxygen", "Helium"], 0, "C"],
      ["scale", "⚖️", "Balance", "Mass is commonly measured in…", ["Newton", "Kilogram", "Watt"], 1, "K"],
      ["formula", "🧮", "Formula Board", "How many hydrogen atoms are in H₂O?", ["1", "2", "3"], 1, "2"],
      ["door", "🚪", "Vault Door", "Select the correct vault code.", ["C7K2", "CHEM", "K27C"], 0, "C7K2"]
    ]
  },
  {
    id: "physics", name: "Gravity Chamber", subject: "Physics", cat: "science",
    icon: "⚡", diff: "Medium", desc: "Restore power and open the emergency exit.",
    items: [
      ["pend", "🪀", "Pendulum", "Earth's gravitational acceleration is about…", ["3.8 m/s²", "9.8 m/s²", "15.2 m/s²"], 1, "9"],
      ["mag", "🧲", "Magnet Console", "Objects with mass attract through…", ["Gravity", "Friction", "Tension"], 0, "G"],
      ["wave", "〰️", "Wave Screen", "Frequency is measured in…", ["Hertz", "Joule", "Tesla"], 0, "H"],
      ["meter", "📐", "Velocity Meter", "Velocity equals displacement divided by…", ["Time", "Mass", "Force"], 0, "T"],
      ["door", "🚪", "Exit Lock", "Select the correct power code.", ["9GHT", "PHYS", "GH9T"], 0, "9GHT"]
    ]
  },
  {
    id: "math", name: "Number Fortress", subject: "Mathematics", cat: "math",
    icon: "🔢", diff: "Medium", desc: "Crack the fortress number locks.",
    items: [
      ["eq", "➗", "Equation Board", "12 × 8 = ?", ["86", "96", "108"], 1, "9"],
      ["prob", "🎲", "Probability Box", "The probability of a certain event is…", ["0", "0.5", "1"], 2, "1"],
      ["graph", "📈", "Graph Screen", "What is the slope of y = 2x + 3?", ["2", "3", "5"], 0, "2"],
      ["prime", "🔐", "Number Lock", "Which number is prime?", ["21", "29", "33"], 1, "P"],
      ["door", "🚪", "Final Gate", "Select the correct fortress code.", ["912P", "P912", "129P"], 0, "912P"]
    ]
  },
  {
    id: "data", name: "Data Crime Scene", subject: "Data Science", cat: "math",
    icon: "📊", diff: "Hard", desc: "Follow the data evidence to the clean key.",
    items: [
      ["chart", "📊", "Dashboard", "Which measure is generally less affected by outliers?", ["Mean", "Median", "Range"], 1, "M"],
      ["rows", "🗃️", "Dataset", "In a typical tabular dataset, a row represents a…", ["Record", "Feature", "Model"], 0, "R"],
      ["model", "🤖", "Model Card", "Overfitting occurs when a model…", ["Fits training data too closely", "Cannot learn patterns", "Has no input data"], 0, "O"],
      ["sql", "💻", "Query Terminal", "SQL SELECT is primarily used to…", ["Retrieve data", "Delete a database", "Train a neural network"], 0, "T"],
      ["door", "🚪", "Case Exit", "Select the correct case code.", ["MROT", "DATA", "MORT"], 0, "MROT"]
    ]
  },
  {
    id: "cs", name: "Hacker Lab", subject: "Computer Science", cat: "tech",
    icon: "💻", diff: "Medium", desc: "Terminate the rogue process.",
    items: [
      ["cpu", "🖥️", "CPU Console", "CPU stands for…", ["Central Processing Unit", "Computer Personal Unit", "Core Program Utility"], 0, "C"],
      ["code", "⌨️", "Code Screen", "Which constructs are commonly used for repetition?", ["for and while", "if only", "class only"], 0, "L"],
      ["db", "🗄️", "Database", "SQL is primarily used to work with…", ["Relational databases", "Images only", "Audio only"], 0, "D"],
      ["net", "🌐", "Network Panel", "HTTP is used for…", ["Web communication", "Sorting numbers", "Compiling code"], 0, "O"],
      ["door", "🚪", "Server Door", "Select the correct server code.", ["CLDO", "CODE", "COLD"], 0, "CLDO"]
    ]
  },
  {
    id: "ai", name: "AI Research Lab", subject: "Artificial Intelligence", cat: "tech",
    icon: "🧠", diff: "Hard", desc: "Recover the AI experiment release code.",
    items: [
      ["brain", "🧠", "Model Console", "Machine learning models identify patterns from…", ["Data", "Only HTML", "Keyboard layouts"], 0, "D"],
      ["train", "📚", "Training Log", "Training data is used to…", ["Fit a model", "Delete all labels", "Design a webpage only"], 0, "T"],
      ["nn", "🔗", "Neural Network", "A neuron commonly applies which function to its input?", ["Activation function", "Sorting function", "Routing table"], 0, "A"],
      ["xai", "🔎", "XAI Panel", "Explainable AI aims to explain…", ["Model predictions", "Keyboard input", "Battery level"], 0, "E"],
      ["door", "🚪", "Research Exit", "Select the correct research code.", ["DTAE", "DATA", "DTEA"], 0, "DTAE"]
    ]
  },
  {
    id: "english", name: "Mystery Library", subject: "English", cat: "humanities",
    icon: "📚", diff: "Easy", desc: "Unlock the library using language clues.",
    items: [
      ["book", "📖", "Poetry Book", "A comparison using 'like' or 'as' is a…", ["Simile", "Metaphor", "Irony"], 0, "S"],
      ["pen", "🖋️", "Writer Desk", "A person who writes a novel is an…", ["Author", "Actor", "Reader"], 0, "A"],
      ["dict", "📕", "Dictionary", "A synonym for 'rapid' is…", ["Slow", "Fast", "Late"], 1, "F"],
      ["story", "⏳", "Story Clock", "A short story that conveys a moral is a…", ["Fable", "Report", "Manual"], 0, "E"],
      ["door", "🚪", "Library Exit", "Select the correct library code.", ["SAFE", "READ", "SEAF"], 0, "SAFE"]
    ]
  }
];

const $ = id => document.getElementById(id);

function loadState() {
  try {
    return JSON.parse(localStorage.getItem("studyDetectiveState")) || {};
  } catch {
    return {};
  }
}

let state = Object.assign({
  xp: 0,
  escaped: [],
  attempts: 0,
  correct: 0,
  streak: 0
}, loadState());

let game = null;

function save() {
  localStorage.setItem("studyDetectiveState", JSON.stringify(state));
  updateTop();
}

function updateTop() {
  $("xp").textContent = state.xp;
  $("escaped").textContent = state.escaped.length;
  $("streak").textContent = state.streak;
  $("xpbar").style.width = (state.xp % 500) / 5 + "%";
}

function showView(id) {
  ["roomsView", "gameView", "progressView"].forEach(view =>
    $(view).classList.add("hidden")
  );

  $(id).classList.remove("hidden");

  if (id === "roomsView") {
    $("pageTitle").textContent = "SELECT SUBJECT";
    renderRooms();
  }

  if (id === "progressView") {
    $("pageTitle").textContent = "CASE ARCHIVE";
    renderProgress();
  }
}

function renderRooms() {
  const filter = $("filter").value;

  $("roomGrid").innerHTML = rooms
    .filter(room => filter === "all" || room.cat === filter)
    .map(room => {
      const index = rooms.indexOf(room);
      const locked = index > 0 &&
        !state.escaped.includes(rooms[index - 1].id);

      return `
        <article class="room-card ${locked ? "locked" : ""}"
          data-id="${room.id}"
          aria-label="${room.subject}${locked ? ", locked" : ""}">
          <div class="room-icon">${room.icon}</div>
          <h3>${room.name}</h3>
          <p>${room.desc}</p>
          <div class="meta">
            <span>${locked ? "🔒 Locked" : room.diff}</span>
            <span>⏱ 7 min</span>
            <span>+100 XP</span>
          </div>
        </article>
      `;
    }).join("");

  document.querySelectorAll(".room-card").forEach(card => {
    card.addEventListener("click", () => {
      const room = rooms.find(r => r.id === card.dataset.id);
      const index = rooms.indexOf(room);

      if (index > 0 && !state.escaped.includes(rooms[index - 1].id)) {
        return;
      }

      startRoom(room);
    });
  });
}

function startRoom(room) {
  game = {
    room,
    done: [],
    evidence: [],
    lives: 3,
    time: 420,
    tick: null
  };

  $("pageTitle").textContent = room.name;
  $("subjectTag").textContent = room.subject;
  $("roomTitle").textContent = room.name;
  $("roomDesc").textContent = room.desc;
  $("hintText").textContent = "";
  $("inventory").innerHTML =
    '<p class="muted">No evidence collected yet.</p>';

  showView("gameView");
  drawObjects();
  inspect(null);
  updateTimer();

  game.tick = setInterval(() => {
    if (!game) return;

    game.time--;
    updateTimer();

    if (game.time <= 0) finish(false);
  }, 1000);
}

function updateTimer() {
  const minutes = Math.floor(game.time / 60);
  const seconds = game.time % 60;

  $("timer").textContent =
    String(minutes).padStart(2, "0") + ":" +
    String(seconds).padStart(2, "0");

  $("lives").textContent = "♥ ".repeat(game.lives);
}

function drawObjects() {
  const positions = [
    ["7%", "48%"],
    ["37%", "54%"],
    ["68%", "54%"],
    ["79%", "27%"],
    ["18%", "29%"]
  ];

  $("found").textContent = game.done.length + "/5 CLUES";

  $("objects").innerHTML = game.room.items.map((item, index) => {
    const unlocked = index === 0 ||
      game.done.includes(game.room.items[index - 1][0]);
    const solved = game.done.includes(item[0]);

    return `
      <button type="button"
        class="obj ${solved ? "done" : ""}"
        data-id="${item[0]}"
        style="left:${positions[index][0]};top:${positions[index][1]}"
        ${!unlocked || solved ? "disabled" : ""}>
        <span class="emoji">${item[1]}</span>
        <b>${item[2]}</b>
        <small>${solved ? "✓ Solved" :
          unlocked ? "🔎 Investigate" : "🔒 Locked"}</small>
      </button>
    `;
  }).join("");

  document.querySelectorAll(".obj").forEach(button => {
    button.addEventListener("click", () => {
      if (!button.disabled) {
        inspect(game.room.items.find(item =>
          item[0] === button.dataset.id
        ));
      }
    });
  });
}

function inspect(item) {
  if (!item) {
    $("questionCount").textContent =
      "Question " + game.done.length + " / 5";

    $("inspectBody").innerHTML = `
      <span class="badge">❓ CLUE SYSTEM</span>
      <h3>Investigate a clue</h3>
      <p>Select an unlocked object in the room to reveal a question.</p>
    `;
    return;
  }

  if (game.done.includes(item[0])) return;

  $("questionCount").textContent =
    "Question " + (game.done.length + 1) + " / 5";

  $("inspectBody").innerHTML = `
    <span class="badge">🔎 CLUE DISCOVERED</span>
    <h3>${item[2]}</h3>
    <p class="question">${item[3]}</p>
    <div class="choices">
      ${item[4].map((choice, index) => `
        <button type="button" class="choice" data-index="${index}">
          ${String.fromCharCode(65 + index)}. ${choice}
        </button>
      `).join("")}
    </div>
    <div id="feedback"></div>
  `;

  document.querySelectorAll(".choice").forEach(button => {
    button.addEventListener("click", () =>
      answer(item, Number(button.dataset.index))
    );
  });
}

function answer(item, index) {
  const feedback = $("feedback");

  if (!feedback || document.querySelector(".choice:disabled")) return;

  document.querySelectorAll(".choice").forEach(button => {
    button.disabled = true;
  });

  state.attempts++;

  const isCorrect = index === item[5];

  if (isCorrect) {
    state.correct++;
    state.xp += 20;
    game.done.push(item[0]);
    game.evidence.push(item[6]);

    feedback.className = "feedback correct";
    feedback.innerHTML =
      "<b>✓ CORRECT!</b> +20 XP — the next clue is unlocked.";

    $("inventory").innerHTML = game.evidence.map(code =>
      `<div class="item">🔎 Evidence: ${code}</div>`
    ).join("");

    drawObjects();
    save();

    if (item[0] === "door") {
      setTimeout(() => finish(true), 700);
    }
  } else {
    game.lives--;
    game.time = Math.max(0, game.time - 20);

    feedback.className = "feedback wrong";
    feedback.innerHTML =
      "<b>✕ Not quite.</b> You lost one life and 20 seconds. Review the question and try again.";

    updateTimer();
    save();

    if (game.lives <= 0) {
      setTimeout(() => finish(false), 700);
      return;
    }

    setTimeout(() => {
      if (feedback.isConnected) {
        document.querySelectorAll(".choice").forEach(button => {
          button.disabled = false;
        });
      }
    }, 500);
  }
}

function finish(won) {
  if (!game) return;

  clearInterval(game.tick);

  const finished = game;
  game = null;

  if (won) {
    state.xp += 100;
    state.streak++;

    if (!state.escaped.includes(finished.room.id)) {
      state.escaped.push(finished.room.id);
    }

    alert("🔓 You escaped " + finished.room.name + "! +100 XP");
  } else {
    state.streak = 0;
    alert("⏰ Case failed. Select the room to try again.");
  }

  save();
  showView("roomsView");
}

function renderProgress() {
  $("totalXp").textContent = state.xp;
  $("totalEscaped").textContent = state.escaped.length;

  $("accuracy").textContent =
    (state.attempts
      ? Math.round(state.correct / state.attempts * 100)
      : 0) + "%";

  $("mastery").innerHTML = rooms.map((room, index) => {
    const complete = state.escaped.includes(room.id);
    const locked = index > 0 &&
      !state.escaped.includes(rooms[index - 1].id);

    return `
      <div class="masterrow">
        ${room.icon} <b>${room.subject}</b> —
        ${complete ? "Escaped ✓" : locked ? "Locked" : "Not completed"}
      </div>
    `;
  }).join("");
}

function getHint() {
  if (!game) return;

  if (state.xp < 10) {
    $("hintText").textContent =
      "You need at least 10 XP to purchase a hint.";
    return;
  }

  state.xp -= 10;

  const next = game.room.items.find(item =>
    !game.done.includes(item[0])
  );

  $("hintText").textContent = next
    ? `Hint: ${next[3]} Think about the subject concept and eliminate unlikely answers.`
    : "All clues have been solved.";

  save();
}

$("roomsNav").addEventListener("click", () => {
  if (game) {
    clearInterval(game.tick);
    game = null;
  }
  showView("roomsView");
});

$("progressNav").addEventListener("click", () => {
  if (game) {
    clearInterval(game.tick);
    game = null;
  }
  showView("progressView");
});

$("backBtn").addEventListener("click", () => {
  if (game) {
    clearInterval(game.tick);
    game = null;
  }
  showView("roomsView");
});

$("filter").addEventListener("change", renderRooms);
$("hintBtn").addEventListener("click", getHint);

updateTop();
renderRooms();
