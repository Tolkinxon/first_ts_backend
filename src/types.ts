export type Error = {
    status:number,
    message:string
}

export type ServerConfig = {
    databasePath: (filename:string) => string
}