const textInput = document.getElementById("textInput");
const generateBtn = document.getElementById("generateBtn");
const clearBtn = document.getElementById("clearBtn");
const content = document.getElementById("content");

textInput.addEventListener("input", () => {
  content.innerText = textInput.value;
});

generateBtn.addEventListener("click", () => {
  const text = textInput.value.trim();
  if (!text) {
    alert("Lütfen metin girin.");
    return;
  }

  const pdfElement = document.createElement("div");
  pdfElement.innerHTML = `<h2>Yapay Zeka Çıktısı</h2><p style="white-space: pre-wrap;">${text}</p>`;

  const opt = {
    margin: 10,
    filename: "cikti.pdf",
    image: { type: "jpeg", quality: 0.98 },
    html2canvas: { scale: 2 },
    jsPDF: { unit: "mm", format: "a4", orientation: "portrait" }
  };

  html2pdf().set(opt).from(pdfElement).save();
});

clearBtn.addEventListener("click", () => {
  textInput.value = "";
  content.innerText = "";
});
