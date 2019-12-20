import React, { Component } from 'react';
import axios from 'axios';
import {
  Input,
  FormGroup,
  Label,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Table,
  Button
}
  from 'reactstrap';

class App extends Component {
  state = {
    users: [],
    newUserData: {
      role: '',
      name: '',
      email: ''
    },
    editUserData: {
      id: '',
      role: '',
      name: '',
      email: ''
    },
    newUserModal: false,
    editUserModal: false
  }
  
  componentWillMount() {
    // axios.get(`http://192.168.1.21:8000/api/users`).then((response) => {
    //   this.setState({
    //     users: response.data
    //   })
    // });
    this._refreshUsers();
  }

  toggleNewUserModal() {
    this.setState({
      newUserModal: !this.state.newUserModal
    });
  }

  toggleEditUserModal() {
    this.setState({
      editUserModal: !this.state.editUserModal
    });
  }

  addUser(e) {
    e.preventDefault();
    axios.post('http://192.168.1.4:8000/api/users/', this.state.newUserData).then((response) => {
      let { users } = this.state;
      console.log('testing', users)
      users.push(response.data);

      this.setState({
        users, newUserModal: false, newUserData: {
          role: '',
          name: '',
          email: ''
        }
      });
      this._refreshUsers();
    });
  }
  updateUser(e) {
    e.preventDefault();
    let { role, name, email } = this.state.editUserData;

    axios.put('http://192.168.1.4:8000/api/users/' + this.state.editUserData.id, {
      role, name, email
    }).then((response) => {
      this._refreshUsers();

      this.setState({
        editUserModal: false, editUserData: { id: '', role: '', name: '', email: '' }
      })
    });
  }
  editUser(id, role, name, email) {
    this.setState({
      editUserData: { id, role, name, email }, editUserModal: !this.state.editUserModal
    });
  }
  deleteUser(id) {
    axios.delete('http://192.168.1.4:8000/api/users/' + id).then((response) => {
      this._refreshUsers();
    });
  }

  deleteUser1 = async (id) => {
    await axios.delete('http://192.168.1.4:8000/api/users/' + id);
    this._refreshUsers();
  }

  _refreshUsers() {
    axios.get('http://192.168.1.4:8000/api/users/').then((response) => {
      console.log('res',response.data)
      this.setState({
        users: response.data.users
      })
    });
  }

  render() {
    console.log(this.state.users)
    return (
      <div className="App container">

        <h1>Users App</h1>

        <Button
          className="my-3"
          color="primary"
          onClick={this.toggleNewUserModal.bind(this)}>
          Add User
        </Button>

        <Modal isOpen={this.state.newUserModal} toggle={this.toggleNewUserModal.bind(this)}>
          <ModalHeader toggle={this.toggleNewUserModal.bind(this)}>Add a new User</ModalHeader>
          <ModalBody>
            <FormGroup>
              <Label for="role">role</Label>
              <Input id="role" value={this.state.newUserData.role} onChange={(e) => {
                let { newUserData } = this.state;

                newUserData.role = e.target.value;

                this.setState({ newUserData });
              }} />
            </FormGroup>
            <FormGroup>
              <Label for="name">name</Label>
              <Input id="name" value={this.state.newUserData.name} onChange={(e) => {
                let { newUserData } = this.state;

                newUserData.name = e.target.value;

                this.setState({ newUserData });
              }} />
            </FormGroup>

            <FormGroup>
              <Label for="email">email</Label>
              <Input id="email" value={this.state.newUserData.email} onChange={(e) => {
                let { newUserData } = this.state;

                newUserData.email = e.target.value;

                this.setState({ newUserData });
              }} />
            </FormGroup>

          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.addUser.bind(this)}>Add User</Button>{' '}
            <Button color="secondary" onClick={this.toggleNewUserModal.bind(this)}>Cancel</Button>
          </ModalFooter>
        </Modal>

        <Modal isOpen={this.state.editUserModal} toggle={this.toggleEditUserModal.bind(this)}>
          <ModalHeader toggle={this.toggleEditUserModal.bind(this)}>Edit a new User</ModalHeader>
          <ModalBody>
            <FormGroup>
              <Label for="role">role</Label>
              <Input id="role" value={this.state.editUserData.role} onChange={(e) => {
                let { editUserData } = this.state;

                editUserData.role = e.target.value;

                this.setState({ editUserData });
              }} />
            </FormGroup>
            <FormGroup>
              <Label for="name">name</Label>
              <Input id="name" value={this.state.editUserData.name} onChange={(e) => {
                let { editUserData } = this.state;

                editUserData.name = e.target.value;

                this.setState({ editUserData });
              }} />
            </FormGroup>

            <FormGroup>
              <Label for="email">email</Label>
              <Input id="email" value={this.state.editUserData.email} onChange={(e) => {
                let { editUserData } = this.state;

                editUserData.email = e.target.value;

                this.setState({ editUserData });
              }} />
            </FormGroup>

          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.updateUser.bind(this)}>Update User</Button>{' '}
            <Button color="secondary" onClick={this.toggleEditUserModal.bind(this)}>Cancel</Button>
          </ModalFooter>
        </Modal>

        <Table>
          <thead>
            <tr>
              <th>#</th>
              <th>role</th>
              <th>name</th>
              <th>email</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {
              this.state.users.map(user =>
                <tr key={user.id}>
                  <td>{user.id}</td>
                  <td>{user.role}</td>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>
                    <Button
                      color="success"
                      size="sm"
                      className="mr-2"
                      onClick={this.editUser.bind(this, user.id, user.role, user.name, user.email)}>
                      Edit
                    </Button>
                    <Button
                      color="danger"
                      size="sm"
                      onClick={this.deleteUser1.bind(this, user.id)}>
                      Delete
                    </Button>
                  </td>
                </tr>
              )
            }
          </tbody>
        </Table>
      </div>
    );
  }
}

export default App;
