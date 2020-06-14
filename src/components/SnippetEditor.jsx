import React from "react";
import { connect } from "react-redux";
import { fetchLanguages } from "../actions/snippetsActions";

class SnippetEditor extends React.Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchLanguages());
  }

  render() {
    const { languages } = this.props;

    const languageOptions = languages.map((language, index) => (
      <option value={language[0]}>{language[1]}</option>
    ));

    return (
      <div>
        <form>
          <div>
            <label htmlFor="title">Title</label>
            <input type="text" name="title" id="title" />
          </div>

          <div>
            <label htmlFor="code">Code</label>
            <textarea name="code" id="code" cols="30" rows="10"></textarea>
          </div>

          <div>
            <label htmlFor="language">Language</label>
            <select name="language" id="language">
              {languageOptions}
            </select>
          </div>

          <div>
            <input
              type="checkbox"
              name="has_line_numbers"
              id="has_line_numbers"
            />
            <label htmlFor="has_line_numbers">Show Line Numbers?</label>
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  languages: state.snippets.languages,
});

export default connect(mapStateToProps)(SnippetEditor);
