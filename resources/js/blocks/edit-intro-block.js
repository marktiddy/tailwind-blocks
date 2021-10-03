import { Component } from "@wordpress/element";

class IntroBlockEdit extends Component {
  state = {
    dummyState: "with some class",
  };

  render() {
    const { className } = this.props;
    return (
      <div className={className}>
        <p className="p-6 bg-orange-200 text-orange-700">
          This is an intro block {this.state.dummyState}. This text should show
          up in the editor.
        </p>
        <input
          type="text"
          value={this.state.dummyState}
          onChange={(e) => this.setState({ dummyState: e.target.value })}
        />
      </div>
    );
  }
}

export default IntroBlockEdit;
