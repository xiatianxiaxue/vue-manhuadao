<template>
  <div class="page-my">
    <normal-header :titlerigth="` `" title="我的" :showRigth="false"></normal-header>
 <!--   <header class="header-normal">
        <div class="header-back" @click="goback"></div>
        <span class="header-title font-32">我的</span>
    </header> -->
    <section class="mine-info">
        <div class="info-pic" style="background-image: url(&quot;//thirdqq.qlogo.cn/g?b=oidb&amp;k=tjGl08kCP90HT8awzpAu8w&amp;s=100&amp;t=1555724047&quot;);">

        </div>
        <div class="info-user">
            <p class="user-name font-28">0℃体温</p>
            <p class="user-id font-20">ID：206277507</p>
            <p class="user-pay font-24">余额：
                <span class="icon-daodan"></span><span class="num-red">0</span>岛蛋
                <span class="icon-ticket"></span><span class="num-red">0</span>漫画券
            </p>
        </div>
    </section>
    <section class="mine-menu font-30">
        <a class="menu-item" @click="nextfn">
            <span class="icon-wallet"></span>
            <span class="item-text">我的账户</span>

        </a>
        <a class="menu-item" @click="nextfn">
            <span class="icon-wallet"></span>
            <span class="item-text" >使用兑换码</span>
        </a>
        <a class="menu-item" @click="gorfavorite">
            <span class="icon-fav"></span>
            <span class="item-text">收藏</span>
        </a>
        <a class="menu-item"  @click="gorfhistory">
            <span class="icon-clock" ></span>
            <span class="item-text">历史</span>
        </a>
        <a class="menu-item" @click="feedback">
            <span class="icon-pencil"></span>
            <span class="item-text" >反馈</span>
        </a>
        <a class="menu-item" >
            <span class="icon-mhd"></span>
            <span class="item-text" @click="goabout">关于我们</span>
        </a>
    </section>
    <footer class="mine-logout font-30" @click="gologin">退出登录</footer>
  </div>
</template>

