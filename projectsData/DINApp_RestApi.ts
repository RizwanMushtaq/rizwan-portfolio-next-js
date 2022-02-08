import { Project } from './ProjectInterface'
const doItNowApp_restapi_pic = '/assets/images/RestApi-568-256.png'

export const DINApp_RESTfulAPI: Project = {
    id: 2,
    title: 'Do It Now App (RESTful API)',
    pic: doItNowApp_restapi_pic,
    demoLink: 'https://doitnow-restapi-heroku.herokuapp.com/',
    codeLink: 'https://github.com/RizwanMushtaq/doitnow_restapi_heroku',
    description: {
        technologies: [
            'REST API',
            'Node.js',
            'Express.js',
            'MySQL',
        ],
        features: [
            'Registration of user is done and user data is saved in backend',
            'User login functionality is added',
            'User can add ToDo items in list',
            'User can add ToDo items in folder to organize ToDo list',
            'User can see ToDo list based to date selected in Dialog',
            'User can see Weekly ToDo list in Dialog',
            'User can delete ToDo item from list'
        ]
    }
}