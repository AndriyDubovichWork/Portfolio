const SET_MY_AGE = 'SET_MY_AGE';
const SET_THEME_COLOR = 'SET_THEME_COLOR';
let initialState = {
  MyAge: 16,
  isDarkTheme: true,
};

const MainPageReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_MY_AGE:
      return {
        ...state,
        MyAge: action.MyAge,
      };
    case SET_THEME_COLOR:
      return {
        ...state,
        isDarkTheme: action.isDarkTheme,
      };

    default:
      return state;
  }
};

const SetMyAge = (MyAge) => {
  return {
    type: SET_MY_AGE,
    MyAge,
  };
};
const SetThemeColor = (isDarkTheme) => {
  return {
    type: SET_THEME_COLOR,
    isDarkTheme,
  };
};

export const SetAge = () => (dispatch) => {
  let timeFromBirthDate = new Date('2005-11-27');
  timeFromBirthDate = timeFromBirthDate.getTime();
  let dateNow = Date.now();

  let age = dateNow - timeFromBirthDate;

  age = age / 31536000000;
  age = age.toFixed(0);

  dispatch(SetMyAge(age));
};
export const SetTheme = (isDarkTheme) => (dispatch) => {
  dispatch(SetThemeColor(isDarkTheme));
};

export default MainPageReducer;
