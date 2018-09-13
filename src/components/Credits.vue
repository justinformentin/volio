<template>
  <footer>
    <div class="credits">
      <div class="row">
        <p><em>About<br />—</em>Volio is a Portfolio Boilerplate built using Vue. Utilizing <span class="tooltip t00">Flickity</span>, Sass, <span class="tooltip t01">Webpack</span>, and Vue-Router, this boilerplate has <span class="tooltip t02">everything</span> you need to start building a <span class="tooltip t03">beautiful</span>, modern portfolio.
        </p>
        <p><em>Get in touch<br />—</em>
        <a href="mailto:talktojustintoday@gmail.com" title="Email">
          <span class="highlighter">Email</span>
        </a>
        <br />
        <a href="https://twitter.com/justinformentin" title="@justinformentin on Twitter" target="_blank">
          <span class="highlighter">Twitter</span>
        </a>
        <br />
        <a href="https://github.com/justinformentin" title="GitHub" target="_blank">
          <span class="highlighter">GitHub</span>
        </a>
        <br />
        <a href="https://linkedin.com/in/justinformentin" title="LinkedIn" target="_blank">
          <span class="highlighter">LinkedIn</span>
        </a>
        </p>
      </div>
    </div>
  </footer>
</template>

<style lang="scss" scoped>

@import
'../scss/variables';

.social-icon {
  max-width: 30px; 
  max-height: 30px;

	&:hover #twitterPath {
		fill: #311B92;
	}
}

footer {
  padding: 5% 0;
  margin: auto 0;
  display: flex;
  align-content:center;
	justify-content: space-between;
}

svg {
	width: 300px; height: 300px;
}

.credits {
  margin: 0 auto;
}

.row {
  margin:0 auto;
  display: flex;
  align-content:center;
	justify-content: flex-start;
}

p {
	font-family: $mono;
	font-size: 1rem;
	min-width: 200px;
	max-width: 540px;
}

footer .row p:nth-child(1) {
	margin-right: 5vw;
}

em {
	display: block;
	font-weight: normal;
	font-style: normal;
	color: $text-third;
}

.row:last-child p a {
	margin-right: 1rem;
}

.tooltip {
  display: inline-block;
  position: relative;
  cursor: help;
  transition: color 0.15s cubic-bezier(.25, .46, .45, .94);

  &::before {
    content: "";
    display: block;
    position: absolute; top: 90%;
    background-color: hsla(240,20%,80%, 0.5);
    height: 2px;
    width: 100%;
  }

  &::after {
    display: inline-block;
    position: absolute;
    left: 50%; bottom: 0;
    opacity: 0;
    background: linear-gradient(130deg, hsl(180,10%,99%), hsl(180,20%,96%));
    box-shadow: 0 10px 60px hsla(320,30%,40%, 0.2);
    padding: 16px;
    border-radius: 2px;
    font: 14px/1.25 $body;
    color: $text-second;
    text-align: center;
    pointer-events: none;
    transform: translate(-50%, -24px);
    transition: all 0.15s cubic-bezier(.25, .46, .45, .94);
    will-change: transform, opacity;
  }

  &.t00::after {
    width: 120px;
    content: 'That smooth swiping action.';
  }

  &.t01::after {
    width: 180px;
    content: 'Bundle all of the things!';
  }

  &.t02::after {
    width: 130px;
    content: 'Ok, not everything.';
  }

  &.t03::after {
  width: 130px;
  content: 'I think so, anyway.';
  }

  &:hover {
    color: hsl(234,10%,60%);
  }

  &:hover::after {
    opacity: 1;
    transform: translate(-50%, -30px);
  }
}

.unavailable:hover {
  cursor: not-allowed;
}

@media (max-width: 960px) {
  footer {
		flex-direction: column;
		padding: 0 0 15vh 0;
    overflow: hidden;
  } 
	.row {
    margin: 2vh 10%;
  }
}

@media (max-width: 560px) {
  .row {
    flex-direction: column;
  }
  
  footer .row p:nth-child(1) {
		margin-right: 0;
  }
}

@media (max-width: 500px) {
  .row {
    margin: 2vh 5%;
  }
}

@media (max-width: 420px) {
  .t00::after {
    left: 140%;
  }

  .t02::after {
    left: 80%;
  }

  .t04::after {
    left: -10%;
  }
}

@media (max-width: 375px) {
  .t04::after {
    left: 110%;
  }
}

@media (max-width: 320px) {
  .t03::after {
    left: 150%;
  }
  .t04::after {
    left: 50%;
  }
}

</style>
