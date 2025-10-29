import React from 'react'
import ContactForm from './components/ContactForm'
import ContactList from './components/ContactList'
import { Container, Title } from './styles'

function App() {
  return (
    <Container>
      <Title>Lista de Contatos</Title>
      <ContactForm />
      <ContactList />
    </Container>
  )
}

export default App
