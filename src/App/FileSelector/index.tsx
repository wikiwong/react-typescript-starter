import React, { Component } from 'react';
import styled from 'styled-components';

const StyledInput = styled.input`
    height: 30px;
    width: 100px;
`;

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
            <StyledInput multiple type="file" onChange={this.handleChange} />
        );
    }
}