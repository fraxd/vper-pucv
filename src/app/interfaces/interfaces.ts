


export interface RespuestaPosts {
    ok: boolean;
    pagina: number;
    posts: Post[];
  }
  
  export interface Post {
    imgs: string[];
    _id: string;
    nombreProducto: string;
    ingProducto: string;
    usuario: Usuario;
    created: string;
  }
  
  export interface Usuario {
    avatar: string;
    _id: string;
    nombre: string;
    email: string;
  }