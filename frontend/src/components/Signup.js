import React, {useState} from 'react'
import { Alert, Avatar, Box, Button, Checkbox, FormControlLabel, FormGroup, Grid, IconButton, Input, InputAdornment, Link, Paper, TextField, Typography } from "@mui/material";

const Signup = () => {

    const [credentials, setCredentials] = useState({
        email: '',
        password: '',
        password2: ''
    })

    const handleSubmit = (e) => { 
        e.preventDefault()
        console.log('testing submit')
    }

    const handleChange = (e) => { 
        setCredentials({
            ...credentials,
            [e.target.id] : e.target.value
        })
    }


  return (
    <div>
        <form>
            <div className='email'>
                <TextField 
                    type="text"
                    placeholder='Enter Email'
                    id='email'
                    value={credentials.email}
                    
                />
            </div>
            <div className='password'>
                <TextField 
                    type='password'
                    placeholder='Enter Password'
                    id='password'
                />
            </div>
            <div className='password2'>
                <TextField 
                    type="password"
                    placeholder='Confirm Password'
                    id='password2'
                    required
                />
            </div>
            <div>
                <Button onClick={handleSubmit}>Submit</Button>
            </div>

        </form>
        
    </div>
  )
}

export default Signup