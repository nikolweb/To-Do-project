let mytasks=document.getElementsByClassName("tasks")[0];

function creator(){
    const task=document.createElement("div");
    task.className="task"
    
    const userTitle=prompt("عنوان کار خود را وارد کنید:");
    
    if(userTitle){
        const titleElement=document.createElement("h2");
        titleElement.id="task_title";
        titleElement.innerHTML=userTitle;

        const userDescripton=prompt("لطفا توضیحات کار خود را وارد کنید: ");
        if(userDescripton){
            const descriptionElement=document.createElement("p");
            descriptionElement.id="task_discription";
            descriptionElement.innerHTML=userDescripton;

            task.append(titleElement);
            task.append(descriptionElement);

            mytasks.append(task);
        }else{
            alert("لطفا توضیحات خود را درست وارد کنید.");
        }


    }else{
        alert("لطفا مقدار عنوان کار خود را درست وارد کنید!");
    }
}

/*function remover(){
    const task=document.querySelector('.task');
    if(task){
        task.remove();
    }else{
        alert("هیچ کاری برای حذف کردن وجود ندارد.")
    }
}*/

function remover(){
    const tasklist=document.querySelectorAll('.task');
    if(tasklist.length>0){
        const lasttask=tasklist[tasklist.length-1];
        lasttask.remove();
    }
    else{
        alert("توجه !‌کاری برای حذف کردن وجود ندارد.");
    }
}