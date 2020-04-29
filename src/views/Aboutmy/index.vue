<template>
  <div class="page-aboutmy">
    <normal-header title="关于漫画岛" :showRigth="false"></normal-header>
    <section class="about-download">
        <div class="download-pic"></div>
        <a href="download.html?cpid=0">
            <div class="download-btn font-24">立即下载</div>
        </a>
    </section>
    <section class="about-info">
      <p class="info-item">
          <span class="item-left font-26">公司名称</span>
          <span class="item-right font-22">上海元聚网络科技有限公司</span>
      </p>
      <p class="info-item">
          <span class="item-left font-26">微博</span>
          <span class="item-right font-22">@漫画岛官网</span>
      </p>
      <p class="info-item">
          <span class="item-left font-26">微信</span>
          <span class="item-right font-22">mhdapp</span>
      </p>
      <p class="info-item">
          <span class="item-left font-26">官方Q群</span>
          <span class="item-right font-22">555142226</span>
      </p>
      <p class="info-item">
          <span class="item-left font-26">联系电话</span>
          <span class="item-right font-22">021-54393188</span>
      </p>
      <p class="info-item">
          <span class="item-left font-26">商务合作QQ</span>
          <span class="item-right font-22">317022157</span>
      </p>
      <p class="info-item">
          <span class="item-left font-26">版权合作邮箱</span>
          <span class="item-right font-22">tg@manhuadao.cn</span>
      </p>
      <p class="info-item">
          <span class="item-left font-26">公司地址</span>
          <span class="item-right font-22">上海市闵行区万源路2158号泓毅大厦B座</span>
      </p>
  </section>
  <section class="about-info">
      <p class="info-item">
          <span class="item-left font-26">公司名称</span>
          <span class="item-right font-22">上海元聚网络科技有限公司</span>
      </p>
      <p class="info-item">
          <span class="item-left font-26">微博</span>
          <span class="item-right font-22">@漫画岛官网</span>
      </p>
      <p class="info-item">
          <span class="item-left font-26">微信</span>
          <span class="item-right font-22">mhdapp</span>
      </p>
      <p class="info-item">
          <span class="item-left font-26">官方Q群</span>
          <span class="item-right font-22">555142226</span>
      </p>
      <p class="info-item">
          <span class="item-left font-26">联系电话</span>
          <span class="item-right font-22">021-54393188</span>
      </p>
      <p class="info-item">
          <span class="item-left font-26">商务合作QQ</span>
          <span class="item-right font-22">317022157</span>
      </p>
      <p class="info-item">
          <span class="item-left font-26">版权合作邮箱</span>
          <span class="item-right font-22">tg@manhuadao.cn</span>
      </p>
      <p class="info-item">
          <span class="item-left font-26">公司地址</span>
          <span class="item-right font-22">上海市闵行区万源路2158号泓毅大厦B座</span>
      </p>
  </section>
  <footer class="about-summary">
      <p class="summary-title font-26">漫画岛简介</p>
      <p class="summary-text font-22">
          上万部各类题材漫画实时连载，各国免费漫画资源全方位覆盖，漫画更新速度紧随官网脚步，绝对让你先睹为快！专为下载阅读研发的极速下载功能和新型压缩技术，在观看高清漫画的同时更有效地为你节省手机空间让你观漫无止境。漫画岛，致力为沉迷二次元漫画的你带来丰富的精神食粮！畅心阅读，一点都不卡。
      </p>
  </footer>
  </div>
</template>

<script>
import NormalHeader from '@/components/NormalHeader/index.vue'
export default {
  name: 'Aboutmy',

  components: {
    NormalHeader
  },
  methods: {
  }
}
</script>
<style scoped>
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

.header-normal {
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
    background-color: #fff;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 999;
}

