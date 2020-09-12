//set initial count
let count=0;

//select value and butons
const value=document.querySelector('#value');
const btns=document.querySelectorAll('.btn');
btns.forEach(function(btn){
    btn.addEventListener('click', function(e){
        const styles=e.currentTarget.classList;//check e event and its method detailed on documentation
        if(styles.contains('decrease')){
            count--;
        }else if(styles.contains('reset')){
            count=0;
        }else count++;
        

        value.textContent=count;
    });
});
