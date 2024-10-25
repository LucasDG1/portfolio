const words = [
    "Hello there!",  
    "Hallo daar!", 
    "¡Hola!",        
    "Bonjour!",     
    "Ciao!",         
    "Guten Tag!",   
    "Olá!",             
    "Hej!",          
    "سلام!",               
    "你好!",                 
    "こんにちは!",            
    "안녕하세요!",           
    "Merhaba!",      
    "שלום!",                
    "Sawubona!",  
    "Jambo!",        
    "Salve!",      
    "Здравствуйте!",        
    "Aloha!",              
    "नमस्ते!",              
    "السلام عليكم!",       
    "Hallo!",          
    "Sveiki!",       
    "Kamusta!",       
    "Tervist!",       
    "Szia!",           
    "Dia dhuit!",  
    "Bula!",        
    "สวัสดี!",              
    "Γειά σας!",            
  ];
  
  
  let i = 0;
  let j = 0;
  let currentWord = "";
  let isDeleting = false;
  let pauseAfterWord = false;
  
  function type() {
      currentWord = words[i];
  
      if (isDeleting) {
          document.getElementById("typewriter").textContent =
              currentWord.substring(0, j - 1);
          j--;
          if (j == 0) {
              isDeleting = false;
              i++;
              if (i == words.length) {
                  i = 0;
              }
          }
      } else if (!pauseAfterWord) {
          document.getElementById("typewriter").textContent =
              currentWord.substring(0, j + 1);
          j++;
          if (j == currentWord.length) {
              pauseAfterWord = true;  // Word is fully typed, trigger pause
              setTimeout(() => {
                  isDeleting = true;   // Start deleting after 1.5 seconds
                  pauseAfterWord = false;
              }, 1500);               // 1.5 second pause before deleting
          }
      }
  
      setTimeout(type, 70);
  }
  
  type();


  