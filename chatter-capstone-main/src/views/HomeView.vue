<template>
  <div id="home-frame">
    <div id="home-display">
      <div id="hero" style="width: 70%; padding:60px 0px">
        <p id="hero-title">Get your Tech career running quickly...</p>
        <p id="hero-tag">
          'Tech' is very broad, but we provide the resources to get you going in the right direction quickly.
        </p>
      </div>
    </div>
  </div>

  <div id="footer">
    <RouterLink to="/about">
      <p>About</p>
    </RouterLink>
    <RouterLink to="/contact">
      <p>Contact</p>
    </RouterLink>
    <RouterLink to="/terms">
      <p>Terms</p>
    </RouterLink>

    
  </div>
</template>


<style scoped>
    #home-frame
    {
      background-image: url(/src/assets/pexels-veeterzy-303383.jpg);
      background-repeat: no-repeat;
      background-size: cover;
      background-position: center;
    }

    #home-display
    {
      padding: 120px 40px;

      /* Used this backgroud layer as a screen- enhance legibility and aesthetics*/
      background-color: rgba(0, 0, 0, 0.623);
    }

    #hero-title
    {
        font-size: 80px;
        font-weight: 700;
        
    }

    #hero-tag
    {
      margin: 10px 0px;
    }

    #hero p
    {
      color: white;
    }

    #footer
    {
        display: flex;
        justify-content: center;
        align-items: center;

        font-size: 14px;

        margin-top: 50px;
        gap: 100px;

    }

    #footer p
    {
        cursor: pointer;
    }
</style>