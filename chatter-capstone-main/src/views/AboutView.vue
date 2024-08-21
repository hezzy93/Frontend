<template>
  <div id='about-frame'>
    <div id='about-display'>
      <div id="about-content">
        <h3>Simple???</h3>
        <p>It started simple- complete a capstone project, but the vision grew beyond simple.</p>
        <p>So although it all started out as a project to 'log' how far I've come as a FrontEnd Designer, there's no reason for Chatter to remain as such. As a result, I had to consider how to approach the project.</p>
        <h4>The Approach</h4>
        <p>I definitely didn't want a project that will end up buried somewhere on my local, so I approached it as a project to solve a personal problem—creation of wealth.</p>
        <p>However, wealth only flows towards the direction of quality service... and there, the vision became bigger than just 'another capstone project'; the mission is now to create a space where new-techies can find their footing fast... with the help of 'old'-techies.</p>
      </div>
    </div>
  </div>
</template>

<style>
  #about-frame 
  {
    background-image: url(/src/assets/pexels-veeterzy-303383.jpg);
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
  }

  #about-display 
  {
    width: 100%;
    padding: 120px 40px;
    background-color: rgba(0, 0, 0, 0.623);
  }

  #about-content 
  {
    width: 60%;
    padding: 10px 50px;
    color: white;
    margin: 0 auto; 
  }

  #about-display h3 
  {
    font-size: 3rem;
  }

  #about-display h4 
  {
    font-size: 1.5rem; 
  }

  #about-display p 
  {
    font-size: 1rem; 
    margin: 10px 0;
  }

  @media (max-width: 768px) 
  {
    #about-display 
    {
      padding: 80px 20px;
    }

    #about-content 
    {
      width: 90%; 
      padding: 10px 20px; 
    }

    #about-display h3 
    {
      font-size: 2rem;
    }

    #about-display h4 
    {
      font-size: 1.2rem; 
    }

    #about-display p 
    {
      font-size: 0.9rem;
    }
  }

  @media (max-width: 480px) 
  {
    #about-display 
    {
      padding: 60px 10px; 
    }

    #about-content 
    {
      width: 100%; 
      padding: 10px; 
    }

    #about-display h3 
    {
      font-size: 1.5rem;
    }

    #about-display h4 
    {
      font-size: 1rem; 
    }

    #about-display p 
    {
      font-size: 0.8rem; 
    }
  }
</style>
