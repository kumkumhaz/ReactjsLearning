import React from "react";
import ReactDOM from "react-dom";

ReactDOM.render(
  <div>
    <h1 className="heading" contentEditable="true" spellCheck="false">
      My Favorite Foods
    </h1>
    <ul>
      <li>Apple</li>
      <li>Orange</li>
      <li>Banana</li>
    </ul>
    <div>
      <img
        className="cat-img"
        src="https://th.bing.com/th/id/OIP.7XXlrYMJofEM47o9Md74jAHaEo?w=270&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
        alt="grey cat"
      />
      <img
        className="cat-img"
        src="https://i.pinimg.com/originals/1a/06/6f/1a066ffa655422d743529698ef6f4a8c.jpg"
        alt=" white cat"
      />
      <img
        className="cat-img"
        src="https://th.bing.com/th/id/R.da6820a9e278359579ca2c1dbdcab963?rik=WpC3QAtFrxebXg&riu=http%3a%2f%2fimages6.fanpop.com%2fimage%2fphotos%2f36700000%2fCats-image-cats-36712791-1222-917.jpg&ehk=svVq%2fRmGaZSYdW5xc0Ue1g7NgMnOcTTMYa5cqPLO6lU%3d&risl=&pid=ImgRaw&r=0"
        alt="brown cat"
      />
    </div>
  </div>,
  document.getElementById("root")
);

//Create a react app from scratch.
//It should display a h1 heading.
//It should display an unordered list (bullet points).
//It should contain 3 list elements.
