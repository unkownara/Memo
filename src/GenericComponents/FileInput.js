import React, {Component} from 'react';

class FileInput extends Component {

	inputFile = (e) => {
		this.props.getInputFile(e.target.files);
	};

	render() {
		return (
			<div>
				<input type="file" onChange={this.inputFile} />
			</div>
		);
	}
}

export default FileInput;