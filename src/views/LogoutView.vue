<template>
    <div>

    </div>
</template>

<script setup>
import router from "@/router"


    localStorage.removeItem('user')
    router.push('/login')
    
</script>