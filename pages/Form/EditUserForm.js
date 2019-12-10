import React, { Component } from 'react';

class EditUserForm extends Component {
    render() {
        return (
            <>
                <form
                    onSubmit={event => {
                        event.preventDefault()

                        props.updateUser(user.id, user)
                    }}
                >
                    <div class="form-group">
                        <label>Name</label>
                        <input
                            className="form-control"
                            type="text"
                            name="name"
                            value={user.name}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div class="form-group">
                        <label>email</label>
                        <input
                            className="form-control"
                            type="text"
                            name="email"
                            value={user.email}
                            onChange={handleInputChange}
                        />
                    </div>
                    <button className="btn btn-info">Update User</button> &nbsp;
                    
                    <button
                        onClick={() => props.SetEditing(false)}
                        className="btn btn-danger"
                    >
                        Cancel
                    </button>
                    <br /><br /><br />
                </form>
            </>
        );
    }
}

export default EditUserForm;