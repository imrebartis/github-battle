import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { fetchPopularRepos } from '../utils/api';
import Loading from './Loading';

// stateless functional component
function SelectLanguage ({ selectedLanguage, onSelect }) {
  const languages = ['All', 'JavaScript', 'Ruby', 'Java', 'CSS', 'Python'];
  return (
    <ul className='languages'>
      {languages.map((lang) => (
        <li
          style={lang === selectedLanguage ? {color: '#d0021b'} : null}
          onClick={() => onSelect(lang)}
          key={lang}>
            {lang}
        </li>
      ))}
    </ul>
  )
}


function RepoGrid ({ repos }) {
  return (
    <ul className='popular-list'>
      {repos.map(({ name, stargazers_count, owner, html_url }, index) => {
        return (
          <li key={name} className='popular-item'>
            <div className='popular-rank'>#{index + 1}</div>
            <ul className='space-list-items'>
              <li>
                <img
                  className='avatar'
                  src={owner.avatar_url}
                  alt={'Avatar for ' + owner.login}
                />
              </li>
              <li><a href={html_url}>{name}</a></li>
              <li>@{owner.login}</li>
              <li>{stargazers_count} stars</li>
            </ul>
          </li>
        )
      })}
    </ul>
  )
}

RepoGrid.propTypes = {
  repos: PropTypes.array.isRequired,
}

SelectLanguage.propTypes = {
  selectedLanguage: PropTypes.string.isRequired,
  onSelect: PropTypes.func.isRequired,
};

class Popular extends Component {
  state = {
    selectedLanguage: 'All',
    repos: null
  }
  componentDidMount() {
    this.updateLanguage(this.state.selectedLanguage)
  }
  updateLanguage = (lang) => {
    this.setState(() => ({
        selectedLanguage: lang,
        // reset repos to null
        repos: null
    }));

    // AJAX request
    fetchPopularRepos(lang)
    .then((repos) => this.setState(() => ({ repos })));
  }
  render() {
    const { selectedLanguage, repos } = this.state
    // render on page result of AJAX request: {JSON.stringify(this.state.repos, null, 2)}
    return (
      <div>
        <SelectLanguage
          selectedLanguage={selectedLanguage}
          onSelect={this.updateLanguage} />
        {!repos
        // using custom text & speed instead of the default props from Loading.js
          ? <Loading text='Patience my friend' speed={200}/>
          : <RepoGrid repos={this.state.repos} />}
      </div>
    )
  }
}

export default Popular;