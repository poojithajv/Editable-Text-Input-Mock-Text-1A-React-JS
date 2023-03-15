import {Component} from 'react'

import './index.css'

class EditableText extends Component {
  state = {
    searchInput: '',
    saveInput: false,
  }

  onClickSaveButton = () => {
    this.setState({saveInput: true})
  }

  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  onClickEditButton = () => {
    this.setState({saveInput: false})
  }

  render() {
    const {searchInput, saveInput} = this.state

    return (
      <div className="main-container">
        <div className="card-container">
          <h1 className="main-heading">Editable Text Input</h1>
          {saveInput ? (
            <div className="input-container">
              <p className="saved-data">{searchInput}</p>
              <button
                type="button"
                className="button"
                onClick={this.onClickEditButton}
              >
                Edit
              </button>
            </div>
          ) : (
            <div className="input-container">
              <input
                type="text"
                className="input"
                onChange={this.onChangeSearchInput}
                value={searchInput}
              />
              <button
                type="button"
                className="button"
                onClick={this.onClickSaveButton}
              >
                Save
              </button>
            </div>
          )}
        </div>
      </div>
    )
  }
}
export default EditableText
