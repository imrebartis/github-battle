var React = require('react');

class Popular extends React.Component {
    constructor(props) {
    super(props);
    this.state = {
      selectedLanguage: 'All'
    };
    //bind 'this' in updateLanguage to 'this' in the constructor
    this.updateLanguage = this.updateLanguage.bind(this)
    }

    updateLanguage(lang) {
    this.setState(function () {
      return {
        selectedLanguage: lang,
      }
    });
  }


    render() {
        var languages = ['All', 'JavaScript', 'Ruby', 'Java', 'CSS', 'Python'];
        return (
             <div>
                <ul className='languages'>
                {languages.map((lang) => {
                    //console.log(this) prints out the objects in var languages
                    // 'coz of using the arrow function
                    // this renders the 2nd argument of the map function ('this') unnecessary
                    return (
                    <li
                        style={lang === this.state.selectedLanguage ? {color: '#d0021b'} : null}
                        onClick={this.updateLanguage.bind(null, lang)}
                        key={lang}>
                        {lang}
                    </li>
                    )
                }, this)}
                </ul>
            </div>
        )
    }
}

module.exports = Popular;