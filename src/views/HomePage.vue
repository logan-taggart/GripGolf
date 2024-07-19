<template>

  <ion-page>

    <ion-header>

      <ion-toolbar class="larger-header">
        <img src="../images/gripGolfDogLogo.png" class="companyLogo" slot="start"></img>
        <ion-title class="companyTitle">Get A Grip Golf</ion-title>
      </ion-toolbar>

    </ion-header>

    <ion-content :fullscreen="true">

      <div class="title">

        <img src="../images/gripGolfLogo.png" class="mainCompanyLogo"></img>
        <br/><br/><br/>
        <h1>Get A Grip Golf: Your Mobile On-Site Golf Club Repair Specialist</h1>

      </div>

      <div class="content">
        
        <h2>About Us</h2>
        <p>At Get A Grip Golf, we offer an extensive range of services and products to meet all your golfing needs. Our services include:</p>
        
        <ul>
          <li>Grip Replacement</li>
          <li>Club Repair and Shaft Modifications</li>
          <li>New and Used Golf Items</li>
        </ul>

        <h2>Grips</h2>
        
        <p>We boast a vast selection of over 1,500 grips in stock from top brands such as:</p>

        <ul>
          <li>Golf Pride</li>
          <li>Super Stroke</li>
          <li>Sniper</li>
          <li>STM</li>
          <li>Saplize</li>
          <li>Herrick</li>
          <li>Scotty Cameron</li>
        </ul>

        <p>Our collection includes a diverse array of colors, designs, and specialty grips, including:</p>

        <ul>
          <li>Arthritic</li>
          <li>Hybrid</li>
          <li>Wraps</li>
          <li>Pistol</li>
          <li>Velvet</li>
          <li>Standard/Midsize/Oversize</li>
        </ul>

        <p>We also feature a large selection of putter grips, including NFL team designs, pistol grips, standard, 2.0, and 3.0 sizes. Whether you need new grips for functionality or a fresh look, we've got you covered.</p>

        <h2>Club Repair and Shaft Modifications</h2>
        <p>Our shaft modification services include:</p>

        <ul>
          <li>Shortening</li>
          <li>Lengthening</li>
          <li>New Shafts (Steel and Graphite)</li>
          <li>Custom Orders</li>
        </ul>

        <h2>New and Used Golf Items</h2>
        <p>In addition to our repair services, we offer a variety of new and used golf items:</p>

        <ul>
          <li>Golf Balls (New/Used)</li>
          <li>Clubs (Sets, Drivers, Hybrids, Irons, Wedges, Putters)</li>
          <li>Golf Bags</li>
          <li>Accessories</li>
        </ul>

        <h2>Upcoming Events & Booking</h2>
        <p>Check our calendar for our upcoming locations and events. If you're interested in having Get A Grip Golf visit your location, please contact us.</p>

      </div>

    </ion-content>

  </ion-page>

</template>

<script setup lang="ts">
  import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/vue';
</script>

<style scoped>
  .companyLogo {
    width: 60px;
    height: 60px;
    margin-left: 5%;
    background: transparent;
  }

  .companyTitle {
    flex: 1;
    justify-content: center;
    color: #fff;
  }

  .content {
    padding: 20px;
    margin: 20px 10% 20% 10%;
    background: #fff;
    border-radius: 8px;
    border: 1.5px solid #0D8E45;
  }

  .content h2 {
    margin-top: 20px;
    font-size: 1.5rem;
    color: #0D8E45;
  }

  .content p {
    line-height: 1.6;
    margin-bottom: 16px;
  }

  .content ul {
    list-style-type: disc;
    padding-left: 20px;
    margin-bottom: 16px;
  }

  .content ul li {
    margin-bottom: 8px;
  }

  ion-content {
    --background: white;
    --color: black;
  }

  ion-page {
    color: black;
  }

  ion-title {
    color: #fff;
  }

  ion-toolbar {
    --background: #0D8E45;
  }

  .larger-header {
    padding-top: 20px;
    padding-bottom: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0px 0px 20px 0px black;
    background-color: #0D8E45;
  }

  .mainCompanyLogo {
    max-width: 100%;
    height: auto;
    width: 35%;
  }

  .title {
    background: #0D8E45;
    text-align: center;
    padding: 60px 20px;
    color: #fff;
    border-bottom: 2px solid #0D8E45;
  }

  .title h1 {
    font-size: 2rem;
    font-weight: bold;
  }

  @media (max-width: 768px) {
    .mainCompanyLogo {
      max-width: 80%;
      width: 80%;
    }
  }

  @media (max-width: 480px) {
    .mainCompanyLogo {
      max-width: 70%;
      width: 70%;
    }
  }
</style>