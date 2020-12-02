document.addEventListener("DOMContentLoaded", function(){ 
    let book = document.querySelector('.book');
    let content = document.querySelector('.content');
    let back = document.querySelector('.close');

    back.addEventListener('click', function(){
      book.style.display = '';
   
      setTimeout(function(){
        back.classList.remove('active');
        book.classList.remove('active');
        content.classList.remove('active');
        document.body.classList.remove('book-open');
      }, 1);
    });
    
    book.addEventListener('click', function(){
      back.classList.add('active');
      book.classList.add('active');
      content.classList.add('active');
      document.body.classList.add('book-open');
      
      setTimeout(function(){
        book.style.display = 'none';
      }, 1000);
    });

  });

