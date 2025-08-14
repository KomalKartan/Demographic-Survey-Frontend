import React from 'react'
import { useState } from 'react'
import axios from 'axios'

const DemographicForm = () => {
      
  const [formData, setFormData] = useState({
    gender: '',
    age: '',
    occupation: '',
    income:''
  })
  
  const handleChange = (e:any)=>{
    
    setFormData({...formData, [e.target.name]: e.target.value})
  }

  const handleSubmit =async (e:any)=>{
    e.preventDefault()
    
    try{

        const response = await axios.post('http://localhost:3000/survey-demographic', formData)
        console.log('Form submitted successfully:', response.data)

        alert('Form submitted successfully!' + '\n' + 
            'Gender: ' + response.data.gender + '\n' +
            'Age: ' + response.data.age + '\n' +
            'Occupation: ' + response.data.occupation + '\n' +
            'Income: ' + response.data.income + '\n'
        )

        setFormData({
            gender: '',
            age: '',
            occupation: '',
            income:''
        })

    }
    catch(e){
        console.log('Error submitting form', e)
    }
  }
  return (
    <div className='flex flex-col items-center h-screen mt-8'>
        <h1 className='text-4xl font-light mt-5'>Demographic Survey</h1>
        <div className='w-2xl p-2 mt-5'>
            <form onSubmit={handleSubmit} className='m-2 p-6 pt-10 bg-gray-100 shadow-md shadow-gray-400'>

                <div className='m-4'>
                    <label className='text-lg font-medium'>Select your Gender</label><br></br>

                    <input type='radio' id='male' name='gender' value='male' required checked={formData.gender==='male'} onChange={handleChange}/>
                    <label htmlFor='male' className='pl-2 mr-5 text-lg'>Male</label>

                    <input type='radio' id='female' name='gender' value='female' checked={formData.gender==='female'} onChange={handleChange}/>
                    <label htmlFor='female' className='pl-2 mr-2 text-lg'>Female</label>
                </div>

                <div className='flex flex-col gap-2 m-4'>
                    <label htmlFor='age' className='text-lg font-medium'> What is your age?</label>
                    <input type='number' id='age' name='age' value={formData.age} required onChange={handleChange}
                    className='p-3 border border-gray-300 focus:outline-none focus:ring-1 focus:border-gray-400'/>
                </div>

                <div className='flex flex-col gap-2 m-4'>
                    <label className='text-lg font-medium'>What is your Occupation?</label>
                    <input type='text' id='occupation' name='occupation' value={formData.occupation} required onChange={handleChange}
                    className='p-3 border border-gray-300 focus:outline-none focus:ring-1 focus:border-gray-400'/>
                </div>

                <div className='flex flex-col gap-2 m-4'>
                    <label htmlFor='income' className='text-lg font-medium'>What is your income range?</label>
                    <select id='income' name='income' value={formData.income} required onChange={handleChange}
                    className='p-3 border border-gray-300 focus:outline-none focus:ring-1 focus:border-gray-400'>
                        <option value=''>Select Income</option>
                        <option value='Below $30000'>Below $30000</option>
                        <option value='$31000 - $50000'>$31000 - $50000</option>
                        <option value='$51000 - $100000'>$51000 - $100000</option>
                        <option value='$101000 - $150000'>$101000 - $150000</option>
                        <option value='$151000 - $200000'>$151000 - $200000</option>
                        <option value='$201000 - $250000'>$201000 - $250000</option>
                        <option value='Above $250000'>Above $250000</option>
                    </select>
                </div>
                <div className='flex justify-center m-10'>
                    <button id='submit' className='p-4 w-48 bg-blue-500 text-white text-lg rounded hover:bg-blue-600 hover:scale-110 active:bg-blue-700 active:scale-95 transition-transform duration-150'>Submit</button>
                </div>


            </form>
        </div>

    </div>
  )
}

export default DemographicForm