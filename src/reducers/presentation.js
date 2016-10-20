import {
  GO_SLIDE_BACK,
  GO_SLIDE_FORWARDS,
  GO_ARTICLE_FORWARD,
  GO_ARTICLE_BACK
} from '../constants/actionTypes';


export default function presentationReducer(state = {
  slideNumber: 0,
  articleNumber: 0
}, action) {
  switch(action.type) {
    case GO_SLIDE_FORWARDS:
      return {
        slideNumber: state.slideNumber + 1,
        articleNumber: 0
      }
    case GO_SLIDE_BACK:
      let prevSlideNumber = state.slideNumber;
      if (prevSlideNumber > 0) {
        prevSlideNumber = prevSlideNumber - 1;
      }

      return {
        slideNumber: prevSlideNumber,
        articleNumber: 0
      }
    case GO_ARTICLE_FORWARD:
      return {
        ...state,
        articleNumber: state.articleNumber + 1
      }
    case GO_ARTICLE_BACK:
      let prevArticleNumber = state.articleNumber;
      if (prevArticleNumber > 0) {
        prevArticleNumber = prevArticleNumber - 1;
      }
      return {
        ...state,
        articleNumber: prevArticleNumber
      }
    default:
      return {
        ...state
      }
  }
}
