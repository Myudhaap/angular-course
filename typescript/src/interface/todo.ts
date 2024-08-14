export interface Todo {
    id: string | number
    task: string
    isCompleted: boolean
}

export interface TodoAuthor extends Todo {
    createdBy: string
    updatedBy: string
}