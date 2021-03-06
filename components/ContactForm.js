const ContactForm = React.createClass({
  protoTypes: {
    contact: React.PropTypes.object.isRequired,
  },
  render: function() {
    return (
  <form className={"contactForm"}>
    <input type={'text'} placeholder={'Imię'} value={this.props.contact.firstName} />
    <input type={'text'} placeholder={'Nazwisko'} value={this.props.contact.lastName} />
    <input type={'email'} placeholder={'email'} value={this.props.contact.email} />
    <button type={'submit'}>Dodaj kontakt</button>
  </form>
    );
  }
})