.header-normal .header-back {
    width: .61333333rem;
    height: .34666667rem;
    background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAAaCAMAAAD/jJ6+AAAAS1BMVEUAAAAzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzNOfcgEAAAAGHRSTlMA+YTxaxvr3L+mCaqiUUYxJRHYmpKMd14rR8HRAAAAm0lEQVQ4y+2SyQ7CMAxE62xtQ1dW//+XYsURIEw7B8SNOeXNiyLFSfPMeiL3gsDcEjPpEpulY8lBAZnsSCoflJCZ2nJAVAIm9ixpp4rABC8VuayEzMDv8dcdQ2xb3f7RONMmHcOG0fscx8Zkw8zlIbq5IjZjGe8QlbDJIUlLoSI264V0Jhpslp7OD7Dmn5/F/kJyu9vJ/PCvTr8DD0sYr/4QOQEAAAAASUVORK5CYII=) no-repeat;
    background-size: contain;
    position: absolute;
    top: .42666667rem;
    left: .32rem
}

.header-normal .header-title {
    max-width: 70%;
    color: #333;
    font-weight: 500;
    text-align: center;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap
}

.header-normal .header-search {
    background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAAqCAMAAADyHTlpAAAAmVBMVEUAAADnNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwwyRpgHAAAAMnRSTlMA+gbmzLWd7pEiDtwExpVDKvLRp1I+FOK/uDkX9q6rjnt3MxqHWAvXpGG6iYBya0pIMClQcwUAAAHZSURBVDjLlZPpmqIwEEUJYRFEBHHfl9ax9+nz/g83UwxBQEXn/Am536WqklRZNcbHeKpT0sm0MwytFn67igvLdf+eceTQpDe/ZTx55PizzW6367yl5GzsK2fwK88Zz6NCiPqeygMvGs5EA2ozromHPFE3qMeciLa/Ll+LXg1wkuzTW5ezcKSG6CJ44rStW4QD4OWSRrLcu/CDBpWYnfN3s7fu0Qdm5o2AjnWfM1BEcmE5brEGCrx/HaIgttpYQZof+gjMW61DIO+cGPyo1XpS8CEfUzlgOw6sZdVy/nYycGRNYfvA2oGJrMDnA+sL6P+MOnm+1im8PbAOICuip+33egC2tbcQqs9Wiq/AKG/eJXhG/drapv/jLyO65XuuQR0K1dbaO87nw8+V0uanhLKfRlTCfmP4rgTFjEFPaikLUwjqtdpXK7PZA5OyuX/OGn3+KRvbh2VgGTYywbfncCFzv7vsbSlhcLg1LF0aPToWRfev+9+XGOH132RBTUxWiHPRrKknsloPT4UQHl2EWWiFce/drnijl+KWnGzz3skGxW4X5V2Ca9fyzWiyCorRanqtvedzwY8TMwRNr2D3P9aDrt91su0oKkUXwbMeYry+9bTXsZ7zer6T/AE4EE3TZn9kCQAAAABJRU5ErkJggg==) no-repeat;
    background-size: contain
}

.header-normal .header-index,.header-normal .header-search {
    width: .56rem;
    height: .56rem;
    position: absolute;
    top: .32rem;
    right: .32rem
}

.header-normal .header-index {
    /* background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAAqCAMAAADyHTlpAAAAV1BMVEUAAADnNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwxn+LnKAAAAHHRSTlMAUg338NIUCIbY24/77uPIsaSWaWBOQi0oHPKBH/oJmgAAATRJREFUOMvNlNuOwiAURaFQqGK9a9XZ//+dQxjLgeyAPs56OamupGWdporxYbbBq284IXL6xpyQmD6bVwDnM4DrJ/NugKNSR8Dc++bDAqOPRxsB++iZbgvsnyry3ANb1zb9ATCLSiwv4OB7mXa39eK2i8l6mS5yeamScSZVUCfjTIIka2QSKBllEopknIlYjCSjTIIk40wEJ+NMlKyTiZNJpoEVTsaZWsk4UzNZoEyNZEFZytRINqsZf+QNT6MBzDjlfSIR1VCr2uKN1bUalA9zoWoU6EKd1+/Nqjobs+jYeNAxoXXVn7X6A2zeyxg2wNRRx3TX/CxjRzVA3vAAmIYqU378j2o6Dh/rJTMhkTiWzISk5xXkKTgbHT3kGRcbDevyLNDooFWFtmhgxZRXegeifMV/ARY5MLGD2AosAAAAAElFTkSuQmCC) no-repeat; */
    background-size: contain
}

