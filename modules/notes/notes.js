export const newNote = () => {
  // creates element of tag type eg h1
  const newElement = document.createElement("textarea");
  // creates the text that we will put inside our element eg hello world
  const textNode = document.createTextNode(text);
  // add my text to my element <h1> hello world </h1>
  newElement.appendChild(textNode);

  //add my element to the area I want it to be in
  // eg <header> <h1> hello world </h1> </header>
  parent.appendChild(newElement);
};
