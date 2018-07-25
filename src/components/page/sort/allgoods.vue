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
        <div class="button" @click="reset" :class="{gray:isActive}">重置</div>
        <div class="button" @click="confirm">确定</div>
      </div>
    </div>
    <section id="mask" v-if="show">
    </section>
    <section class="kinds-inner">
      <div class="scroll">
        <ul class="gookinds">
          <li class="kinds" v-for="(items,index) in kinds" @click="text(items.goods)" :key="index"><span class="kinds_line">{{items.name}}</span></li>
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
            <div class="price">{{item.price|moneyFilter}}</div>
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
      isActive: true,
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
    this.resetdata = [].concat(this.kinds[0].goods);
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
      this.isActive = true;
      this.show = false;
    },
    heightTobottom() {
      this.isActive = false;
      return this.goods.sort((a, b) => {
        return b.price - a.price;
      });
    },
    bottomToHeight() {
      this.isActive = false;
      return this.goods.sort((a, b) => {
        return a.price - b.price;
      });
    },
    farToNear() {
      this.isActive = false;
      return this.goods.sort((a, b) => {
        return a.update - b.update;
      });
    },
    nearToFar() {
      this.isActive = false;
      return this.goods.sort((a, b) => {
        return b.update - a.update;
      });
    },
    moreToLess() {
      this.isActive = false;
      return this.goods.sort((a, b) => {
        return a.update - b.update;
      });
    },
    lessToMore() {
      this.isActive = false;
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
  top: -451px;
  z-index: 8;
  background-color: white;

  .popTitle {
    text-align: center;
    border-bottom: 1px solid rgba(180, 180, 180, 0.6);
    height: 80px;
    line-height: 80px;
    font-size: 32px;
    color: #333;
    font-family: pingFangSC-Medium sans-serif;
  }

  .optionInner {
    padding: 32px 16px;
    .optionRow {
      margin-bottom: 34px;
      .optionTitle,
      .option {
        display: inline-block;
      }
      .optionTitle {
        text-align: left;
        color: #333;
        font-size: 28px;
        font-family: pingFangSC-Medium sans-serif;
        width: 140px;
        margin-right: 100px;
      }
      .option {
        width: 146px;
        height: 46px;
        line-height: 46px;
        text-align: center;
        border: 1px solid #666;
        border-radius: 6px;
        font-size: 24px;
        color: #666;
      }
      .option:nth-child(3) {
        margin-left: 74px;
      }
      .option:hover,
      .option:active {
        background-color: #222;
        color: white;
      }
    }
    .optionRow:nth-child(3) {
      margin-bottom: 0;
    }
  }
  .button-inner {
    border-top: 1px solid rgba(180, 180, 180, 0.6);
    border-bottom: 1px solid rgba(180, 180, 180, 0.6);
    .button {
      display: inline-block;
      width: 371px;
      text-align: center;
      height: 90px;
      line-height: 90px;
      font-size: 28px;
      font-family: pingFangSC-Medium sans-serif;
    }
    .button.gray {
      color: #aaaaaa;
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
    width: 500px;
    overflow-y: scroll;
    display: inline-block;
    .gookinds {
      white-space: nowrap;
      .kinds {
        text-align: center;
        width: 240px;
        line-height: 80px;
        height: 80px;
        display: inline-block;
        color: #666;
        font-size: 32px;
        .kinds_line {
          border-bottom: 2px solid transparent;
        }
      }
      .kinds:hover {
        .kinds_line {
          border-bottom: 2px solid #161616;
        }
        color: #333;
      }
    }
  }
  .filtrate {
    text-align: center;
    width: 240px;
    line-height: 80px;
    height: 80px;
    font-size: 32px;
    color: #808183;
  }
}
.goods-inner {
  padding-top: 100px;
  margin-bottom: 80px;
  .showInner {
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
    .show {
      font-size: 24px;
      height: 445px;
      width: 347px;
      display: inline-block;
      text-align: center;
      margin-left: 18px;
      color: #666;
      font-size: 24px;
      background-color: #ffffff;
      font-family: pingFangSC-Medium sans-serif;
      .name {
        height: 2rem;
        line-height: 2rem;
        width: 190px;
        margin: 0 auto;
        overflow: hidden;
        margin-top: 10px;
      }
      .price {
        margin-top: 10px;
      }
      .img {
        width: 347px;
        height: 344px;
        border-radius: 10px;
        box-shadow: 0px 5px 32px 0px rgba(0, 0, 0, 0.2);
      }
    }
  }
}
</style>
 
 