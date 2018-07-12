 <template>
  <div>
    <div class="pop-inner" :class="{isShow:show}">
      <div class="popTitle">筛选</div>
      <div class="optionInner">
        <div class="optionRow">
          <div class="optionTitle">按价格</div>
          <div class="option" @click="heightTobottom">从高到低</div>
          <div class="option" @click="bottomToHeight">从低到高</div>
        </div>
        <div class="optionRow">
          <div class="optionTitle">按上新时间</div>
          <div class="option" @click="farToNear">从远到近</div>
          <div class="option" @click="nearToFar">从近到远</div>
        </div>
        <div class="optionRow">
          <div class="optionTitle">按销量</div>
          <div class="option" @click="moreToLess">从多到少</div>
          <div class="option" @click="lessToMore">从少到多</div>
        </div>
      </div>
      <div class="button-inner">
        <div class="button" @click="reset">重置</div>
        <div class="button" @click="confirm">确定</div>
      </div>
    </div>
    <section id="mask" v-if="show">
    </section>
    <section class="kinds-inner">
      <div class="scroll">
        <ul class="gookinds">
          <li class="kinds" v-for="(items,index) in kinds" @click="text(items.goods)" :key="index">{{items.name}}</li>
        </ul>
      </div>
      <div class="filtrate" @click="screen">筛选</div>
    </section>
    <section class="goods-inner">
      <div class="showInner">
        <div class="otherShows">
          <div class="show" v-for="(item,index) in goods" :key="index">
            <img :src="item.img" alt="" class="img">
            <div class="name">{{item.name}}</div>
            <div class="price">￥{{item.price|moneyFilter}}</div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
 <script>
