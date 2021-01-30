import React from "react";

function CreateArea(props) {
  return (
    <div>
      <form>
        <input onChange={props.onTitleChange} name="Title" value={props.inputTitle} placeholder="Title" />
        <textarea onChange={props.onContentChange} name="content" value={props.inputContent} placeholder="Take a note..." rows="3" />
        <button onClick={props.addItem}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
