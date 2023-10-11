import { FormEvent, useRef } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
const Login = () => {     
    const navigate = useNavigate()
      const person = {
        
        emailRef : "",
        passRef : ""
      }
    
     const emailRef = useRef<HTMLInputElement>(null)
    const  passRef = useRef<HTMLInputElement>(null)

    const handleLogin = async(e:FormEvent)=>{
        try {
            e.preventDefault()
       
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
                navigate("/home")
              }
        } catch (error) {
             console.log(error)
        }


          


    }
    return (
        <div className="flex justify-center">
            <form onSubmit={handleLogin}

                className='m-[50px] text-start bg-white shadow-md py-[50px] px-[100px]' >


                <div className='mb-[20px]'>
                    <label htmlFor="" className='mb-[10px] text-start '> Email</label><br />
                    <input ref={emailRef} id="desc" type="text" className=' w-[300px] h-[50px] border pl-[10px] focus:outline-none rounded-md' />

                </div>
                <div className='mb-[20px]'>
                    <label htmlFor="" className='mb-[10px] text-start '> Password</label><br />
                    <input  ref={passRef} id="desc" type="text" className=' w-[300px] h-[50px] border pl-[10px] focus:outline-none rounded-md' />

                </div>

                <div>
                    <button type="submit" className='btn btn-primary'>
                         Login
                    </button>
                </div>

                <p>Don't have an account <span className='text-green-400'><Link to="/">Register here</Link></span></p>




            </form>
        </div>
    )
}

export default Login