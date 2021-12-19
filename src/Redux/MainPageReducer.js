import { RerenderEntireTree } from './../index';
import SocialNetworkimg from './../imgs/SocialNetwork.png';
import CovidData from './../imgs/CovidData.png';
import ToDo from './../imgs/ToDo.png';
import MicrosoftCopy from './../imgs/MicrosoftCopy.png';
import SportTimer from './../imgs/SportTimer.png';

const SET_MY_AGE = 'SET_MY_AGE';
const SET_THEME_COLOR = 'SET_THEME_COLOR';
let initialState = {
  MyAge: 16,
  isDarkTheme: true,
  itemData: [
    {
      img: SocialNetworkimg,
      title: 'React Based Social Network',
      id: 1,
    },
    {
      img: MicrosoftCopy,
      title: 'Microsoft.com site adapive copy',
      id: 2,
    },
    {
      img: SportTimer,
      title: 'Sport timer',
      id: 3,
    },
    {
      img: ToDo,
      title: 'JS ToDo list',
      id: 4,
    },
    {
      img: CovidData,
      title: 'Covid Data form API',
      id: 5,
    },
  ],
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
  if (isDarkTheme) {
    document.body.style.backgroundColor = '#0A1929';
  } else {
    document.body.style.backgroundColor = '#fff';
  }
  dispatch(SetThemeColor(isDarkTheme));
  RerenderEntireTree();
};

export default MainPageReducer;
