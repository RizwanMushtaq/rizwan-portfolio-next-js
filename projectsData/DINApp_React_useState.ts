import { Project } from './ProjectInterface'
const doItNowApp_react_useState_pic = '/assets/images/AppPage-464-256.png'

export const DINApp_React_useState: Project = {
    id: 3,
    title: 'Do It Now App (React)',
    pic: doItNowApp_react_useState_pic,
    demoLink: 'https://doitnow-reactjs-sass.netlify.app/',
    codeLink: 'https://github.com/RizwanMushtaq/doitnow_reactjs_sass',
    description: {
        technologies: [
            'React.js',
            'Sass',
            'JSON Web Token',
            'date-fns',
        ],
        features: [
            'Registration of user is done and user data is saved in backend',
            'User login functionality is added',
            'User authorization is done using JWTs',
            'User can see calender View and each day with todo items is marked with icon',
            'User can add ToDo items for each day selected in calender',
            'User can set the ToDo item to done or undone state',
            'User can delete ToDo item from list'
        ]
    }
}