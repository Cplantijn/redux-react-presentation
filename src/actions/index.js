import {
  GO_SLIDE_BACK,
  GO_SLIDE_FORWARDS,
  GO_ARTICLE_FORWARD,
  GO_ARTICLE_BACK
} from '../constants/actionTypes';

export function goNextSlide() {
  return {
    type: GO_SLIDE_FORWARDS
  };
}

export function goBackSlide() {
  return {
    type: GO_SLIDE_BACK
  };
}

export function goNextArticle() {
  return {
    type: GO_ARTICLE_FORWARD
  };
}

export function goPrevArticle() {
  return {
    type: GO_ARTICLE_BACK
  };
}
