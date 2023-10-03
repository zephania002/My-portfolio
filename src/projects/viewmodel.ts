import axios from "axios";
export interface Project {
    name: string,
    image: string,
    url: string,
    gitName: string,
    stars: string,
    forks:string,
    description?: string,
    tags: string[]
}

export let projects: Project[] = [
    {
        name: "NoShame",
        image: "noshame.png",
        url: "https://github.com/stephenWanjala/No-shame",
        gitName: "stephenWanjala/No-shame",
        stars:"?",
        forks:"?",
        description: "An application to track women's menstrual cycle and provide information on menstrual health and awereness on menstrual hygiene",
        tags: ["Android","Kotlin", "Jetpack Compose"]
    },
    {
        name: "sakko",
        image: "sakko.jpg",
        url: "https://github.com/stephenWanjala/sakko",
        gitName: "stephenWanjala/sakko",
        description: "A web platform that aims to eliminate the exploitation of rural milk farmers by middlemen. ",
        stars:"?",
        forks:"?",
        tags: ["python Django","Rest_framework","jwt"]
    },
    {
        name: "ktor-jwtAuth ",
        image: "ktor.png",
        url: "https://github.com/stephenWanjala/ktor-jwtAuth",
        gitName: "stephenWanjala/ktor-jwtAuth",
        stars:"?",
        forks:"?",
        description: "A simple ktor application with jwt authentication (Learning how to use ktor)",
        tags: ["Kotlin","ktor","jwt","mongodb"]
    },
    {
        name: "bookstore ",
        image: "bookstore.png",
        url: "https://github.com/stephenWanjala/bookstore",
        gitName: "stephenWanjala/bookstore",
        stars:"?",
        forks:"?",
        description:"This repository contains a CRUD (Create, Read, Update, Delete) API for a bookstore implemented using the Go programming language (Golang) and the GORM ORM library with MySQL database",
        tags: ["Go","gorm","mysql"]
    }
]

 export interface projectWithStarsCallBack {
    (result: Project[]) : void
}

export function getProjectWithStars (onFinish:projectWithStarsCallBack){
    let newProjects: Project[] = []
    projects.forEach((project)=>{
        axios.get("https://api.github.com/repos/" + project.gitName)
        .then((response) => {
            project.stars = response.data.stargazers_count;
            project.forks = response.data.forks;

            newProjects.push(project);

            if(newProjects.length == projects.length){
                newProjects.sort((a,b) => {
                    if(a.stars > b.stars){return -1}
                    else if(a.stars < b.stars){return 1}
                    else {return 0}
                });

                onFinish(newProjects);
                // console.log(newProjects.forEach((project)=>{console.log(project.stars)}));
            }
        })
        .catch((error) => {console.error(error)});
    });
}

export function getImageUrl(path: string): string {
    return new URL(`/src/assets/images/${path}`, import.meta.url).href;
}

export function openLink(url: string) {
    window.open(url, "_blank");
}