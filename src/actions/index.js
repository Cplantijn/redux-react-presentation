import {
  GO_SLIDE_BACK,
  GO_SLIDE_FORWARDS,
  GO_ARTICLE_FORWARD,
  GO_ARTICLE_BACK,
  CLEAR_COUNTER,
  INCREMENT_COUNTER,
  DECREMENT_COUNTER
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

export function clearCounter() {
  return {
    type: CLEAR_COUNTER
  };
}

export function incrementCounter() {
  return {
    type: INCREMENT_COUNTER
  };
}

export function decrementCounter() {
  return {
    type: DECREMENT_COUNTER
  };
}
