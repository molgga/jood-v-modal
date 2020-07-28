<template>
  <v-app id="app">
    <jd-modal-provider />

    <v-navigation-drawer v-model="drawer" :clipped="$vuetify.breakpoint.lgAndUp" app>
      <v-list dense>
        <v-list-group value="true">
          <template v-slot:activator>
            <v-list-item-title>Examples</v-list-item-title>
          </template>
          <v-list-item v-for="(example, index) in exampleLinks" :key="index" link :to="example.to">
            <v-list-item-content>
              <v-list-item-title>{{ example.label }}</v-list-item-title>
              <v-list-item-subtitle v-if="example.description">{{
                example.description
              }}</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-list-group>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar :clipped-left="$vuetify.breakpoint.lgAndUp" color="blue darken-2" app dark>
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
import { exampleLinks } from '@/components/example';
import { provideJdModalService, JdModalProvider } from '@/lib-package';

export default defineComponent({
  components: {
    JdModalProvider
  },
  setup() {
    provideJdModalService();

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
      exampleLinks,
      onGoGithub,
      onGoNpm,
      onGoDocument
    };
  }
});
</script>

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
  align-self: stretch;
}
</style>
