import React from "react";
import "./styles.css";

export default function App() {
  return <HelloWorldArticle />;
}

function HelloWorldArticle() {
  return (
    <article>
      <h1>This is my amazing heading</h1>
      <p>
        I gotta say Im not very creative with all those things here. Maybe I
        should start adding things with pokemon? I like pokemon. Pokemon apps
        everywhere.
      </p>
    </article>
  );
}
