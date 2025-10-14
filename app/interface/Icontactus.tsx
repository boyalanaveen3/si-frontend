
export  interface IContactus{
    contactusdata:ContactForm | null
    fetchcontactus:()=>Promise<IResponse<ContactForm>>
}





interface IObj {
    [key: string]: any;
  }
  interface IResponse<T> {
    status: boolean;
    data?: T;
    error?: string;
    message?: string;
  }
export interface ContactForm {
    name: string;
    email: string;
    subject: string;
    message: string;
  }
  