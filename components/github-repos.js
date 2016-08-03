import React from 'react';
import Axios from 'axios';

class GithubRepos extends React.Component {
    constructor() {
        super();
        this.state = {repos: [], loading: true};
        console.log('=======in constructor========'); 
    }
    
    componentWillMount(){
        console.log('=========component will mount, sending request to github====' + this.props.username);
    }
    componentDidMount(){
        console.log('=====did mount=====');
        Axios.get(`https://api.github.com/users/${this.props.username}/repos`).then(
            (data) => this.setState({repos: data.data, loading: false})
        );
    }
    componentWillUnmount(){
        console.log('======will unmount=====');
    }
    componentWillReceiveProps(props) {
        console.log('will receive props:' + props);
    }
    handleChange(event) {
        console.log('my value is: ', event.target.value);
    }

    render() {
       let ghuserPanel;
       if (this.state.loading) {
           ghuserPanel = (<div>loading.....</div>);
       } else {
           ghuserPanel = (<div>
            <input type="text" onChange={this.handleChange} defaultValue="hello"/>
            <ul>
               {this.state.repos.map((repo, index)=> (<li key={repo.id}>{repo.name}({repo.full_name})</li>))}
            </ul>
            </div>);
       }

       return (
           <div>
               {ghuserPanel}
           </div>
        )
    }
}

export default GithubRepos;
