<template>
  <div>
    <h2 class="first-t">女装</h2>
    <ul>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "recommended"
};
</script>

<style scoped>
.first-t {
  font-size: 14px;
  line-height: 14px;
  color: #9b9b9b;
  padding: 20px 10px;
}
ul {
  display: grid;
  grid-template-columns: 76px 76px 76px;
  list-style-type: none;
  border: 1px solid seagreen;
  padding: 0px 10px;
}
li {
  border: 1px solid salmon;
  width: 76px;
  height: 89px;
}
</style>