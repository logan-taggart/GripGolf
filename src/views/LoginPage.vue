<template>
  <ion-page>
    <ion-header translucent="true">
      <ion-toolbar>
        <ion-title>Admin Panel</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content class="login-content">
      <div class="content-wrapper">
        <div class="card-wrapper">
          <ion-card>
            <ion-card-header>
              <ion-card-title>Login</ion-card-title>
            </ion-card-header>

            <ion-card-content>
              <ion-item>
                <ion-label position="floating">Email</ion-label>
                <br/>
                <ion-input type="email" v-model="email"></ion-input>
              </ion-item>

              <ion-item>
                <ion-label position="floating">Password</ion-label>
                <br/>
                <ion-input type="password" v-model="password"></ion-input>
              </ion-item>

              <ion-button expand="full" @click="signIn" class="submit-button">
                Sign In
              </ion-button>

              <p v-if="error" class="error-message">{{ error }}</p>
            </ion-card-content>
          </ion-card>
        </div>
      </div>
    </ion-content>
  </ion-page>
</template>

<script>
  import { ref } from 'vue';
  import { useRouter } from 'vue-router';

  import { signInWithEmailAndPassword } from 'firebase/auth';
  import { auth } from '../main';

  import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonCard, IonCardHeader, 
         IonCardTitle, IonCardContent, IonItem, IonLabel, IonInput, IonButton } from '@ionic/vue';

  export default {
    components: {
      IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonCard, IonCardHeader, 
      IonCardTitle, IonCardContent, IonItem, IonLabel, IonInput, IonButton
    },
    setup() {
      const router = useRouter();
      const email = ref('');
      const password = ref('');
      const error = ref('');

      const signIn = async () => {
        try {
          await signInWithEmailAndPassword(auth, email.value, password.value);
          router.push('/admin');
        } catch (e) {
          error.value = e.message;
        }
      };

      return { email, password, signIn, error };
    }
  };
</script>

<style scoped>
  .card-wrapper {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: 100%;
    margin-bottom: 20px;
  }

  .content-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    padding: 20px;
    background-color: whitesmoke;
  }

  .error-message {
    color: #ff0000;
    text-align: center;
    margin-top: 12px;
  }

  ion-card {
    border-radius: 8px;
    overflow: hidden;
    border: 1.5px solid black;
    width: 60%;
  }

  ion-card-header {
    background-color: #0D8E45;
    color: #fff;
  }

  ion-card-title {
    font-size: 24px;
    font-weight: bold;
    color: white;
  }

  .login-content {
    --background: #f8f8f8;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .submit-button {
    --background: #0D8E45;
    margin-top: 16px;
  }

  @media (max-width: 767px) {
    ion-card {
      width: 90%;
    }
  }
</style>