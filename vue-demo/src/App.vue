<!-- 根组件 -->
<template>
  <div id="app">
      <!-- keep-ailve 加入缓存 exclude 忽略缓存组件 -->
    <keep-alive exclude="Detail">
         <router-view/>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>

</style>
