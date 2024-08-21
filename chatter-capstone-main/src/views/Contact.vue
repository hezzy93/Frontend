<template>
    <div id="contact-frame"> 
        <div id="contact-display"> 
            <div id="contact-content">
                <h3>Say Hello </h3>
                <div style="margin:10px 0px;"> <h4>Email: confinesofgrace@gmail.com </h4></div>
                <div id=""><h4>Phone/Whatsapp: +2348180955161 </h4></div>
            </div>
        </div>
    </div>
</template>


<style>
  #contact-frame 
  {
    background-image: url(/src/assets/pexels-veeterzy-303383.jpg);
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
  }

  #contact-display 
  {
    width: 100%;
    padding: 120px 40px;
    background-color: rgba(0, 0, 0, 0.623);
  }

  #contact-content 
  {
    width: 60%;
    padding: 10px 50px;
    color: white;
    margin: 0 auto; 
  }

  #contact-display h3 
  {
    font-size: 3rem;
  }

  #contact-display h4 
  {
    font-size: 1.5rem; 
  }

  #contact-display p 
  {
    font-size: 1rem; 
    margin: 10px 0;
  }

  @media (max-width: 768px) 
  {
    #contact-display 
    {
      padding: 80px 20px;
    }

    #contact-content 
    {
      width: 90%; 
      padding: 10px 20px; 
    }

    #contact-display h3 
    {
      font-size: 2rem;
    }

    #contact-display h4 
    {
      font-size: 1.2rem; 
    }

    #contact-display p 
    {
      font-size: 0.9rem;
    }
  }

  @media (max-width: 480px) 
  {
    #contact-display 
    {
      padding: 60px 10px; 
    }

    #contact-content 
    {
      width: 100%; 
      padding: 10px; 
    }

    #contact-display h3 
    {
      font-size: 1.5rem;
    }

    #contact-display h4 
    {
      font-size: 1rem; 
    }

    #contact-display p 
    {
      font-size: 0.8rem; 
    }
  }
</style>
