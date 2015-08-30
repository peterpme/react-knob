import React from 'react'

export default class Knob extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      value: this.props.value,
      degree: this.valueToRadian(this.props.value)
    }
  }

  componentDidMount() {
    this.input = React.findDOMNode(this.refs.number)
  }

  shouldComponentUpdate(nextProps, nextState) {
    return nextState.value !== this.state.value
  }

  handleChange(value) {
    this.setState({
      value: value,
      degree: this.valueToRadian(value)
    })
  }

  valueToRadian(value) {
    return Math.round((value / 100) * 270)
  }

  render() {
    return (
      <div className="Knob">
        <div className="Knob-label">
          <input
            type="number"
            min={0}
            max={100}
            ref="number"
            className="Knob-value"
            defaultValue={this.props.value}
            value={this.state.value}
            onChange={ evt => this.handleChange(evt.target.value)}
            onWheel={ () => this.input.focus()}
          />
        </div>
        <div
          className="Knob-spinner"
          style={{
            transform: `rotate(${-45 + this.state.degree}deg)`
          }}
        >
        </div>
      </div>
    )
  }

}
