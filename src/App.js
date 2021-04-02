import React, { Component } from "react";
import "./App.css";
import RefsDemo from "./components/RefsDemo";
/*import ParentComp from "./components/ParentComp";
import FragmentDemo from "./components/FragmentDemo";
import Table from "./components/Table";
import ClassClick from "./components/ClassClick";
import Message from "./components/Message";
import Counter from "./components/Counter";
import EventBind from "./components/EventBind";
import FunctionClick from "./components/FunctionClick";
import Greet from "./components/Greet";
import ParentComponent from "./components/ParentComponent";
import Welcome from "./components/Welcome";
import StyleSheet from "./components/StyleSheet";
import Inline from "./components/Inline";
import CSSModuleStyleSheet from "./components/CSSModuleStyleSheet";
import Form from "./components/Form";
import LifecycleA from "./components/LifecycleA";*/

class App extends Component {
  render() {
    return (
      <div className="App">
        <RefsDemo></RefsDemo>
        {/* <ParentComp></ParentComp>
           <FragmentDemo></FragmentDemo>
          <LifecycleA></LifecycleA>
          <Form></Form>
           <Message></Message>
           <Counter></Counter>
        <Greet name="Saranya" heroName="Prabhas"></Greet>
        <Welcome name="Tejal" heroName="Shahrukh Khan"></Welcome>
        <FunctionClick></FunctionClick>
        <ClassClick></ClassClick>
        <EventBind></EventBind>
        <ParentComponent></ParentComponent>
        <StyleSheet></StyleSheet>
        <Inline></Inline>
        <CSSModuleStyleSheet></CSSModuleStyleSheet>*/}
      </div>
    );
  }
}

export default App;
