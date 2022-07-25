<template>
  <div class="type-nav">
    <div class="container">
      <!-- 事件委托添加一个父元素 -->
      <h2 class="all">全部商品分类</h2>
      <div class="sort">
        <div class="all-sort-list2">
          <!-- 鼠标移进去改变currentIndex的值 如果值==当前的index索引给元素添加 cur 类名 -->
          <!-- :class="{cur:currentIndex==index}  添加cur类名添加是currentIndex==index-->
          <div class="item" v-for="(c1, index) in categoryList" :key="c1.categoryId"
            :class="{ cur: currentIndex == index }" @mouseout="leaveIndex">
            <h3 @mouseenter="changIndex(index)">
              <a href="">{{ c1.categoryName }}</a>
            </h3>
            <div class="item-list clearfix" :style="{ display: currentIndex == index ? 'block' : 'none' }">
              <!-- :style="{display: currentIndex == index ? 'block' : 'none'}" 添加样式 还有样式条件  currentIndex == index的三元表达式-->
              <div class="subitem" v-for="(c2) in c1.categoryChild" :key="c2.categoryId">
                <dl class="fore">
                  <dt>
                    <a href="">{{ c2.categoryName }}</a>
                  </dt>
                  <dd>
                    <em v-for="(c3) in c2.categoryChild" :key="c3.categoryId">
                      <a href="">{{ c3.categoryName }}</a>
                    </em>
                  </dd>
                </dl>
              </div>
            </div>
          </div>
        </div>
      </div>

      <nav class="nav">
        <a href="###">服装城</a>
        <a href="###">美妆馆</a>
        <a href="###">尚品汇超市</a>
        <a href="###">全球购</a>
        <a href="###">闪购</a>
        <a href="###">团购</a>
        <a href="###">有趣</a>
        <a href="###">秒杀</a>
      </nav>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
// lodash 全部功能引入 我们按需引入 引入节流
import throttle from "lodash/throttle";
export default {
  name: "TypeNav",
  data() {
    return {
      currentIndex: -1,
    };
  },
  // 组件挂载完毕向服务器发请求
  mounted() {
    //知vuex发请求，获取数据,储存于仓库中
    this.$store.dispatch("categoryList");
  },
  computed: {
    ...mapState({
      // 获取仓库中的数据 右侧需要一个函数,返回一个对象 这个对象中的属性就是仓库中的数据
      // 右侧需要一个函数,当使用这个计算属性的时候右侧函数会被调用一个 参数state就是大仓库中的数据
      // 左边的categoryList就是计算属性的名字(可以随便起) 右边的函数就是计算属性的返回值 这个函数中的属性就是仓库中的数据
      categoryList: (state) => state.home.categoryList,
    }),
  },
  methods: {
    // 没有使用节流
    // changIndex(index) {
    //   // 正常情况: 用户慢慢移动 每一个每一个来 都会触发
    //   // 非正常情况: 用户鼠标进入速度过快 这种行为会导致浏览器反应不过来 如果里面有大量业务 有可能出现卡顿状态
    //   this.currentIndex = index;
    // },
    // 使用lodash节流函数 lodash不推荐里面函数写箭头函数 this指向可能不正确  下面写法是使用es5对象函数写法 key value 写法 其他的都是ES6的写法
    changIndex : throttle(function(index) {
      this.currentIndex = index;
    }, 50),
    //  上面ES5中的函数写法 key value 写法  下面是ES6的写法 
    
    leaveIndex() {
      this.currentIndex = -1;
    },
  },
};
</script>

<style lang="less" scoped>
.item:hover {
  background-color: skyblue;
}

.type-nav {
  border-bottom: 2px solid #e1251b;

  .container {
    width: 1200px;
    margin: 0 auto;
    display: flex;
    position: relative;

    .all {
      width: 210px;
      height: 45px;
      background-color: #e1251b;
      line-height: 45px;
      text-align: center;
      color: #fff;
      font-size: 14px;
      font-weight: bold;
    }

    .nav {
      a {
        height: 45px;
        margin: 0 22px;
        line-height: 45px;
        font-size: 16px;
        color: #333;
      }
    }

    .sort {
      position: absolute;
      left: 0;
      top: 45px;
      width: 210px;
      height: 461px;
      position: absolute;
      background: #fafafa;
      z-index: 999;

      .all-sort-list2 {
        .item {
          h3 {
            line-height: 30px;
            font-size: 14px;
            font-weight: 400;
            overflow: hidden;
            padding: 0 20px;
            margin: 0;

            a {
              color: #333;
            }
          }

          .item-list {
            display: none;
            position: absolute;
            width: 734px;
            min-height: 460px;
            background: #f7f7f7;
            left: 210px;
            border: 1px solid #ddd;
            top: 0;
            z-index: 9999 !important;

            .subitem {
              float: left;
              width: 650px;
              padding: 0 4px 0 8px;

              dl {
                border-top: 1px solid #eee;
                padding: 6px 0;
                overflow: hidden;
                zoom: 1;

                &.fore {
                  border-top: 0;
                }

                dt {
                  float: left;
                  width: 54px;
                  line-height: 22px;
                  text-align: right;
                  padding: 3px 6px 0 0;
                  font-weight: 700;
                }

                dd {
                  float: left;
                  width: 415px;
                  padding: 3px 0 0;
                  overflow: hidden;

                  em {
                    float: left;
                    height: 14px;
                    line-height: 14px;
                    padding: 0 8px;
                    margin-top: 5px;
                    border-left: 1px solid #ccc;
                  }
                }
              }
            }
          }

          //   &:hover {
          //     .item-list {
          //       display: block;
          //     }
          //   }
        }
      }
    }
  }
}
</style>