import { toMoney } from "@/filter/moneyFilter.js";
export default {
  data() {
    return {
      kinds: [
        {
          name: "牛仔裤",
          goods: [
            {
              img: require("@/assets/img/HOME/1-1.png"),
              name: "标准领缎纹高定衬衫",
              price: 98,
              sales: 489,
              update: 1522627740
            },
            {
              img: require("@/assets/img/HOME/1-2.png"),
              name: "标准领缎纹标准领缎纹标准领缎纹标准领缎纹",
              price: 11,
              sales: 999,
              update: 1530586837
            },
            {
              img: require("@/assets/img/HOME/1-3.png"),
              name: "标准领缎纹高定衬衫",
              price: 66,
              sales: 999,
              update: 1522627740
            },
            {
              img: require("@/assets/img/HOME/1-4.png"),
              name: "标准领缎纹高定衬衫",
              price: 67,
              sales: 999,
              update: 1522627740
            },
            {
              img: require("@/assets/img/HOME/1-5.png"),
              name: "标准领缎纹高定衬衫",
              price: 9999,
              sales: 999,
              update: 1522627740
            },
            {
              img: require("@/assets/img/HOME/1-1.png"),
              name: "标准领缎纹高定衬衫",
              price: 398,
              sales: 999,
              update: 1522627740
            },
            {
              img: require("@/assets/img/HOME/1-2.png"),
              name: "456",
              price: 999,
              sales: 999,
              update: 1522627740
            },
            {
              img: require("@/assets/img/HOME/1-3.png"),
              name: "标准领缎纹高定衬衫",
              price: 398,
              sales: 999,
              update: 1522627740
            },
            {
              img: require("@/assets/img/HOME/1-4.png"),
              name: "标准领缎纹高定衬衫",
              price: 398,
              sales: 999,
              update: 1522627740
            },
            {
              img: require("@/assets/img/HOME/1-5.png"),
              name: "标准领缎纹高定衬衫",
              price: 398,
              sales: 999,
              update: 1522627740
            },
            {
              img: require("@/assets/img/HOME/1-5.png"),
              name: "标准领缎纹高定衬衫",
              price: 398,
              sales: 999,
              update: 1522627740
            },
            {
              img: require("@/assets/img/HOME/1-1.png"),
              name: "标准领缎纹高定衬衫",
              price: 398,
              sales: 999,
              update: 1522627740
            },
            {
              img: require("@/assets/img/HOME/1-2.png"),
              name: "标准领缎纹标准领缎纹标准领缎纹标准领缎纹",
              price: 398,
              sales: 999,
              update: 1522627740
            },
            {
              img: require("@/assets/img/HOME/1-3.png"),
              name: "标准领缎纹高定衬衫",
              price: 398,
              sales: 999,
              update: 1522627740
            },
            {
              img: require("@/assets/img/HOME/1-4.png"),
              name: "标准领缎纹高定衬衫",
              price: 398,
              sales: 999,
              update: 1522627740
            },
            {
              img: require("@/assets/img/HOME/1-5.png"),
              name: "标准领缎纹高定衬衫",
              price: 398,
              sales: 999,
              update: 1522627740
            },
            {
              img: require("@/assets/img/HOME/1-5.png"),
              name: "标准领缎纹高定衬衫",
              price: 398,
              sales: 999,
              update: 1522627740
            },
            {
              img: require("@/assets/img/HOME/1-1.png"),
              name: "标准领缎纹高定衬衫",
              price: 398,
              sales: 999,
              update: 1522627740
            },
            {
              img: require("@/assets/img/HOME/1-2.png"),
              name: "标准领缎纹标准领缎纹标准领缎纹标准领缎纹",
              price: 398,
              sales: 999,
              update: 1522627740
            },
            {
              img: require("@/assets/img/HOME/1-3.png"),
              name: "标准领缎纹高定衬衫",
              price: 398,
              sales: 999,
              update: 1522627740
            },
            {
              img: require("@/assets/img/HOME/1-4.png"),
              name: "标准领缎纹高定衬衫",
              price: 398,
              sales: 999,
              update: 1522627740
            },
            {
              img: require("@/assets/img/HOME/1-5.png"),
              name: "标准领缎纹高定衬衫",
              price: 398,
              sales: 999,
              update: 1522627740
            }
          ]
        },
        {
          name: "衬衫",
          goods: [
            {
              img: require("@/assets/img/HOME/1-1.png"),
              name: "标准领缎纹高定衬衫",
              price: 98,
              sales: 489,
              update: 1522627740
            },
            {
              img: require("@/assets/img/HOME/1-2.png"),
              name: "标准领缎纹标准领缎纹标准领缎纹标准领缎纹",
              price: 11,
              sales: 999,
              update: 1530586837
            },
            {
              img: require("@/assets/img/HOME/1-3.png"),
              name: "标准领缎纹高定衬衫",
              price: 66,
              sales: 999,
              update: 1522627740
            },
            {
              img: require("@/assets/img/HOME/1-4.png"),
              name: "标准领缎纹高定衬衫",
              price: 67,
              sales: 999,
              update: 1522627740
            },
            {
              img: require("@/assets/img/HOME/1-5.png"),
              name: "标准领缎纹高定衬衫",
              price: 9999,
              sales: 999,
              update: 1522627740
            },
            {
              img: require("@/assets/img/HOME/1-1.png"),
              name: "标准领缎纹高定衬衫",
              price: 398,
              sales: 999,
              update: 1522627740
            },
            {
              img: require("@/assets/img/HOME/1-2.png"),
              name: "456",
              price: 999,
              sales: 999,
              update: 1522627740
            },
            {
              img: require("@/assets/img/HOME/1-3.png"),
              name: "标准领缎纹高定衬衫",
              price: 398,
              sales: 999,
              update: 1522627740
            },
            {
              img: require("@/assets/img/HOME/1-4.png"),
              name: "标准领缎纹高定衬衫",
              price: 398,
              sales: 999,
              update: 1522627740
            },
            {
              img: require("@/assets/img/HOME/1-5.png"),
              name: "标准领缎纹高定衬衫",
              price: 398,
              sales: 999,
              update: 1522627740
            },
            {
              img: require("@/assets/img/HOME/1-5.png"),
              name: "标准领缎纹高定衬衫",
              price: 398,
              sales: 999,
              update: 1522627740
            },
            {
              img: require("@/assets/img/HOME/1-1.png"),
              name: "标准领缎纹高定衬衫",
              price: 398,
              sales: 999,
              update: 1522627740
            },
            {
              img: require("@/assets/img/HOME/1-2.png"),
              name: "标准领缎纹标准领缎纹标准领缎纹标准领缎纹",
              price: 398,
              sales: 999,
              update: 1522627740
            },
            {
              img: require("@/assets/img/HOME/1-3.png"),
              name: "标准领缎纹高定衬衫",
              price: 398,
              sales: 999,
              update: 1522627740
            },
            {
              img: require("@/assets/img/HOME/1-4.png"),
              name: "标准领缎纹高定衬衫",
              price: 398,
              sales: 999,
              update: 1522627740
            },
            {
              img: require("@/assets/img/HOME/1-5.png"),
              name: "标准领缎纹高定衬衫",
              price: 398,
              sales: 999,
              update: 1522627740
            },
            {
              img: require("@/assets/img/HOME/1-5.png"),
              name: "标准领缎纹高定衬衫",
              price: 398,
              sales: 999,
              update: 1522627740
            },
            {
              img: require("@/assets/img/HOME/1-1.png"),
              name: "标准领缎纹高定衬衫",
              price: 398,
              sales: 999,
              update: 1522627740
            },
            {
              img: require("@/assets/img/HOME/1-2.png"),
              name: "标准领缎纹标准领缎纹标准领缎纹标准领缎纹",
              price: 398,
              sales: 999,
              update: 1522627740
            },
            {
              img: require("@/assets/img/HOME/1-3.png"),
              name: "标准领缎纹高定衬衫",
              price: 398,
              sales: 999,
              update: 1522627740
            },
            {
              img: require("@/assets/img/HOME/1-4.png"),
              name: "标准领缎纹高定衬衫",
              price: 398,
              sales: 999,
              update: 1522627740
            },
            {
              img: require("@/assets/img/HOME/1-5.png"),
              name: "标准领缎纹高定衬衫",
              price: 398,
              sales: 999,
              update: 1522627740
            }
          ]
        },
        {
          name: "西服",
          goods: [
            {
              img: require("@/assets/img/HOME/1-1.png"),
              name: "标准领缎纹高定衬衫",
              price: 98,
              sales: 489,
              update: 1522627740
            },
            {
              img: require("@/assets/img/HOME/1-2.png"),
              name: "标准领缎纹标准领缎纹标准领缎纹标准领缎纹",
              price: 11,
              sales: 999,
              update: 1530586837
            },
            {
              img: require("@/assets/img/HOME/1-3.png"),
              name: "标准领缎纹高定衬衫",
              price: 66,
              sales: 999,
              update: 1522627740
            },
            {
              img: require("@/assets/img/HOME/1-4.png"),
              name: "标准领缎纹高定衬衫",
              price: 67,
              sales: 999,
              update: 1522627740
            },
            {
              img: require("@/assets/img/HOME/1-5.png"),
              name: "标准领缎纹高定衬衫",
              price: 9999,
              sales: 999,
              update: 1522627740
            },
            {
              img: require("@/assets/img/HOME/1-1.png"),
              name: "标准领缎纹高定衬衫",
              price: 398,
              sales: 999,
              update: 1522627740
            },
            {
              img: require("@/assets/img/HOME/1-2.png"),
              name: "456",
              price: 999,
              sales: 999,
              update: 1522627740
            },
            {
              img: require("@/assets/img/HOME/1-3.png"),
              name: "标准领缎纹高定衬衫",
              price: 398,
              sales: 999,
              update: 1522627740
            },
            {
              img: require("@/assets/img/HOME/1-4.png"),
              name: "标准领缎纹高定衬衫",
              price: 398,
              sales: 999,
              update: 1522627740
            },
            {
              img: require("@/assets/img/HOME/1-5.png"),
              name: "标准领缎纹高定衬衫",
              price: 398,
              sales: 999,
              update: 1522627740
            },
            {
              img: require("@/assets/img/HOME/1-5.png"),
              name: "标准领缎纹高定衬衫",
              price: 398,
              sales: 999,
              update: 1522627740
            },
            {
              img: require("@/assets/img/HOME/1-1.png"),
              name: "标准领缎纹高定衬衫",
              price: 398,
              sales: 999,
              update: 1522627740
            },
            {
              img: require("@/assets/img/HOME/1-2.png"),
              name: "标准领缎纹标准领缎纹标准领缎纹标准领缎纹",
              price: 398,
              sales: 999,
              update: 1522627740
            },
            {
              img: require("@/assets/img/HOME/1-3.png"),
              name: "标准领缎纹高定衬衫",
              price: 398,
              sales: 999,
              update: 1522627740
            },
            {
              img: require("@/assets/img/HOME/1-4.png"),
              name: "标准领缎纹高定衬衫",
              price: 398,
              sales: 999,
              update: 1522627740
            },
            {
              img: require("@/assets/img/HOME/1-5.png"),
              name: "标准领缎纹高定衬衫",
              price: 398,
              sales: 999,
              update: 1522627740
            },
            {
              img: require("@/assets/img/HOME/1-5.png"),
              name: "标准领缎纹高定衬衫",
              price: 398,
              sales: 999,
              update: 1522627740
            },
            {
              img: require("@/assets/img/HOME/1-1.png"),
              name: "标准领缎纹高定衬衫",
              price: 398,
              sales: 999,
              update: 1522627740
            },
            {
              img: require("@/assets/img/HOME/1-2.png"),
              name: "标准领缎纹标准领缎纹标准领缎纹标准领缎纹",
              price: 398,
              sales: 999,
              update: 1522627740
            },
            {
              img: require("@/assets/img/HOME/1-3.png"),
              name: "标准领缎纹高定衬衫",
              price: 398,
              sales: 999,
              update: 1522627740
            },
            {
              img: require("@/assets/img/HOME/1-4.png"),
              name: "标准领缎纹高定衬衫",
              price: 398,
              sales: 999,
              update: 1522627740
            },
            {
              img: require("@/assets/img/HOME/1-5.png"),
              name: "标准领缎纹高定衬衫",
              price: 398,
              sales: 999,
              update: 1522627740
            }
          ]
        },
        {
          name: "牛仔裤",
          goods: [
            {
              img: require("@/assets/img/HOME/1-1.png"),
              name: "标准领缎纹高定衬衫",
              price: 98,
              sales: 489,
              update: 1522627740
            },
            {
              img: require("@/assets/img/HOME/1-2.png"),
              name: "标准领缎纹标准领缎纹标准领缎纹标准领缎纹",
              price: 11,
              sales: 999,
              update: 1530586837
            },
            {
              img: require("@/assets/img/HOME/1-3.png"),
              name: "标准领缎纹高定衬衫",
              price: 66,
              sales: 999,
              update: 1522627740
            },
            {
              img: require("@/assets/img/HOME/1-4.png"),
              name: "标准领缎纹高定衬衫",
              price: 67,
              sales: 999,
              update: 1522627740
            },
            {
              img: require("@/assets/img/HOME/1-5.png"),
              name: "标准领缎纹高定衬衫",
              price: 9999,
              sales: 999,
              update: 1522627740
            },
            {
              img: require("@/assets/img/HOME/1-1.png"),
              name: "标准领缎纹高定衬衫",
              price: 398,
              sales: 999,
              update: 1522627740
            },
            {
              img: require("@/assets/img/HOME/1-2.png"),
              name: "456",
              price: 999,
              sales: 999,
              update: 1522627740
            },
            {
              img: require("@/assets/img/HOME/1-3.png"),
              name: "标准领缎纹高定衬衫",
              price: 398,
              sales: 999,
              update: 1522627740
            },
            {
              img: require("@/assets/img/HOME/1-4.png"),
              name: "标准领缎纹高定衬衫",
              price: 398,
              sales: 999,
              update: 1522627740
            },
            {
              img: require("@/assets/img/HOME/1-5.png"),
              name: "标准领缎纹高定衬衫",
              price: 398,
              sales: 999,
              update: 1522627740
            },
            {
              img: require("@/assets/img/HOME/1-5.png"),
              name: "标准领缎纹高定衬衫",
              price: 398,
              sales: 999,
              update: 1522627740
            },
            {
              img: require("@/assets/img/HOME/1-1.png"),
              name: "标准领缎纹高定衬衫",
              price: 398,
              sales: 999,
              update: 1522627740
            },
            {
              img: require("@/assets/img/HOME/1-2.png"),
              name: "标准领缎纹标准领缎纹标准领缎纹标准领缎纹",
              price: 398,
              sales: 999,
              update: 1522627740
            },
            {
              img: require("@/assets/img/HOME/1-3.png"),
              name: "标准领缎纹高定衬衫",
              price: 398,
              sales: 999,
              update: 1522627740
            },
            {
              img: require("@/assets/img/HOME/1-4.png"),
              name: "标准领缎纹高定衬衫",
              price: 398,
              sales: 999,
              update: 1522627740
            },
            {
              img: require("@/assets/img/HOME/1-5.png"),
              name: "标准领缎纹高定衬衫",
              price: 398,
              sales: 999,
              update: 1522627740
            },
            {
              img: require("@/assets/img/HOME/1-5.png"),
              name: "标准领缎纹高定衬衫",
              price: 398,
              sales: 999,
              update: 1522627740
            },
            {
              img: require("@/assets/img/HOME/1-1.png"),
              name: "标准领缎纹高定衬衫",
              price: 398,
              sales: 999,
              update: 1522627740
            },
            {
              img: require("@/assets/img/HOME/1-2.png"),
              name: "标准领缎纹标准领缎纹标准领缎纹标准领缎纹",
              price: 398,
              sales: 999,
              update: 1522627740
            },
            {
              img: require("@/assets/img/HOME/1-3.png"),
              name: "标准领缎纹高定衬衫",
              price: 398,
              sales: 999,
              update: 1522627740
            },
            {
              img: require("@/assets/img/HOME/1-4.png"),
              name: "标准领缎纹高定衬衫",
              price: 398,
              sales: 999,
              update: 1522627740
            },
            {
              img: require("@/assets/img/HOME/1-5.png"),
              name: "标准领缎纹高定衬衫",
              price: 398,
              sales: 999,
              update: 1522627740
            }
          ]
        },
        {
          name: "衬衫",
          goods: [
            {
              img: require("@/assets/img/HOME/1-1.png"),
              name: "标准领缎纹高定衬衫",
              price: 98,
              sales: 489,
              update: 1522627740
            },
            {
              img: require("@/assets/img/HOME/1-2.png"),
              name: "标准领缎纹标准领缎纹标准领缎纹标准领缎纹",
              price: 11,
              sales: 999,
              update: 1530586837
            },
            {
              img: require("@/assets/img/HOME/1-3.png"),
              name: "标准领缎纹高定衬衫",
              price: 66,
              sales: 999,
              update: 1522627740
            },
            {
              img: require("@/assets/img/HOME/1-4.png"),
              name: "标准领缎纹高定衬衫",
              price: 67,
              sales: 999,
              update: 1522627740
            },
            {
              img: require("@/assets/img/HOME/1-5.png"),
              name: "标准领缎纹高定衬衫",
              price: 9999,
              sales: 999,
              update: 1522627740
            },
            {
              img: require("@/assets/img/HOME/1-1.png"),
              name: "标准领缎纹高定衬衫",
              price: 398,
              sales: 999,
              update: 1522627740
            },
            {
              img: require("@/assets/img/HOME/1-2.png"),
              name: "456",
              price: 999,
              sales: 999,
              update: 1522627740
            },
            {
              img: require("@/assets/img/HOME/1-3.png"),
              name: "标准领缎纹高定衬衫",
              price: 398,
              sales: 999,
              update: 1522627740
            },
            {
              img: require("@/assets/img/HOME/1-4.png"),
              name: "标准领缎纹高定衬衫",
              price: 398,
              sales: 999,
              update: 1522627740
            },
            {
              img: require("@/assets/img/HOME/1-5.png"),
              name: "标准领缎纹高定衬衫",
              price: 398,
              sales: 999,
              update: 1522627740
            },
            {
              img: require("@/assets/img/HOME/1-5.png"),
              name: "标准领缎纹高定衬衫",
              price: 398,
              sales: 999,
              update: 1522627740
            },
            {
              img: require("@/assets/img/HOME/1-1.png"),
              name: "标准领缎纹高定衬衫",
              price: 398,
              sales: 999,
              update: 1522627740
            },
            {
              img: require("@/assets/img/HOME/1-2.png"),
              name: "标准领缎纹标准领缎纹标准领缎纹标准领缎纹",
              price: 398,
              sales: 999,
              update: 1522627740
            },
            {
              img: require("@/assets/img/HOME/1-3.png"),
              name: "标准领缎纹高定衬衫",
              price: 398,
              sales: 999,
              update: 1522627740
            },
            {
              img: require("@/assets/img/HOME/1-4.png"),
              name: "标准领缎纹高定衬衫",
              price: 398,
              sales: 999,
              update: 1522627740
            },
            {
              img: require("@/assets/img/HOME/1-5.png"),
              name: "标准领缎纹高定衬衫",
              price: 398,
              sales: 999,
              update: 1522627740
            },
            {
              img: require("@/assets/img/HOME/1-5.png"),
              name: "标准领缎纹高定衬衫",
              price: 398,
              sales: 999,
              update: 1522627740
            },
            {
              img: require("@/assets/img/HOME/1-1.png"),
              name: "标准领缎纹高定衬衫",
              price: 398,
              sales: 999,
              update: 1522627740
            },
            {
              img: require("@/assets/img/HOME/1-2.png"),
              name: "标准领缎纹标准领缎纹标准领缎纹标准领缎纹",
              price: 398,
              sales: 999,
              update: 1522627740
            },
            {
              img: require("@/assets/img/HOME/1-3.png"),
              name: "标准领缎纹高定衬衫",
              price: 398,
              sales: 999,
              update: 1522627740
            },
            {
              img: require("@/assets/img/HOME/1-4.png"),
              name: "标准领缎纹高定衬衫",
              price: 398,
              sales: 999,
              update: 1522627740
            },
            {
              img: require("@/assets/img/HOME/1-5.png"),
              name: "标准领缎纹高定衬衫",
              price: 398,
              sales: 999,
              update: 1522627740
            }
          ]
        },
        {
          name: "西服",
          goods: [
            {
              img: require("@/assets/img/HOME/1-1.png"),
              name: "标准领缎纹高定衬衫",
              price: 98,
              sales: 489,
              update: 1522627740
            },
            {
              img: require("@/assets/img/HOME/1-2.png"),
              name: "标准领缎纹标准领缎纹标准领缎纹标准领缎纹",
              price: 11,
              sales: 999,
              update: 1530586837
            },
            {
              img: require("@/assets/img/HOME/1-3.png"),
              name: "标准领缎纹高定衬衫",
              price: 66,
              sales: 999,
              update: 1522627740
            },
            {
              img: require("@/assets/img/HOME/1-4.png"),
              name: "标准领缎纹高定衬衫",
              price: 67,
              sales: 999,
              update: 1522627740
            },
            {
              img: require("@/assets/img/HOME/1-5.png"),
              name: "标准领缎纹高定衬衫",
              price: 9999,
              sales: 999,
              update: 1522627740
            },
            {
              img: require("@/assets/img/HOME/1-1.png"),
              name: "标准领缎纹高定衬衫",
              price: 398,
              sales: 999,
              update: 1522627740
            },
            {
              img: require("@/assets/img/HOME/1-2.png"),
              name: "456",
              price: 999,
              sales: 999,
              update: 1522627740
            },
            {
              img: require("@/assets/img/HOME/1-3.png"),
              name: "标准领缎纹高定衬衫",
              price: 398,
              sales: 999,
              update: 1522627740
            },
            {
              img: require("@/assets/img/HOME/1-4.png"),
              name: "标准领缎纹高定衬衫",
              price: 398,
              sales: 999,
              update: 1522627740
            },
            {
              img: require("@/assets/img/HOME/1-5.png"),
              name: "标准领缎纹高定衬衫",
              price: 398,
              sales: 999,
              update: 1522627740
            },
            {
              img: require("@/assets/img/HOME/1-5.png"),
              name: "标准领缎纹高定衬衫",
              price: 398,
              sales: 999,
              update: 1522627740
            },
            {
              img: require("@/assets/img/HOME/1-1.png"),
              name: "标准领缎纹高定衬衫",
              price: 398,
              sales: 999,
              update: 1522627740
            },
            {
              img: require("@/assets/img/HOME/1-2.png"),
              name: "标准领缎纹标准领缎纹标准领缎纹标准领缎纹",
              price: 398,
              sales: 999,
              update: 1522627740
            },
            {
              img: require("@/assets/img/HOME/1-3.png"),
              name: "标准领缎纹高定衬衫",
              price: 398,
              sales: 999,
              update: 1522627740
            },
            {
              img: require("@/assets/img/HOME/1-4.png"),
              name: "标准领缎纹高定衬衫",
              price: 398,
              sales: 999,
              update: 1522627740
            },
            {
              img: require("@/assets/img/HOME/1-5.png"),
              name: "标准领缎纹高定衬衫",
              price: 398,
              sales: 999,
              update: 1522627740
            },
            {
              img: require("@/assets/img/HOME/1-5.png"),
              name: "标准领缎纹高定衬衫",
              price: 398,
              sales: 999,
              update: 1522627740
            },
            {
              img: require("@/assets/img/HOME/1-1.png"),
              name: "标准领缎纹高定衬衫",
              price: 398,
              sales: 999,
              update: 1522627740
            },
            {
              img: require("@/assets/img/HOME/1-2.png"),
              name: "标准领缎纹标准领缎纹标准领缎纹标准领缎纹",
              price: 398,
              sales: 999,
              update: 1522627740
            },
            {
              img: require("@/assets/img/HOME/1-3.png"),
              name: "标准领缎纹高定衬衫",
              price: 398,
              sales: 999,
              update: 1522627740
            },
            {
              img: require("@/assets/img/HOME/1-4.png"),
              name: "标准领缎纹高定衬衫",
              price: 398,
              sales: 999,
              update: 1522627740
            },
            {
              img: require("@/assets/img/HOME/1-5.png"),
              name: "标准领缎纹高定衬衫",
              price: 398,
              sales: 999,
              update: 1522627740
            }
          ]
        }
      ],
      resetdata: [],
      goods: [],
      show: false
    };
  },
  filters: {
    moneyFilter(money) {
      return toMoney(money);
    }
  },
  created() {
    this.goods = [].concat(this.kinds[0].goods);
     this.resetdata =[].concat(this.kinds[0].goods)
  },
  methods: {
    text(items) {
      this.goods = [].concat(items);
      this.resetdata = [].concat(items);
    },
    reset() {
      this.goods = [].concat(this.resetdata);
    },
    screen() {
      this.show = true;
    },
    confirm() {
      this.show = false;
    },
    heightTobottom() {
      return this.goods.sort((a, b) => {
        return b.price - a.price;
      });
    },
    bottomToHeight() {
      return this.goods.sort((a, b) => {
        return a.price - b.price;
      });
    },
    farToNear() {
      return this.goods.sort((a, b) => {
        return a.update - b.update;
      });
    },
    nearToFar() {
      return this.goods.sort((a, b) => {
        return b.update - a.update;
      });
    },
    moreToLess() {
      return this.goods.sort((a, b) => {
        return a.update - b.update;
      });
    },
    lessToMore() {
      return this.goods.sort((a, b) => {
        return a.update - b.update;
      });
    }
  },
  computed: {}
};
</script>
 <style scoped lang="less">
