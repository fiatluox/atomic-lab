/**@doc
# @category atom
# @name Button
**/

// require('./Button.scss');

import React from 'react';
import ReactDOM from 'react-dom';
import classNames from 'classnames';

export default class Button extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		let classes = classNames(
			'button',
			this.props.modifiers
		);

		return (
			<button className={classes} type={this.props.type}>
				{this.props.text}
			</button>
		);
	}
}

Button.propTypes = {
	type: React.PropTypes.string,
	text: React.PropTypes.string.isRequired,
	modifiers: React.PropTypes.oneOfType([React.PropTypes.string, React.PropTypes.array])
};

Button.defaultProps = {
	type: 'submit',
	text: '',
	modifiers: [
		'button--primary',
		'button--medium'
	]
};

/**@preview
ReactDOM.render(<Button
	modifiers={['button--primary', 'button--medium']}
	text="Button"
	type="submit"
/>,document.getElementById("react_render"));
**/

/**@note
## Usage
```js
import Button from '../Button/Button';
```
## Source
```html
<button class="button button--primary button--medium" type="submit">Button</button>
```
**/
