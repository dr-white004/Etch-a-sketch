// const butto = document.querySelector('.ask') 
// butto.onclick= create

function breed(){
  siz =  prompt('what grid size do you want');
  if(siz > 100 || siz < 2){
      alert('number should range between 2 and 100');
  }
  else
        size = parseInt(siz);
  return size;
}


//parent element

function create( ){
      let l =breed()
      const container = document.querySelector('.container');
      let contain = container.querySelectorAll('div')
      contain.forEach((div)=> div.remove())
      container.style.gridTemplateColumns = `repeat(${l} ,1fr)`;
      container.style.gridTemplateRows = `repeat(${l} , 1fr)`;
      
      
            for(let i =0 ;i < (l*l) ;i++){
                  const first = document.createElement('div');   
                  first.classList.add('first')  
                  container.insertAdjacentElement('beforeend',first);
                        }
    
                        
         
const sensitive = document.querySelectorAll('.first');
sensitive.forEach((grid) => grid.addEventListener('mouseover',displayChange));

function displayChange(event){
      console.log(event);
      let answer = event.target;
      answer.classList.add('change');
}                                  
}


 

