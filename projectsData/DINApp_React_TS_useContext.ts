import { Project } from './ProjectInterface'
const doItNowApp_react_ts_useContext_pic = '/assets/images/doitnow_react_ts_useContext.png'

export const DINApp_React_TS_useContext: Project = {
    id: 4,
    title: 'Do It Now App (React TypeScript useContext)',
    pic: doItNowApp_react_ts_useContext_pic,
    demoLink: 'https://doitnow-react-ts-usecontext.netlify.app/',
    codeLink: 'https://github.com/RizwanMushtaq/doitnow_frontend_react_ts_useContext',
    description: {
        technologies: [
            'React.js',
            'TypeScript',
            'State management by useContext Hook',
            'React Hooks(useSatate, useEffect, useRef)',
            'Axios',
            'User Authorization using JSON web tokens',
            'Calender rendering using date-fns',
            'Sass',
        ],
        features: [
            'Registration of user is done and user data is saved in backend',
            'User login functionality is added',
            'User authorization is done using JWTs',
            'User can see calender View and each day with todo items is marked with icon',
            'User can add ToDo items for each day selected in calender',
            'User can set the ToDo item to done or undone state',
            'User can delete ToDo item from list',
            'User logout functionality is added'
        ]
    }
}