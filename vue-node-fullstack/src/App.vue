<template>
  <div>
    <vue-froala v-model="content"></vue-froala>
    <h3>Vue + Node Fullstack App Run Successfully</h3>
    <!-- <button @click="saveData">Save Data</button> -->
  </div>
</template>

<script>
import 'froala-editor/css/froala_style.min.css';
import 'froala-editor/css/themes/dark.min.css';
import 'froala-editor/js/plugins.pkgd.min.js';
import VueFroala from 'vue-froala-wysiwyg';

export default {
  components: {
    VueFroala,
  },
  data() {
    return {
      content: '<p>Your initial content here.</p>',
    };
  },
  methods: {
    async saveData() {
      try {
        const response = await this.$axios.post('/api/data', { content: this.content });
        console.log(response.data);
      } catch (error) {
        console.error('Error saving data:', error);
      }
    },
  },
};
</script>
