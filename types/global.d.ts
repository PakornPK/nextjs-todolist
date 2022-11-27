export {}; 

declare global { 
    interface ITodolists {
        key: String,
        id: number, 
        task: String,
        isComplete: Boolean
    }    
}