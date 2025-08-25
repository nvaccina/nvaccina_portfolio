<script>
import Wabutton from '../partials/Wabutton.vue';
import { useHead } from '@vueuse/head';
import { ref } from 'vue';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';
import { onMounted } from 'vue';

export default {
  name: 'Contatti',
  components:{
    Wabutton
  },
  setup(){
    useHead({
      title: 'Contattami - Niccolò Vaccina | Full Stack Developer',
      link:[{ rel:'canonical', href:'https://niccolovaccina.it/contatti' }],
      meta: [
        { name: 'title', content: 'Contattami - Niccolò Vaccina | Full Stack Developer' },
        { name: 'description', content: 'Hai un progetto o una proposta di collaborazione? Contattami per lavorare insieme sul tuo prossimo software o sito web.' },
        { name: 'author', content: 'Niccolò Vaccina' },
        { name: 'keywords', content: 'niccolò vaccina, contatti, email, collaborazione, progetto, sviluppatore web, full stack developer, sviluppatore .net, mvc, sql server, c#, angular, cesena, forlì' },
        { property:'og:type', content:'website' },
        { property:'og:site_name', content:'Niccolò Vaccina Portfolio' },
        { property:'og:url', content:'https://niccolovaccina.it/contatti' },
        { property:'og:title', content: 'Contattami - Niccolò Vaccina | Full Stack Developer' },
        { property:'og:description', content: 'Contattami per collaborazioni, consulenze o sviluppo di applicazioni web e software.' },
        { property:'og:image', content:'https://niccolovaccina.it/assets/contatti.webp' },
        { name:'twitter:card', content:'summary_large_image' },
        { name:'twitter:url', content:'https://niccolovaccina.it/contatti' },
        { name:'twitter:title', content:'Contattami - Niccolò Vaccina' },
        { name:'twitter:description', content: 'Vuoi lavorare con me? Scrivimi per proposte, richieste o informazioni su nuovi progetti.' },
        { name:'twitter:image', content:'https://niccolovaccina.it/assets/contatti.webp' }
      ]
    });

    const contactForm = ref(null);

    onMounted(() => {
      if (!document.querySelector('#recaptcha-script')) {
        const script = document.createElement('script');
        script.id = 'recaptcha-script';
        script.src = 'https://www.google.com/recaptcha/api.js?render=6LcTXXwrAAAAAHsmCaKoFsfFK4j41C-ia6Oyvo3K';
        script.async = true;
        script.defer = true;
        document.body.appendChild(script);
      }
    });

    const sendEmail = () => {
      const form = contactForm.value;
      const name = form.name.value.trim();
      const email = form.email.value.trim();
      const message = form.message.value.trim();
      const privacyChecked = form.querySelector('#privacy').checked;

      if (!name || !email || !message) {
        Swal.fire({
          icon: 'warning',
          title: 'Campi obbligatori mancanti',
          text: 'Per favore, compila tutti i campi obbligatori prima di inviare il messaggio.',
          confirmButtonColor: '#f27474'
        });
        return;
      }

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        Swal.fire({
          icon: 'error',
          title: 'Email non valida',
          text: 'Inserisci un indirizzo email valido.',
          confirmButtonColor: '#f27474'
        });
        return;
      }

      if (!privacyChecked) {
        Swal.fire({
          icon: 'warning',
          title: 'Consenso richiesto',
          text: 'Devi accettare le condizioni della Privacy Policy prima di inviare il messaggio.',
          confirmButtonColor: '#f27474'
        });
        return;
      }

      window.grecaptcha.ready(() => {
        window.grecaptcha.execute('6LcTXXwrAAAAAHsmCaKoFsfFK4j41C-ia6Oyvo3K', { action: 'submit' }).then(async (token) => {
          try {
            const verifyResponse = await fetch("/api/verify-recaptcha", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({ token })
            });

            const verifyData = await verifyResponse.json();

            if (!verifyData.success) {
              Swal.fire({
                icon: "error",
                title: "Verifica reCAPTCHA fallita",
                text: `Motivo: ${verifyData.reason || "Sospetto traffico automatico"}`,
                confirmButtonColor: "#d33"
              });
              return;
            }

            await emailjs.sendForm(
              'service_or524sm',
              'template_89mswyw',
              contactForm.value,
              'Ex3cF8uaRrMLvv26n'
            );

            Swal.fire({
              icon: 'success',
              title: 'Messaggio inviato!',
              text: 'Ti contatterò al più presto.',
              confirmButtonColor: '#3085d6'
            });
            contactForm.value.reset();

          } catch (error) {
            console.error("Errore:", error);
            Swal.fire({
              icon: "error",
              title: "Errore",
              text: "Qualcosa è andato storto durante la verifica. " + error.message,
              confirmButtonColor: "#d33"
            });
          }
        });
      });
    };
    return {
      contactForm,
      sendEmail
    };
  }
}
</script>

