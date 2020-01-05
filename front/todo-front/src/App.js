import React from "react";

class App extends React.Component {
  constructor(props) {
    // extendsしたコンポーネントのコンストラクタを実行する（propsを渡して）
    super(props);
    this.state = {
      todoList: []
    };
  }

  componentDidMount() {
    this.getAllTodo().then(todoList => {
      this.setState({
        todoList: todoList
      });
    });
  }

  async getAllTodo() {
    const url = "http://localhost:8888/todo";
    const response = await fetch(url);
    if (!response.ok) {
      return null;
    }
    const json = await response.json();
    return json;
  }

  render() {
    return (
      <div className="App">
        app
        {this.state.todoList.map(todo => todo.content)}
      </div>
    );
  }
}

export default App;
