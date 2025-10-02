import express from 'express';
import { addNewContact, deleteContact, getAllContacts, getContactById, updateContact } from '../controllers/contact.controller.js';

export function contactBookRouter(app) {

  //Create contacts route system
  const router = express.Router();
  router.get('/', getAllContacts);
  router.get('/:id', getContactById);
  router.post('/', addNewContact);
  router.put('/:id', updateContact);
  router.delete('/:id', deleteContact);

  //Add the route system to our express app with suffix
  app.use('/api/contacts', router);
}