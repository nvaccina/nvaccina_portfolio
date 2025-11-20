
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
  bottom: 20px;
  right: 20px;
  width: 55px;
  height: 55px;
  overflow: hidden;
  z-index: 1000;
  transition: all 0.2s;
  // padding: 5px;
  // border-radius: 50%;
  -webkit-animation: 3s ease 0s normal forwards 1 whatsapp;
  animation: 3s ease 0s normal forwards 1 whatsapp;
  &:hover{
    transform: scale(1.05);
  }
}

@media (max-width: 768px) {
  .wa{
    bottom: 10px;
    right: 10px;
    width: 45px;
    height: 45px;
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