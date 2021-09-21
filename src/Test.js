import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Form from "react-jsonschema-form";

const schema = {
  title: "Todo",
  type: "object",
  required: ["title"],
  properties: {
    title: {type: "string", title: "Title", default: ""},
    done: {type: "boolean", title: "Done?", default: false}
  }
};

const MyCustomWidget = (props) => {
  return (
    <input type="number"
      className="custom"
      value={props.value}
      required={props.required}
      onChange={(event) => props.onChange(event.target.value)} disabled={true}/>
  );
};

const widgets = {
  myCustomWidget: MyCustomWidget
};

const uiSchema = {
  "ui:widget": "myCustomWidget"
}

const log = (type) => console.log.bind(console, type);

class App extends Component {
  render() {
    return (
      <Form schema={schema}

        onSubmit={log("submitted")}
        onError={log("errors")}
        uiSchema={uiSchema}
        widgets={widgets} />
    );
  }
}

export default App;