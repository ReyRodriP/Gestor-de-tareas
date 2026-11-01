const tarea = document.getElementById('datos');
const entrar = document.getElementById('entrada');
const contenedor = document.querySelector('.contenedor');


entrar.addEventListener('click', asignar = () => {
        //Para que no entren nada vacio
        if(tarea.value.trim() === "") return;

        //alert(tarea.value.trim());  //Ojo: El metodo trim es opcional para quitar los espacios

        //Para crear los elementos
        const newTask = document.createElement('p');
        const newText = document.createElement('span');
        const opc1 = document.createElement('a');
        const opc2 = document.createElement('a');
        const icon1 = document.createElement('img');
        const icon2 = document.createElement('img');

        //Agregamos el texto
        newText.innerText = tarea.value.trim();

        //Poner las imagenes
        icon1.src = "assets/Success.png";
        icon2.src = "assets/delete.png";

        //Entramos los elementos dentro de otros elementos
        
        newTask.appendChild(newText);
        newTask.appendChild(opc1);
        newTask.appendChild(opc2);

        opc1.appendChild(icon1);
        opc2.appendChild(icon2);

        contenedor.append(newTask);

        tarea.value = "";

        opc1.addEventListener('click', check = () =>{
                newText.style.textDecoration = "line-through";
        });

        opc2.addEventListener('click', deleted = () =>{
                newTask.remove('p');
        });
});

