<template>
  <div class="category-content-sub">
    <div class="cc-item" v-for="item in categorySub" :key="item.acm">
      <a :href="item.link">
        <img class="cc-img" :src="item.image" @load="imgLoad" alt />
        <div class="cc-title">{{item.title}}</div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    categorySub: {
      type: Array,
      default: () => [
        {
          acm: "3.mce.1_10_1h1s8.3627.0.itmrvr4X3jfV7.pos_0-m_397704-sd_119",
          image:
            "https://s10.mogucdn.com/mlcdn/c45406/180903_3de2717i8dj6hjjifj4d5e3a28f6e_180x180.gif",
          link:
            "http://m.mogujie.com/wall/book/clothing?fcid=20003434&title=%E7%A7%8B%E6%AC%BE%E4%B8%8A%E6%96%B0&acm=3.mce.1_10_1h1s8.3627.0.itmrvr4X3jfV7.pos_0-m_397704-sd_119",
          title: "秋款上新"
        },
        {
          acm: "3.mce.1_10_1h1s4.3627.0.itmrvr4X3jfV8.pos_1-m_397702-sd_119",
          image:
            "https://s10.mogucdn.com/mlcdn/c45406/180903_34a7adb05kl63g6ba3121ekgi2bda_180x180.jpg",
          link:
            "http://m.mogujie.com/wall/book/clothing?fcid=50243&title=%E6%97%B6%E5%B0%9A%E5%A5%97%E8%A3%85&acm=3.mce.1_10_1h1s4.3627.0.itmrvr4X3jfV8.pos_1-m_397702-sd_119",
          title: "时尚套装"
        },
        {
          acm: "3.mce.1_10_1h1s6.3627.0.itmrvr4X3jfV9.pos_2-m_397703-sd_119",
          image:
            "https://s10.mogucdn.com/mlcdn/c45406/180903_3gjj68llefd9920id1242ijfaj408_120x120.png",
          link:
            "http://m.mogujie.com/wall/book/clothing?fcid=50045&title=%E8%BF%9E%E8%A1%A3%E8%A3%99&acm=3.mce.1_10_1h1s6.3627.0.itmrvr4X3jfV9.pos_2-m_397703-sd_119",
          title: "连衣裙"
        },
        {
          acm: "3.mce.1_10_1h1sc.3627.0.itmrvr4X3jfVa.pos_3-m_397706-sd_119",
          image:
            "https://s10.mogucdn.com/mlcdn/c45406/180601_1bi6a44lj4b4624j40de8glh59il2_120x120.jpg",
          link:
            "http://m.mogujie.com/wall/book/clothing?fcid=50244&title=T%E6%81%A4&acm=3.mce.1_10_1h1sc.3627.0.itmrvr4X3jfVa.pos_3-m_397706-sd_119",
          title: "T恤"
        },
        {
          acm: "3.mce.1_10_1h1s2.3627.0.itmrvr4X3jfVb.pos_4-m_397701-sd_119",
          image:
            "https://s10.mogucdn.com/mlcdn/c45406/180903_11jc696d6303jflc5lahaahb12if0_120x120.jpg",
          link:
            "http://m.mogujie.com/wall/book/clothing?fcid=50206&title=%E7%89%9B%E4%BB%94%E8%A3%A4&acm=3.mce.1_10_1h1s2.3627.0.itmrvr4X3jfVb.pos_4-m_397701-sd_119",
          title: "牛仔裤"
        },
        {
          acm: "3.mce.1_10_1h1s0.3627.0.itmrvr4X3jfVc.pos_5-m_397700-sd_119",
          image:
            "https://s10.mogucdn.com/mlcdn/c45406/180903_1bahd1ba76g4432bj80d2cdi1haic_180x180.jpg",
          link:
            "http://m.mogujie.com/wall/book/clothing?fcid=50273&title=%E5%8D%AB%E8%A1%A3&acm=3.mce.1_10_1h1s0.3627.0.itmrvr4X3jfVc.pos_5-m_397700-sd_119",
          title: "卫衣"
        },
        {
          acm: "3.mce.1_10_1h1se.3627.0.itmrvr4X3jfVd.pos_6-m_397707-sd_119",
          image:
            "https://s10.mogucdn.com/mlcdn/c45406/180903_6g5hb85kb4le8g12fe7406kgii2a4_200x200.jpg",
          link:
            "http://m.mogujie.com/wall/book/clothing?fcid=50250&title=%E7%A7%8B%E6%AC%BE%E5%A4%96%E5%A5%97&acm=3.mce.1_10_1h1se.3627.0.itmrvr4X3jfVd.pos_6-m_397707-sd_119",
          title: "秋款外套"
        },
        {
          acm: "3.mce.1_10_1h1sa.3627.0.itmrvr4X3jfVe.pos_7-m_397705-sd_119",
          image:
            "https://s10.mogucdn.com/mlcdn/c45406/180903_2k394laf927gg1cek31l9jc6ag66b_120x120.png",
          link:
            "http://m.mogujie.com/wall/book/clothing?fcid=50249&title=%E8%A1%AC%E8%A1%AB&acm=3.mce.1_10_1h1sa.3627.0.itmrvr4X3jfVe.pos_7-m_397705-sd_119",
          title: "衬衫"
        },
        {
          acm: "3.mce.1_10_1h1si.3627.0.itmrvr4X3jfVf.pos_8-m_397709-sd_119",
          image:
            "https://s10.mogucdn.com/mlcdn/c45406/180903_7aa007cgekcl617fc99kc18ck2dg5_120x120.jpg",
          link:
            "http://m.mogujie.com/wall/book/clothing?fcid=20003435&title=%E9%92%88%E7%BB%87%E8%A1%AB&acm=3.mce.1_10_1h1si.3627.0.itmrvr4X3jfVf.pos_8-m_397709-sd_119",
          title: "针织衫"
        },
        {
          acm: "3.mce.1_10_1h1sg.3627.0.itmrvr4X3jfVg.pos_9-m_397708-sd_119",
          image:
            "https://s3.mogucdn.com/mlcdn/c45406/180211_78k7b1f3c0g2cgh5fib3afgi9gehd_120x120.png",
          link:
            "http://m.mogujie.com/wall/book/clothing?fcid=50214&title=%E4%BC%91%E9%97%B2%E8%A3%A4&acm=3.mce.1_10_1h1sg.3627.0.itmrvr4X3jfVg.pos_9-m_397708-sd_119",
          title: "休闲裤"
        },
        {
          acm: "3.mce.1_10_1beok.3627.0.itmrvr4X3jfVh.pos_10-m_266094-sd_119",
          image:
            "https://s3.mogucdn.com/mlcdn/c45406/170621_0bki4gegikdaa0jec4gi47lfge174_120x120.png",
          link:
            "http://m.mogujie.com/x6/wall/book/shopping?fcid=10058428&title=运动套装&mt=12.5188.r152139.24314&acm=3.mce.1_10_1beok.3627.0.itmrvr4X3jfVh.pos_10-m_266094-sd_119",
          title: "运动套装"
        },
        {
          acm: "3.mce.1_10_1hpzc.3627.0.itmrvr4X3jfVi.pos_11-m_413384-sd_119",
          image:
            "https://s17.mogucdn.com/mlcdn/c45406/180419_030g5gd85ei2bfd5dda4dkgjlf9cj_180x180.jpg",
          link:
            "http://m.mogujie.com/wall/book/shopping?fcid=10062839&title=清新泳衣&acm=3.mce.1_10_1hpzc.3627.0.itmrvr4X3jfVi.pos_11-m_413384-sd_119",
          title: "清新泳衣"
        },
        {
          acm: "3.mce.1_10_1hpys.3627.0.itmrvr4X3jfVj.pos_12-m_413374-sd_119",
          image:
            "https://s10.mogucdn.com/mlcdn/c45406/180613_1hkc4klbjlejil2k1jklhfc57515f_120x120.jpg",
          link:
            "http://m.mogujie.com/wall/book/boyfriend?fcid=10056043&title=T%E6%81%A4&acm=3.mce.1_10_1hpys.3627.0.itmrvr4X3jfVj.pos_12-m_413374-sd_119",
          title: "T恤男"
        },
        {
          acm: "3.mce.1_10_1hpz0.3627.0.itmrvr4X3jfVk.pos_13-m_413378-sd_119",
          image:
            "https://s17.mogucdn.com/mlcdn/c45406/180419_787h66887f28f4bklbb8496b102lh_180x180.jpg",
          link:
            "http://m.mogujie.com/x6/wall/book/boyfriend?fcid=20002795&title=衬衫&acm=3.mce.1_10_1hpz0.3627.0.itmrvr4X3jfVk.pos_13-m_413378-sd_119",
          title: "衬衫"
        },
        {
          acm: "3.mce.1_10_1hpz4.3627.0.itmrvr4X3jfVl.pos_14-m_413380-sd_119",
          image:
            "https://s10.mogucdn.com/mlcdn/c45406/180613_6h9aibi1237a956g7h1ij950d4ee6_120x120.jpg",
          link:
            "http://m.mogujie.com/wall/book/boyfriend?fcid=50094&title=%E4%BC%91%E9%97%B2%E8%A3%A4&acm=3.mce.1_10_1hpz4.3627.0.itmrvr4X3jfVl.pos_14-m_413380-sd_119",
          title: "男休闲裤"
        },
        {
          acm: "3.mce.1_10_1hpz6.3627.0.itmrvr4X3jfVm.pos_15-m_413381-sd_119",
          image:
            "https://s10.mogucdn.com/mlcdn/c45406/180423_7213g8b3l215jb2a4932b039afe6e_180x180.jpg",
          link:
            "http://m.mogujie.com/wall/book/boyfriend?fcid=50137&title=%E7%89%9B%E4%BB%94%E8%A3%A4&acm=3.mce.1_10_1hpz6.3627.0.itmrvr4X3jfVm.pos_15-m_413381-sd_119",
          title: "男牛仔裤"
        },
        {
          acm: "3.mce.1_10_1hpzk.3627.0.itmrvr4X3jfVn.pos_16-m_413388-sd_119",
          image:
            "https://s10.mogucdn.com/mlcdn/c45406/180613_181iajdi2a63ala8253ejgh92cld8_120x120.jpg",
          link:
            "http://m.mogujie.com/x6/wall/book/boyfriend?fcid=20002845&title=短裤&acm=3.mce.1_10_1hpzk.3627.0.itmrvr4X3jfVn.pos_16-m_413388-sd_119",
          title: "五分裤"
        },
        {
          acm: "3.mce.1_10_1hpza.3627.0.itmrvr4X3jfVo.pos_17-m_413383-sd_119",
          image:
            "https://s3.mogucdn.com/mlcdn/c45406/180419_274d4g40cbk0f3ij6j01je5k22144_180x180.jpg",
          link:
            "http://m.mogujie.com/wall/book/boyfriend?fcid=50105&title=%E4%BC%91%E9%97%B2%E9%9E%8B&acm=3.mce.1_10_1hpza.3627.0.itmrvr4X3jfVo.pos_17-m_413383-sd_119",
          title: "休闲鞋男"
        },
        {
          acm: "3.mce.1_10_1ido8.3627.0.itmrvr4X3jfVp.pos_18-m_428736-sd_119",
          image:
            "https://s10.mogucdn.com/mlcdn/c45406/180613_60b3hfji4kjg59k020bc1590k2a16_120x120.jpg",
          link:
            "http://m.mogujie.com/x6/wall/book/boyfriend?fcid=50188&title=%E5%B8%86%E5%B8%83%E9%9E%8B&acm=3.mce.1_10_1ido8.3627.0.itmrvr4X3jfVp.pos_18-m_428736-sd_119",
          title: "帆布鞋男"
        },
        {
          acm: "3.mce.1_10_1hpzi.3627.0.itmrvr4X3jfVq.pos_19-m_413387-sd_119",
          image:
            "https://s10.mogucdn.com/p2/170104/rj_154g0c5iffe454i9l2f2cbdib9g06_180x180.jpg",
          link:
            "http://m.mogujie.com/wall/book/shopping?fcid=20001232&title=%E8%BF%90%E5%8A%A8%E9%9E%8B%E5%A5%B3&acm=3.mce.1_10_1hpzi.3627.0.itmrvr4X3jfVq.pos_19-m_413387-sd_119",
          title: "运动鞋女"
        },
        {
          acm: "3.mce.1_10_1izvg.3627.0.itmrvr4X3jfVr.pos_20-m_443122-sd_119",
          image:
            "https://s10.mogucdn.com/mlcdn/c45406/180810_3j4fe99a07aj0f123443li2f49f6g_120x120.jpg",
          link:
            "http://m.mogujie.com/wall/book/shopping?fcid=51943&title=%E9%9D%B4%E5%AD%90&acm=3.mce.1_10_1izvg.3627.0.itmrvr4X3jfVr.pos_20-m_443122-sd_119",
          title: "靴子"
        },
        {
          acm: "3.mce.1_10_177sm.3627.0.itmrvr4X3jfVs.pos_21-m_168319-sd_119",
          image:
            "https://s10.mogucdn.com/mlcdn/c45406/180731_5a5d7ci9l24l256k06k0a35dg3g76_120x120.jpg",
          link:
            "http://m.mogujie.com/x6/wall/book/shopping?fcid=51267&title=%E5%8D%95%E9%9E%8B&acm=3.mce.1_10_177sm.3627.0.itmrvr4X3jfVs.pos_21-m_168319-sd_119",
          title: "单鞋"
        },
        {
          acm: "3.mce.1_10_177so.3627.0.itmrvr4X3jfVt.pos_22-m_168320-sd_119",
          image:
            "https://s10.mogucdn.com/mlcdn/c45406/180813_1g377ihjj4dh7lial1b45bbc2d67c_120x120.jpg",
          link:
            "http://m.mogujie.com/wall/book/shoes?fcid=51268&title=%E6%B4%BB%E5%8A%9B%E8%BF%90%E5%8A%A8&acm=3.mce.1_10_177so.3627.0.itmrvr4X3jfVt.pos_22-m_168320-sd_119",
          title: "活力运动"
        },
        {
          acm: "3.mce.1_10_1ittw.3627.0.itmrvr4X3jfVu.pos_23-m_439206-sd_119",
          image:
            "https://s10.mogucdn.com/mlcdn/c45406/180731_1eki2je5kjg461h69cfc4c2gh6598_180x180.jpg",
          link:
            "http://m.mogujie.com/wall/book/shoes?fcid=51224&title=%E4%BC%91%E9%97%B2%E5%B8%86%E5%B8%83&acm=3.mce.1_10_1ittw.3627.0.itmrvr4X3jfVu.pos_23-m_439206-sd_119",
          title: "休闲帆布"
        },
        {
          acm: "3.mce.1_10_1hs5c.3627.0.itmrvr4X3jfVv.pos_24-m_414788-sd_119",
          image:
            "https://s3.mogucdn.com/mlcdn/c45406/180227_069ci8he1419k16did4c1lk9l5j3g_120x120.jpg",
          link:
            "http://m.mogujie.com/wall/book/shoes?fcid=51249&title=%E5%B0%8F%E7%99%BD%E9%9E%8B&acm=3.mce.1_10_1hs5c.3627.0.itmrvr4X3jfVv.pos_24-m_414788-sd_119",
          title: "小白鞋"
        },
        {
          acm: "3.mce.1_10_1beoc.3627.0.itmrvr4X3jfVw.pos_25-m_266090-sd_119",
          image:
            "https://s3.mogucdn.com/mlcdn/c45406/170621_2l01a7607dage3cbi133bda4kldbe_180x180.jpg",
          link:
            "http://m.mogujie.com/wall/book/shopping?fcid=10057023&title=帆布鞋&acm=3.mce.1_10_1beoc.3627.0.itmrvr4X3jfVw.pos_25-m_266090-sd_119",
          title: "帆布鞋"
        },
        {
          acm: "3.mce.1_10_177ss.3627.0.itmrvr4X3jfVx.pos_26-m_168322-sd_119",
          image:
            "http://s18.mogucdn.com/p1/160323/upload_ie3wmyzsmq2doojxg4zdambqgayde_130x130.jpg",
          link:
            "http://m.mogujie.com/x6/wall/book/bags?fcid=50657&title=双肩包&mt=12.3627.r76835.3171&acm=3.mce.1_10_177ss.3627.0.itmrvr4X3jfVx.pos_26-m_168322-sd_119",
          title: "校园双肩"
        },
        {
          acm: "3.mce.1_10_177su.3627.0.itmrvr4X3jfVy.pos_27-m_168323-sd_119",
          image:
            "http://s16.mogucdn.com/p2/161013/upload_25f0d3ad4l7f3hg1554b9ck61fdge_130x130.jpg",
          link:
            "http://m.mogujie.com/x6/wall/book/bags?fcid=50775&title=大包&acm=3.mce.1_10_177su.3627.0.itmrvr4X3jfVy.pos_27-m_168323-sd_119",
          title: "秋冬大包"
        }
      ]
    }
  },
  methods: {
    imgLoad() {
      this.$emit("imgLoad");
    }
  }
};
</script>

<style>
.category-content-sub {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  margin-top: 10px;
}

.category-content-sub .cc-item {
  /* flex-grow: 1; */
  width: 33%;
  padding: 4px;
  text-align: center;
  font-size: 12px;
}

.category-content-sub .cc-img {
  width: 90%;
  margin-bottom: 10px;
}
</style>