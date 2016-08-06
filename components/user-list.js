
import React from 'react';

class UserList extends React.Component {
    render() {
        return (<div>
                <ul>
                   {this.props.users.map((user, index)=>{ return <li key={user.id} onClick={this.props.selectUser}>{user.name}</li>})}
                </ul>
            </div>
        );
    }
}

export default UserList;