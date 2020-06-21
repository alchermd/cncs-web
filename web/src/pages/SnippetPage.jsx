import axios from 'axios';
import React from 'react';

const API_ROOT = process.env.REACT_APP_API_ROOT;

class SnippetPage extends React.Component {
    state = {
        highlighted: '',
        title: '',
        has_line_numbers: null,
        language: 'text',
    }

    componentDidMount() {
        const {match} = this.props;
        const snippetKey = match.params.snippetKey;

        axios.get(`${API_ROOT}/snippets/${snippetKey}`)
            .then(response => {
                this.setState({...response.data})
            })
    }
    
    render() {
        const {highlighted, title, has_line_numbers, language} = this.state;

        return (
            <div>
                <p dangerouslySetInnerHTML={{__html: highlighted}}></p>
            </div>
        );
    }
}

export default SnippetPage;