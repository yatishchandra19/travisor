import React, { useRef } from "react";

function UseRef() {
  const elementRefs = useRef([]);

  const scrollToElement = (index) => {
    if (elementRefs.current[index]) {
      elementRefs.current[index].scrollIntoView({ behavior: "smooth" });
    }
  };

  const items = ["Item 1", "Item 2", "Item 3", "Item 4"];

  return (
    <div>
      <ul>
        {items.map((item, index) => (
          <li key={index} ref={(el) => (elementRefs.current[index] = el)}>
            {item}
            <button onClick={() => scrollToElement(index)}>
              Scroll to Item
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UseRef;
