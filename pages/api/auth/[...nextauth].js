//Importamos librerias de NextAuth que fueron previamente instaladas con un comando npm
import NextAuth from "next-auth";

//Importamos la API de google desde la libreria de Auth
import GoogleProvider from "next-auth/providers/google";

//Esta parte es para que las credenciales que proporciona la API no solamente se guarden en navegador
//sino tambien en nuestra base de datos
import { PrismaAdapter } from "@next-auth/prisma-adapter"
//Importamos desde una ruta de nuestro proyecto una parte de codigo necesaria para la conexion de la BD
import prisma from "../../../lib/prismadb" 

//Exportamos la funcion que nos devolvera lo que requerimos
export default NextAuth ({
  // Configuramos los provedores que necesitemos, en este caso solamente sera Google
  //Adaptamos el export para que se conecte con nuestra base de datos en Prisma
  adapter: PrismaAdapter(prisma),
  providers: [
   //Provedor de google que requiere el id del cliente, es decir, la relacion dirfecta con nuestra API
   //Tambien sera necesario transferir el secreto del cliente, esto como medida de seguridad

   //Las palabras que estan despues del .env son directamente transferidas desde el archivo .env
   // que esta en nuestro proyecto 
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    })
  ]
  
 
})

