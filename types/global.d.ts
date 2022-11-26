export {}; 

declare global { 
    interface ITodolists {
        key: String,
        id: Number, 
        task: String,
        isComplete: Boolean
    }    
}