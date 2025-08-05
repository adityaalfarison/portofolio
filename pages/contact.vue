<template>
  <section class="p-8 md:p-16 min-h-screen bg-gradient-to-b from-blue-900 to-black text-white">
    <div class="max-w-2xl mx-auto text-center">
      <h2 class="text-3xl font-bold mb-6 text-blue-300">Hubungi Saya</h2>

      <!-- Formulir Pengiriman Pesan -->
      <form @submit.prevent="submitForm" class="space-y-4 text-left mb-12">
        <div>
          <label>Nama:</label>
          <input
            type="text"
            v-model="form.name"
            required
            class="w-full p-2 rounded text-black"
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            v-model="form.email"
            required
            class="w-full p-2 rounded text-black"
          />
        </div>
        <div>
          <label>Pesan:</label>
          <textarea
            v-model="form.message"
            required
            class="w-full p-2 rounded text-black"
          ></textarea>
        </div>
        <button
          type="submit"
          class="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded"
        >
          Kirim
        </button>
        <p class="mt-4 text-sm text-green-400" v-if="statusMessage">{{ statusMessage }}</p>
      </form>

      <!-- Informasi Kontak -->
      <div class="space-y-4 text-lg">
        <p>
          Email:
          <a
            href="mailto:adityaalfarison33@gmail.com"
            class="text-blue-400 hover:underline"
          >
            adityaalfarison33@gmail.com
          </a>
        </p>
        <p>
          GitHub:
          <a
            href="https://github.com/adityaAhmadalfarison"
            class="text-blue-400 hover:underline"
            target="_blank"
          >
            https://github.com/adityaAhmadalfarison
          </a>
        </p>
        <p>
          LinkedIn:
          <a
            href="https://www.linkedin.com/in/aditya-ahmad-alfarison-329952243/"
            class="text-blue-400 hover:underline"
            target="_blank"
          >
            https://www.linkedin.com/in/aditya-ahmad-alfarison-329952243/
          </a>
        </p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      form: {
        name: '',
        email: '',
        message: '',
      },
      statusMessage: '',
    };
  },
  methods: {
    async submitForm() {
      const scriptURL = 'https://script.google.com/macros/s/AKfycbyXkHBh2wQUGynJFHf8dv0ncauURuwf53t9nNE_Id7v8q5KFCY2LjnMR6UqBGebet94/exec'; // Ganti dengan URL Web Apps Script kamu
      const formData = new FormData();
      formData.append('name', this.form.name);
      formData.append('email', this.form.email);
      formData.append('message', this.form.message);

      try {
        await fetch(scriptURL, {
          method: 'POST',
          body: formData,
        });
        this.statusMessage = 'Pesan berhasil dikirim!';
        this.form.name = '';
        this.form.email = '';
        this.form.message = '';
      } catch (error) {
        this.statusMessage = 'Gagal mengirim pesan. Silakan coba lagi.';
      }
    },
  },
};
</script>

<style scoped>
label {
  display: block;
  margin-bottom: 4px;
  font-weight: bold;
}
</style>
