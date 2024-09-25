<script setup lang="ts">
import ProjectMark from "../component/ProjectMark.vue";
import TextDivider from "../component/TextDivider.vue";
import '@material/web/textfield/outlined-text-field';
import '@material/web/button/filled-button';
import '@material/web/button/outlined-button';
import '@material/web/button/text-button';
import { ref } from "vue";
import router from "../router";

const email = ref('');
const password = ref('');

const authenticate = async () => {
  // TODO: Implement a more secure way to store the token
  try {
    const response = await fetch('https://protocols-api.appfarms.com/v1/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: email.value,
        password: password.value
      }),
    });

    if (!response.ok) {
      console.error('Authentication failed:', response);
      throw new Error('Authentication failed');
    }

    const data = await response.json();
    localStorage.setItem('token', data.refreshToken);

    console.log('Authentication successful:', data);
    await router.push('/');
  } catch (error) {
    console.error('Error during authentication:', error);
    alert('Authentication failed, please check your credentials.');
  }
}

const onEmailChanged = (event: Event) => {
  email.value = (event.target as HTMLInputElement).value;
}

const onPasswordChanged = (event: Event) => {
  password.value = (event.target as HTMLInputElement).value;
}

</script>

<template>

  <div id="content">
    <div id="left">
      <div id="header">
        <ProjectMark />
      </div>
      <div id="form">
        <form id="form-content" @submit.prevent="authenticate">
          <h1 id="title" class="md-typescale-headline-large">Welcome</h1>
          <p id="description" class="md-typescale-body-large">Please enter your account credentials</p>
          <md-outlined-text-field label="E-mail" type="text" v-model:value="email" @input="onEmailChanged">
          </md-outlined-text-field>
          <md-outlined-text-field label="Password" v-model:value="password" @input="onPasswordChanged">
          </md-outlined-text-field>
          <div id="forgot-password-container">
            <md-text-button id="forgot-password">Forgot your password?</md-text-button>
          </div>
          <md-filled-button type="submit">
            Sign In
          </md-filled-button>
          <div id="alternative-authentication-label-container">
            <TextDivider text="Or sign in with"/>
          </div>

          <div id="alternative-authentication-provider-container">
            <md-outlined-button id="google">
              Google
              <svg slot="icon" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16.8759 9.17493C16.8759 8.52744 16.8223 8.05494 16.7063 7.56494H9.16162V10.4874H13.5902C13.5009 11.2137 13.0187 12.3074 11.9473 13.0424L11.9323 13.1403L14.3178 14.9513L14.483 14.9674C16.0009 13.5937 16.8759 11.5724 16.8759 9.17493Z" fill="#4285F4"/>
                <path d="M9.16098 16.8752C11.3306 16.8752 13.152 16.1751 14.4824 14.9677L11.9467 13.0426C11.2681 13.5064 10.3574 13.8301 9.16098 13.8301C7.03603 13.8301 5.23246 12.4564 4.58954 10.5576L4.49531 10.5654L2.01486 12.4467L1.98242 12.5351C3.30384 15.1076 6.01813 16.8752 9.16098 16.8752Z" fill="#34A853"/>
                <path d="M4.59023 10.5576C4.42059 10.0676 4.32241 9.54259 4.32241 9.00011C4.32241 8.45758 4.42059 7.9326 4.5813 7.44261L4.57681 7.33821L2.06527 5.42676L1.9831 5.46506C1.43848 6.53259 1.12598 7.73134 1.12598 9.00011C1.12598 10.2688 1.43848 11.4676 1.9831 12.5351L4.59023 10.5576Z" fill="#FBBC05"/>
                <path d="M9.16104 4.16998C10.6699 4.16998 11.6878 4.80873 12.2682 5.34251L14.536 3.1725C13.1432 1.90375 11.3307 1.125 9.16104 1.125C6.01813 1.125 3.30384 2.89249 1.98242 5.46496L4.58063 7.44249C5.23248 5.54375 7.03603 4.16998 9.16104 4.16998Z" fill="#EB4335"/>
              </svg>
            </md-outlined-button>
            <md-outlined-button id="apple">
              Apple
              <svg slot="icon" width="19" height="18" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.375 9C17.375 13.347 13.8509 16.875 9.5 16.875C5.14906 16.875 1.625 13.347 1.625 9C1.625 4.64906 5.14906 1.125 9.5 1.125C13.8509 1.125 17.375 4.64906 17.375 9Z" fill="#283544"/>
                <path d="M13.1912 7.00729C13.1482 7.03238 12.1252 7.56141 12.1252 8.73444C12.1734 10.0722 13.4162 10.5413 13.4375 10.5413C13.4162 10.5664 13.2499 11.1804 12.7573 11.824C12.3663 12.3785 11.9324 12.9375 11.2734 12.9375C10.6467 12.9375 10.4217 12.568 9.69845 12.568C8.92175 12.568 8.70198 12.9375 8.10736 12.9375C7.44845 12.9375 6.98236 12.3486 6.5701 11.7993C6.03449 11.0805 5.57925 9.95237 5.56318 8.86922C5.55235 8.29524 5.67044 7.731 5.9702 7.25181C6.39331 6.58271 7.14864 6.12855 7.97354 6.11359C8.60557 6.09373 9.16807 6.51797 9.55377 6.51797C9.92345 6.51797 10.6145 6.11359 11.3964 6.11359C11.7339 6.11392 12.6339 6.20865 13.1912 7.00729ZM9.50034 5.99901C9.38784 5.47483 9.69845 4.95067 9.98774 4.61631C10.3574 4.21195 10.9412 3.9375 11.4446 3.9375C11.4768 4.46167 11.2731 4.97573 10.9091 5.35014C10.5824 5.75449 10.0199 6.05891 9.50034 5.99901Z" fill="white"/>
              </svg>
            </md-outlined-button>
          </div>
          <div id="not-registered-container">
            <p id="not-registered-label" class="md-typescale-label-large">Not registered yet?</p>
            <md-text-button id="not-registered">Sign up</md-text-button>
          </div>
        </form>
      </div>
    </div>
    <div id="right" >
      <img id="illustration" src="/illustration_sign_in.svg" alt="Sign In">
    </div>
  </div>

