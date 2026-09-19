import { useState } from 'react'

import Perfil from './Perfil'

import './App.css'

function App() {

  return (
    <>
    <Perfil
     img="https://i.redd.it/yall-want-some-profile-pictures-v0-s78vakppx9ze1.jpg?width=736&format=pjpg&auto=webp&s=0d26177b5f1fc9e9a0d8f9a0335f558d804c341a"
     newImg="https://i.redd.it/yall-want-some-profile-pictures-v0-7rw4xzppx9ze1.jpg?width=736&format=pjpg&auto=webp&s=be2aa759638f10036eb8a44c129561ab0e52d963"
     nome="Raffael Thauã"
    />

    <Perfil
     img="https://i.pinimg.com/originals/dd/f4/a3/ddf4a310117af4ebf55114ec2ce57269.jpg"
     newImg="https://i.pinimg.com/736x/e6/ac/dd/e6acdd07921def4b6ffb5197fdc3bf1e.jpg"
     nome="Reginaldo Neto"
    />
    </>
  )
}

export default App
