import React from 'react'

class FizzbuzzApp extends React.Component {
  state = {
    startingNumber: 1,
    endingNumber: 15,
    divisibleNumber1: 3,
    divisibleWord1: 'Fizz',
    divisibleNumber2: 5,
    divisibleWord2: 'Buzz',
    result: [],
  }

  renderOutput() {
    return this.state.result.map(item => <div>{item}</div>)
  }
  render() {
    return (
      <div className="container app-container">
        <h2>Fizz buzz</h2>
        <div className="row">
          <div className="col-md-4">
            <h3>Controls</h3>
            <div className="row">
              <div className="col-md-6">
                <div className="form-group">
                  <label htmlFor="starting-number">Starting Number</label>
                  <input id="starting-number" className="form-control" type="number" placeholder="starting number" value={this.state.startingNumber} max={10} />
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <label htmlFor="ending-number">Ending Number</label>
                  <input id="ending-number" className="form-control" type="number" placeholder="ending number" value={this.state.endingNumber} max={50} />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <div className="form-group">
                  <label htmlFor="divisible-number-1">Divisible Number #1</label>
                  <input id="divisible-number-1" className="form-control" type="number" placeholder="divisible number #1" value={this.state.divisibleNumber1} max={10} />
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <label htmlFor="divisible-word-1">Divisible Word #1</label>
                  <input id="divisible-word-1" className="form-control" placeholder="divisible word #1" value={this.state.divisibleWord1} />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <div className="form-group">
                  <label htmlFor="divisible-number-2">Divisible Number #2</label>
                  <input id="divisible-number-2" className="form-control" type="number" placeholder="divisible number #2" value={this.state.divisibleNumber2} max={20} />
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <label htmlFor="divisible-word-2">Divisible Word #2</label>
                  <input id="divisible-word-2" className="form-control" placeholder="divisible word #2" value={this.state.divisibleWord2} />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <button className="btn btn-primary btn-block">Hit me!</button>
              </div>
              <div className="col-md-6">
                <button className="btn btn-default btn-block">Reset</button>
              </div>
            </div>
          </div>
          <div className="col-md-2 col-md-offset-2">
            <h3>Output</h3>
            <div className="well">{this.renderOutput()}</div>
          </div>
        </div>
      </div>
    )
  }
}

export default FizzbuzzApp
