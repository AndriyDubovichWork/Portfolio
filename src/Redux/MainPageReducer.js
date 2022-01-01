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
      description:
        "This is Social React Network I developed it for month using YouTube courses.You can Follow/Unfollow another users check their profiles,can Login/Logout from profile,make local posts,send local messages.Also I used API for Login/Logout,and to get users data.I tried TDD(Test Driven Development) at first but my project dont 100% covered by tests.At this project I learned how to use React make Components,how to use useEfect,useState and other React features.Also I made my ovn Redux using js but then i turned to Redux library.Actualy I learned the basement for my future projects and I will make every next project beter then previous.If youl'd like to try you can login using this data Email:free@samuraijs.com,password:free",
      github: 'https://github.com/AndriyDubovichWork/React-Social-Network',
      website: 'https://andriydubovichwork.github.io/React-Social-Network/#/',
      usedTechnologies: [
        ['React', '17.0.2'],
        ['Redux', '4.1.2'],
        ['Redux Form', '8.3.8'],
        ['Redux Thunk', '2.4.0'],
        ['reselect', '4.1.5'],
        ['axios', '0.24.0'],
      ],
      id: 1,
    },
    {
      img: MicrosoftCopy,
      title: 'Microsoft.com adapive copy',
      description:
        'This is Microsoft.com copy.Developed it using HTML and CSS only.I made it with adaptive design using @media.Actualy its only landing page but I think its beter than oficial site.',
      github: 'https://github.com/AndriyDubovichWork/UnOfficial-Microsoft-site',
      website:
        'https://andriydubovichwork.github.io/UnOfficial-Microsoft-site/',
      usedTechnologies: [
        ['HTML', '5'],
        ['CSS', '3'],
      ],
      id: 2,
    },
    {
      img: SportTimer,
      title: 'Sport timer',
      description:
        'This is Pure JS Sport timer for sport exercises.I made it using setTimeout function and other pure js functions.you can change time for sport,relax and times you have to repeat the bottom bar shows the all exercises progress.Also when it chenges the sport/relax it also change the background and make noice.',
      github: 'https://github.com/AndriyDubovichWork/sport_relax_timer',
      website: 'https://andriydubovichwork.github.io/sport_relax_timer/',
      usedTechnologies: [
        ['HTML', '5'],
        ['CSS', '3'],
        ['JavaScript', 'ES6'],
      ],
      id: 3,
    },
    {
      img: ToDo,
      title: 'JS ToDo list',
      description:
        'This is basic JS ToDo list you can add/delete tasks.you can chenge background colour colour of the text and the buttons border color.Also You can delete all tasks.',
      github: 'https://github.com/AndriyDubovichWork/ToDoListJS',
      website: 'https://andriydubovichwork.github.io/ToDoListJS/',
      usedTechnologies: [
        ['HTML', '5'],
        ['CSS', '3'],
        ['JavaScript', 'ES6'],
      ],
      id: 4,
    },
    {
      img: CovidData,
      title: 'Covid Data form API',
      description:
        'Simple API based project.You can choose country or state and it will show info about dead from covid and infected.Used some University API so data can be dont 100% true',
      github: 'https://github.com/AndriyDubovichWork/React-Covid-data-from-API',
      website: 'https://andriydubovichwork.github.io/ReactCovidDataFromAPI/',
      usedTechnologies: [
        ['HTML', '5'],
        ['CSS', '3'],
        ['JavaScript', 'ES6'],
      ],
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
};

export default MainPageReducer;
