import React from 'react';
import Axios from 'axios';

class GithubRepos extends React.Component {
    constructor() {
        super();
        this.state = {repos: []};
        console.log('=======in constructor========'); 
    }
    
    componentWillMount(){
        console.log('=========component will mount, sending request to github====' + this.props.username);
        Axios.get(`https://api.github.com/users/${this.props.username}/repos`).then(
            (data) => this.setState({repos: data.data})
        );
    }
    componentDidMount(){
        console.log('=====did mount=====');
    }
    componentWillUnmount(){
        console.log('======will unmount=====');
    }
    componentWillReceiveProps(props) {
        console.log('will receive props:' + props);
    }
    render() {
        return (
            <ul>
               {this.state.repos.map((repo, index)=> (<li key={repo.id}>{repo.name}({repo.full_name})</li>))}
            </ul>
        )
    }
}

export default GithubRepos;
