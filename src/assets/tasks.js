//mock data file, this is created to populate frontend with dummy tasks, 
//in production this is removed and data is called from backend using get Request.
export const fetchID = () => Math.random().toString(26).substring(2, 8);

let tasks = {
    resources: {
        title: "resources",
        items: [
            {
                id: fetchID(),
                title: "Send the Figma file to Nakul",
                comments: [],
            },
            {
                id: fetchID(),
                title: "Complete the project proposal",
                comments: [],
            },
        ],
    },
    todo: {
        title: "todo",
        items: [
            {
                id: fetchID(),
                title: "Send the Figma file to Nakul",
                comments: [],
            },
            {
                id: fetchID(),
                title: "Complete the project proposal",
                comments: [],
            },
        ],
    },
    doing: {
        title: "doing",
        items: [
            {
                id: fetchID(),
                title: "Review GitHub issues",
                comments: [
                    {
                        name: "David",
                        text: "Ensure you review before merging",
                        id: fetchID(),
                    },
                ],
            },
            {
                id: fetchID(),
                title: "Implement user authentication",
                comments: [
                    {
                        name: "Sarah",
                        text: "Consider using JWT for authentication",
                        id: fetchID(),
                    },
                ],
            },
        ],
    },
    done: {
        title: "done",
        items: [
            {
                id: fetchID(),
                title: "Create technical contents",
                comments: [
                    {
                        name: "Nakul",
                        text: "Make sure you check the requirements",
                        id: fetchID(),
                    },
                ],
            },
            {
                id: fetchID(),
                title: "Deploy the application",
                comments: [
                    {
                        name: "John",
                        text: "Double-check the deployment process",
                        id: fetchID(),
                    },
                ],
            },
        ],
    },
};

export const tasksJSON = JSON.stringify(tasks);
