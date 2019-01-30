# Requite

Dynamic selector for React components. Great for creating dynamic pages. Through some form of interaction, for example Loop, a page can be created dynamically. It can be used for a dynamic editor or even through a Json file.

[![NPM](https://img.shields.io/npm/v/requite.svg)](https://www.npmjs.com/package/requite) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

![Requite](http://i63.tinypic.com/zv6e0l.jpg)

## Installation

Just install the dependency and start using

```javascript

npm i requite or yarn add requite

```

### How to import

After installing the dependency, just import the components you need

```javascript
import Requite from "requite";
```

## Usage

```jsx
import Requite from "requite";

const Text = () => <p>Hello Text Component</p>;
const Header = () => <h1>Hello Header Component</h1>;
const ErrorHandler = () => <div>Component Type not found on Selector</div>; //this is not required

class Example extends Component {
  render() {
    const Components = {
      1: Text,
      Header: Header
    };
    return <Requite list={Components} type={"Header"} error={ErrorHandler} />;
  }
}
```

## License

MIT © [vacom](https://github.com/vacom)
