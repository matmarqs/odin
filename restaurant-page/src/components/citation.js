import './components.css';

export default function Citation(author, text) {
  const cardElem = document.createElement("div");
  cardElem.classList.add("card");

  const citElem = document.createElement("div");
  citElem.classList.add("citation");
  citElem.innerHTML = text;

  const authorElem = document.createElement("div");
  authorElem.classList.add("author");
  authorElem.textContent = author;

  cardElem.appendChild(citElem);
  cardElem.appendChild(authorElem);

  return cardElem;
}
