import React, { Component } from 'react';
import fetch from 'isomorphic-unfetch';
import { URLSearchParams } from 'url';
import axios from 'axios'


class Index extends Component {

  state = {
    users: [],
    newUse
  }

  deleteUSer(id) {
    axios.delete(`http://192.168.1.21:8000/api/users/` + id)
    return alert('Berhasil');

  }

  addUSers() {
    axios.post(`http://192.168.1.21:8000/api/users`)
  }

  render() {
    return (

      <section className="content">
        <div className="box">
          <div className="box-header">
            <h3 className="box-title">Users show</h3>
          </div>

          <button type="button" className="btn btn-primary" onClick={this.addUSers.bind(this)} data-toggle="modal" data-target="#exampleModalCenter">
            Add Users
          </button>&nbsp;

          <div className="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalLongTitle">Modal title</h5>
                  <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div className="modal-body">
                  <input type="text" class="form-control" placeholder="Role"
                    value={this.state.NewUser.role} onChange={(e) => {
                      let { newFormData } = this.state;
                      
                      newFormData.title = e.target.value;

                      this.setState({newFormData});
                    }}/>
                  
                    &nbsp;
                  <input type="text" class="form-control" placeholder="Name" />&nbsp;
                  <input type="text" class="form-control" placeholder="Email" />
                </div>
                
                <div className="modal-footer">
                  <button type="button" className="btn btn-primary" data-dismiss="modal">Edit</button>
                  <button type="button" className="btn btn-secondary" data-dismiss="modal">Cancel</button>
                </div>
              </div>
            </div>
          </div>

          <div className="box-body no-padding">
            <table className="table table-condensed">
              <tbody>
                <tr>
                  <th style={{ width: 60 }}>ID</th>
                  <th>Role</th>
                  <th>Name</th>
                  <th style={{ width: 40 }}>Email</th>
                </tr>
                {this.props.users.map(user => (
                  <tr key={user.id}>
                    <td>
                      {user.id}
                    </td>
                    <td>{user.role}</td>
                    <td href="/p/id" as={`/p/${user.id}`}>{user.name}</td>
                    <td>
                      <td>{user.name}</td>
                    </td>
                    <td>
                      <td>{user.email}</td>
                    </td>
                    <td>
                      <button type="button"
                        onClick={() => {
                          this.props.editRow(user)
                        }}
                        className="btn btn-primary"
                      >
                        Edit
                      </button>&nbsp;
                      <button
                        onClick={this.deleteUSer.bind(this, user.id)}
                        className="btn btn-danger"
                      >
                        Delete
                       </button>
                    </td>
                  </tr>
                ))}
              </tbody></table>
          </div>
        </div>
      </section>


    )
  }
}

Index.getInitialProps = async function () {

  // const res = await fetch(`http://192.168.1.21:8000/api/users`);
  // const data = await res.json();
  // console.log(data);
  const res = await axios.get(`http://192.168.1.21:8000/api/users`)
  const data = res.data

  return {
    // shows: [],
    users: data.users
  }
}

export default Index