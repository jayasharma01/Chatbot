function searchDocument() {
  const input = document.getElementById("searchInput").value.toLowerCase();
  const resultDiv = document.getElementById("result");

  // Use includes for partial matching
  const found = documents.find((doc) =>
    input.includes(doc.keyword.toLowerCase())
  );

  if (found) {
    resultDiv.innerHTML = `${found.outputText}: <a href="${found.link}" target="_blank">${found.link}</a>`;
  } else {
    resultDiv.innerHTML = "No document found for this keyword.";
  }
}
