import './components.css';

export default function Card(header, text) {
  const cardElem = document.createElement("div");
  cardElem.classList.add("card");

  const cardHeader = document.createElement("div");
  cardHeader.classList.add("card-header");
  cardHeader.textContent = header;

  const cardText = document.createElement("div");
  cardText.classList.add("card-text");
  cardText.innerHTML = text;

  cardElem.appendChild(cardHeader);
  cardElem.appendChild(cardText);

  return cardElem;
}
