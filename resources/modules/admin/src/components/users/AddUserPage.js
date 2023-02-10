import React, {Component} from "react";
import {Link} from "react-router-dom";

import Resource from "../../../../editor/src/js/classes/Resource";
import {Redirect, withRouter} from 'react-router-dom';
import UserForm from "./UserForm";
import UserTopPanel from "../UserTopPanel";
/**
 * @class
 * @property {Resource} resource
 */

class AddUserPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      redirectAfterSave: false,
    };
    this.resource = new Resource({route: '/admin/ajax/users'});

    //this.savePage = this.savePage.bind(this);
  }
  /*async componentDidMount(){
    let res = await this.templateResource.getOptions();
    this.setState(state=>{
      return{...state, templates: res}
    });
    let id = this.props.location.pathname.split('/');
    id = id[id.length - 1];
    id = parseInt(id);
    if(id){
      let pageData = await this.resource.get(id);
      this.setState(state=>{
        return{...state, value:pageData, id}
      });
    }
  }*/
  /*async savePage(e){
    e.preventDefault();
    let res;
    let path = this.state.value.path;

    path = path.split('\\').join('/');
    path = (path[0] !== '/') ? `/${path}` : path;
    this.state.value.path = path;
    if(this.state.id){
      res = await this.resource.put(this.state.id, this.state.value);
    } else {
      res = await this.resource.post(this.state.value);
    }
    if(res.success){
      this.setState(state=>{
        return {...state, redirectAfterSave: true}
      });
    } else {
      this.setState(state=>{
        return {...state, value: {}}
      });
    }
  }
  changeValue(value, field){
    if(field === 'path'){
      value = value.split('\\').join('/');
      value = (value[0] !== '/') ? `/${value}` : value;
    }
    this.setState(state=>{
      state = {...state};
      state.value[field] = value;
      return state
    })
  }*/
  render() {
    if(this.state.redirectAfterSave){
      return<Redirect to="/admin/users"/>
    }
    return <div className="admin-users">
        <div className="wrapper">
            <div className="admin-heading">
                <div className="admin-heading-left">
                  <div className="admin-breadcrumbs">
                    <Link className="admin-breadcrumbs__link" to={"/admin/users"}>Users</Link>
                    <span className="admin-breadcrumbs__separator">/</span>
                    <span className="admin-breadcrumbs__current">Add New Users</span>
                  </div>
                </div>
              <UserTopPanel />
            </div>
            <div className="admin-users-form-add">
                <UserForm redirect_url="/admin/users"/>
            </div>
        </div>
    </div>;
  }
}

export default withRouter(AddUserPage);
