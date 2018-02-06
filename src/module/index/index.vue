<template>
  <div class="hello">
    <!-- <h1>{{ msg }}</h1> -->
    <!-- <h2>点击点击</h2> -->
    <!-- <mt-button type="default"  @click="setHandle">default</mt-button> -->
    <mt-header fixed title="基于MUI的Vuex最简单例子">
        <!-- <mt-button slot="right">分享</mt-button> -->
    </mt-header>
    <div class="top">
      <input type="text" v-model="content" placeholder="请输入">
      <mt-button size="small"  @click="submit">添加</mt-button>
    </div>
    <div id="main">
      <div class="title">所有的输入</div>
      <p v-for="n in state.Index.event" :key="n.id">
        {{n.content}}
      </p>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
// import 'babel-polyfill'
import store from '../../vuex/store'

export default {
  name: 'Index',
  data () {
    return {
      msg: '',
      content: '',
      noFinished: [],
      noDone: [],
      Done: [],
      Cancel: [],
      selected: 1,
      value: ''
    }
  },
  computed: {
    ...mapActions([
      'ADDEVENT'
    ]),
    state () {
      return store.state
    }
  },
  components: {
  },
  methods: {
    submit () {
      const that = this
      const params = {
        id: 0,
        type: 1,
        content: '',
        time: ''
      }
      // that.content = that.content.trim()
      if (that.content) {
        params.content = that.content
        params.time = new Date()
        store.dispatch('ADDEVENT', params)
        that.content = ''
        that.$toast('添加成功')
      }
    },
    setHandle () {
      this.$toast('Hello world!')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.top{
  display: flex;
  input{
    width: 340px;
    height: 30px;
    border: 1px solid #dadada;
    // border-radius: 20px;
    padding-left: 10px;
    margin-bottom: 30px;
  }
  button{
    width: 100px;
    height: 30px;
    border:none;
    margin-left: 10px;
    border-radius: 10px;
  }
}
#main{
  // background: #dadada;
  border: 1px solid #dadada;
  min-height: 100px;
  .title{
    height: 30px;
    line-height: 30px;
    color:#fff;
    font-size: 14px;
    background: #26a2ff;
    padding-left:10px;
    text-align: left;
  }
  p{
    padding-left:10px;
    text-align: left;
  }
}
</style>
