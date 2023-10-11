import { Link } from "react-router-dom"
import { FormEvent, useRef } from "react"
import { useNavigate } from "react-router-dom"
const SignUp = () => {
 
    const navigate = useNavigate()
      const person = {
        nameRef : "",
        emailRef : "",
        passRef : ""
      }
     const nameRef = useRef<HTMLInputElement>(null)
     const emailRef = useRef<HTMLInputElement>(null)
    const  passRef = useRef<HTMLInputElement>(null)

    const handleSubmit = async(e:FormEvent)=>{
        try {
            e.preventDefault()
            if(nameRef.current === null)return;
            person.nameRef = nameRef.current.value
            if(emailRef.current === null)return;
            person.emailRef = emailRef.current.value
            if(passRef.current === null)return;
            person.passRef = passRef.current.value
            console.log(person)
            const payload = {...person}
    
            const res = await fetch("http://localhost:5000/task", {
                method: "POST",
                headers: {
                  "Content-type": "application/json"
                },
                body: JSON.stringify(payload)
              })
              if (res.status === 200){
                navigate("/login")
              }
        } catch (error) {
             console.log(error)
        }


          


    }

    return (
        <div className="flex justify-center">
            <form onSubmit={handleSubmit}

                className='m-[50px] text-start bg-white shadow-md py-[50px] px-[100px]' >

                <div className='mb-[20px]'>
                    <label htmlFor="" className='mb-[10px] text-start '> UserName</label><br />
                    <input ref = {nameRef} id="desc" type="text" className=' w-[300px] h-[50px] border pl-[10px] focus:outline-none rounded-md' />

                </div>
                <div className='mb-[20px]'>
                    <label htmlFor="" className='mb-[10px] text-start '> Email</label><br />
                    <input  ref = {emailRef} id="desc" type="text" className=' w-[300px] h-[50px] border pl-[10px] focus:outline-none rounded-md' />

                </div>
                <div className='mb-[20px]'>
                    <label htmlFor="" className='mb-[10px] text-start '> Password</label><br />
                    <input ref = {passRef} id="desc" type="text" className=' w-[300px] h-[50px] border pl-[10px] focus:outline-none rounded-md' />

                </div>

                <div>
                    <button type="submit" className='btn btn-primary' >
                        Submit
                    </button>
                </div>

                <p>Already have an account <span className="text-green-400"><Link to="/login">Login</Link></span></p>




            </form>
        </div>

    )
}

export default SignUp