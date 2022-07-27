import { api, LightningElement } from 'lwc';



export default class TodoItem extends LightningElement {

    @api // public trackable property

    itemName = 'default';



     showTodo = false;

}