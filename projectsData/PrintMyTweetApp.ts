import { Project } from './ProjectInterface'
const printMyTweetApp_pic = '/assets/images/PrintMyTweetAppImage-364.png'

export const PrintMyTweetApp: Project = {
    id: 0,
    title: 'Print My Tweet App (JavaScript CSS HTML)',
    pic: printMyTweetApp_pic,
    demoLink: 'https://rizwanmushtaq.github.io/PrintMyTweet/',
    codeLink: 'https://github.com/RizwanMushtaq/PrintMyTweet/tree/main',
    description: {
        technologies: [
            'Canvas API',
            'JavaScript',
            'CSS',
            'HTML',
        ],
        features: [
            'Generate Image of any Size',
            'Writing Text in Image',
            'Change Colors of Text and background of Image',
            'Insert random Circles in the background',
            'Position your text in Image',
            'Insert Tweeter icon and Position anywhere inside Image',
            'Export Images as PNG or JPEG formats'
        ]
    }
}