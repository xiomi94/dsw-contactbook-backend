import { Contact } from '../models/contact.model.js'

export function getAllContacts(req, res) {
  Contact.findAll().then((data) => {
    res.send(data);
  }).catch(err => {
    res.status(500).send( {
      message: err.message ?? 'Some error ocurred'
    })
  })
}

export function addNewContact(req, res) {
  const contact = {
    name: req.body.name,
    phoneNumber: req.body.phoneNumber,
    email: req.body.email
  }

  Contact.create(contact).then((data) => {
    res.send(data)
  }).catch(err => {
    res.status(500).send({
      message: err.message ?? 'Some error ocurred'
    })
  })
}

export function getContactById(req, res) {
  const id = req.params.id;

  Contact.findOne({
    where: {id: id}
  }).then((data) => {
    if (data) {
      res.send(data);
    }else {
      res.status(404).send({
        message: `Cannot find Contact with id=${id}`
      });
    }
  }).catch(err => {
    res.status(500).send({
      message: `Error retrieving Contact with id=${id}`
    });
  });
}

export function updateContact(req, res) {
  const id = req.params.id;

  Contact.update(
    req.body, { where: {id: id} 
  }).then(num => {
    if (num == 1) {
      res.send({
        message: 'Contact was updated succesfully'
      })
    }else {
      res.send({
        message: `Cannot update Contact with id=${id}`
      });
    }
  }).catch(err => {
    res.status(500).send({
      message: `Error updating Contact with id=${id}`
    });
  });
}

export function deleteContact(req, res) {
  const id = req.params.id;

  Contact.destroy({
    where: {id: id}
  }).then(num => {
    if (num == 1) {
      res.send({
        message: 'Contact was deleted succesfully'
      });
    }else {
      res.status(404).send({
        message: `Cannot delete Contact with id=${id}. Maybe Contact was not found!`
      });
    }
  }).catch(err => {
    res.status(500).send({
      message: `Could not delete Contact with id=${id}`
    });
  });
}