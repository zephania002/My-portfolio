

<script setup lang="ts">
import { ref } from 'vue';

const currentYear = ref(new Date().getFullYear());
</script>

<template>
    <footer class="footer">
        <div class="text-center">
            <small class="copyright">
                <i class="fa fa-copyright" aria-hidden="true"></i>
                Wanjala Stephen {{ currentYear }}
            </small>
        </div>
    </footer>
</template>

  
  

  