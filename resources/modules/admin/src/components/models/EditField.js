import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import AddFieldForm from "./AddFieldForm";
import Resource from "../../../../editor/src/js/classes/Resource";

class EditField extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modelTitle: 'Model Title',
      field: {},
    };
    this.modelsResource = new Resource({ route: '/admin/ajax/models' });
    this.filedsResource = new Resource({ route: `/admin/ajax/models/${this.props.match.params.modelId}/fields` });
  }
  async componentDidMount() {
    const { modelId } = this.props.match.params;
    let model = await this.modelsResource.get(modelId);
    this.setState({ modelTitle: model.title });
  }

  /**
   * отправка данных
   * @return {*}
   */
  onSubmit = async (data, isNeedToCheckName) => {
    const { modelId } = this.props.match.params;
    const { history } = this.props;
    if (isNeedToCheckName) {
      fetch(`/admin/ajax/models/${modelId}/field_name_is_free/?name=${data.name}`)
        .then(res => res.json())
        .then(res => {
          if (!res.taken) return alert(`Name ${data.name} is already taken. Use another one.`);
        });
    }

    if (this.props.match.params.id) {
      let res = await this.filedsResource.put(this.props.match.params.id, data);
      history.push(`/admin/tables/models/edit/${modelId}`);
    } else {
      let res = await this.filedsResource.post(data);
      history.push(`/admin/tables/models/edit/${modelId}`);
    }
  };

  render() {
    const { modelTitle } = this.state;
    const { modelId } = this.props.match.params;
    return <div className="admin-pages admin-page">
      <div className="admin-heading">
        <div className="admin-breadcrumbs">
          <Link className="admin-breadcrumbs__link" to="/admin/tables/models">Models / All Models</Link>
          <span className="admin-breadcrumbs__separator">/</span>
          <Link className="admin-breadcrumbs__link" to={`/admin/tables/models/edit/${modelId}`}>
            {modelTitle}
          </Link>
          <span className="admin-breadcrumbs__separator">/</span>
          <span className="admin-breadcrumbs__current">Add New Field</span>
        </div>
      </div>
      <div className="admin-content">
        <AddFieldForm onSubmit={this.onSubmit} />
      </div>
    </div>;
  }
}

export default withRouter(EditField);