.header-normal .header-submit {
    color: #333;
    position: absolute;
    top: .32rem;
    right: .32rem
}

.about-download {
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
    width: 10rem;
    height: 2.66666667rem;
    margin-top: 1.2rem;
    /* margin: 0 auto; */
    padding: .66666667rem .21333333rem;
    position: relative
}

.about-download .download-pic {
    width: 4.4rem;
    height: 1.33333333rem;
    background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAVYAAABvCAMAAACAcxhgAAAC+lBMVEUAAABZWlpZWlpmZmZmZmZZWlpmZmZZWlr+/v79/f1mZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmb9/f1mZmb9/f1mZmb9/f1mZmZmZmb9/f39/f39/f39/f39/f39/f38/Pz+/v78/Pz+/v79/f3+/v7+/v79/f36+/v5+fn9/f3s7Oz9/f3+/v79/f39/f35+fn9/f39/f319fX6+vr39/f9/f39/f3x8fH9/f39/f39/f36+vrX19f+/v79/f39/f3w8PD9/f39/f37+/v5+fn09PTf39/////lORH9/f1mZmb9dAHnPRDwVAr3ZQX5agTrSA3+dwH8cgL1YAbtSwzmOxD+dQHzXAj7bwL0XgfnPw/yWgj4aATvUQvgFQDlOA/yWAnoQQ/oQA/xVwnhGAD75N790anwiXDtTgvuUAv6bQPgEQDiHgDhGwDsZj/lOxPjKQH98e799O3pQw70eTrqRg72YwbkMAfiIgD+/Pz++vnkNAn94cvzo4/xloDkLgThFwDjJgD84dL4y7/707vlNgz6yavznov0lWz8w5n/eAD99PHwbzz6zLbqRA787ejymYT8qWfoTynmQBf61MvtcFT828P4x7n2tJ30qZj7l03pWDXoSSHgDgD98Ov80bT3o335omzsaUvpUzD99/TxkXv1mG/vgWbrYD7vYin+fhD7dg/63NTnRR32ahP9+Pb86OP62dH94Mf2tqb0ppP4kE/+m0bqXDv8iCv0cSn+gx3eBAD73tf8yqX9uYH7rXnwjHXvhWz0jF/td1vrZEX62Mn3wLHufGL+qFzudVbzg1X1h0/waTX0dTP74Nn5z8T4v6f6tYn9o1b4hz/4fzP98ur97uL86uD607/3w7b2uqz+yp/9vor0m3j9s3fwhGLyd0T5eyT92r31sqP1r571rpf6p3L3nG3zk2z+ljz9jzT1biHuWSD91bP+yJr8wJH3rIn+r2vtbEnzfUb75Nv959b3mGb6oGP5jkftURf5bgn5mFnzXg/0rqHqquXQAAAAR3RSTlMABQl/QAq/B/DNEO/PYJ8g3zBWcJqvtY9QiEsig3XEfdVp4qPy6MdBOd4PBdC7r3FbKRNHG2ReNr+UkC8o2KifVothmJFmLyt9sIwAABa0SURBVHja7NXLCoJAFMbxcWCYeQBxY0JeuigUZZQugowug+//QtmpCCOC8owQc36rs/4vvsMI+XdOd4y8LUppzUSVv6KwbY+cHIGUFBY8mwoM17QUlkHUJmleHcpUJaqDJInGcbgVTVjbu96qimKnNBavErZ3dRqcZ65GNSs4lxZ3hapiEmlsobC5K1RdaAOOFneFBag0MND1u6yZ35IxPNPAU2m8XrJewLc6a0NO/HPX1aAcupscbj+Yj+oXURwyHEF9t2d9gAm48F7voE1FcRjAzyKYVVx8tfVRo8b6qFhpFQcdzv2gg0uWDg0NDR3yRqTclDaGUDoUTEhaYjF16INGaKihhQ5xCfigIHa2IB3UzSm74DmnuUnO9R57Ba8/KA2n/wby8ee7J+eoU+7xGiAqpyF0n2Gvr1+AJVcfafK4O48f6sRJiyXvQ1MPcZxY1iOnqWNcogaUqRqueQag9IA0nDgKe457iMlFAI7vq7ysV6iD3Op1vYWWHgizAUkcwg3C3b0I27rcctOcA5DYKS+vVXBA7+7pdBPH8GbtpA7qEOuqXNY3Sy9WMziQqRU1k+WtBIAOY+Hs62ru6wPj//Y0Jl9By8U+InG+WSs/p2ofatns/Nv5TWoHXgYyCct2VcbqArDk9XqLaXB6yWuhpgM4ZrTj+szYobK7YE4bxQFDzcstAI73gYj1Dv3N1nLs6fDwKPsJh4KLY/TPVuLp7FIu74sWt8cK1Oy6qgU8ADYGvUy+ICLzWvoGYICNHwewwMZtmAFwlQi30bTt5eYgOUscIDrgOjXR31ZD45ohOl79Sv9gplTOp4LhVCyZjIWCw/PU5NoRVbleBrA8yJXXRWaWSgBcbLqLJzNoSz4OQFwHenmpbizUc0Pmkdz89wSAc73EAfwe8JCarFZ9WptoKK9TpZ3qaCw20ZydqK5RWZeyXM8D+HzweesAavzFWiHdslnkAYBh01cBlAbtCQA4RZhOACt1xVRkFsAZ4gBerT3UJBfSJNOjaaqytzihSZKx11TSrYz1LJjvQwKAff57N9Auwo8asfYDmByyJaIDaD7mppRzU+Jx+O+JJ5aLmhRTmiy4pl7WYFST+EY3qeSC+ipwH8z7ot/vL/FY/dYasR4DoC/UI4eqZ+NGXB4AiaJfJcfj9xDB+Vi3Q5osVaYqS2HN5Omk7Vh7O8B8ioyU0zzWEWtgiGgBm1p33ZsA3oyoGWXxX2JdHdZkvnDBXqxi1rStR9WxkrsiV309A2b/sTUj1hv4CwOEcwPYfcxNfQq0q+yI03cALhHB+Vj3wj5NEg3WqLWMltRk06ldc6zK71nH+q8eRdP+M2byebtX/AgMscg1EW+zYXlvOgmg8IxbATKbc2gwTuf+Z6yfQ9PmFijq1NLWYlSTjScrdmPth+TLE2YrE29Z/8FOfgDoJlwHWjYmPz560u7VlzhaXG2xij8DafZm+7NoeC9OfzFvZrExRWEc98iriEQi1khssa8RPLZfxJIiiGUkau00xqTRdoqp0aKZNrU2KO2gSpWxLyOqlFqqKC2tNa2lSsUS+/Lg/L+5M/eac41bD5ffy/edc7/O5P7mzOk557bXRYaTQlO0rlieJH2zf7MW2CNNrU7LQYNaO5MKFqVHxulSRkStUT8Y88XR8lreO1yRC8vhzFHhuZgo4kBVK18k91eE9Bzy84x7D4psAArN0LrByVq1xOjvtD4kSJW2/W5jWjuSBpyG5uDGZe4GFpe9RVKBnhtEh/QqPZhJRHwmYudQrTkTOKbnEdPALbeybTBF6+n4+EhpFiA9rctiIqXKdRHGtGKwHip/VVYaHK4X502QKeHvNM4Ge4mkDF0PiZ6JIFFANFuJ1E3VyteESAT8MHAXIP+K4Y06U7QetDhDZaVaN+hpXZcgaU04YVArtq64uXkeBynse/g+/RdqSyoSiWnVrFnrgNbVRCWI5Q0N5YjpDQ21rMxOGRxJIGl1i1qoXEQHKh4WcF5ORMNRZ4rWzPVOyVbM2QiZG9ZUqdB6wZjWfvjaz2PK8ujPtPVrRX0+US3iDaJ8xLf4gJCcpox5QKtV7ap+xVkNlSCAEhygo84Ure79NnkQrouQ2Y0tVgjR5w2OVvwCKpjP4PbsFZ781Xrke1by6qk/a0W50JqOuE9oRYTWWn9Hxnyg1arpquCslPCuzCYi6o06U7Q61i2XbCUlyLOAYz/qQpgx16BWLJdcBdOZD+R6hfgbyrEbasNa0YRWRJfQisha/R0ZXK/VqumiEpHUJhLeFBTY8S3o38MMrWCnPGUu3LZMPmbBbkzSuiaiCSuBzPejwQeKGx2O95gEofUqWkLrNURoRYRWfh2hlcu1WjVdZC/z5S8SdkczJdXENG9jktZsaA3BekIq26ij1ZJ8NKIp61aHR9xgHFWPDg92t5JWiTBaHaTifhj3Pr8iU7N56GqK1j1W2VfS8tMhVTnxTh2tsU8NaQUjCJQ+92RSzSzBzE8ez1UkVz0eTxwS0fFpJpLSgFY0ngutiBJCK0etVqWrhsLRoocZWncIrRIxocNwc4xOlcV6z4BW6YF2xkyBz0G0CUkFET1H4iJy+JAEtaIBrYgSQivHoNau+Ni468e1OD2ulrx1oXqkGVo3xkbKxIaunE7oVaVa7xrUCgZ1Ij81U0FjXFwjok/csBfJNXSAoFY0oBVRQmjlGNTaHV/5SVPDcxPlXU3Qeik6UiY+PvPXvdjyJD2tCSuaoLVfF/KTMyk8OQGtaEArYqPP50X0+ny+H0iEVq4mgfpw99ikP5CC7bEJWnfPiNRhxpNfT2VxeCWRZNsQXqs8C7hcDqJPU8Lhw3a0NRShtV1oRXQRbUfEcKtEIrRyeUBr3/b4mQ/eKeE5hl2BCVrn6mvdKG1c9cb0viZoxRxQP368r5ry6r3jf0tVDQ5PWCuaQmsVIrQislZ/Ry7XK1oHJhJTiothaMTRowlaz+pqta13aE8Poy16Rc7U2ca1DsaWcrFfFOW5alL0qHHZCXRsqtZBFCQnK2WlHmmNKF+MEhO07tLVaom9KG1cZa2RB41rxXFg2mJBJQnsehDDJ32sFdXQipgltCJCax0SoRWBNUl/XJRT/+XzEgqhHuVmaV0GrTLaRy95Fluk/pBeZFwrbvz7GMEXIbUSiYT3u117gnUMfduVWFVcXIVYWVz8mYurKZcjCfjxoOOz13vsDgH+Ea+dmDd1Y7y5SIq53iSta5JhKOxxyxE2L2PbesCw1gG4cS/uq54oDVGPYiIa2rKZVivrkKkjrdaBhBflcobfKItAFn+UyG7+B1pTNcctF6Q1mHyKLWuVTwVSpoGVwgCiHlv497SidQt6hKcsuY77czlhTW0wGJUXAHzFr7UIaRVr5V6TtK5KtujPAquCJ93OeH2tCdnGtbbD5DZW8M1OdPvLWH3WYrQGtSo9jjqdysNCKyeqVrQUrXxF0YrUrxVZIc5bzNAara81dk9wPGPRqod1j2Gtw3DiynoqCXDzm5B8n1NhCCwQsqhlqFb6+DJUal0RNUnrSZ5k/5nWVDV3BjdaO63aJYL0cMCQ1vZE9HgBOEMB3nB77QEhqHAB8wCKBwS18mUCH+ekaSg6nEjQugAEtT5CS9HKVxStSFlrGjKztC7VaJ2YlKQOzOQjytOW2FSNd6d2QO8wqrXHcCK6NRkcpgDuQu44mfsZQZCm/okKa0Ufa9UndzJQtaKlaOUrilakrPUBsn+h1bZjp6ot5lIEc067aLVkr7eoWjca1YpF6222eAoDre0QAkVRkzXsfYy+nvhvKmNa5zRR65l/pXXG5lXsULvRciy0aZZU2Zudf6O1J+4qCpwhDUWFUUFe3qEAIwf4taL7VMqS35B1PAqoWtF6QQxfgVblbVnrO349kXQyXatbfb46EY9e8LTFoj2H3RCr0XrFoFYsK/P24q5G3SEV9/2TQauF9/MoSPM+eJpwOcoAp3iP3579geNrAadbkN0q5M+MBMcDgjuYrXVXRLZVHZq2TBxzJ2v/pth9SKM1+rxBrSMxs40Ct0gh8ePrW4WjtBQef/D4dsDrz/bO4weGKI7jyxsPU3ZmrLFL9N676O0gy7s5cOSiHJYoFy16RHCRaBHloISIRA2CCCHKxUGCKHFQDiSI/8D7/WZ2fvN2ZrZgRfDFmp150z7vN7/fq7NdcI86dAXntLUDn1Al1cNwO5hz199VEqCe1INH5lBP4Sk5jmDVKqXq9bIxrDT64hre1X4guv/Ww09nku//zKeH6GKhFfHZ7DqwfpUJu2EdbiUdMqbPT59c95fAV7f/3VhvF49GYv2qJTeh0Kr0yL6PYn1QJ1YIU7PnSqHrezNX0fVv19UV3+A57QmP9dyaOgP23c933l9SUz2c9a28+JWGCzS/lkVYi3cpaC0r7QOnoPQcvl/QEFaqYn2cPXv2GWxVuj47ok+vzs068RpWkVaiuQIoXJ+unVe2BEOAukHyz3COuK7tWDPrSrB8Bnz7xOZipTYB8q3FFxFu62beXhYptC45VPwhrBion1058/HiLBXrmW+SM2jtois7iQNY4Mjuvgf+vChVny9ClAv6UPwi28qLbysTvcUg+STIhy84Eu53Y70NkzRW01O/bvX8SKG1tFt2wULyBrFiXzPp1k7UmYeLosOqn756eM3f8ASDdT/gWo86ZEAjulZN9AqPfAXztVvTsVJ7K8Wg20rxXxk98FgOyVaS18RK5kpa8+rJlYevL64NO+7hIzC2L7feLIINHSWocXUwxZSokVOqpVrz5syZhxdjc+Gb3jtAbSdnaXiwqtXHoTw270fbBFDjB8xS1XtCu0yP+MRhdH89utZi2rZzv8gzMT15fswA5TDjaLZLs/uy1AZUilKqSifBZyjJZ9XASurXbUibrh07ZYarWLqM9rd27p48O3VEp3ap6tQ/Nrh6YP9RlYn6jVbOOYESN73nVR20vj25IXAbzinYEPGtG5cdrRcraXhoO327jIg2HfaYMqBZc9SH9yxDHZX5TVhPbaqcYvF4+arknqsT4DMiyVete1w/VtLYYUOHTO3SfxCtIWMb061juybMmxjZrUObPkO7oGv5PVjvLogEJX9C0L2lSVg33UXj3lRr+MU/9tKmKmOwKNbj6B9qxor1wijGvW3Jgf9Y6xgxOH/J/VjnFSHfGxo3zc38j7WO8a3zFxyMTWyjcEbGTcOG/2OtZzT2pu1F3wskuNZj8enE8zb8x1rP3IEF63HdYxp3SQh9Q7635D/WBma6ENbkGsGqjedxy9XV/wRW/RfOyyKsG0ppszSO/wxWJlJvw+PaT3Ews42kdjVNyzFYSj6r55SXNKH90CzCZRsTsG5dsi1lkAsY989h1URZnLZkhfAaZ0lYbHV3i6mykRWXEhG5cDFch+uquKacsOJYuS83YwVLVbAu3LYqAeuaw5uTh2SdO7z8Z7HajGVFljHm8AhVnhX5WgQrhUe0iAOJC1WIJi9JyPM6ghVwb1RemHqGmVqgbHBNjhnHKjiDS9fkSZkUF1Wwnl0Vwwp6MC/WeoU6uucHseJdOQJzO1PAa+UeUTV13RS5CoxZE8wnp5dvq1LgPEyfpyNC2Do+5Kr0iLsRqruwpJ0zhwXiAVZXx/wvWwDT4PwswMwQKKuGde/ydUlY389LfsfA+ZkbfwHWvEB3yCJUgZBywzZYnAlPrRHYC6sUUjLwWVYtM+0CQKZweCDX5+pmmMEDOTzMPx49KGsQ69bN25KwHvVdLrVevaDXD/x0yNIdtFPBfH4mUkWu3A6DiiE8N2/K7xaAi4sSGrrMmILmiwu7OlZhcMLqq9IJMKm88IAgYMRLbdAJ3F8yP4aVaglUxZpFxv3TWLPCQk9goVeU/PTQbI1cGRZsBUaw7FQr71h5P2BZ+PwaZg0HrThhnRfkZyxk4SothtUBY0esaNjVsL5bmoj1Alol8SuPXzmwetsPYrXBFsADup68dvCahoSlcUEuFS3Twds2hYWfAQpMki553CDPLNjP1eLS0VNiwCJZroGBUgtQ05JueJlKrNzCgGs5OeaaVkZj6VipP1vFupsasWj0IOVC41jJIhjnOpSAcjpYrDA9FlHWEwIt2XcT5bjMq1K1DY5sIaWB5YCYwPbi4uCBuJ7nUfkFV0OH3NS0HHxogDVaktWZkU0rt1KfSxzrYqWHYOM6nHtBXVk/aK2aKZ2YrWdIXi5TEd21HCBCd+oGZS4McelyM7qLMLWMnWVhqVU4wSfK9pNKI1Sl82yGc8a44/+DzEEHBVhJDL7FxFKxnkrGurW0ZFnSQNbdDWMlMS2DtqDRVVFxVJhhWTQwOnyiySenygpKCkaFqxCcPlEYFPNqHQHrqZzJU3D/nyaQvsgbrmqtNvPFBYesQmmENbUVWw1ZH1aVqEZQClff3qQUu3Y3glWwMtYsAwmmQIgjyQq7DqyOgalcYZhpWIlqVFR9ykq3b8I/wAiO1RAF0yiovhVVyAoPKi+FGpXXe0tS3hKyYsOy0lI/bs2fF/YCPPCx0iiYmu8YJElr4vLC3XLFpSbWkJPJqxirYAH6vFK2skP3TM+7wLRq9SmnVfhieTrDEporuIrV1ZgXRNSCIQT3GMulW2tpWdpbRncdvLq8JF9FvKd0eG3Y86VgXfCoWMcbMek+8Aa4ihUdIflACzcZDu7AyoRYNWPV/f+dSP2J9iasUCGjqgA3y1fhZCwtkhtyLw9zXlOdANZO8mUrtTyjqm+9dGN5JLYfeaduvXDy6qrSjUhP4Mkby6JveTzVKNa4tXKhKAjEwo74AG7YNY01JyzaAcSERVgledeRK+JYXcgLTspjarxENWS5TJgcZAVNLY7QYm8bJi1evUS+cHzpktVSN9AsVd1cv/g5fTu/6sbq5evmz8esWHfkRbH224bpPr3AtwbX5wNx1ZDlhhV1V/5DZasYqx4Yqw32bUc9iSNswqoJSzck5rgTwDYabhhl1h5tVKwVD+VHhLCWRe/Gbl+MaeH97XceHTt96Lj887hYS2f3Hd+zfMnSBfPmzSvd2Fes993YWBQUloI17ltJpjCDOqvugT2lKYh7um97jAoDuQCQ4P63Alhs3FrRwsMan2saLmHVNb1MX7PDpwuxUhylN7n/rFbsvf/u4Hapy7FNHVqlFwQMD+rjkWDBrXSselYY5bptPgAYF7OFoftUWYYqZ2juhh05LoNTJmJ1nCB9XteZ4DqZsrqUihWda/9iU9UtvXxVEDl5945lxyoJ5ARQSgLXcbQAFI/LsjnDRGWDtoPCKxNlvsL0HTiRIV5UXoDg7hjQIJGGNd0JYMzqU2yi0n8lA582sEFFZpINsro6lWi7znAfavjSNY6mjuLgcULssXJrDrNB1/KmMAwZ6S3NTsfq+K6LmlrIC3QsNlGDqxUE0CzsXJ6ToL0ipkb7tFzD0CLfzCwU123yJlyK6WRwgbKBN3Y1bgjhZAtQ1newBahuJ0DmOrrYRE2r1izoZpokV680bystKXkYCEhBco8VbFqbQ9/AcA0t1fy9rPHFpmlyq5b/5K8RondtU2yWxv4lgwTqF5lr8woDXVq1/Ed/QxfNtUexKer1j7qAkOuwYhPU6x/+ndfgV4mn9f7lVLv9y1QDri0nDf21UAeP+rephr/4PqrDr4Padkarlv9qtKrg2rLVpGFT2vZs07vNT6h37z7dO3Qe26rlv/47+hGwkuwvUUuA+p9qC+CKZAHtT6t16xb/oYZsSa1/WHQMgPofLIL9hfrP9Bei/f/wJzL9w47zV6nFT/z9//B/Bxud4rHIiM7gAAAAAElFTkSuQmCC) no-repeat 50%;
    background-size: contain
}

