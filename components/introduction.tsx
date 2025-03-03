import { Mail, Paperclip } from "lucide-react"
import { buttonVariants } from "./ui/button"
import Link from "next/link"
import Container from "./shared/container"

const Introduction = () => {
  return (
    <Container>
      <div className="text-center id=home">
        <h3 className="text-xl mb-3">hello i am</h3>
        <h1 className="text-4xl font-bold mb-3">Oscar Gomez</h1>
        <h2 className="text-2xl text-gray-400">Jr Developer</h2>
        <div className="flex items-center">
          <div className="flex flex-col md:flex-row gap-4 justify-between mt-10 mx-auto">
            <Link className={buttonVariants()} href='#contact'>
               <Mail className="mr-2"> </Mail>Contacta conmigo
            </Link>
            <Link className={buttonVariants({variant: 'secondary'})} href='/cv-oscar.pdf' target="_blank">
               <Paperclip className="mr-2"> </Paperclip>Descargar CV
            </Link>
          </div>
        </div>
        <img src="/profile.jpg" alt="Profile Pic" width={500} height={500}/> 
      </div>
    </Container>
  )
}

export default Introduction