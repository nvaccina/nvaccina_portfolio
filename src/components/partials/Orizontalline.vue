<script>
import {timelines} from '../../data/data.js';
export default {
  name: 'Project_card',
  props:{
    title: String,
    azienda: String,
    body: String,
    date: String,
    image: String,
  },
  data() {
    return {
      timelines,
      urlimage:`/img/projects/${this.image}`,
    };
  },
}
</script>

<template>
  <div class="nv-card">
    <div class="temporal-line">
        <section class="timeline">
          <ol>
            <li v-for="(timeline, index) in timelines" :key="index" class="nav-item">
              <div class="">                
                <h4>{{ timeline.title }}</h4>
                <strong>{{ timeline.azienda }}</strong>
                <p class="date">{{timeline.date}}</p>
                <p class="mb-0">{{timeline.body}}</p>
              </div>
            </li>
            <li>
              <div>
                <p>{{date}}</p> 
                <p>{{body}}</p>
              </div>
            </li>
>
          </ol>
        </section>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '../../scss/general/variables';

button {
  border: none;
  cursor: pointer;
  outline: none;
}
a {
  color: inherit;
}
.temporal-line {
  color: black;
}

/* .section SECTION
–––––––––––––––––––––––––––––––––––––––––––––––––– */
.section h1 {
  font-size: 2.5rem;
}
.section h2 {
  font-size: 1.3rem;
}

/* TIMELINE
–––––––––––––––––––––––––––––––––––––––––––––––––– */
.timeline {
  white-space: nowrap;
  overflow-x: hidden;
}

.timeline ol {
  font-size: 0;
  width: 100vw;
  padding: 250px 0;
  transition: all 1s;
}

.timeline ol li {
  position: relative;
  display: inline-block;
  list-style-type: none;
  width: 160px;
  height: 3px;
  background: #456990;
}

.timeline ol li:last-child {
  width: 280px;
}

.timeline ol li:not(:first-child) {
  margin-left: 14px;
}

.timeline ol li:not(:last-child)::after {
  content: "";
  position: absolute;
  top: 50%;
  left: calc(100% + 1px);
  bottom: 0;
  width: 12px;
  height: 12px;
  transform: translateY(-50%);
  border-radius: 50%;
  background: #f45b69;
}

.timeline ol li div {
  position: absolute;
  left: calc(100% + 7px);
  width: 280px;
  font-size: 1rem;
  white-space: normal;
  color: black;
  background: white;
}

.timeline ol li div::before {
  content: "";
  position: absolute;
  top: 100%;
  left: 0;
  width: 0;
  height: 0;
  border-style: solid;
}

.timeline ol li:nth-child(odd) div {
  top: -16px;
  transform: translateY(-100%);
}

.timeline ol li:nth-child(odd) div::before {
  top: 100%;
  border-width: 8px 8px 0 0;
  border-color: white transparent transparent transparent;
}

.timeline ol li:nth-child(even) div {
  top: calc(100% + 16px);
}

.timeline ol li:nth-child(even) div::before {
  top: -8px;
  border-width: 8px 0 0 8px;
  border-color: transparent transparent transparent white;
}

.timeline time {
  display: block;
  font-size: 1.2rem;
  font-weight: bold;
  margin-bottom: 8px;
}

.nav-item div:nth-child(odd) {
  border-left: 2px solid lightgray;
  padding: 0 15px 15px 15px;
}

.timeline ol li:nth-child(even) div {
  // border-right: 2px solid lightgray;
  padding: 15px 15px 0 15px;
}

.date{
  color: grey;
}

/* GENERAL MEDIA QUERIES
–––––––––––––––––––––––––––––––––––––––––––––––––– */
@media screen and (max-width: 599px) {
  .timeline ol,
  .timeline ol li {
    width: auto;
  }
  .timeline ol {
    padding: 0;
    transform: none !important;
  }
  .timeline ol li {
    display: block;
    height: auto;
    background: transparent;
  }
  .timeline ol li:first-child {
    margin-top: 25px;
  }
  .timeline ol li:not(:first-child) {
    margin-left: auto;
  }
  .timeline ol li div {
    position: static;
    width: 94%;
    height: auto !important;
    margin: 0 auto 25px;
  }
  .timeline ol li:nth-child(odd) div {
    transform: none;
  }
  .timeline ol li:nth-child(odd) div::before,
  .timeline ol li:nth-child(even) div::before {
    left: 50%;
    top: 100%;
    transform: translateX(-50%);
    border: none;
    border-left: 1px solid white;
    height: 25px;
  }
  .timeline ol li:last-child,
  .timeline ol li:nth-last-child(2) div::before,
  .timeline ol li:not(:last-child)::after,
  .timeline .arrows {
    display: none;
  }
}
/* FOOTER STYLES
–––––––––––––––––––––––––––––––––––––––––––––––––– */
.page-footer {
  position: fixed;
  right: 0;
  bottom: 20px;
  display: flex;
  align-items: center;
  padding: 5px;
  color: black;
  background: rgba(255, 255, 255, 0.65);
}

.page-footer a {
  display: flex;
  margin-left: 4px;
}

// @media (max-width: 1400px) {

// }
// @media (max-width: 930px) {

// }

// @media (max-width: 600px) {

// }
// @media (max-width: 445px) {

// }
// @media (max-width: 392px) {

// }

</style>