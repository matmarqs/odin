import "./style.css";
import Card from "./components/card.js"
import Citation from "./components/citation.js"

const main = (function() {
  const content = document.querySelector("#content");

  document.querySelector("#home").addEventListener("click", loadHome);
  document.querySelector("#menu").addEventListener("click", loadMenu);
  document.querySelector("#contact").addEventListener("click", loadContact);

  function clearContent() {
    content.replaceChildren(); // Modern/faster method
  }

  function loadHome() {
    clearContent();

    const citationText = `Walk right in it's around the back</br>
    Just a half a mile from the railroad track</br>
    You can get anything you want at Alice's Restaurant</br>`;
    const citation = Citation("Arlo Guthrie", citationText);

    const hoursText = `Sunday: Closed</br>
    Monday: Closed</br>
    Tuesday: 8am - 10pm</br>
    Wednesday: 8am - 10pm</br>
    Thursday: 8am - 10pm</br>
    Friday: 8am - 10pm</br>
    Saturday: 7pm - 11pm</br>`;
    const hours = Card("Hours", hoursText);

    const location = Card("Location", "92 Grove Street, Ganton, Los Santos, CA 90210");

    content.appendChild(citation);
    content.appendChild(hours);
    content.appendChild(location);
  }

  function loadMenu() {
    clearContent();

    const citationText = `This is the menu!`;
    const citation = Citation("Mateus", citationText);

    const hoursText = `Menu is WIP!`;
    const hours = Card("Menu", hoursText);

    const location = Card("Location", "Kitchen");

    content.appendChild(citation);
    content.appendChild(hours);
    content.appendChild(location);
  }

  function loadContact() {
    clearContent();

    const citationText = `Contact info.`;
    const citation = Citation("Mateus", citationText);

    const hoursText = `WIP`;
    const hours = Card("Contact", hoursText);

    const location = Card("Location", "In your smartphone");

    content.appendChild(citation);
    content.appendChild(hours);
    content.appendChild(location);
  }

  return { loadHome, loadMenu, loadContact };
})();

main.loadHome();
