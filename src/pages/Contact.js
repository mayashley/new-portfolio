import React, {Component} from 'react'

class Contact extends Component{
constructor(props){
    super(props);
    this.state = {value: ' '};

    this.handleChange = this.handleChange.bind(this);
    this. handleSubmit = this.handleSubmit.bind(this);
}
handleChange(event) {
    this.setState = ({value: event.target.value});

}
handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" value={this.state.value.require} onChange={this.handleChange} />
        </label>
        <label>
          Email:
          <input type="email"  value={this.state.value.require} onChange={this.handleChange} />
        </label>
        <label>
        Message:
        <textarea value={this.state.value.require} onChange={this.handleChange}/>
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
};
export default Contact