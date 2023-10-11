import React from 'react'
import { Link } from 'react-router-dom'
const Login = () => {
    return (
        <div className="flex justify-center">
            <form onSubmit={() => console.log("")}

                className='m-[50px] text-start bg-white shadow-md py-[50px] px-[100px]' >


                <div className='mb-[20px]'>
                    <label htmlFor="" className='mb-[10px] text-start '> Email</label><br />
                    <input id="desc" type="text" className=' w-[300px] h-[50px] border pl-[10px] focus:outline-none rounded-md' />

                </div>
                <div className='mb-[20px]'>
                    <label htmlFor="" className='mb-[10px] text-start '> Password</label><br />
                    <input id="desc" type="text" className=' w-[300px] h-[50px] border pl-[10px] focus:outline-none rounded-md' />

                </div>

                <div>
                    <button type="submit" className='btn btn-primary'>
                        <Link to="/home"> Login</Link>
                    </button>
                </div>

                <p>Don't have an account <span className='text-green-400'><Link to="/">Register here</Link></span></p>




            </form>
        </div>
    )
}

export default Login