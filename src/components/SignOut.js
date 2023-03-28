
import React from 'react'
import { auth } from '../firebase-config.js'
import { Button } from '@material-ui/core'

function SignOut(){
  return (
    <div>
        <Button onClick={() => auth.signOut()}>Logout</Button>
    </div>
  )
}

export default SignOut
