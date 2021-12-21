<template>
    <v-menu>
      <template v-slot:activator="{ on: menu, attrs }">
        <v-btn
            dark
            v-bind="attrs"
            v-on="{ ...tooltip, ...menu }"
        >
            <v-img
                contain
                src="@/assets/images/mobile/menuMobile.png"
            />
        </v-btn>
      </template>
      <v-list>
        <v-list-item
          v-for="(item, index) in items"
          :key="index"
        >
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
</template>

<script>
  export default {
    data: () => ({
      items: [
        { title: 'Click Me1' },
        { title: 'Click Me2' },
        { title: 'Click Me3' },
        { title: 'Click Me4' },
      ],
    }),
  }
</script>

<style scoped>

</style>