import React from 'react';
import ReactDOM from 'react-dom';
import GithubRepos from './components/github-repos';

class App extends React.Component {
    constructor() {
        super();
        this.state = {txt: 'default state txt'}
        this.update = this.update.bind(this);
    }

    //update(e) {
    //    this.setState({txt: e.target.value});
    //}
    update() {
       console.log('clicked');
       ReactDOM.render(<GithubRepos username='jnupeter' />, document.getElementById('root'));
    }

    render() {
        return (
            <div>
              <button onClick={this.update}>update</button>
              <GithubRepos username='wildfly' />
            </div>
            );
    }
}

const Widget = (props)=>{
    return (
     <div>
         <input type="text" onChange={props.update} />
         <h2>{props.txt}</h2>
     </div>
    );
}

//stateless
//const App = ()=>{ return React.createElement('h1', null, 'anotherway');}

export default App;