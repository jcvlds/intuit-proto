<template>
  <q-page class="fit column justify-start items-center">
    <div class="col-9 text-center" style="overflow: auto;min-width: 200px; max-width: 200px;">
      <!-- <h5 class="text-center text-accent">Login</h5> -->
      <h5 class="text-accent">Login</h5>
      <q-form @submit="login" class="q-gutter-md">
        <q-input class="" :rules="[val => !!val || 'Field is required']" ref="name"
          rounded outlined v-model="username" placeholder="Username" dense />
        <q-input class="" :rules="[val => !!val || 'Field is required']" ref="name"
          rounded outlined v-model="password" placeholder="Password" dense type="password" />
        <q-btn type="submit"
          :loading="loading1" icon="exit_to_app" outline rounded color="accent" label="Login" class="q-px-lg shadow-2"/>
      </q-form>
    </div>
    <!-- <div v-show="error" class="text-red text-center block q-mt-sm">
      {{ error }}
    </div> -->

    <q-card bordered class="bg-white q-mt-lg" style="width: 50%"><q-card-section>
      <div class="">
        <h5 class="text-accent q-my-none">Login</h5>
      </div>

      <div class="column q-mt-none">
          <!-- <h6 class="text-grey-8 q-mt-lg q-mb-xs">Company:</h6> -->
          <p>Now click the <b>Connect to QuickBooks</b> button below.</p>
          <pre id="accessToken">{{ accessToken }}</pre>
          <!-- <a class="imgLink" href="#" id="authorizeUri" ><img src="./images/C2QB_green_btn_lg_default.png" width="178" /></a> -->
          <button type="button" id="authorizeUri" @click="authorizeUri">Login</button>
          <button  type="button" id="retrieveToken" @click="retrieveToken" class="btn btn-success">Display Access Token</button>
          <button  type="button" id="refreshToken" class="btn btn-success">Refresh Token</button>
          <!-- <button  type="button" id="connect" @click="connect" class="btn btn-success">Connect</button> -->
          <hr />

          <h2>Make an API call</h2><h4>( Please refer to our <a target="_balnk" href="https://developer.intuit.com/v2/apiexplorer?apiname=V3QBO#?id=Account">API Explorer</a> )</h4>
          <p>If there is no access token or the access token is invalid, click either the <b>Connect to QucikBooks</b> or <b>Sign with Intuit</b> button above.</p>
          <pre id="apiCall">{{ apiCall }}</pre>
          <button  type="button" id="makeAPICall" @click="makeAPICall" class="btn btn-success">Get Company Info</button>

          <hr />
      </div>
    </q-card-section></q-card>

  </q-page>
</template>

<script>
// import AuthenticationService from "../services/AuthenticationService";

export default {
  name: 'Login',
  data () {
    return {
      user: null,
      repo: '',
      username: '',
      password: '',
      error: null,
      loading1: false,
      apiCall: '',
      accessToken: ''
    }
  },
  methods: {
    async login () {
    },
    authorizeUri () {
      var jsonBody = {}
      this.$axios.get('/authUri', { json: jsonBody }, function (uri) {
        console.log('The Auth Uris is :' + uri)
      })
        .then(function (authUri) {
          const uri = authUri.data
          console.log('The Auth Uris is :' + uri)
          // Launch Popup using the JS window Object
          var parameters = 'location=1,width=800,height=650'
          parameters += ',left=' + (screen.width - 800) / 2 + ',top=' + (screen.height - 650) / 2
          var win = window.open(uri, 'connectPopup', parameters)
          var pollOAuth = window.setInterval(function () {
            try {
              if (win.document.URL.indexOf('code') !== -1) {
                window.clearInterval(pollOAuth)
                win.close()
                location.reload()
              }
            } catch (e) {
              console.log(e)
            }
          }, 100)
        })
    },
    makeAPICall () {
      this.$axios.get('/getCompanyInfo', function (response) {
        // $("#apiCall").html(JSON.stringify(response, null, 4))
        this.apiCall = JSON.stringify(response, null, 4)
      })
    },
    retrieveToken () {
      this.$axios.get('/retrieveToken', function (token) {
        // let token = (token != null) ? token : 'Please Authorize Using Connect to Quickbooks first !'
        this.accessToken = (token != null) ? token : 'Please Authorize Using Connect to Quickbooks first !'
        // $("#accessToken").html(token)
        // this.accessToken = token
      })
    }
  }
}
</script>

<style scoped>
</style>
