import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addContact } from '../redux/contactsSlice'
import { Form, Button } from '../styles'

export default function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', phone: '' })
  const dispatch = useDispatch()

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!form.name || !form.email || !form.phone) return
    dispatch(addContact(form))
    setForm({ name: '', email: '', phone: '' })
  }

  return (
    <Form onSubmit={handleSubmit}>
      <input
        name="name"
        placeholder="Nome completo"
        value={form.name}
        onChange={handleChange}
      />
      <input
        name="email"
        placeholder="E-mail"
        value={form.email}
        onChange={handleChange}
      />
      <input
        name="phone"
        placeholder="Telefone"
        value={form.phone}
        onChange={handleChange}
      />
      <Button type="submit">Adicionar</Button>
    </Form>
  )
}
