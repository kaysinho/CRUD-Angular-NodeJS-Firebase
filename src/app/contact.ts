export class Contact {
    name:string
    email:string
    genre: boolean
    cellPhone: number
    constructor(_name:string, _email:string, _genre: boolean, _cellPhone: number){
    
        this.name = _name
        this.email = _email
        this.genre = _genre
        this.cellPhone = _cellPhone
    }
}
