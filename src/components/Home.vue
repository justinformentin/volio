<template>
  <main id="home">

    <Hero/>

    <Card id="quantyst" class="light card-mg">
      <h3 slot='cardTitle'>Quantyst</h3>
      <div slot='cardContent'>
        <p><span>2014&mdash;2015</span>Quantyst is a data company. They utilize machine learning models to quantify the massive amounts of data on the internet. With Quantyst, you can analyze the sentiment of social media posts. Designed to have a modern look and feel, it has a cool color scheme. Much like the cold, lifeless servers that holds its data.</p>
        <div class="buttons">
          <router-link to="/quantyst/" class='button'><span class="highlighter">Case study</span><svg width="9" height="14" viewBox="0 0 9 14"><path stroke-width="1.8" d="M1.5 1.5L7 7l-5.5 5.5" fill="none" fill-rule="evenodd"/></svg></router-link>
        </div>
      </div>
      <ul slot='cardList'>
        <li><h4>Design</h4></li>
        <li><h4>Wireframing</h4></li>
        <li><h4>Prototyping</h4></li>
        <li><h4>Illustration</h4></li>
        <li><h4>Branding</h4></li>
      </ul>
      <Flickity slot='cardGallery' ref="flickity" :options="flickityOptions" class='gallery'>
        <figure class="item tablet"><img src='../assets/a1.jpg' alt="Quantyst Home Page" width="1280" height="960"/></figure>
        <figure class="item tablet"><img src='../assets/a2.jpg' alt="Quantyst Info" width="1280" height="960"/></figure>
        <figure class="item tablet"><img src='../assets/a3.jpg' alt="Quantyst Contact" width="1280" height="960"/></figure>
      </Flickity>
    </Card>

    <Card id="mirage" class="dark card-mg">
      <h3 slot='cardTitle'>Wave</h3>
      <div slot='cardContent'>
        <p><span>2015</span>Wave is an app that you apparently sign in to, go to your profile and upload videos and photos, and then shop for watches and movies. Good thing Wave isn't a real app. These are just app mockups. You should add your own photos here. You know, since this is your portfolio now.</p>
      </div>
      <ul slot='cardList'>
        <li><h4>Product Design</h4></li>
        <li><h4>Branding</h4></li>
        <li><h4>Art Direction</h4></li>
        <li><h4>Prototyping</h4></li>
        <li><h4>Wireframing</h4></li>
      </ul>
      <Flickity slot='cardGallery' ref="flickity" :options="flickityOptions" class='gallery'>
        <figure class="item phone"><img src='../assets/b1.jpg' alt="App Mockup One" width="750" height="1334"/></figure>
        <figure class="item phone"><img src='../assets/b2.jpg' alt="App Mockup Two" width="750" height="1334"/></figure>
        <figure class="item phone"><img src='../assets/b3.jpg' alt="App Mockup Three" width="750" height="1334"/></figure>
      </Flickity>
    </Card>

    <Card id="explain" class="light">
      <h3 slot='cardTitle'>App Shmap</h3>
      <div slot='cardContent'>
        <p><span>2016</span>This is also not really a real thing. Just placeholders, waiting for you to put your own pictures. I don't know what else to say. Are you even still reading this? You put something here instead. This is for you. Aren't you happy about it? Come on, don't be like that.</p>
      </div>
      <ul slot='cardList'>
        <li><h4>Shmap Design</h4></li>
        <li><h4>App Design</h4></li>
        <li><h4>Protoshmapping</h4></li>
        <li><h4>Illustration</h4></li>
        <li><h4>Wireframing</h4></li>
      </ul>
      <Flickity slot='cardGallery' ref="flickity" :options="flickityOptions" class='gallery'>
        <figure class="item tablet"><img src='../assets/c1.jpg' alt="Drimo Home" width="1280" height="960"/></figure>
        <figure class="item tablet"><img src='../assets/c2.jpg' alt="Drimo Info" width="1280" height="960"/></figure>
        <figure class="item tablet"><img src='../assets/c3.jpg' alt="Drimo Video" width="1280" height="960"/></figure>
      </Flickity>
    </Card>

  </main>
</template>

<script>
import Hero from '@/components/Hero.vue'
import Card from '@/components/Card.vue'
import Flickity from '@/components/Flickity.vue'

export default {
  mounted () {
    var navBar = document.getElementById('navigationBar');
    navBar.className += " expanded";
  },
  data () {
    return {
      flickityOptions: {
        freeScroll: true,
        prevNextButtons: true,
        pageDots: true,
        wrapAround: false,
        selectedAttraction: 0.032,
        friction: 0.28
      }
    }
  },
  components: {
    Hero,
    Card,
    Flickity
  },
}
</script>

<style lang="scss" scoped>

@import
'../scss/variables';

.content p span {
  color: $yellow;
  margin-right: 1rem;
}

.buttons {
	margin-top: 2rem;
	display: flex;
	justify-content: flex-start;
}

.card-mg {
  margin: 0 0 15vw 0;
}

ul {
	max-width: 20vw;
	font-size: 0;
}

#quantyst .gallery::before {
  background-color: hsl(315, 90%, 90%);
  background-image: linear-gradient(340deg, hsl(315, 90%, 90%) 0%, hsl(280, 20%, 90%) 100%);
}

#quantyst .item {
	box-shadow: 0 15px 60px hsla(320,50%,40%, 0.35);
}

#mirage .gallery::before {
  background-color: hsl(190,55%,80%);
  background-image: linear-gradient(340deg, hsl(200,75%,70%) 0%, hsl(180,55%,80%) 100%);
}

#mirage .item {
  box-shadow: 0 15px 60px hsla(190,70%,0%, 0.4);
}

#explain .gallery::before {
  background-color: hsl(220, 40%, 70%);
  background-image: linear-gradient(5deg, hsl(220, 40%, 70%) 0%, hsl(145, 25%, 90%) 100%);
}

#explain .item {
  box-shadow: 0 15px 60px hsla(220,60%,30%, 0.35);
}

#explain .content h3 {
  margin-left: 8%;
  width: 17%;
  min-width: 232px;
}

@media (min-width: 1600px) {
	#explain .content h3 {
		margin-left: 10%;
		width: 15%;
	}
}

@media (max-width: 960px) {
  #explain .content h3 {
		margin-left: 0;
    width: 100%;
  }
  
  ul {
		margin: 1.5rem 0 1rem 0;
		max-width: 100%;
  }
  
	ul li {
		display: inline-block;
		margin-right: 2.5vw;
	}
}

@media (max-width: 560px) {
	.buttons {
		flex-direction: column;
	}
}

</style>
