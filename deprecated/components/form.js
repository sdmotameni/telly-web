import { Component } from "react";

export default class Form extends Component {
  handleChange = ({ currentTarget }) => {
    const data = { ...this.state.data };
    data[currentTarget.name] = currentTarget.value;
    this.setState({ data });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.doSubmit();
  };

  renderInput(styles, type, name, placeholder, onChange) {
    return (
      <input
        className={styles}
        type={type}
        name={name}
        placeholder={placeholder}
        onChange={onChange}
      />
    );
  }

  renderButton(styles, title) {
    return (
      <button className={styles} onClick={this.handleSubmit} type="submit">
        {title}
      </button>
    );
  }
}
