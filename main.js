const textInput = document.getElementById("textInput");
const generateBtn = document.getElementById("generateBtn");
const gradientText = document.getElementById("gradientText");
const presetBtns = document.querySelectorAll(".preset-btn");

// Default gradient
let currentGradient =
  "linear-gradient(to right, #ff9a9e, #fad0c4, #fad0c4, #a18cd1, #ff9a9e)";

// Gradient presets
const gradients = {
  "purple-blue":
    "linear-gradient(to right, #a18cd1, #6b8dd6, #8fd3f4, #6b8dd6, #a18cd1)",
  "pink-orange":
    "linear-gradient(to right, #ff9a9e, #fad0c4, #fecfef, #ff9a9e)",
  rainbow:
    "linear-gradient(to right, #ff0000, #ff8000, #ffff00, #00ff00, #00ffff, #0000ff, #8000ff, #ff0000)",
  "blue-green":
    "linear-gradient(to right, #0072ff, #00c6ff, #00d5ad, #00c6ff, #0072ff)",
};

// Generate the gradient text
function generateGradientText() {
  const text = textInput.value || "Enter your text";
  gradientText.textContent = text;

  // Apply the current gradient
  gradientText.style.backgroundImage = currentGradient;
}

// Event listeners
generateBtn.addEventListener("click", generateGradientText);

textInput.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    generateGradientText();
  }
});

// Preset buttons
presetBtns.forEach((btn) => {
  btn.addEventListener("click", function () {
    const gradientType = this.getAttribute("data-gradient");
    currentGradient = gradients[gradientType];
    generateGradientText();
  });
});

// Generate on load
generateGradientText();