</template>

<style scoped>
  #content {
    background: var(--md-sys-color-surface);
    display: flex;
    height: 100vh;
  }

  #left {
    padding: 16px;
    display: flex;
    flex: 1;
    flex-direction: column;
  }

  #header {
    flex: 0;
  }

  #form {
    display: flex;
    flex: 1;
    align-items: center;
    justify-content: center;
  }

  #form-content {
    display: flex;
    max-width: 327px;
    flex-direction: column;
    flex: 1;
    margin: 32px 12px;
    gap: 16px;
  }

  #right {
    flex: 1;
    padding: 8px;
  }

  #illustration {
    border-radius: 16px;
    object-fit: cover;
    width: 100%;
    height: 100%;
  }

  @media (max-width: 1000px) {
    #right {
      display: none;
    }
  }

  #title {
    color: var(--md-sys-color-on-surface);
  }

  #description {
    color: var(--md-sys-color-outline);
  }

  #forgot-password-container {
    display: flex;
    justify-content: flex-end;
  }

  #forgot-password {
    padding: 8px;
  }

  #not-registered-container {
    display: flex;
    color: var(--md-sys-color-outline);
    justify-content: flex-end;
    align-content: center;
    justify-items: center;
    gap: 2px;
  }

  #not-registered {
    padding: 8px;
  }

  #not-registered-label {
    align-content: center;
  }

  #alternative-authentication-label-container {
    display: flex;
    justify-content: center;
  }

  #alternative-authentication-label {
    color: var(--md-sys-color-outline);
  }

  #alternative-authentication-provider-container {
    display: flex;
    gap: 16px;
    justify-content: center;
  }

  #google {
    flex: 1;
  }

  #apple {
    flex: 1;
  }
</style>