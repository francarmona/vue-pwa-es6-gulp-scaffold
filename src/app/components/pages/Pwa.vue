<template>
  <div class="container">
    <section>
      <h1>Progressive Web Apps</h1>
      <p class="text-center">Websites that look like mobile applications</p>
      <div class="row top-marged">
        <div class="col-sm-4 text-center">
          <i class="material-icons">signal_wifi_off</i>
          <div class="bold">Reliable</div>
        </div>
        <div class="col-sm-4 text-center">
          <svg viewBox="0 0 24 24">
            <path fill="none" d="M0 0h24v24H0z"/>
            <path d="M12 2.02c-5.51 0-9.98 4.47-9.98 9.98s4.47 9.98 9.98 9.98 9.98-4.47 9.98-9.98S17.51 2.02 12 2.02zM11.48 20v-6.26H8L13 4v6.26h3.35L11.48 20z"/>
          </svg>
          <div class="bold">Fast</div>
        </div>
        <div class="col-sm-4 text-center">
          <svg viewBox="0 0 24 24">
            <path fill="none" d="M0 0h24v24H0V0z"/>
            <path d="M18 1.01L8 1c-1.1 0-2 .9-2 2v3h2V5h10v14H8v-1H6v3c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-1.99-2-1.99zM10 15h2V8H5v2h3.59L3 15.59 4.41 17 10 11.41z"/>
            <path fill="none" d="M0 0h24v24H0V0z"/>
          </svg>
          <div class="bold">Engaging</div>
        </div>
      </div>
      <div class="detail">
        <div class="row top-marged bottom-marged">
          <div class="col-sm-12 col-md-6">
            <img src="assets/img/pwa-reliable.png" srcset="assets/img/pwa-reliable.png 1x,
                  assets/img/pwa-reliable.png 2x">
          </div>
          <div class="col-sm-12 col-md-6 right-padded">
            <h3>Reliable</h3>
            <p>When launched from the user’s home screen, service workers enable a Progressive Web App to load instantly, regardless of the network state.</p>
            <p>A service worker, written in JavaScript, is like a client-side proxy and puts you in control of the cache and how to respond to resource requests. By pre-caching key resources you can eliminate the dependence on the network, ensuring an instant and reliable experience for your users.</p>
          </div>
        </div>
        <div class="row top-marged">
          <div class="col-sm-12 col-md-6 right-padded">
            <h3>Fast</h3>
            <p>53% of users will abandon a site if it takes longer than 3 seconds to load! And once loaded, users expect them to be fast—no janky scrolling or slow-to-respond interfaces.</p>
          </div>
          <div class="col-sm-12 col-md-6">
            <img src="assets/img/pwa-fast.png" srcset="assets/img/pwa-fast.png 1x,
                  assets/img/pwa-fast.png 2x">
          </div>
        </div>
        <div class="row top-marged">
          <div class="col-sm-12 col-md-6">
            <img src="assets/img/pwa-engaging.png" srcset="assets/img/pwa-engaging.png 1x,
                  assets/img/pwa-engaging.png 2x">
          </div>
          <div class="col-sm-12 col-md-6">
            <h3>Engaging</h3>
            <p>Progressive Web Apps are installable and live on the user's home screen, without the need for an app store. They offer an immersive full screen experience with help from a web app manifest file and can even re-engage users with web push notifications.</p>
            <p>The Web App Manifest allows you to control how your app appears and how it's launched. You can specify home screen icons, the page to load when the app is launched, screen orientation, and even whether or not to show the browser chrome.</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'PWA'
}
</script>

<style lang="scss" scoped>
  @import '../../scss/theme/variables';
  @import '../../scss/functions';
  .row {
    span {
      font-size: 1.2rem;
    }
    i {
      font-size: 1.1rem;
    }
    svg {
      height: 1.1rem;
    }
  }
  section {
    img {
      width: 500px;
      height: auto;
    }
    .detail {
      > div:nth-child(even) {
        background: color($colors, 'light');
      }
    }
  }

  @media screen and (max-width: $md-breakpoint - 1) {
    section {
      .detail {
        > div {
          padding: 0 10px;
          margin-top: 1rem;
        }
      }
    }
  }

</style>
