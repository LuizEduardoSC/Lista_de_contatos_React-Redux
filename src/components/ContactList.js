import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removeContact, editContact } from '../redux/contactsSlice'
import { Button, ContactItem, ContactActions } from '../styles'

export default function ContactList() {
  const contacts = useSelector((state) => state.contacts)
  const dispatch = useDispatch()
  const [editingId, setEditingId] = useState(null)
  const [form, setForm] = useState({ name: '', email: '', phone: '' })

  const handleEdit = (contact) => {
    setEditingId(contact.id)
    setForm(contact)
  }

  const handleSave = () => {
    dispatch(editContact({ id: editingId, updatedContact: form }))
    setEditingId(null)
    setForm({ name: '', email: '', phone: '' })
  }

  // 👉 Aqui entra a função de remover com confirmação
  const handleRemove = (id) => {
    if (window.confirm('Tem certeza que deseja remover este contato?')) {
      dispatch(removeContact(id))
    }
  }

  return (
    <ul>
      {contacts.map((contact) => (
        <ContactItem key={contact.id}>
          {editingId === contact.id ? (
            <>
              <input
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
              />
              <input
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
              />
              <input
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
              />
              <Button onClick={handleSave}>Salvar</Button>
            </>
          ) : (
            <>
              <div>
                <strong>{contact.name}</strong> <br />
                <span>
                  {contact.email} | {contact.phone}
                </span>
              </div>
              <ContactActions>
                <Button onClick={() => handleEdit(contact)}>Editar</Button>
                <Button
                  variant="danger"
                  onClick={() => handleRemove(contact.id)}
                >
                  Remover
                </Button>
              </ContactActions>
            </>
          )}
        </ContactItem>
      ))}
    </ul>
  )
}
