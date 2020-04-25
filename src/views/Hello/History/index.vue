<template>
  <div class="page-hello">
    <header class="header-tabs">
        <div class="header-back" @click="goback"></div>
        <div class="header-group">
            <div class="header-title font-34" @click="gorfavorite">收藏</div>
            <div class="header-title font-34 active">历史</div>
        </div>
        <div class="header-del"></div>
    </header>
    <section class="history-content">
        <div class="content-item">
            <div class="item-pic" style="background-image: url(&quot;//img.manhuadao.cn/bookcenter/coverimages/249347/3353215_18377bd758664b6482cd477a259d3d0a.jpg&quot;);">
                <div class="update"><span>更新</span></div>
            </div>
            <div class="item-group">
                <p class="item-name font-30">我身上有条龙</p>
                <p class="item-author font-26">看到：第2话 重回三百年前</p>
                <p class="item-progress font-26">更新至第182话 被小姐姐盯上了</p>
            </div>
            <div class="item-btn">
                <span class="icon-book"></span>
                <span class="btn-text font-26">续看</span>
            </div>
        </div><div class="content-item">
            <div class="item-pic" style="background-image: url(&quot;//img.manhuadao.cn/bookcenter/coverimages/168407/168407_749f2be713ea464193b3b4d8e314e00a.jpg&quot;);">

            </div>
            <div class="item-group">
                <p class="item-name font-30">斗罗大陆</p>
                <p class="item-author font-26">看到：第01话</p>
                <p class="item-progress font-26">更新至第250话 圣王的考验（1）</p>
            </div>
            <div class="item-btn">
                <span class="icon-book"></span>
                <span class="btn-text font-26">续看</span>
            </div>
        </div><div class="content-item">
            <div class="item-pic" style="background-image: url(&quot;//img.manhuadao.cn/bookcenter/coverimages/249186/3336010_2ee6c08446fe47ffa86c6edecdf7a3b0.jpg&quot;);">

            </div>
            <div class="item-group">
                <p class="item-name font-30">绝世飞刀</p>
                <p class="item-author font-26">看到：第1话 闭关修炼</p>
                <p class="item-progress font-26">更新至正文 第203话 棘手的问题</p>
            </div>
            <div class="item-btn">
                <span class="icon-book"></span>
                <span class="btn-text font-26">续看</span>
            </div>
        </div>
        <p class="item-end font-26">没有更多啦~</p>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Hello',
  methods: {
    gorfavorite () {
      this.$router.push('/favorite')
    },
    goback () {
      this.$router.go(-1)
    }
  }
}
</script>
<style scoped="scoped">
  .active{
      color: #e7370c;
  }
  [v-cloak] {
      display: none
  }

  .font-14 {
      font-size: .18666667rem
  }

  .font-16 {
      font-size: .21333333rem
  }

  .font-18 {
      font-size: .24rem
  }

  .font-20 {
      font-size: .26666667rem
  }

  .font-22 {
      font-size: .29333333rem
  }

  .font-24 {
      font-size: .32rem
  }

  .font-26 {
      font-size: .34666667rem
  }

  .font-28 {
      font-size: .37333333rem
  }

  .font-30 {
      font-size: .4rem
  }

  .font-32 {
      font-size: .42666667rem
  }

  .font-34 {
      font-size: .45333333rem
  }

  .font-36 {
      font-size: .48rem
  }

  .font-38 {
      font-size: .50666667rem
  }

  .font-40 {
      font-size: .53333333rem
  }

  .font-42 {
      font-size: .56rem
  }

  .font-44 {
      font-size: .58666667rem
  }

  .font-46 {
      font-size: .61333333rem
  }

  .font-48 {
      font-size: .64rem
  }

  .font-50 {
      font-size: .66666667rem
  }

  .font-52 {
      font-size: .69333333rem
  }

  .font-54 {
      font-size: .72rem
  }

  .font-56 {
      font-size: .74666667rem
  }

  .font-58 {
      font-size: .77333333rem
  }

  .font-60 {
      font-size: .8rem
  }

  a:active,a:hover,a:link,a:visited {
      outline: none;
      text-decoration: none;
      color: #333
  }

  * {
      cursor: default
  }

  ::-webkit-scrollbar {
      display: none
  }

  body,html {
      min-height: 100%;
      overflow-x: hidden;
      -webkit-font-smoothing: antialiased
  }

  .go-top {
      width: 1.2rem;
      height: 1.2rem;
      background-color: rgba(0,0,0,.5);
      border-radius: 50%;
      text-align: center;
      position: fixed;
      z-index: 999;
      bottom: 2.53333333rem;
      right: .16rem;
      color: #fff
  }

  .go-top .icon-arrow-up {
      width: .42666667rem;
      height: .24rem;
      margin: .26666667rem auto .10666667rem;
      background-size: contain
  }

  .header-tabs {
      display: -webkit-box;
      display: -webkit-flex;
      display: flex;
      -webkit-box-pack: center;
      -webkit-justify-content: center;
      justify-content: center;
      -webkit-box-align: center;
      -webkit-align-items: center;
      align-items: center;
      width: 10rem;
      height: 1.2rem;
      margin: 0 auto;
      border-bottom: 1px solid #b2b2b2;
      background-color: #f9f9f9;
      position: relative
  }

  .header-tabs .header-back {
      width: .61333333rem;
      height: .34666667rem;
      /* background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAAaCAMAAAD/jJ6+AAAAS1BMVEUAAAAzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzNOfcgEAAAAGHRSTlMA+YTxaxvr3L+mCaqiUUYxJRHYmpKMd14rR8HRAAAAm0lEQVQ4y+2SyQ7CMAxE62xtQ1dW//+XYsURIEw7B8SNOeXNiyLFSfPMeiL3gsDcEjPpEpulY8lBAZnsSCoflJCZ2nJAVAIm9ixpp4rABC8VuayEzMDv8dcdQ2xb3f7RONMmHcOG0fscx8Zkw8zlIbq5IjZjGe8QlbDJIUlLoSI264V0Jhpslp7OD7Dmn5/F/kJyu9vJ/PCvTr8DD0sYr/4QOQEAAAAASUVORK5CYII=) no-repeat; */
      background-size: contain;
      position: absolute;
      top: .42666667rem;
      left: .4rem
  }

  .header-tabs .header-group {
      -webkit-box-pack: justify;
      -webkit-justify-content: space-between;
      justify-content: space-between;
      width: 3.2rem
  }

  .header-tabs .header-group,.header-tabs .header-group .header-title {
      display: -webkit-box;
      display: -webkit-flex;
      display: flex;
      -webkit-box-align: center;
      -webkit-align-items: center;
      align-items: center
  }

  .header-tabs .header-group .header-title {
      -webkit-box-pack: center;
      -webkit-justify-content: center;
      justify-content: center;
      /* color: #e7370c; */
      font-weight: 500
  }

  .header-tabs .header-group .active {
      height: 1.2rem;
      position: relative
  }

  .header-tabs .header-group .active:after {
      content: "";
      width: 1.06666667rem;
      height: .12rem;
      /* background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAAAJBAMAAABXvrahAAAAJ1BMVEUAAADnNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNww4K2ayAAAADHRSTlMA1hoW5tsd58/MSkmN566YAAAARUlEQVQY02NAAMtmMIUmggmYZQ4a4BFBAMUzZ4RwiyAAk8yZM0cVcIogQOoZIAjDI7LlDFHAm8GHOIVHiFV4nGE5cQq9AKEPkW7W+xcjAAAAAElFTkSuQmCC) no-repeat; */
      background-size: contain;
      position: absolute;
      left: -.05333333rem;
      bottom: 0
  }

  .header-tabs .header-edit {
      width: .48rem;
      height: .48rem;
      /* background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAMAAADW3miqAAAAQlBMVEUAAADnNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNww5VncAAAAAFXRSTlMAMe0G7NDHGvNs+eKzpJlrKhW5aiG+coFtAAAAoUlEQVQ4y+XUORLDIBAF0UFIgCRr8fLvf1VjJxTqAh/AHQDBqyKBMTP/DEl1di1OKgF55z/rpA5yq/a8zdItWiM3Slveg3RvmkEaznxYpK5xlhMQDBANEQ0RDRENEQ0RDRENEU2NaEZXgYJggGCAaLropCHaaIh2rdkQ4dm3UekP0fIbpcs3Zy8p1AODxYc0Y/SwyWOI0Xzv8UdILZHC4c3eHJYb0LSb3TUAAAAASUVORK5CYII=) no-repeat; */
      background-size: contain;
      position: absolute;
      top: .29333333rem;
      right: .4rem
  }

  .header-tabs .header-edit-cancel {
      width: .33333333rem;
      height: .33333333rem;
      /* background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZCAMAAADzN3VRAAAAllBMVEUAAADnNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwyST3iWAAAAMXRSTlMA9wrx3jUhBtfPwreLRR0Q7Oji26aBb2lgSScaA9TLu5J7dnJbVlI/MBUUybKtq5wsEOdWZwAAAM9JREFUKM9l0UcSwjAQRNHGOILJYHLOmbn/5WjJwFDSX9gjvSptBlFnHsPtlKYxcpGw6cCrLTJEVPFo0hFp86EGqTd14QSUlCrFXZFqBNvY0NkBpXlJzVDBdCBllw9UjgokIbUw7TnA9qTFxEADTjuxKWgjC2P4XUJKFvjQysRUCzxY8KknaRk4cOXlHgW/9eQfghqvdhy2SgojO2443RIf2JrzPfnAUswKvw14esws1H+g1CclBgr8l5fU528LeLQCN7OB24rrw7pbwC+vDt4E5B/5EQsw8gAAAABJRU5ErkJggg==) no-repeat; */
      background-size: contain;
      position: absolute;
      top: .42666667rem;
      right: .4rem
  }

  .header-tabs .header-del {
      width: .45333333rem;
      height: .50666667rem;
      /* background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAAmCAMAAACWCLnmAAAAaVBMVEUAAADnNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwwpx2zcAAAAInRSTlMAxSC75q3481BGCegn79uqk4F+bmZaM9DOtZeWOTYbFguxu89qOgAAARBJREFUOMut0UlygzAQQFExiBkMGDux4yH59z9kqhp3lMQNbNwLqku8Bei73xMnGUCWxG5pEh6T/DkuUlYnLV0NG2ab1K6oN0TpXjUZK5MJSVf/R8jbGnnXO62cOZXe8w4WmsSwk+UDrja5QC/LAEU4jqKwFzDIsocpHEPYJ9jLcoDRJiMcZCmht8kZ5kJH8OErIOwejvpr+lKfCvU6PqGzSQeVdmxtkkvFR8fKIpVU1I6xRRqpqB2vFrlIRe1YWKSQitpxssgU7nSA0SKjVNSOvUXOUlE7eot4qagdI4tEUlE7dhbppKJ2bC2Sa0XpyP2Z3NGKMz/d/pPbCXKn88XC+B/StLZoGxeMz59B7mfxDS1nRyKxlWZtAAAAAElFTkSuQmCC) no-repeat; */
      background-size: contain;
      position: absolute;
      top: .34666667rem;
      right: .4rem
  }

  .comic-cue {
      width: 10rem;
      margin: 0 auto;
      padding: .53333333rem 0 0
  }

  .comic-cue .cue-pic {
      width: 3.05333333rem;
      height: 3.24rem;
      margin: .29333333rem auto 0;
      background-size: contain
  }

  .comic-cue .cue-login {
      text-align: center
  }

  .comic-cue .cue-login .login-title {
      font-weight: 300
  }

  .comic-cue .cue-login .login-btn {
      width: 2.34666667rem;
      height: .77333333rem;
      margin: .29333333rem auto 0;
      line-height: .77333333rem;
      color: #fff;
      font-weight: 500;
      background-color: #e7370c;
      border-radius: 6px
  }

  .comic-cue .cue {
      display: -webkit-box;
      display: -webkit-flex;
      display: flex;
      -webkit-box-orient: vertical;
      -webkit-box-direction: normal;
      -webkit-flex-direction: column;
      flex-direction: column;
      -webkit-box-pack: center;
      -webkit-justify-content: center;
      justify-content: center;
      -webkit-box-align: center;
      -webkit-align-items: center;
      align-items: center;
      margin: 0 0 0 .66666667rem
  }

  .comic-cue .cue .fav-text {
      margin-top: .10666667rem;
      line-height: .53333333rem;
      font-size: .32rem;
      color: #666
  }

  .hot-recommend {
      width: 10rem;
      margin: .26666667rem auto
  }

  .hot-recommend .recommend-title {
      margin: 0 .32rem .32rem
  }

  .hot-recommend .recommend-list {
      display: -webkit-box;
      display: -webkit-flex;
      display: flex;
      -webkit-flex-wrap: wrap;
      flex-wrap: wrap;
      -webkit-justify-content: space-around;
      justify-content: space-around;
      margin: 0 .32rem
  }

  .hot-recommend .recommend-list .list-item {
      width: 2.93333333rem;
      margin: 0 0 .26666667rem
  }

  .hot-recommend .recommend-list .list-item .item-pic {
      width: 2.93333333rem;
      height: 3.78666667rem;
      border-radius: 10px;
      background-repeat: no-repeat;
      background-position: top;
      background-size: cover
  }

  .hot-recommend .recommend-list .list-item .item-name {
      width: 100%;
      margin: .13333333rem 0 0;
      text-align: center;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap
  }

  .history-content {
      width: 10rem;
      margin: 0 auto
  }

  .history-content .content-item {
      box-sizing: border-box;
      display: -webkit-box;
      display: -webkit-flex;
      display: flex;
      -webkit-box-pack: justify;
      -webkit-justify-content: space-between;
      justify-content: space-between;
      -webkit-box-align: center;
      -webkit-align-items: center;
      align-items: center;
      width: 100%;
      padding: .26666667rem;
      border-bottom: 1px solid #dbd9dc;
      position: relative
  }

  .history-content .content-item .item-pic {
      width: 2.13333333rem;
      height: 2.8rem;
      background-repeat: no-repeat;
      background-size: cover;
      background-position: 50%;
      border-radius: 8px
  }

  .history-content .content-item .item-pic .update {
      width: .66666667rem;
      height: .66666667rem;
      background: #f95a16;
      border-radius: 50%;
      background-size: cover;
      position: relative;
      left: 1.57333333rem;
      top: -.06666667rem
  }

  .history-content .content-item .item-pic .update span {
      color: #fff;
      display: block;
      line-height: .66666667rem;
      font-size: .26666667rem;
      text-align: center
  }

  .history-content .content-item .item-group {
      width: 50%;
      margin: 0 0 0 .26666667rem
  }

  .history-content .content-item .item-group .item-name {
      width: 100%;
      margin: 0 0 .53333333rem;
      color: #333;
      font-weight: 500;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap
  }

  .history-content .content-item .item-group .item-author {
      margin: 0 0 .53333333rem
  }

  .history-content .content-item .item-group .item-author,.history-content .content-item .item-group .item-progress {
      width: 100%;
      color: #666;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap
  }

  .history-content .content-item .item-btn {
      display: -webkit-box;
      display: -webkit-flex;
      display: flex;
      -webkit-box-pack: center;
      -webkit-justify-content: center;
      justify-content: center;
      -webkit-box-align: center;
      -webkit-align-items: center;
      align-items: center;
      width: 1.86666667rem;
      height: .8rem;
      border: 1px solid #e7370c;
      border-radius: 6px
  }

  .history-content .content-item .item-btn .icon-book {
      width: .32rem;
      height: .4rem;
      margin: 0 .16rem 0 0;
      background-size: contain
  }

  .history-content .content-item .item-btn .btn-text {
      color: #e7370c
  }

  .history-content .item-end {
      padding: .26666667rem 0;
      text-align: center;
      color: #999;
      font-weight: 500
  }

  .tips-toast {
      width: 5.2rem;
      height: 2rem;
      margin: auto;
      border-radius: 6px;
      background-color: rgba(0,0,0,.6);
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0
  }

  .tips-toast .toast-title {
      display: -webkit-box;
      display: -webkit-flex;
      display: flex;
      -webkit-box-pack: center;
      -webkit-justify-content: center;
      justify-content: center;
      -webkit-box-align: center;
      -webkit-align-items: center;
      align-items: center;
      width: 100%;
      height: 100%;
      color: #fff
  }

  @media (orientation: landscape) and (max-width:736px) {
      .comic-cue,.header-tabs,.history-content,.hot-recommend {
          width:100%!important
      }
  }
</style>
