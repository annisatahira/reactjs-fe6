import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";
import Item from "./components/Item";

function App() {
  const [count, setCount] = useState(0);
  const [greeting, setGreeting] = useState("Hai");
  const [nama, setNama] = useState("Tidak ada Nama");
  return (
    <main>
      <div className="App">
        <h1>{greeting}, Ruangguru</h1>
        <h2>{nama}</h2>
        <button onClick={() => setGreeting("Hello")}>Change Greeting</button>

        <p>Belajar React js</p>

        <h1>Anda mengklik sebanyak {count} kali</h1>
        <button onClick={() => setCount(2)}>Klik</button>

        <Item nama="Football" price="$49" setNama={setNama} />
        <Item nama="Baseball" price="$9" />
        <Item nama="Basketball" price="$35" />
        <Item nama="Volley" price="$20" />
        <Item price="$290" />
        <Item price="$27" />
      </div>
    </main>
  );
}

export default App;
