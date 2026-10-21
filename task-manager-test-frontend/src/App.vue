<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <nav class="navbar navbar-expand navbar-dark bg-dark mb-4">
    <div class="container">
      <RouterLink class="navbar-brand" to="/">Task Manager</RouterLink>
      <div class="navbar-nav">
        <RouterLink class="nav-link" active-class="active" to="/customers">Clients</RouterLink>
        <RouterLink class="nav-link" active-class="active" to="/projects">Projets</RouterLink>
        <RouterLink class="nav-link" active-class="active" to="/tasks">Tâches</RouterLink>
      </div>
    </div>
  </nav>

  <main class="container pb-5">
    <RouterView />
  </main>
</template>
