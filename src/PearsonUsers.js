import React, { Component } from "react";
import List from './UserList';
import Modal from './deleteModal';
import getUsers  from './service';
export class PearsonUsers extends Component {
  constructor(props) {
    super(props);

    this.state = {
      style:"none",
      id:'',
      users: [
        {
          id: 4,
          first_name: "Eve",
          last_name: "Holt",
          avatar:
            "https://s3.amazonaws.com/uifaces/faces/twitter/marcoramires/128.jpg"
        },
        {
          id: 5,
          first_name: "Charles",
          last_name: "Morris",
          avatar:
            "https://s3.amazonaws.com/uifaces/faces/twitter/stephenmoon/128.jpg"
        },
        {
          id: 6,
          first_name: "Tracey",
          last_name: "Ramos",
          avatar:
            "https://s3.amazonaws.com/uifaces/faces/twitter/bigmancho/128.jpg"
        }
      ]
    };
  }

  deleteUser = (id)=>{
    this.setState({id:id,style:'block'});
  }

  deleteUserConfirm = (event)=>{
    const value = event.target.innerText;    
    const {users:userlist,id }= this.state;
    if(value === "Yes") {
    var deletedUserList =  userlist && userlist.filter((user) => {
        return (user.id !== id);
      });
      this.setState({users:deletedUserList,style:'none'});
    }else if(value === "No") {
      this.setState({style:'none'});
    }
  }

  render() {
    const {users:usersList,style} = this.state;
    const divStyle = {
      display: style,
    };
    return (
      <div>
        <h1 class='header'>Pearson User Management</h1>
        <div className="pearson-users">
        <List user={usersList}  onUserDelete={this.deleteUser} />
        </div>
        <div style={divStyle}>
        <Modal onUserDelete={this.deleteUserConfirm}/>
        </div>
      </div>
    );
  }

   checkUniqueValues(state, res){
    const initialUsers = state;
    let uniqueUsers=[];
    if(initialUsers) {
      var uniqueId = initialUsers.map(hero => hero.id);
      uniqueId = [...new Set(uniqueId)];
      if(res && res.data){
        let newUsers = res.data;
           uniqueUsers =  newUsers.filter((user) => {
          let userId = user.id;
          return (!uniqueId.includes(userId));
        });
      }
      return [...state, ...uniqueUsers];
    }
  }



async componentDidMount() {
  const data = await getUsers();
  const users = this.state.users;
  const user = this.checkUniqueValues(users,data);
  this.setState({users:user})
}
}
