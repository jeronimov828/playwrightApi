export interface PostCrearUsuarios {
    id: number,
    email: string,
    first_name: string,
    last_name: string,
    avatar: string
}

export class BodyPostCrearUsuarios {
    private bodyPostCrearUsuarios: PostCrearUsuarios;
    constructor() {
        this.bodyPostCrearUsuarios = {
            "id": 7,
            "email": "juanito@gmail.com",
            "first_name": "juanito",
            "last_name": "Andres",
            "avatar": "https://reqres.in/img/faces/1-image.jpg",
        }
    }
    toJSON(): string {
        return JSON.stringify(this.bodyPostCrearUsuarios);
    }
}
