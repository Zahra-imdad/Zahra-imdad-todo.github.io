class Todo{
    todo=[];
    constructor(){
        this.input = document.getElementById('todoInput');
        this.addBtn = document.getElementById('button')
        this.todoList = document.getElementById('todoList')

        this.addListEvent();
        this.removeToDo();
        this.editToDo();
        this.checkbox();
        this.tickCheckBox();
    }

    addListEvent(){
        this.addBtn.addEventListener('click',(e)=>{
            e.preventDefault();
            this.addToDo();
        })
    }
    addToDo(){
        const inputText = this.input.value.trim();
        if(inputText===''){
            alert("Write Something !!")
        }else{
            this.createLi();
        }
    }

    createLi(){
        globalThis.li = document.createElement('li');
        li.className = 'list-group-item d-flex justify-content-between p-3';
        li.innerHTML = `<span>
                        <input type="checkbox" />
                        <div class="edit-input d-inline d-none">
                            <input type="text" placeholder="Updated value" />
                            <button class="btn btn-sm btn-primary">Update</button>
                            <button class="btn btn-sm btn-danger">Cancel</button>
                        </div>
                        <p class="todo-input d-inline">${this.input.value}</p>
                        </span>
                        <div>
                        <i class="bi bi-pencil-square"></i>
                        <i class="bi bi-trash"></i>
                        </div>`;
        todoList.append(li);

        this.edit = li.querySelector('div > i:first-child');
        this.trash = li.querySelector('div > i:last-child');
        this.editInput = li.querySelector('.edit-input>input');
        this.p = li.querySelector('p.todo-input');
        this.editContainer = li.querySelector('.edit-input');
        this.checkbox = li.querySelector('input[type="checkbox"]');
        
        if(this.edit.clicked==true){
            
            console.log("hy")
        }
        
        this.removeToDo(this.trash,li)
        this.tickCheckBox(this.checkbox,this.p)
        
    }

    toggleUpdate = (p,editContainer) => {
        p.classList.toggle('d-none');
        editContainer.classList.toggle('d-none');
      };

    removeToDo(btn,element){
        btn.addEventListener('click', () => {
            element.remove();
          });
    }

    tickCheckBox(name,elem){
        name.addEventListener('change', (e) => {
            elem.classList.toggle('done'); // e.target.checked
          });
    }

   
    toggleUpdate(elem,elem2){
        elem.classList.toggle('d-none');
        elem2.classList.toggle('d-none');
    }

     editToDo(btn,editInput){
        btn.addEventListener('click', () => {
            this.editInput.value = this.input.value;
            console.log("edit")
          });
        this.toggleUpdate(this.p,this.editContainer);
    }

    cancelEdit(cancelBtn){
        this.cancelBtn.addEventListener('click', () => {
            this.toggleUpdate();
          });
    }

    
}

const todo = new Todo();
todo.ShowVal()


