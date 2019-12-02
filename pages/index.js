import React, { Component } from 'react';
import fetch from 'isomorphic-unfetch';
import { URLSearchParams } from 'url';
import axios from 'axios'

// import table from '../Api/api';
// import axios from 'axios'
// import Form from "../forms/form";

class Index extends Component {

  // static async getInitialProps() {
  //   const res = await fetch(`http://192.168.1.10:8000/api/login`)
  //   const data = await res.json()

  //   return {show:data}
  // }

  render() {
    return (
      <section className="content">
        <div className="box">
          <div className="box-header">
            <h3 className="box-title">Users show</h3>
          </div>
          <div className="box-body no-padding">
            <table className="table table-condensed">
              <tbody>
                <tr>
                  <th style={{ width: 60 }}>#</th>
                  <th>Task</th>
                  <th>Summary</th>
                  <th style={{ width: 40 }}>Label</th>
                </tr>
                {this.props.users.map(user => (
                  <tr key={user.id}>
                    <td>
                      {user.id}
                    </td>
                    <td>{user.role}</td>
                    <td  href="/p/id" as={`/p/${user.id}`}>{user.name}</td>
                    <td>
                      {/* <td> {user.summary.replace(/<[/]?[pb]>/g, '')}}</td> */}
                      <td>{user.name}</td>
                    </td>
                    <td>
                      <td>{user.email}</td>

                      {/* <img src={user.image.medium} /> */}
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

  // const res = await fetch(`http://192.168.1.11:8000/api/users`);
  // const data = await res.json();
  // console.log(data);
  const res = await axios.get(`http://192.168.1.11:8000/api/users`)
  const data = res.data

  return {
    // shows: [],
    users: data.users
  }
}

export default Index