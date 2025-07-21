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
  overflow-x: auto;
  overflow-y: hidden;
  display: flex;
  justify-content: start;
  align-items: center;
  width: 100%;
  min-height: 700px;
  padding: 0 20px;
  &::-webkit-scrollbar{
    height: 6px;
  }
  &::-webkit-scrollbar-track {
    background: #f1f1f1;
    border-radius: 4px;
  }
  &::-webkit-scrollbar-thumb {
    background: #a7c1dd;
    border-radius: 4px;
  }
}

.timeline ol {
  font-size: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 20px;
  margin: 0;
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
  padding: 15px 15px 0 15px;
}

.date{
  color: grey;
}

/* GENERAL MEDIA QUERIES
–––––––––––––––––––––––––––––––––––––––––––––––––– */
@media screen and (max-width: 599px) {
  .timeline {
    overflow-x: hidden;
    overflow-y: auto;
    min-height: 400px;
    white-space: normal;
    display: block;
    width: 100%;
    padding: 20px;
    position: relative;
  }
  
  .timeline ol {
    display: block;
    padding: 0;
    width: 100%;
    margin: 0;
    position: relative;
    background: transparent;
  }
  
  .timeline ol::before {
    content: "";
    position: absolute;
    left: 15px;
    top: 0;
    bottom: 0;
    width: 2px;
    background-color: #456990;
    z-index: 1;
  }
  
  .timeline ol li {
    display: block;
    width: 100%;
    height: auto;
    background: transparent;
    margin: 0 0 30px 0;
    position: relative;
    padding-left: 50px;
  }

  .timeline ol li:not(:last-child)::after {
    content: "";
    position: absolute;
    left: 10px;
    top: -5px;
    width: 12px;
    height: 12px;
    background: #f45b69;
    border-radius: 50%;
    z-index: 2;
    border: 2px solid white;
    transform: none;
  }
  
  .timeline ol li:not(:first-child) {
    margin-left: 0;
  }
  
  .nav-item div:nth-child(odd) {
    position: static;
    width: 100%;
    margin: 0;
    padding: 15px;
    background: white;
    border-top: 2px solid lightgray;
    border-left: 0px;
  }

  .timeline ol li:nth-child(odd) div,
  .timeline ol li:nth-child(even) div {
    position: static;
    top: auto;
    transform: none;
    padding: 15px;
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
</style>