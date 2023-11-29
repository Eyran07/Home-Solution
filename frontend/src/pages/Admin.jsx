import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Button,
  Input,
  Switch,
} from '@chakra-ui/react';

const Admin = () => {
  const [users, setUsers] = useState([]);
  const [editingUserId, setEditingUserId] = useState(null);
  const [editedUser, setEditedUser] = useState({ name: '', password: '', admin: false });
  const [addingNew, setAddingNew] = useState(false);
  const [newUser, setNewUser] = useState({ name: '', password: '', admin: false });

  const fetchUsers = () => {
    axios
      .get("http://localhost:6060/users")
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => {
        console.error("Erreur lors de la récupération des utilisateurs", error);
      });
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const startEdit = (user) => {
    setEditingUserId(user._id);
    setEditedUser({ ...user });
  };

  const cancelEdit = () => {
    setEditingUserId(null);
  };

  const saveEdit = (deleteUser = false) => {
    if (deleteUser) {
      axios.delete(`http://localhost:6060/users/${editingUserId}`)
        .then(response => {
          fetchUsers();
          cancelEdit();
        })
        .catch(error => {
          console.error('Erreur lors de la suppression', error);
        });
    } else {
      axios.put(`http://localhost:6060/users/${editingUserId}`, editedUser)
        .then(response => {
          fetchUsers();
          cancelEdit();
        })
        .catch(error => {
          console.error('Erreur lors de la mise à jour', error);
        });
    }
  };

  const saveNewUser = () => {
    // Envoyer la requête POST pour créer le nouvel utilisateur
    axios
      .post("http://localhost:6060/users", newUser)
      .then((response) => {
        fetchUsers();
        setAddingNew(false);
        setNewUser({ name: "", password: "", admin: false });
      })
      .catch((error) => {
        console.error("Erreur lors de la création", error);
      });
  };

  const deleteUser = (userId) => {
    axios
      .delete(`http://localhost:6060/users/${userId}`)
      .then((response) => {
        fetchUsers(); // Recharger la liste des utilisateurs après la suppression
      })
      .catch((error) => {
        console.error("Erreur lors de la suppression de l’utilisateur", error);
      });
  };

  return (
    <TableContainer>
      <Table variant="simple">
        <Thead>
          <Tr>
            <Th>Nom</Th>
            <Th>mot de passe</Th>
            <Th>Admin</Th>
            <Th>Modifier</Th>
          </Tr>
        </Thead>
        <Tbody>
          {users.map(user => (
            <Tr key={user._id}>
              {editingUserId === user._id ? (
                <>
                  <Td>
                    <Input value={editedUser.name} onChange={(e) => setEditedUser({ ...editedUser, name: e.target.value })} />
                  </Td>
                  <Td>
                    <Input value={editedUser.password} onChange={(e) => setEditedUser({ ...editedUser, password: e.target.value })} />
                  </Td>
                  <Td>
                    <Switch isChecked={editedUser.admin} onChange={(e) => setEditedUser({ ...editedUser, admin: e.target.checked })} />
                  </Td>
                  <Td>
                    <Button colorScheme="blue" onClick={() => saveEdit()}>Valider</Button>
                    <Button colorScheme="red" ml={2} onClick={() => deleteUser(editingUserId)}>Supprimer</Button>
                    <Button colorScheme="gray" ml={2} onClick={cancelEdit}>Annuler</Button>
                  </Td>
                </>
              ) : (
                <>
                  <Td>{user.name}</Td>
                  <Td>{user.password}</Td>
                  <Td>
                    <Switch isChecked={user.admin} isReadOnly />
                  </Td>
                  <Td>
                    <Button colorScheme="green" onClick={() => startEdit(user)}>Modifier</Button>
                  </Td>
                </>
              )}
            </Tr>
          ))}
          {addingNew && (
            <Tr>
              <Td>
                <Input placeholder="Nom" value={newUser.name} onChange={(e) => setNewUser({ ...newUser, name: e.target.value })} />
              </Td>
              <Td>
                <Input placeholder="Mot de passe" value={newUser.password} onChange={(e) => setNewUser({ ...newUser, password: e.target.value })} />
              </Td>
              <Td>
                <Switch isChecked={newUser.admin} onChange={(e) => setNewUser({ ...newUser, admin: e.target.checked })} />
              </Td>
              <Td>
                <Button colorScheme="blue" onClick={saveNewUser}>Créer</Button>
                <Button colorScheme="gray" onClick={() => setAddingNew(false)}>Annuler</Button>
              </Td>
            </Tr>
          )}
          {!addingNew && (
            <Tr>
              <Td colSpan={4}>
                <Button colorScheme="green" onClick={() => setAddingNew(true)}>+</Button>
              </Td>
            </Tr>
          )}
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export default Admin;