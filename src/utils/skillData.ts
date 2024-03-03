interface ProgrammingLanguage {
    id: number;
    name: string;
    image: string;
}

interface SkillData {
    programmingLanguage: ProgrammingLanguage[];
    frontEnd: ProgrammingLanguage[];
    backEnd: ProgrammingLanguage[];
    db: ProgrammingLanguage[];
    otherTool: ProgrammingLanguage[];
}

export default function skillData(): SkillData {
    const programmingLanguage: ProgrammingLanguage[] = [
        {
            id: 1,
            name: "JavaScript",
            image: "/assets/prog-lang/js.svg",
        },
        {
            id: 2,
            name: "TypeScript",
            image: "/assets/prog-lang/ts.png",
        },
        {
            id: 3,
            name: "php",
            image: "/assets/prog-lang/php.png",
        },
    ];

    const frontEnd: ProgrammingLanguage[] = [
        {
            id: 1,
            name: "JavaScript",
            image: "/assets/frontend/react.svg",
        },
        {
            id: 2,
            name: "NextJs",
            image: "/assets/frontend/nextjs.png",
        },
        {
            id: 3,
            name: "CSS3",
            image: "/assets/frontend/css3.svg",
        },
        {
            id: 4,
            name: "HTML & HTML5",
            image: "/assets/frontend/html.png",
        },
        {
            id: 5,
            name: "Material UI",
            image: "/assets/frontend/mui.png",
        },
        {
            id: 6,
            name: "Redux",
            image: "/assets/frontend/redux.svg",
        },
        {
            id: 7,
            name: "Sass",
            image: "/assets/frontend/sass.svg",
        },
        {
            id: 8,
            name: "Tailwind CSS",
            image: "/assets/frontend/tailwindcss.svg",
        },

    ];

    const backEnd: ProgrammingLanguage[] = [
        {
            id: 1,
            name: "NodeJS",
            image: "/assets/backend/nodejs.svg",
        },
        {
            id: 2,
            name: "ExpressJS",
            image: "/assets/backend/express.png",
        },
        {
            id: 3,
            name: "Socket",
            image: "/assets/backend/Socket.svg",
        },
        {
            id: 4,
            name: "JWT",
            image: "/assets/backend/jwt.svg",
        },
        {
            id: 5,
            name: "Php",
            image: "/assets/prog-lang/php.png",
        },
    ];

    const db: ProgrammingLanguage[] = [
        {
            id: 1,
            name: "MongoDB",
            image: "/assets/db/mongodb.svg",
        },
        {
            id: 2,
            name: "MySQL",
            image: "/assets/db/mysql.png",
        },
        {
            id: 3,
            name: "PostgreSQL",
            image: "/assets/db/postgresql.svg",
        },
    ];

    const otherTool: ProgrammingLanguage[] = [
        {
            id: 1,
            name: "JavaScript",
            image: "/assets/tools/postman.svg",
        },
        {
            id: 2,
            name: "Git",
            image: "/assets/tools/git.svg",
        },
        {
            id: 3,
            name: "JIRA",
            image: "/assets/tools/jira.svg",
        },
        {
            id: 4,
            name: "Notion",
            image: "/assets/tools/notion.svg",
        },
        {
            id: 5,
            name: "Docker",
            image: "/assets/tools/docker.svg",
        },
        {
            id: 6,
            name: "Redis",
            image: "/assets/tools/redis.svg",
        },
    ];

    return {
        programmingLanguage,
        frontEnd,
        backEnd,
        db,
        otherTool,
    };
}
