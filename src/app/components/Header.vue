<template>
  <header>
    <div class="container">
      <div>My Brand</div>
      <nav role="navigation">
        <ul class="nav-bar">
          <li>
            <a href="">{{ home }}</a>
          </li>
          <li>
            <a href="">{{ page1 }}</a>
          </li>
          <li>
            <a href="">Page 2</a>
          </li>
        </ul>
        <ul class="nav-bar-right">
          <li>
            <a href="">Sign up</a>
          </li>
          <li>
            <a href="">Login</a>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Header',
  data () {
    return {
      home: 'Home',
      page1: 'Page 1',
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