#mask {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
  z-index: 7;
}

.pop-inner {
  width: 100%;
  position: fixed;
  top: -14.5rem;
  z-index: 8;
  background-color: white;

  .popTitle {
    text-align: center;
    margin-bottom: 0.5rem;
    border-bottom: 1px solid rgba(180, 180, 180, 0.6);
    height: 3rem;
    line-height: 3rem;
  }

  .optionInner {
    padding: 1rem;
    .optionRow {
      margin-bottom: 0.5rem;
      .optionTitle,
      .option {
        display: inline-block;
        width: 6rem;
      }
      .optionTitle {
        text-align: left;
        color: rgba(180, 180, 180, 0.9);
      }
      .option {
        text-align: center;
        border: 1px solid black;
        border-radius: 5px;
      }
      .option:nth-child(3) {
        margin-left: 1rem;
      }
      .option:hover,
      .option:active {
        background-color: black;
        color: white;
      }
    }
  }
  .button-inner {
    border-top: 1px solid rgba(180, 180, 180, 0.6);
    border-bottom: 1px solid rgba(180, 180, 180, 0.6);
    .button {
      display: inline-block;
      width: 11.5rem;
      text-align: center;
      height: 3rem;
      line-height: 3rem;
    }
    .button:nth-child(2) {
      border-left: 1px solid rgba(180, 180, 180, 0.6);
    }
  }
}
.isShow {
  animation: pop 1s forwards;
}

