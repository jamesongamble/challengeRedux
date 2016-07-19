var React = require('react');
var FakeObjectDataListStore = require('./FakeObjectDataListStore');

var PendingPool = {};
var ReadyPool = {};

class ExampleImage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      dataList: new FakeObjectDataListStore(1000000),
    };
  }

  componentWillMount() {
    this._load(this.props.src);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.src !== this.props.src) {
      this.setState({src: null});
      this._load(nextProps.src);
    }
  }

  render() {
    var style = this.state.src ?
      { backgroundImage : 'url(' + this.state.src + ')'} :
      undefined;

    return <div className="exampleImage" style={style} />;
  }

  _load(/*string*/ src) {
    if (ReadyPool[src]) {
      this.setState({src: src});
      return;
    }

    if (PendingPool[src]) {
      PendingPool[src].push(this._onLoad);
      return;
    }

    PendingPool[src] = [this._onLoad];

    var img = new Image();
    img.onload = () => {
      PendingPool[src].forEach(/*function*/ callback => {
        callback(src);
      });
      delete PendingPool[src];
      img.onload = null;
      src = undefined;
    };
    img.src = src;
  }

  _onLoad(/*string*/ src) {
    ReadyPool[src] = true;
    if (this.isMounted() && src === this.props.src) {
      this.setState({
        src: src,
      });
    }
  }
}

ExampleImage.propTypes = {
}

ExampleImage.defaultProps = {
}

export default ExampleImage
