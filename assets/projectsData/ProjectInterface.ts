export interface Project {
    id: number,
    title: string,
    pic: StaticImageData,
    demoLink: string,
    codeLink: string, 
    description: {
        technologies: string[],
        features: string[]
    }
}