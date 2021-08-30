# json-xpath
* NO dependency on other packages
* Also work with typescript
* A javascript utility to provide xpath of the element deep in the the object. 

## Getting started ##

### Prerequisites
If you do not have nodejs installed on your machine, download and install [NodeJS](http://nodejs.org/). (NodeJS > 6.x Required)<br/>

### Installation
Install json-xpath npm package [json-xpath](https://www.npmjs.org/package/json-xpath)</a>:<br/>

**Using npm:**

```
$ npm i --save json-xpath
```

**Using yarn:**

```
$ yarn add json-xpath
```

##  How to use

```javascript
// javascript
const { getXPath } = require('json-xpath');

```

```javascript
// typescript
import { getXPath } from "json-xpath";
```


## Descriptions
* getXPath(`object`, `key`, `multiple`)
  * `object` - The object in which xpath to be calculated
  * `key` - The key for which xpath need to be calculated
  * `multiple` (optional) - default `false`
    * `false` - return first matching xpath
    * `true` - return all matching xpath in an `Array`

## Example

```javascript
const { getXPath } = require('json-xpath');

const data = {
  a1: 'a1',
  a: {
    b: {
      c: {
        d: 'd',
      },
      e: 'e',
    },
    f: {
      g: 'g',
      h: [
        {
          a1: 'a1',
        },
      ],
    },
  },
};

getXPath(data, 'a1'); // 'a1'
getXPath(data, 'c');  // 'a.b.c'

/* pass multiple flag to get all matching xpath */
getXPath(data, 'a1'); // ['a1', 'a.f.h.0.a1']
getXPath(data, 'c', true); // ['a.b.c']

```




## Contributing
* If you planning add some feature please **create issue before**.
* Don't forget about tests.

Clone the project: <br/>
```bash
$ git clone
$ yarn
```
Run the tests:
```bash
$ yarn test
```
**Deploy:**<br/>
Update version before (package)
```bash
$ git tag v*.*.*
$ git push origin master --tags
```

## Issues
If you do find an issue or have a question consider posting it on the [Issues](https://github.com/phaldiya/json-xpath/issues).
