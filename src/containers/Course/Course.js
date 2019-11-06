import React, { Component } from 'react';
import { parse } from 'query-string';

class Course extends Component {
    render () {
        const { 
            match: { params: { id } },
            location: { 
                search
             }
        } = this.props;
        const query = parse(search);
        return (
            <div>
                <h1>{query.title}</h1>
                <p>You selected the Course with ID: { id }</p>
            </div>
        );
    }
}

export default Course;