.about-download .download-btn {
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
    -webkit-box-align: center;
    -webkit-align-items: center;
    align-items: center;
    width: 2.26666667rem;
    height: .8rem;
    font-weight: 600;
    color: #fff;
    border-radius: 5px;
    background-color: #e7370c
}

.about-info {
    box-sizing: border-box;
    width: 10rem;
    margin: 0 auto;
    padding: 0 .21333333rem
}

.about-info .info-item {
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
    height: .98666667rem;
    padding: 0 .18666667rem 0 .16rem;
    border-bottom: 1px solid #ddd
}

.about-info .info-item:first-of-type {
    border-top: 1px solid #ddd
}

.about-info .info-item .item-left {
    color: #333;
    font-weight: 500
}

.about-info .info-item .item-right {
    color: #666;
    font-weight: 300
}

.about-summary {
    box-sizing: border-box;
    width: 10rem;
    margin: 0 auto;
    padding: 0 .21333333rem .26666667rem .37333333rem
}

.about-summary .summary-title {
    padding: .34666667rem 0 .26666667rem;
    color: #333;
    font-weight: 500
}

.about-summary .summary-text {
    line-height: 2;
    color: #666;
    font-weight: 300;
    word-break: break-all
}

.tips-wechat {
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
    height: 2.37333333rem;
    margin: auto;
    background-color: rgba(0,0,0,.5);
    position: fixed;
    z-index: 999;
    left: 0;
    right: 0;
    bottom: 0
}

