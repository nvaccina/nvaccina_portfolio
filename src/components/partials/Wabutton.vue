
<script>
export default {
  name:'Wabutton'
}
</script>

<template>
  <div class="wa">
    <a aria-label="Chat on WhatsApp" href="https://wa.me/393891168261">
      <img alt="Chat on WhatsApp" src="/img/wa.svg"/>
    </a>

  </div>

</template>

<style lang="scss" scoped>

.wa{
  position: fixed;
  top: 200px;
  right: 5px;
  width: 40px;
  height: 40px;
  overflow: hidden;
  transition: all 0.2s;
  -webkit-animation: 3s ease 0s normal forwards 1 whatsapp;
  animation: 3s ease 0s normal forwards 1 whatsapp;
  &:hover{
    transform: scale(1.05);
  }
}

@keyframes whatsapp{
    0% { opacity:0; }
    66% { opacity:0; }
    100% { opacity:1; }
}

@-webkit-keyframes whatsapp{
    0% { opacity:0; }
    66% { opacity:0; }
    100% { opacity:1; }
}


</style>