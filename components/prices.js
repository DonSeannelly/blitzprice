class Prices extends React.Component {
  state = {
    currency: 'USD'
  }

  buildListing() {
    return (
      <section>
        <h5>BTC rate in</h5>
        <ul className="list-group">
          <li className="list-group-item">
            {this.props.bpi[this.state.currency].description}
              <div className="price-group">
                <span className="badge badge-primary">{this.props.bpi[this.state.currency].code}</span>
                <strong>{this.props.bpi[this.state.currency].rate}</strong>
              </div>
          </li>
        </ul>
        <br />
        <select onChange={e => this.setState({ currency: e.target.value })} className="form-control">
          <option value="USD">USD</option>
          <option value="EUR">EUR</option>
          <option value="GBP">GBP</option>
        </select>

        <style jsx>{`
          .list-group-item {
            display: flex;
            flex-flow: row wrap;
          }
          .price-group {
            align-self: flex-end;
            margin-left: auto;
            display: inline-block;
          }
          .price-group .badge {
            margin-right: 10px;
          }
        `}</style>
      </section>
    );
  }
  buildErrorMessage() {
    return (
      <section>
        <ul className="list-group">
          <li className="list-group-item">API Error</li>
        </ul>
      </section>
    );
  }
  render() {
    return this.props.bpi[this.state.currency] !== undefined ? this.buildListing() : this.buildErrorMessage();
  }
}

export default Prices;