import { Project } from './ProjectInterface'
import doItNowApp_js_php_pic from '../images/doitnow_php_364-255.png'

export const DINApp_JS_PHP: Project = {
    id: 1,
    title: 'Do It Now App (JavaScript PHP)',
    pic: doItNowApp_js_php_pic,
    demoLink: 'https://doitnow-mysql-php-js-css-herok.herokuapp.com/',
    codeLink: 'https://github.com/RizwanMushtaq/doitnow_mysql_php_js_css_heroku',
    description: {
        technologies: [
            'HTML',
            'CSS',
            'JavaScript',
            'PHP',
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