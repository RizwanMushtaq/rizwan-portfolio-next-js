export interface Project {
    id: number,
    title: string,
    pic: string,
    demoLink: string,
    codeLink: string, 
    description: {
        technologies: string[],
        features: string[]
    }
}