import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../actions';
import SlideWrapper from '../components/SlideWrapper';

// Import all slides
import SlideOne from './SlideOne';

class Presentation extends Component {

  componentDidMount() {
    window.addEventListener('keydown', this._kbNavigation.bind(this));
  }

  _kbNavigation(e) {
    const { goNextSlide, goBackSlide, goNextArticle, goPrevArticle } = this.props;

    switch(e.which) {
      case 37: // Left Arrow Key
        goBackSlide();
        break;
      case 39: // Right Arrow Key
        goNextSlide();
        break;
      case 32: // Spacebar
        goNextArticle();
        break;
      case 8:  // BackSpace
        goPrevArticle();
        break;
      default:
        return;
    }
  }

  render() {
    const { goNext, goBack } = this.props;

    return (
      <div id="presentationRoot">
        <button
          className="transition-btn left-transition"
          onClick={goBack}>
          <i className="fa fa-2x fa-caret-left"></i>
        </button>
        <SlideWrapper>
          <SlideOne />
        </SlideWrapper>
        <button
          className="transition-btn right-transition"
          onClick={goNext}>
          <i className="fa fa-2x fa-caret-right"></i>
        </button>
      </div>
    );
  }
}

Presentation.propTypes = {
  goNextSlide: PropTypes.func.isRequired,
  goBackSlide: PropTypes.func.isRequired,
  goNextArticle: PropTypes.func.isRequired,
  goPrevArticle: PropTypes.func.isRequired
}

const mapStateToProps = (state) => {
  return {
    ...state
  };
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Presentation);
