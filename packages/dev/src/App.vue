<template>
  <v-app id="app">
    <jd-modal-provider />

    <v-navigation-drawer v-model="drawer" :clipped="$vuetify.breakpoint.lgAndUp" app>
      <v-list dense>
        <v-list-item to="/">
          <v-list-item-title>Getting started</v-list-item-title>
        </v-list-item>
        <v-list-group value="true">
          <template v-slot:activator>
            <v-list-item-title>Demo</v-list-item-title>
          </template>
          <v-list-item v-for="(demo, index) in demoLinks" :key="index" link :to="demo.to">
            <v-list-item-content>
              <v-list-item-title>{{ demo.label }}</v-list-item-title>
              <v-list-item-subtitle v-if="demo.description">
                {{ demo.description }}
              </v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-list-group>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar :clipped-left="$vuetify.breakpoint.lgAndUp" app dark class="app-bar">
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title class="app-title">@jood/v-modal</v-toolbar-title>
      <v-spacer></v-spacer>

      <v-tooltip bottom>
        <span>Github</span>
        <template v-slot:activator="{ on, attrs }">
          <v-btn icon v-bind="attrs" v-on="on" @click="onGoGithub">
            <v-icon>code</v-icon>
          </v-btn>
        </template>
      </v-tooltip>

      <v-tooltip bottom>
        <span>NPM</span>
        <template v-slot:activator="{ on, attrs }">
          <v-btn icon v-bind="attrs" v-on="on" @click="onGoNpm">
            <v-icon>move_to_inbox</v-icon>
          </v-btn>
        </template>
      </v-tooltip>

      <v-tooltip bottom>
        <span>Document</span>
        <template v-slot:activator="{ on, attrs }">
          <v-btn v-bind="attrs" v-on="on" icon @click="onGoDocument">
            <v-icon>library_books</v-icon>
          </v-btn>
        </template>
      </v-tooltip>
    </v-app-bar>

    <v-main>
      <v-container class="fill-height app-body-container">
        <router-view class="app-body" />
      </v-container>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';
import { demoLinks } from '@/components/demo';
import { provideJdModalService, useJdModalService, JdModalProvider } from '@/lib-package';

export default defineComponent({
  components: {
    JdModalProvider
  },
  setup() {
    provideJdModalService();
    const modalService = useJdModalService();
    modalService.setUseLocationHash(true);

    const drawer: any = null;

    const onGoDocument = () => {
      openTo('https://molgga.github.io/jood-v-modal/documents');
    };

    const onGoGithub = () => {
      openTo('https://github.com/molgga/jood-v-modal');
    };

    const onGoNpm = () => {
      openTo('https://www.npmjs.com/package/@jood/v-modal');
    };

    const openTo = (url: string) => {
      window.open(url);
    };

    return {
      drawer,
      demoLinks,
      onGoGithub,
      onGoNpm,
      onGoDocument
    };
  }
});
</script>
<style>
body {
  font-size: 15px;
}
body .v-application a {
  color: #2a9e64;
}
</style>
<style lang="scss" scoped>
.app-title {
  font-weight: bold;
}
.app-body-container {
  align-items: flex-start;
}
.app-body {
  display: flex;
  width: 100%;
  padding-top: 40px;
  padding-bottom: 100px;
  box-sizing: border-box;
  align-self: stretch;
}
.app-bar {
  box-shadow: none !important;
  background-color: #41af7d !important;
}
</style>
