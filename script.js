const input = document.querySelector("textarea");
const wordCount = document.querySelector("[data-word-count]");
const characterCount = document.querySelector("[data-character-count]");
const sentenceCount = document.querySelector("[data-sentences-count]");
const paragraphCount = document.querySelector("[data-paragraph-count]");

function updateCounts() {
    if(!input.value) {
        resetCounts();
        return;
    }

    // Count Words
    const wordsArray = input.value.trim().split(/\s+/);
    wordCount.innerText = wordsArray.length;

    // Count Characters
    characterCount.innerText = input.value.length;

    // Count Sentences
    const sentenceArray = input.value.split(/[.!?]+/).filter(Boolean);
    sentenceCount.innerText = sentenceArray.length;

    // Count Paragraph
    const paragraphArray = input.value.trim().split(/\n+/).filter((p) => p.trim() !== "");
    paragraphCount.innerText = paragraphArray.length;
}

function resetCounts() {
    wordCount.textContent = characterCount.textContent = sentenceCount.textContent = paragraphCount.textContent = "0";
}

input.addEventListener("input", updateCounts);