<template>
  <q-layout view="hHh Lpr fFf" class="shadow-2 rounded-borders no-scroll">
    <q-header elevated>
      <q-toolbar style="background:linear-gradient(to top, #1E2246 1%, #ffffff 35%)">
        <q-btn
          flat
          dense
          round
          class="text-primary"
          icon="menu"
          aria-label="Menu"
          @click="leftDrawerOpen = !leftDrawerOpen"
        />

        <q-separator />
        <!-- <q-avatar class="q-ml-md"> -->
          <!-- <img src="https://cdn.quasar.dev/logo/svg/quasar-logo.svg" /> -->
          <q-btn class="" stretch flat >
            <img src="~/assets/hco-logo.svg" style="border-width:0px;border:0px" width="100" />
          </q-btn>
        <!-- </q-avatar> -->

        <q-btn class="text-body1" stretch flat style="width:215px" text-color="primary">
          <div class="row items-center no-wrap">
            <div class="text-center" style="font-size: 12px">
              Executive Portal
            </div>
          </div>
        </q-btn>

        <q-separator vertical inset />
          <q-tabs indicator-color="accent" align="center" v-model="tab1" class="fit text-body1 gt-xs" text-color="red">
              <q-route-tab class="text-primary" name="home" label="Home" to="/" />
              <q-route-tab class="text-primary" name="dashboard" label="Dashboard" to="/dashboard" />
              <q-route-tab class="text-primary" name="KPIs" label="KPIs" to="/kpis" />
              <!-- <q-route-tab name="check-in" label="Check-In" to="/check-in" /> -->
          </q-tabs>

        <q-separator vertical inset />
          <!-- <q-btn stretch flat label="Login" class="text-body2" text-color="white" /> -->
          <q-tabs indicator-color="accent" class="text-body1 no-wrap text-primary">
            <q-route-tab name="login" label="Login" to="/login" />
            <!-- <q-route-tab name="register" label="Register" to="/register" /> -->
          </q-tabs>

        <!-- <q-toolbar-title>
          H&CO - Executive Portal
        </q-toolbar-title>

        <div>Quasar v{{ $q.version }}</div> -->
      </q-toolbar>
    </q-header>

    <q-footer>
      <div class="q-pa-none">
        <div class="q-gutter-y-sm">
          <q-tabs
            v-model="tab1"
            narrow-indicator
            align="justify"
            class="text-accent">
            <q-route-tab class="" name="home" icon="home" label="Home" to="/" />
            <q-separator vertical inset />
            <q-route-tab class="" name="dashboard" icon="dashboard" label="Dashboard" to="/dashboard" />
            <q-separator vertical inset />
            <q-route-tab class="" name="kpis" icon="trending_up" label="KPIs" to="/kpis" />
            <!-- <q-separator vertical inset />
            <q-route-tab class="" name="check-in" icon="check" label="Check-In" to="/check-in" /> -->
          </q-tabs>
        </div>
      </div>
    </q-footer>

<!-- show-if-above -->
    <q-drawer
      v-model="leftDrawerOpen"
      bordered
      :width="250"
      content-class="bg-grey-1"
    >
      <q-list>
        <q-item-label
          header
          class="text-grey-8"
        >
          Account Settings
        </q-item-label>

        <Links
          v-for="link in links"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import Links from 'components/Links'

export default {
  name: 'MainLayout',

  components: {
    Links
  },

  data () {
    return {
      leftDrawerOpen: false,
      tab1: 'home',
      links: [
        {
          title: 'Account Info',
          caption: 'Account Info',
          icon: 'account_circle',
          // link: 'https://quasar.dev'
          link: '/account-info'
          // to: '/account-info'
        },
        {
          title: 'Records',
          caption: 'Records',
          icon: 'folder',
          // link: 'https://github.com/quasarframework'
          link: '/records'
          // to: '/records'
        }
      ]
    }
  }
}
</script>

<style>
  @media screen and (min-width: 768px) {
    .q-footer {
      display: none;
    }
  }
</style>
