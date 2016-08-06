import React from 'react';
import Axios from 'axios';
import UserList from './user-list';
import UserDetail from './user-detail';

class Users extends React.Component {
    constructor(){
        super();
        this.state = {
            users: [],
            currentUser: null
            };
    }

    componentDidMount() {
        console.log('getting users....');
        Axios.get(this.props.url)
             .then((res)=>{
                 console.log(res.data);
                 this.setState({users: res.data});
             })
    }
    
    selectUser(event) {
        console.log('seleced:', event.target.value);
    }

    render() {
        return (<div className='row'>
                    <UserList users={this.state.users} selectUser={this.selectUser}/>
                    <UserDetail user={this.state.currentUser} />
                </div>
            );
    }
}

export default Users;