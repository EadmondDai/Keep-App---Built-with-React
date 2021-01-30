import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [inputTitle, setInputTitle] = useState("")
  const [inputContent, setInputContent] = useState("")
  const [noteItems, setNoteItem] = useState([])

  function addItem(event){
    setNoteItem(preItems => {
      return [...preItems, [inputTitle, inputContent]];
    });
    setInputTitle("");
    setInputContent("");
    event.preventDefault();
  }

  function onTitleChange(event){
    var newValue = event.target.value;
    setInputTitle(newValue);
  }

  function onContentChange(event){
    var newValue = event.target.value;
    setInputContent(newValue);
  }

  function deleteItem(id){
    setNoteItem(noteItems.filter((entry, idx) => {
      return idx !== id;
    }));
  }

  return (
    <div>
      <Header  />
      <CreateArea 
        addItem={addItem} 
        onTitleChange={onTitleChange} 
        onContentChange={onContentChange} 
        inputTitle={inputTitle}
        inputContent={inputContent} 
      />
      {noteItems.map((entry, idx) => {
        var [inputTitle, inputContent] = entry;
        return <Note key = {idx} id = {idx} title = {inputTitle} content = {inputContent} deleteItem = {deleteItem} />
      })}

      {/* <Note key={1} title="Note title" content="Note content" /> */}
      <Footer />
    </div>
  );
}

export default App;