.tips-wechat .wechat-code {
    width: 2.04rem;
    height: 2.04rem;
    margin: 0 .4rem 0 .13333333rem
}

.tips-wechat .tip-text {
    -webkit-box-flex: 1;
    -webkit-flex: auto;
    flex: auto;
    line-height: 1.5;
    color: #fff
}

.tips-wechat .close {
    width: .33333333rem;
    height: .33333333rem;
    margin: 0 .32rem 0 0;
    /* background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZCAMAAADzN3VRAAAARVBMVEUAAADV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXZkrBbAAAAFnRSTlMA2BkU3tAf9QTrirawq6OREuiWgoEJNJIs5wAAAIhJREFUKM9lzzkWgzAQBNFGsj0Cs3mb+x/VEFXzVJn6JxqdNZENv3fkXHwvz4zpwC2PBqPH7VwmtUgIyFEtEwIypBkyyFWqAwTcd0kFAqp0IQeIAAjoCYB64EA+3wPUA+TQE5cPTg61XKgAEnQ8ngZGi5qBU0gBOI3SBjh9pDaNse6y6hKvb/sDbKYZqOSfJ/UAAAAASUVORK5CYII=) no-repeat; */
    background-size: contain
}

.tips-padding {
    padding: 0 0 2.37333333rem
}

@media (orientation: landscape) and (max-width:736px) {
    .about-download,.about-info,.about-summary,.header-normal,.tips-wechat {
        width:100%!important
    }
}

</style>