@keyframes pop {
  to {
    top: 0px;
  }
}
.kinds-inner {
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid rgba(180, 180, 180, 0.6);
  position: fixed;
  background-color: white;
  width: 100%;
  .scroll {
    width: 18.8rem;
    overflow-y: scroll;
    display: inline-block;
    .gookinds {
      white-space: nowrap;
      .kinds {
        text-align: center;
        width: 3.75rem;
        line-height: 3.125rem;
        height: 3.125rem;
        display: inline-block;
        color: rgba(180, 180, 180, 0.6);
        border-bottom: 2px solid transparent;
      }
      .kinds:hover {
        border-bottom: 2px solid black;
        color: black;
      }
    }
  }
  .filtrate {
    text-align: center;
    width: 3.75rem;
    line-height: 3.125rem;
    height: 3.125rem;
  }
}
.goods-inner {
  padding-top: 3.125rem;
  .showInner {
    display: flex;
    justify-content: space-between;
    margin-bottom: 1rem;
    .show {
      font-size: 0.5rem;
      height: 7rem;
      width: 10rem;
      display: inline-block;
      text-align: center;
      margin-left: 1.1rem;
      margin-right: 0.1rem;
      padding: 0.2rem;
      margin-top: 0.2rem;
      .name {
        height: 2rem;
        line-height: 2rem;
        overflow: hidden;
      }
      .price {
        height: 1rem;
      }
      .img {
        width: 5rem;
        height: 5rem;
      }
    }
  }
}
</style>
 
 