<script>
import NormalHeader from '@/components/NormalHeader'
import { Dialog } from 'vant'
export default {
  name: 'My',
  components: {
    NormalHeader
  },
  methods: {
    gorfhistory () {
      this.$router.push('/history')
    },
    nextfn () {
      alert('功能有待于开发！！！')
    },
    feedback () {
      this.$router.push('/feedback')
    },
    gorfavorite () {
      this.$router.push('/favorite')
    },
    goback () {
      this.$router.go(-1)
    },
    goabout () {
      this.$router.push('/Aboutmy')
    },
    gologin () {
      Dialog.confirm({
        title: '',
        message: '您确定要离开我吗？'
      })
        .then(() => {
          localStorage.clear()
          this.$router.push('/login')
          // 确认是要做的事  on confirm
          console.log(1)
          // this.gologin()
        })
        .catch(() => {
          console.log(2)
        })
    }
  }
}
</script>
<style>
  .my-paytip {
      display: -webkit-box;
      display: -webkit-flex;
      display: flex;
      -webkit-box-align: center;
      -webkit-align-items: center;
      align-items: center;
      -webkit-box-pack: center;
      -webkit-justify-content: center;
      justify-content: center;
      position: fixed;
      z-index: 1000
  }

  .my-paytip,.my-paytip .bg {
      left: 0;
      top: 0;
      width: 100%;
      height: 100%
  }

  .my-paytip .bg {
      position: absolute;
      background-color: rgba(0,0,0,.6)
  }

  .my-paytip .content {
      position: relative;
      z-index: 1;
      width: 6.90666667rem;
      background-color: #fff;
      border-radius: .10666667rem
  }

  .my-paytip .content .body {
      padding: 1.06666667rem .66666667rem
  }

  .my-paytip .content .body .text {
      text-align: center;
      font-size: .34666667rem
  }

  .my-paytip .content .action {
      display: -webkit-box;
      display: -webkit-flex;
      display: flex;
      height: 1.06666667rem;
      font-size: .34666667rem;
      border-top: 1px solid #ccc
  }

  .my-paytip .content .action .item {
      box-sizing: border-box;
      display: -webkit-box;
      display: -webkit-flex;
      display: flex;
      -webkit-box-align: center;
      -webkit-align-items: center;
      align-items: center;
      -webkit-box-pack: center;
      -webkit-justify-content: center;
      justify-content: center;
      width: 50%
  }

  .my-paytip .content .action .item:first-child {
      border-right: 1px solid #ccc
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

  .mine-login {
      box-sizing: border-box;
      display: -webkit-box;
      display: -webkit-flex;
      display: flex;
      -webkit-box-align: center;
      -webkit-align-items: center;
      align-items: center;
      width: 10rem;
      margin: 0 auto;
      padding: .4rem .53333333rem;
      background-color: #fff;
      border-bottom: 1px solid #dddde4
  }

  .mine-login .login-pic {
      width: 1.73333333rem;
      height: 1.73333333rem;
      border: 1px solid #efefef;
      background: url(data:image/jpg;base64,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) no-repeat 50%;
      background-size: contain;
      border-radius: 50%
  }

  .mine-login .login-btn {
      margin: 0 0 0 .26666667rem;
      font-weight: 500
  }

  .mine-info {
      box-sizing: border-box;
      display: -webkit-box;
      display: -webkit-flex;
      display: flex;
      -webkit-box-align: center;
      -webkit-align-items: center;
      align-items: center;
      width: 10rem;
      margin: 0 auto;
      padding: .4rem .53333333rem;
      background-color: #fff;
      border-bottom: 1px solid #dddde4
  }

  .mine-info .info-pic {
      width: 1.73333333rem;
      height: 1.73333333rem;
      border: 1px solid #efefef;
      background-repeat: no-repeat;
      background-position: 50%;
      background-size: cover;
      border-radius: 50%;
      position: relative
  }

  .mine-info .info-pic .icon-vip {
      content: "";
      width: .53333333rem;
      height: .26666667rem;
      background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAUCAMAAADImI+JAAAApVBMVEUAAADnNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwz////73NT5yr/+9vX97+v0o4/ubE3qUy3oPBL85uH84tz5z8XvfWHsXz396+fudVf++vn+8/D61s31qJTxjHPve17taUntZUTrWDTpRBzoQBf4yLz3va/3vK71sJ/yknvykHnwg2juc1TpSiN+95uGAAAAEnRSTlMAVAbgrFv55NuJA/rz2KaUigfzOvzGAAABD0lEQVQoz5WSiW7CMBBEncQhEM6O4ySQmxsKvdv//7Taqy0oEjTiSdZIq6dMtLYgXGfi9XCD0XjiuOKC08c/9B3WwgE6GIQkktdhUi8M0SePdi/ApgS2a2VYFdsFjU27G8Cgm4wGWaMBpcyJl3VdH6soPsIQuMInYan2lN+qYjEC8ROXlL6QIHJN8ZpkbRF6TSGFB+JD2Z85rVK0xXNSUHqC93yKrbIj/SqeD1p9wdITI654t6UbjT+RKSqwOGbxWVXm7C9iPjccbAFXSzBlidR89VrdQtJ6eEN1k+Ke6NuFM3miFvfE4MleITOPUxCFkfK3lkgPaIZOZsISTru8afjIwyVcX3rDW9LQk75Lyi+vYTao/vi5XwAAAABJRU5ErkJggg==) no-repeat;
      background-size: contain;
      position: absolute;
      bottom: .08rem;
      right: .13333333rem
  }

  .mine-info .info-user {
      margin: 0 0 0 .26666667rem
  }

  .mine-info .info-user .user-name {
      color: #333;
      font-weight: 500
  }

  .mine-info .info-user .user-id {
      margin: .08rem 0 0;
      color: #666;
      font-weight: 500
  }

  .mine-info .info-user .user-pay {
      display: -webkit-box;
      display: -webkit-flex;
      display: flex;
      -webkit-box-align: center;
      -webkit-align-items: center;
      align-items: center;
      color: #333;
      margin: .26666667rem 0 0
  }

  .mine-info .info-user .user-pay .icon-daodan {
      width: .30666667rem;
      height: .32rem;
      margin: 0 .10666667rem;
      background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABcAAAAYCAMAAAAmopZHAAABJlBMVEUAAACedRuedhyfdx+VZwefdh2fdx6QYwOedh2bcRSTZgOfdx+QYgCccheTZgSXbR2UahuSZQOPZBuPYQCSZxuedBuWbBSZcBubch6gdx+edh6acBSTaRyPZBuYbA6SZQWfdx+PYACPZRugeCD/////5Tn/9zykfSX/4Rf9/PqngjHz7+S+omf+9Pnx69zDqnK0lVD38+v//erl2sHwk7vg07fVxJ3TwZjMt4e5m1v/6DnjxTHUtS3/4yD//vX7+PP//vH49vD63enu59b0r8zbzKv/9Kf/8Iz/74LJs4HHr3v/7XT/6luujUH+7DroyzP/5C6dcyi/nCeabhOUZwb49v71udPzqsrxnsL/85/HrGKxkVb/50z/8Ev13kOqhjizjiWthiP8B9yZAAAAJHRSTlMANSYI947+2dSzcA7o4uLaz8+3i4ZzY1ZAFfbz7dzBtJublUtV/wpkAAABQ0lEQVQoz22Sh5KCMBBAA4K9d6+XYARBOXvB0zt7r9f7///EJQE8nfPNkNm8hdklG2DCOkOXIScD9rBEbUiVs7KKbE7Xn2YDUukGEprdqXv7DePO3kETsczFdO3yZuEupQ1LvUMV4R4VD9HX6zSOq+smUUiiK49bccgkVDe0sBWRtehNAAuXgQS9sihCmmZAfCpCpVBQRJLGz3PhHlfgwQVuRul0lPYyP8ov0/DxCfu8HdgrUGcol6uy0VkbAWsJ/ictgaPyYW8fHvII8FU9zPUG4/Ggl6ObjAcwX+SHWn0hRRH6t3jbdQBwXMQvv6cWAmWRmuCEFAEgIkE4aQhbGi+wyLH4mAOjFtUmHw8ST6fFvc6SNUPWZsnPtzNjXrbvei1pIGjoPGGOPXzys9Lq83ldW6HT6O6FiF0F/T6fPxiO6+IXdQJI05AS1WwAAAAASUVORK5CYII=) no-repeat;
      background-size: contain
  }

  .mine-info .info-user .user-pay .icon-ticket {
      width: .37333333rem;
      height: .32rem;
      margin: 0 .10666667rem;
      background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAYCAMAAADeQm2wAAAAxlBMVEUAAACpRGukQWepRGqqRWy0S3KpRGmoRGmoQ2mrRWytR226T3e1TXKqRGupRGqoQ2qtSGuqRWuqRWqwSm61U22yTW+pRmm1TXOqRWz/fK3/f7L/eaz/dqn/bqXXYo7AVHvcZJH/hrP/+/z/sc//jbjEWH7/////uNPrcJ3BXIG4TnT/7PP/5/D/vtb/pcb4d6jTYIn/0OL0daTmbZr/8PX/2uf/yN3/l77/kbrucp68VnSvSG//9Pn/rMv/nsL/hrvhbZTLW4PDT/79AAAAGXRSTlMAbYpfJP3Yvk0L8+rn5rCcgHk1FNzKyrJCOwHGbAAAAWpJREFUKM910dlWwjAQBuAisrjvyz+T0KYbpaVQQHYVeP+XchI8HuXgfzEX+ZqkmfGOpnZ76v2Tk0YVtI7TTV6NiXYPR+g67wwJQNA+lIdWHlhiUH5w6WlztWVSgDFAVftN91f+BACNDMyHwvDy5ofa58mExFSUDpTqKlB2/U31dZIRNDH4I50xzz8Zw6aj2jpZEmDCkWZ8hsWC7Vb4dbHX1TLxbXq9nhRX3UJ+63nNzK+wj1YEkFbYp+F5V8E6IwkTxYZIaixFE20Sz7s79xMAPGdTFBrQYZ9gbx1f2he+JGPBiGmazpnjtG/kC42g7lqzy+wLmUvZxFFRCL5rdNpuRPnQIcqZtKBvQsE3jfGTxbsGW1ToluV0EaowdsgX+zZM4H4hGnH/bSTojs1OHJ4FgqXgVHfTgU4FQ4vOnpcAL5gHXY5nWkUxeKDAj+7UlRsIwLKimTQDmoCtG0q+oWOZuGNbVeDS+ZuLL63dO03KLnPrAAAAAElFTkSuQmCC) no-repeat;
      background-size: contain
  }

  .mine-info .info-user .user-pay .num-red {
      color: #e7370c
  }

  .mine-menu {
      width: 10rem;
      margin: .26666667rem auto 0;
      background-color: #fff;
      border-top: 1px solid #dddde4
  }

  .mine-menu .menu-item {
      box-sizing: border-box;
      display: -webkit-box;
      display: -webkit-flex;
      display: flex;
      -webkit-box-align: center;
      -webkit-align-items: center;
      align-items: center;
      width: 100%;
      height: 1.2rem;
      padding: 0 0 0 .4rem;
      border-bottom: 1px solid #d0d0d7;
      position: relative
  }

  .mine-menu .menu-item:after {
      content: "";
      width: .2rem;
      height: .37333333rem;
      margin: auto;
      background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAcBAMAAABMuvhMAAAAD1BMVEUAAACZmZmZmZmZmZmZmZnwkG6qAAAABHRSTlMAGNfNigp5hwAAACdJREFUCNdjMBZggAATRShDyAkqxKhCYyEDOAMuBVNMdQGEB+FeBgCToQlHZRsFrQAAAABJRU5ErkJggg==) no-repeat;
      background-size: contain;
      position: absolute;
      top: 0;
      bottom: 0;
      right: .26666667rem
  }

  .mine-menu .menu-item .item-text {
      -webkit-box-flex: 1;
      -webkit-flex: auto;
      flex: auto;
      color: #333;
      font-weight: 500
  }

  .mine-menu .menu-item .vip-over {
      margin: 0 .8rem 0 0;
      color: #999
  }

  .mine-menu .menu-item .vip-over .warning {
      color: #e7370c
  }

  .mine-menu .menu-item .icon-wallet {
      width: .48rem;
      height: .48rem;
      margin: 0 .4rem 0 0;
      background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAMAAADW3miqAAAAaVBMVEUAAADoJSDoJSDoJSDoJSDoJSDoJSDoJSDoJSDoJSDoJSDoJSDoJSDoJSDoJSDoJSDoJSDoJSDoJSDoJSDoJSDoJSDoJSDoJSDoJSDoJSDoJSDoJSDoJSDoJSDoJSDoJSDoJSDoJSDoJSDsWvEOAAAAInRSTlMA8PqtGyUK1CrzDga0sZWUcj44MMSpjkvku1UYFxIDy4xlokFAdwAAANJJREFUOMvV1MkSwiAQBNAOEEISs7pvUfv/P1JJTPRCDVWe7MNceFVQwAyQ6oSBqOzu4JNOJOgaC0CzOiOQoq8VjyWQ8Aq+grEWSD512LTl+sDGLyGUoasys1bKjSicR4qaOwEBpmcmoe5mqSRkcy8EBMagbQxCDDr9fqblf4TQ8j9EpKkv55WAEhrARCF5O3ORtnPywccryD35v7eLRlZFoKK1zCVUQm6pdis2p3u3+Tgw9iRXX3WDbqrzwNCsDAKxfeNHjzzEaju/dSB5tnOePAEFHCtfjQyzgQAAAABJRU5ErkJggg==) no-repeat;
      background-size: contain
  }

  .mine-menu .menu-item .icon-fav {
      width: .48rem;
      height: .45333333rem;
      margin: 0 .4rem 0 0;
      background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAiCAMAAAAAh4u3AAAAk1BMVEUAAADnNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwySHc1qAAAAMHRSTlMACmq4zawS3qSxQx8GmmYr1Mi/TyYW2ZZ7SDw0G/fv6ZCAczEPjIVZV/Ty4sN+XVuIbI59AAABeElEQVQ4y4WSB66DMBBEjQ3Y1AAJPT2kt7n/6b4JRHxqRkLIo+f1etakKyVNFfJDCgf4L8oBY3CmmRkwK79JSINTVtOmmBS3kJDwhnQCYkjKXwI2zri4K+5FXvEOdxTy8SJJ2fQL/giyOEEltVScFt0Eczf2IZUtROVkkPJjN69zNWMPH0UaJcaeVKJaVLlebEoGwEp1aCb3LBNu/6ufUUddATDJDruZretposUkdzLSkT2TgKzEl+QYBafzggxpyWGWAUahbYwNIow+wRYBPN1m+0FG98CKD/yAXyj2EFP4eIT1sSoCZYhRAqjL78KSRQcq2Qye1SwtDm3ocXGrNbdNf+4uNp1UDMy70BxGx1Fx6EIHqB1nDb2XEdbTRrOxX3q6hXkTweXSRNC+zB7HKmPKAU6r/I9oD3QLWnb23ABBAGyeZTcU215M1vYKsDMhZwZct1YvKIG3WAGGWb97A1iJN0QLopASeWPkAlKUtClBrbZjUfFl/gBH5yYOYNbL2QAAAABJRU5ErkJggg==) no-repeat;
      background-size: contain
  }

  .mine-menu .menu-item .icon-clock {
      width: .48rem;
      height: .48rem;
      margin: 0 .4rem 0 0;
      background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAMAAADW3miqAAAAb1BMVEUAAADoJSDoJSDoJSDoJSDoJSDoJSDoJSDoJSDoJSDoJSDoJSDoJSDoJSDoJSDoJSDoJSDoJSDoJSDoJSDoJSDoJSDoJSDoJSDoJSDoJSDoJSDoJSDoJSDoJSDoJSDoJSDoJSDoJSDoJSDoJSDoJSDdvJiuAAAAJHRSTlMA+hezf2zwFQbMqFoi7D3C87Q6oGBSE2nln3w23bWWYUsnYljqjNRhAAABR0lEQVQ4y5WU2XLDIAxFEZv3eI2TNHt7//8bawfXUCW0k/uAh9ExEkKSeFtyOGQVUZUdBhlBNoqwitTmBVK2s8V0Mk1lZ2a+LTlTWFid+H2iLWzxm9FALoWuwwBzQIfMB2g3fb7uItSO8BH4Am3X69T+uC1h9Vg2MOX+tuwA/7dB8xN9i3w8GeEhrxztkh9YmV/ES0hauHwp6NspZZC/tnrARElWiAiUEM1XGqCO+5RBXgrDtB5g9EVEIYN+WjN09TYOdcimtUKyv8ehBNW0ElIaQ2jRkvgU5CARqn6CnDvBxNy5wGOAD7yHiQE+BQPUX5DC1T3LyAzsWRyr45CGWkslepDFZi26GJTjHJQvM/LyXRqBmX0jsJbi2hH0c3N68eZcPDawOsjXqC2aIjIwjvPAOD4Gxrn8b/TAjx4mee3dEOs/pXhX3+UpGyj/xAG3AAAAAElFTkSuQmCC) no-repeat;
      background-size: contain
  }

  .mine-menu .menu-item .icon-mhd {
      width: .48rem;
      height: .42666667rem;
      margin: 0 .4rem 0 0;
      background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAgCAMAAABNTyq8AAAAn1BMVEUAAADnNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwyzqxH7AAAANHRSTlMABPr3CVE6DeKczqRfWtRoLpdLKRPe2bp0NBfx7uWod23Hv4V8Rx60imJCJAfEk42A6q4+bN1xhwAAAiBJREFUOMtNk+mCqjAMhUtBNtlEQBhEUUdmxnXU8/7PdtukdW5/tGlMQs7XKHgtoxBhtBTvVUQDmvsk/lu5C71kbh1bSY5+9hdTAoulUywA40zI4T8hfRvj1GjFuVP5GC7a4T0wBnkixAKZY4KOqC/RMKrojEuliKdwflTRIU62AdzTvaetFnN9zDEeub0bWrWz70d4LBJrRxVc42wVITJWDP9lzBqq0xca2+4JV9O3i6I2zhsOQtxxt0EfWLNxRnhcvTVkQjTULa81Puic4WtcWBo9pjN65x10NQmf+E5SIbj3DfIRG2GvIkJuxbESZv21Qqotdra4GXFdqdI+Vtyp68pKW3vaS6yMuMpVQb4b6OsOrDrgZ5swGHFTSB8quUNsWU5iSgQs7rRX5wEksQMK7vjXkmZx/ki6mOgQ0hFibmXRnpgULKkEFSyAnQWk9kyJ01R78IvPSp4MrC1q7iwrtHawWu9CAABUPBg1bxdHEUAjGQIDkA18kielR+UY9XzHEPgj1w2DFw0KbowI/H4yBAawPRgGTxW8MeJUYgdSzwA6Vdpma3EWmvMgCARgEL5hkGIjXPBM9EpMRBAIQPQeyg6ZAP7mNCUIBGBGaYQErgj5qXL9eyXlRF+TMtCRKQ9LLG6IfSdIe8zoieKXF5Q1yfzBY+Y5xwGjqBrQov9XlfFlF2iMT76sHAX3W6HeJYb0IZNu3F7o4uSxK7PWEf8AotdC9lDGnxAAAAAASUVORK5CYII=) no-repeat;
      background-size: contain
  }

  .mine-menu .menu-item .icon-pencil {
      width: .48rem;
      height: .48rem;
      margin: 0 .4rem 0 0;
      background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAMAAADW3miqAAAAflBMVEUAAADnNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwx/43n+AAAAKXRSTlMAA/yr5qhV+lpXpd494VAjm4xJRO3YzcWgHw2UeGomFxK8sH1hMwmxhdaM0GQAAAEqSURBVDjLfdHZcoMwDAVQAYIAZg0Jgex76///wbpJ6B0k6H3weDljzUg0kXPctczrr/2R5rL9NjwknWGPlk29PNGzj6qc8/uUaQzXp2y3Meu2Ko4d814RL73kSX+9JidXtkkv5YH5Lk1o/T3tiuFcVHTgvJTGWj+mUTruhFkkgVR9zv3YRG6VquKDMKRVweHYZKFWJW/GZrXUfz15rYxSW4dgqGyIoEQ5L/g1DZo2UgVXf2a5ymhS7TgWRquzMeePoSBTs36rmm9EobUJnpQquN065NvAm1W33Dzc1v6vNq+2uGqzKrE2pDeiORUt3P2AoCbMgKC0AYJSBghKGKDagxIGyA+gYEIYh1yEggFSCgYIKnopGCCpYhiJbE0fZWGAxgl8GIWgUm1+AK9WJHEDHu7MAAAAAElFTkSuQmCC) no-repeat;
      background-size: contain
  }

  .mine-logout {
      display: -webkit-box;
      display: -webkit-flex;
      display: flex;
      -webkit-box-pack: center;
      -webkit-justify-content: center;
      justify-content: center;
      -webkit-box-align: center;
      -webkit-align-items: center;
      align-items: center;
      width: 9.33333333rem;
      height: 1.01333333rem;
      margin: auto;
      color: #e7370c;
      font-weight: 500;
      background-color: #fff;
      border: 1px solid #e7370c;
      border-radius: 8px;
      position: absolute;
      left: 0;
      right: 0;
      bottom: .53333333rem
  }

  body,html {
      background-color: #f4f4f4
  }

  @media (orientation: landscape) and (max-width:736px) {
      .header-normal,.mine-info,.mine-login,.mine-logout,.mine-menu {
          width:100%!important
      }

      .mine-logout {
          width: 90%!important;
          margin: .53333333rem auto;
          position: relative;
          bottom: 0
      }
  }

</style>