<template>
  <section id="contacts" class="mt-50">
    <div class="container">
        <h1 class="pb-5 title">Contatti</h1>
    </div>
    <div class="container">
      <h2>Hai un progetto in mente? Scrivimi per collaborare o per qualsiasi domanda</h2>
      <form @submit.prevent="sendEmail" ref="contactForm" class="contact-form">
        <div class="mb-3">
          <label for="name" class="form-label">Nome (*)</label>
          <input type="text" class="form-control" id="name" name="name" />
        </div>
        <div class="mb-3">
          <label for="email" class="form-label">Email (*)</label>
          <input type="email" class="form-control" id="email" name="email" />
        </div>
        <div class="mb-3">
          <label for="cellulare" class="form-label">Cellulare</label>
          <input type="text" class="form-control" id="cellulare" name="cellulare" />
        </div>
        <div class="mb-3">
          <label for="message" class="form-label">Messaggio (*)</label>
          <textarea class="form-control" id="message" rows="4" name="message"></textarea>
        </div>   
        <div class="mb-3">
          <input class="form-check-input me-2" type="checkbox" value="" id="privacy">
          <span class="form-check-label" for="privacy">
            Si, accetto le condizioni della <strong><a href="https://www.iubenda.com/privacy-policy/70797940" class="iubenda-noiframe" title="Privacy Policy" target="_blank">Privacy Policy</a></strong>.
          </span>
        </div>    
        <input type="hidden" name="g-recaptcha-response">
        <button type="submit" class="cv-button">Invia</button>
      </form>

      <div class="row">
        <div class="col-12 col-md-8 pe-md-5 order-2 order-md-1">
          <div class="map-container">
            <div class="map">
              <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d21376.486686414853!2d12.23362394867277!3d44.13992303310359!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sit!2sit!4v1739990647495!5m2!1sit!2sit" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
          </div>
        </div>
        <div class="col-12 col-md-4 newct ps-5 pt-3 order-1 order-md-2">
          <div class="text-start w-100">
            <h2>Niccolò Vaccina</h2>
            <h5>Full Stack Web Developer</h5>
          </div>
          <div class="contatti pt-2 pb-5 w-100">
            <div>
              <i class="fa-solid fa-envelope pe-2"></i>
              <a href="mailto:niccolovac@gmail.com">niccolovac@gmail.com</a>
            </div>
            <div>
              <i class="fa-solid fa-phone pe-2"></i>
              <a href="tel:00390123456789">+39 3891168261</a>
            </div>
            <div>
              <i class="fa-solid fa-location-dot pe-2"></i> 
              <a href="https://goo.gl/maps/hWkhqvqYgG1v8eL9A" target="_blank" rel="noopener">Cesena (FC) - Italia</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <Wabutton/>
</template>

<style lang="scss" scoped>
@import '../../scss/general/variables';
#contacts{
  color: black;
  min-height: calc(100vh - 294px);
  .newct{
    display: flex;
    align-items: center;
    flex-direction: column;
    border-left: 4px solid $tertiary-color;
    .contatti div{      
      padding: 5px 0 !important;      
    }
  }
  a{
    color: black;
    &:hover{
      color: $primary-color;
    }
  }
  .map-container{
    width: 100%;
    .map{
      width: 100%;
      border-radius: 20px;
      overflow: hidden;
      box-shadow:  5px 5px 5px 5px rgba(0.1, 0.1, 0.1, 0.1);
      & iframe{
        width: 100%;
      }
    }
  }
  .contact-form {
    max-width: 100%;
    margin: 30px 0 60px 0;
    .form-control {
      border-radius: 10px;
    }
    .btn {
      background-color: $primary-color;
      border: none;
      &:hover {
        background-color: darken($primary-color, 10%);
      }
    }
  }

}

@media (max-width: 768px) {
  .newct{
    border: 0px !important;
  }
}

@media (max-width: 414px) {
  h1{
    font-size: 40px;
  }
  .linea{
    width: 100% !important;
  }
}
</style>