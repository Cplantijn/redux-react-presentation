import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../actions';

// Import all slides
import SlideOne from '../components/SlideOne';
import SlideTwo from '../components/SlideTwo';
import SlideThree from '../components/SlideThree';
import SlideFour from '../components/SlideFour';
import SlideFive from '../components/SlideFive';
import SlideSix from '../components/SlideSix';
import SlideSeven from '../components/SlideSeven';
import SlideEight from '../components/SlideEight';


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
        <div className="slide-container">
          <SlideOne slideOrder={0} color="#fff" {...this.props}/>
          <SlideTwo slideOrder={1} bgColor="#00d8ff" {...this.props}/>
          <SlideThree slideOrder={2} {...this.props}/>
          <SlideFour slideOrder={3} bgColor="#DB3A34" color="#fff"{...this.props}/>
          <SlideFive slideOrder={4} color="#fff" bgColor="#774abc" {...this.props}/>
          <SlideSix slideOrder={5} color="#fff" bgColor="#A54657" {...this.props}/>
          <SlideSeven slideOrder={6} color="#fff" bgColor="#48A9A6" {...this.props}/>
          <SlideEight slideOrder={7} color="#fff" bgColor="#E9724C" {...this.props}/>
        </div>
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
