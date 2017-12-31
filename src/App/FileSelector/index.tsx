import React, { Component } from 'react';

export default class FileSelector extends Component<{}, {}> {
    constructor(props: any) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event: any) {
        console.log(event.target.files);
    }

    render() {
        return (
            <input type="file" multiple onChange={this.handleChange} />
        );
    }
}