<template>
  <div>
    <div class="top-search">
      <input type="text" v-model="searchInput" @keyup.enter="search" />
    </div>
    <div class="search-in" v-for="(item, index) in tableList" :key="index">{{item.name}}</div>
  </div>
</template>

<script>
let seachlist = [
  {
    id: 1,
    name: "天猫精灵"
  },
  {
    id: 2,
    name: "天猫音响"
  },
  {
    id: 3,
    name: "天猫精灵"
  }
];

export default {
  data() {
    return {
      list: seachlist,
      searchInput: "",
      searchValue: ""
    };
  },
  created: function() {
    this.list = this.list;
  },
  computed: {
    tableList() {
      let { list = [], searchValue } = this;
      searchValue = searchValue.trim();
      if (searchValue && list && list.length) {
        return list.filter(function(item) {
          if (item.name.includes(searchValue)) {
            return item;
          }
        });
      }
      return list;
    }
  },
  methods: {
    search() {
      this.searchValue = this.searchInput.trim();
    }
  }
};
</script>

<style scoped>
.top-search {
  display: block;
  width: 100%;
  height: 45px;
  background-color: rgb(255, 0, 54);
}
.top-search > input {
  width: 95%;
  height: 80%;
  margin: 1.25% 2.5%;
  border-radius: 5px;
  border: 1px transparent;
}
.search-in {
  float: left;
  width: 50%;
  overflow: hidden;
  box-sizing: border-box;
  color: #999;
  white-space: nowrap;
  border-bottom: 1px solid #eee;
      padding: .68em .6em;
}
</style>