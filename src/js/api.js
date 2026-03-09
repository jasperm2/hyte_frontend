import '../css/api.css';
import {
  getItems,
  getItemById,
  deleteItemById,
  addItem,
  updateItemById,
  loadItemToPutForm,
} from './items';

console.log('Scripti starttaa');

console.log('Valmis');

const getItemsBtn = document.querySelector('.get_items');
getItemsBtn.addEventListener('click', getItems);

const getForm = document.querySelector('.get-item-form');
getForm.addEventListener('submit', getItemById);

const deleteBtn = document.querySelector('.delete-item');
deleteBtn.addEventListener('click', deleteItemById);

// Etsitään formi, ei itse nappulaa ja tutkitaan SUBMIT eventtiä
const addItemForm = document.querySelector('.add-item-form');
addItemForm.addEventListener('submit', addItem);

const loadItemBtn = document.querySelector('.load-item');
loadItemBtn.addEventListener('click', loadItemToPutForm);

const putForm = document.querySelector('.put-item-form');
putForm.addEventListener('submit', updateItemById);
