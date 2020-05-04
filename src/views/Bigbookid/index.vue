<template>
  <div class="page-bigbook" >
    <!-- 头部导航条 -->
    <header class="detail-header-scroll">
      <div class="header-back" @click="goback">
        <img class="header-back-img" src="../../assets/icon/header-back-white.png"/>
      </div>
      <span class="header-title font-32 header-hide">  </span>
      <div class="header-index" @click="gohome"><img class="header-index-img" src="../../assets/icon/home.png"/></div>
      <div class="header-share icon-share"><img class="icon-share" src="../../assets/icon/fenxiang.png"/></div>
    </header>
    <!-- 头部主体部分 -->
    <header class="detail-header header-cover" >
      <div class="header-cover" :style="`background-image: url('${Introduction.comicsdetail[0].bigcoverurl}');`"></div>
      <div class="header-group">
          <div class="header-box">
              <div class="header-pic" :style="`background-image: url('${Introduction.comicsdetail[0].coverurl}');`"></div>
          </div>
          <div class="header-info">
              <p class="info-title font-38">{{ Introduction.comicsdetail[0].bigbook_name }}</p>
              <p class="info-type font-26">{{ Introduction.comicsdetail[0].subject_name }} |{{ Introduction.comicsdetail[0].key_name }}</p>
              <div class="info-star">
                  <div class="star-red">
                  </div><div class="star-red">
                  </div><div class="star-red">
                  </div><div class="star-red"></div>
                  <div class="star-white"></div>
              </div>
              <p class="info-fans font-26">人气：{{Introduction.comicsdetail[0].bigbookview | capitalize  }}</p>
          </div>
      </div>
      <div class="vip fee">
          <div></div>
      </div>
  </header>
  <!-- <Bigbooknav :mululist='mulu' @click="handleClick(index)"></Bigbooknav> -->
   <section class="detail-tab font-28">
     <div
      class="tab-item  tab-border"
      :class="{'active': index === activeIndex}"
      v-for="(item, index) in mulu"
      :key="index"
       @click="handleClick(index)"
      >{{ item.name }}</div>
    </section>
  <!-- 主体部分 分三部分 1. 简介 2. 目录 3. 评价 -->
  <section class="detail-main" v-if="activeIndex === 0" :class="{'active': index === activeIndex}">
    <section class="detail-summary font-26">{{ Introduction.comicsdetail[0].bigbook_brief }}</section>
    <div class="introduce">
        <div class="btna"><span>作者：{{ Introduction.comicsdetail[0].bigbook_author }}</span></div>
        <div class="btnb"><span>连载中 |</span> <span>{{ Introduction.comicsdetail[0].updatedetail }}</span></div>
    </div>
    <!-- 热门推荐 -->
    <section class="hot-recommend">
        <p class="recommend-title font-26">热门推荐</p>
        <div class="recommend-list">
            <div class="list-item">
                <div class="item-pic" style="background-image: url(&quot;//img.manhuadao.cn/bookcenter/coverimages/173734/173734_c6d2e07448574d86801f1ad97b39aa24.jpg&quot;);"></div>
                <p class="item-name font-26">爆笑校园</p>
            </div><div class="list-item">
                <div class="item-pic" style="background-image: url(&quot;//img.manhuadao.cn/bookcenter/coverimages/181650/181650_1a34cab7f2c84771a36db383d4110086.jpg&quot;);"></div>
                <p class="item-name font-26">国民老公带回家 偷吻55次</p>
            </div><div class="list-item">
                <div class="item-pic" style="background-image: url(&quot;//img.manhuadao.cn/bookcenter/coverimages/167572/167572_64dd23f38e2743cdb9416fa4f8d3e15a.jpg&quot;);"></div>
                <p class="item-name font-26">傲世九重天</p>
            </div>
        </div>
    </section>
  </section>
  <!-- 2. 目录 -->
  <section v-if="activeIndex === 1" :class="{'active': index === activeIndex}">
    <section class="detail-list">
        <p class="list-title">
            <span class="title-title font-28">目录</span>
            <span class="title-sub font-24">(2020-05-03已经更新到第251话 圣王的血脉（2）)</span>
        </p>
        <div class="list-btn">
            <div class="icon-sort-down"></div>
            <div class="btn-text font-24">正序</div>
        </div>
           <section class="list-list">
                   <div class="list-item font-26">
                       <span class="item-name">第01话</span>

                   </div><div class="list-item font-26">
                       <span class="item-name">第02话</span>

                   </div><div class="list-item font-26">
                       <span class="item-name">第03回</span>

                   </div><div class="list-item font-26">
                       <span class="item-name">第04回</span>

                   </div><div class="list-item font-26">
                       <span class="item-name">第05回</span>

                   </div><div class="list-item font-26">
                       <span class="item-name">第06话</span>

                   </div><div class="list-item font-26">
                       <span class="item-name">第07话</span>

                   </div><div class="list-item font-26">
                       <span class="item-name">第08话</span>

                   </div><div class="list-item font-26">
                       <span class="item-name">第09集</span>

                   </div><div class="list-item font-26">
                       <span class="item-name">第10话</span>

                   </div><div class="list-item font-26">
                       <span class="item-name">第11话</span>

                   </div><div class="list-item font-26">
                       <span class="item-name">第12话</span>

                       <div class="icon-lock"></div>

                   </div><div class="list-item font-26">
                       <span class="item-name">第13话</span>

                       <div class="icon-lock"></div>

                   </div><div class="list-item font-26">
                       <span class="item-name">第14话</span>

                       <div class="icon-lock"></div>

                   </div><div class="list-item font-26">
                       <span class="item-name">第15话</span>

                       <div class="icon-lock"></div>

                   </div><div class="list-item font-26">
                       <span class="item-name">第16话</span>

                       <div class="icon-lock"></div>

                   </div><div class="list-item font-26">
                       <span class="item-name">第17话</span>

                       <div class="icon-lock"></div>

                   </div><div class="list-item font-26">
                       <span class="item-name">第18话</span>

                       <div class="icon-lock"></div>

                   </div><div class="list-item font-26">
                       <span class="item-name">第19话</span>

                       <div class="icon-lock"></div>

                   </div><div class="list-item font-26">
                       <span class="item-name">第20话</span>

                       <div class="icon-lock"></div>

                   </div><div class="list-item font-26">
                       <span class="item-name">第21话</span>

                       <div class="icon-lock"></div>

                   </div><div class="list-item font-26">
                       <span class="item-name">第22话</span>

                       <div class="icon-lock"></div>

                   </div><div class="list-item font-26">
                       <span class="item-name">第23话</span>

                       <div class="icon-lock"></div>

                   </div><div class="list-item font-26">
                       <span class="item-name">第24话</span>

                       <div class="icon-lock"></div>

                   </div><div class="list-item font-26">
                       <span class="item-name">第25话</span>

                       <div class="icon-lock"></div>

                   </div><div class="list-item font-26">
                       <span class="item-name">第26话</span>

                       <div class="icon-lock"></div>

                   </div><div class="list-item font-26">
                       <span class="item-name">第27话</span>

                       <div class="icon-lock"></div>

                   </div><div class="list-item font-26">
                       <span class="item-name">第28话</span>

                       <div class="icon-lock"></div>

                   </div><div class="list-item font-26">
                       <span class="item-name">第29话</span>

                       <div class="icon-lock"></div>

                   </div><div class="list-item font-26">
                       <span class="item-name">第30话</span>

                       <div class="icon-lock"></div>

                   </div><div class="list-item font-26">
                       <span class="item-name">第31话</span>

                       <div class="icon-lock"></div>

                   </div><div class="list-item font-26">
                       <span class="item-name">第32话</span>

                       <div class="icon-lock"></div>

                   </div><div class="list-item font-26">
                       <span class="item-name">第33话</span>

                       <div class="icon-lock"></div>

                   </div><div class="list-item font-26">
                       <span class="item-name">第34话</span>

                       <div class="icon-lock"></div>

                   </div><div class="list-item font-26">
                       <span class="item-name">第35话</span>

                       <div class="icon-lock"></div>

                   </div><div class="list-item font-26">
                       <span class="item-name">第36话</span>

                       <div class="icon-lock"></div>

                   </div><div class="list-item font-26">
                       <span class="item-name">第37话</span>

                       <div class="icon-lock"></div>

                   </div><div class="list-item font-26">
                       <span class="item-name">第38话</span>

                       <div class="icon-lock"></div>

                   </div><div class="list-item font-26">
                       <span class="item-name">第39话</span>

                       <div class="icon-lock"></div>

                   </div><div class="list-item font-26">
                       <span class="item-name">第40话</span>

                       <div class="icon-lock"></div>

                   </div><div class="list-item font-26">
                       <span class="item-name">第41话</span>

                       <div class="icon-lock"></div>

                   </div><div class="list-item font-26">
                       <span class="item-name">第42话</span>

                       <div class="icon-lock"></div>

                   </div><div class="list-item font-26">
                       <span class="item-name">第43话</span>

                       <div class="icon-lock"></div>

                   </div><div class="list-item font-26">
                       <span class="item-name">第44话</span>

                       <div class="icon-lock"></div>

                   </div><div class="list-item font-26">
                       <span class="item-name">第45话</span>

                       <div class="icon-lock"></div>

                   </div><div class="list-item font-26">
                       <span class="item-name">第46话</span>

                       <div class="icon-lock"></div>

                   </div><div class="list-item font-26">
                       <span class="item-name">第47话</span>

                       <div class="icon-lock"></div>

                   </div><div class="list-item font-26">
                       <span class="item-name">第48话</span>

                       <div class="icon-lock"></div>

                   </div><div class="list-item font-26">
                       <span class="item-name">第49回</span>

                       <div class="icon-lock"></div>

                   </div><div class="list-item font-26">
                       <span class="item-name">第50话</span>

                       <div class="icon-lock"></div>

                   </div><div class="list-item font-26">
                       <span class="item-name">第51话</span>

                       <div class="icon-lock"></div>

                   </div><div class="list-item font-26">
                       <span class="item-name">第52话</span>

                       <div class="icon-lock"></div>

                   </div><div class="list-item font-26">
                       <span class="item-name">第53话</span>

                       <div class="icon-lock"></div>

                   </div><div class="list-item font-26">
                       <span class="item-name">第54话</span>

                       <div class="icon-lock"></div>

                   </div><div class="list-item font-26">
                       <span class="item-name">第55话</span>

                       <div class="icon-lock"></div>

                   </div><div class="list-item font-26">
                       <span class="item-name">第56话</span>

                       <div class="icon-lock"></div>

                   </div><div class="list-item font-26">
                       <span class="item-name">第57话</span>

                       <div class="icon-lock"></div>

                   </div><div class="list-item font-26">
                       <span class="item-name">第58话</span>

                       <div class="icon-lock"></div>

                   </div><div class="list-item font-26">
                       <span class="item-name">第59话</span>

                       <div class="icon-lock"></div>

                   </div><div class="list-item font-26">
                       <span class="item-name">第60话</span>

                       <div class="icon-lock"></div>

                   </div><div class="list-item font-26">
                       <span class="item-name">第61话</span>

                       <div class="icon-lock"></div>

                   </div><div class="list-item font-26">
                       <span class="item-name">第62话</span>

                       <div class="icon-lock"></div>

                   </div><div class="list-item font-26">
                       <span class="item-name">第63话</span>

                       <div class="icon-lock"></div>

                   </div><div class="list-item font-26">
                       <span class="item-name">第64话</span>

                       <div class="icon-lock"></div>

                   </div><div class="list-item font-26">
                       <span class="item-name">第65话</span>

                       <div class="icon-lock"></div>

                   </div><div class="list-item font-26">
                       <span class="item-name">第66话</span>

                       <div class="icon-lock"></div>

                   </div><div class="list-item font-26">
                       <span class="item-name">第67话</span>

                       <div class="icon-lock"></div>

                   </div><div class="list-item font-26">
                       <span class="item-name">第68话</span>

                       <div class="icon-lock"></div>

                   </div><div class="list-item font-26">
                       <span class="item-name">第69话</span>

                       <div class="icon-lock"></div>

                   </div><div class="list-item font-26">
                       <span class="item-name">第70话</span>

                       <div class="icon-lock"></div>

                   </div><div class="list-item font-26">
                       <span class="item-name">第71话</span>

                       <div class="icon-lock"></div>

                   </div><div class="list-item font-26">
                       <span class="item-name">第72话</span>

                       <div class="icon-lock"></div>

                   </div><div class="list-item font-26">
                       <span class="item-name">第73话</span>

                       <div class="icon-lock"></div>

                   </div><div class="list-item font-26">
                       <span class="item-name">第74话</span>

                       <div class="icon-lock"></div>

                   </div><div class="list-item font-26">
                       <span class="item-name">第75话</span>

                       <div class="icon-lock"></div>

                   </div><div class="list-item font-26">
                       <span class="item-name">第76话</span>

                       <div class="icon-lock"></div>

                   </div><div class="list-item font-26">
                       <span class="item-name">第77话</span>

                       <div class="icon-lock"></div>

                   </div><div class="list-item font-26">
                       <span class="item-name">第78话</span>

                       <div class="icon-lock"></div>

                   </div><div class="list-item font-26">
                       <span class="item-name">第79话</span>

                       <div class="icon-lock"></div>

                   </div><div class="list-item font-26">
                       <span class="item-name">第80话</span>

                       <div class="icon-lock"></div>

                   </div><div class="list-item font-26">
                       <span class="item-name">第81话</span>

                       <div class="icon-lock"></div>

                   </div><div class="list-item font-26">
                       <span class="item-name">第82话</span>

                       <div class="icon-lock"></div>

                   </div><div class="list-item font-26">
                       <span class="item-name">第83话</span>

                       <div class="icon-lock"></div>

                   </div><div class="list-item font-26">
                       <span class="item-name">第84话</span>

                       <div class="icon-lock"></div>

                   </div><div class="list-item font-26">
                       <span class="item-name">第85话</span>

                       <div class="icon-lock"></div>

                   </div><div class="list-item font-26">
                       <span class="item-name">第86话</span>

                       <div class="icon-lock"></div>

                   </div><div class="list-item font-26">
                       <span class="item-name">第87话</span>

                       <div class="icon-lock"></div>

                   </div><div class="list-item font-26">
                       <span class="item-name">第88话</span>

                       <div class="icon-lock"></div>

                   </div><div class="list-item font-26">
                       <span class="item-name">第89话</span>

                       <div class="icon-lock"></div>

                   </div><div class="list-item font-26">
                       <span class="item-name">第90话</span>

                       <div class="icon-lock"></div>

                   </div><div class="list-item font-26">
                       <span class="item-name">第91话</span>

                       <div class="icon-lock"></div>

                   </div><div class="list-item font-26">
                       <span class="item-name">第92话</span>

                       <div class="icon-lock"></div>

                   </div><div class="list-item font-26">
                       <span class="item-name">第93话</span>

                       <div class="icon-lock"></div>

                   </div><div class="list-item font-26">
                       <span class="item-name">第94话</span>

                       <div class="icon-lock"></div>

                   </div><div class="list-item font-26">
                       <span class="item-name">第95话</span>

                       <div class="icon-lock"></div>

                   </div><div class="list-item font-26">
                       <span class="item-name">第96话</span>

                       <div class="icon-lock"></div>

                   </div><div class="list-item font-26">
                       <span class="item-name">第97话</span>

                       <div class="icon-lock"></div>

                   </div><div class="list-item font-26">
                       <span class="item-name">第98话</span>

                       <div class="icon-lock"></div>

                   </div><div class="list-item font-26">
                       <span class="item-name">第99话</span>

                       <div class="icon-lock"></div>

                   </div><div class="list-item font-26">
                       <span class="item-name">第100话</span>

                       <div class="icon-lock"></div>

                   </div><div class="list-item font-26">
                       <span class="item-name">第101话.</span>

                       <div class="icon-lock"></div>

                   </div><div class="list-item font-26">
                       <span class="item-name">第102话</span>

                       <div class="icon-lock"></div>

                   </div><div class="list-item font-26">
                       <span class="item-name">第103话</span>

                       <div class="icon-lock"></div>

                   </div><div class="list-item font-26">
                       <span class="item-name">第104话</span>

                       <div class="icon-lock"></div>

                   </div><div class="list-item font-26">
                       <span class="item-name">第105话</span>

                       <div class="icon-lock"></div>

                   </div><div class="list-item font-26">
                       <span class="item-name">第106话</span>

                       <div class="icon-lock"></div>

                   </div><div class="list-item font-26">
                       <span class="item-name">第107话</span>

                       <div class="icon-lock"></div>

                   </div><div class="list-item font-26">
                       <span class="item-name">第108话</span>

                       <div class="icon-lock"></div>

                   </div><div class="list-item font-26">
                       <span class="item-name">第109回</span>

                       <div class="icon-lock"></div>

                   </div><div class="list-item font-26">
                       <span class="item-name">第110话</span>

                       <div class="icon-lock"></div>

                   </div><div class="list-item font-26">
                       <span class="item-name">第111话</span>

                       <div class="icon-lock"></div>

                   </div><div class="list-item font-26">
                       <span class="item-name">第112话</span>

                       <div class="icon-lock"></div>

                   </div><div class="list-item font-26">
                       <span class="item-name">第113话</span>

                       <div class="icon-lock"></div>

                   </div><div class="list-item font-26">
                       <span class="item-name">第114话</span>

                       <div class="icon-lock"></div>

                   </div><div class="list-item font-26">
                       <span class="item-name">第115话</span>

                       <div class="icon-lock"></div>

                   </div><div class="list-item font-26">
                       <span class="item-name">第116话</span>

                       <div class="icon-lock"></div>

                   </div><div class="list-item font-26">
                       <span class="item-name">第117话</span>

                       <div class="icon-lock"></div>

                   </div><div class="list-item font-26">
                       <span class="item-name">第118回</span>

                       <div class="icon-lock"></div>

                   </div><div class="list-item font-26">
                       <span class="item-name">第119话</span>

                       <div class="icon-lock"></div>

                   </div><div class="list-item font-26">
                       <span class="item-name">第120话</span>

                       <div class="icon-lock"></div>

                   </div><div class="list-item font-26">
                       <span class="item-name">第121话</span>

                       <div class="icon-lock"></div>

                   </div><div class="list-item font-26">
                       <span class="item-name">第122话</span>

                       <div class="icon-lock"></div>

                   </div><div class="list-item font-26">
                       <span class="item-name">第123话</span>

                       <div class="icon-lock"></div>

                   </div><div class="list-item font-26">
                       <span class="item-name">第124话</span>

                       <div class="icon-lock"></div>

                   </div><div class="list-item font-26">
                       <span class="item-name">第125话</span>

                       <div class="icon-lock"></div>

                   </div><div class="list-item font-26">
                       <span class="item-name">第126话</span>

                       <div class="icon-lock"></div>

                   </div><div class="list-item font-26">
                       <span class="item-name">第127话</span>

                       <div class="icon-lock"></div>

                   </div><div class="list-item font-26">
                       <span class="item-name">第128话</span>

                       <div class="icon-lock"></div>

                   </div><div class="list-item font-26">
                       <span class="item-name">第129话</span>

                       <div class="icon-lock"></div>

                   </div><div class="list-item font-26">
                       <span class="item-name">第130话</span>

                       <div class="icon-lock"></div>

                   </div><div class="list-item font-26">
                       <span class="item-name">第131话</span>

                       <div class="icon-lock"></div>

                   </div><div class="list-item font-26">
                       <span class="item-name">第132话</span>

                       <div class="icon-lock"></div>

                   </div><div class="list-item font-26">
                       <span class="item-name">第133话</span>

                       <div class="icon-lock"></div>

                   </div><div class="list-item font-26">
                       <span class="item-name">第134话</span>

                       <div class="icon-lock"></div>

                   </div><div class="list-item font-26">
                       <span class="item-name">第135话</span>

                       <div class="icon-lock"></div>

                   </div><div class="list-item font-26">
                       <span class="item-name">第136话</span>

                       <div class="icon-lock"></div>

                   </div><div class="list-item font-26">
                       <span class="item-name">第137话</span>

                       <div class="icon-lock"></div>

                   </div><div class="list-item font-26">
                       <span class="item-name">第138话</span>

                       <div class="icon-lock"></div>

                   </div><div class="list-item font-26">
                       <span class="item-name">第139话</span>

                       <div class="icon-lock"></div>

                   </div><div class="list-item font-26">
                       <span class="item-name">第140话</span>

                       <div class="icon-lock"></div>

                   </div><div class="list-item font-26">
                       <span class="item-name">第141话</span>

                       <div class="icon-lock"></div>

                   </div><div class="list-item font-26">
                       <span class="item-name">第142话</span>

                       <div class="icon-lock"></div>

                   </div><div class="list-item font-26">
                       <span class="item-name">第143话</span>

                       <div class="icon-lock"></div>

                   </div><div class="list-item font-26">
                       <span class="item-name">第144话</span>

                       <div class="icon-lock"></div>

                   </div><div class="list-item font-26">
                       <span class="item-name">第145话</span>

                       <div class="icon-lock"></div>

                   </div><div class="list-item font-26">
                       <span class="item-name">第146话</span>

                       <div class="icon-lock"></div>

                   </div><div class="list-item font-26">
                       <span class="item-name">第147话</span>

                       <div class="icon-lock"></div>

                   </div><div class="list-item font-26">
                       <span class="item-name">第148话</span>

                       <div class="icon-lock"></div>

                   </div><div class="list-item font-26">
                       <span class="item-name">第149话</span>

                       <div class="icon-lock"></div>

                   </div><div class="list-item font-26">
                       <span class="item-name">第150话</span>

                       <div class="icon-lock"></div>

                   </div><div class="list-item font-26">
                       <span class="item-name">第151话</span>

                       <div class="icon-lock"></div>

                   </div><div class="list-item font-26">
                       <span class="item-name">第152话</span>

                       <div class="icon-lock"></div>

                   </div><div class="list-item font-26">
                       <span class="item-name">第153话</span>

                       <div class="icon-lock"></div>

                   </div><div class="list-item font-26">
                       <span class="item-name">第154话</span>

                       <div class="icon-lock"></div>

                   </div><div class="list-item font-26">
                       <span class="item-name">第155话</span>

                       <div class="icon-lock"></div>

                   </div><div class="list-item font-26">
                       <span class="item-name">第156话</span>

                       <div class="icon-lock"></div>

                   </div><div class="list-item font-26">
                       <span class="item-name">第157话</span>

                       <div class="icon-lock"></div>

                   </div><div class="list-item font-26">
                       <span class="item-name">第158话</span>

                       <div class="icon-lock"></div>

                   </div><div class="list-item font-26">
                       <span class="item-name">第159话</span>

                       <div class="icon-lock"></div>

                   </div><div class="list-item font-26">
                       <span class="item-name">第160话</span>

                       <div class="icon-lock"></div>

                   </div><div class="list-item font-26">
                       <span class="item-name">第161话</span>

                       <div class="icon-lock"></div>

                   </div><div class="list-item font-26">
                       <span class="item-name">第162话</span>

                       <div class="icon-lock"></div>

                   </div><div class="list-item font-26">
                       <span class="item-name">第163话</span>

                       <div class="icon-lock"></div>

                   </div><div class="list-item font-26">
                       <span class="item-name">第164话</span>

                       <div class="icon-lock"></div>

                   </div><div class="list-item font-26">
                       <span class="item-name">第165话</span>

                       <div class="icon-lock"></div>

                   </div><div class="list-item font-26">
                       <span class="item-name">第166话</span>

                       <div class="icon-lock"></div>

                   </div><div class="list-item font-26">
                       <span class="item-name">第167话</span>

                       <div class="icon-lock"></div>

                   </div><div class="list-item font-26">
                       <span class="item-name">第167话 2</span>

                       <div class="icon-lock"></div>

                   </div><div class="list-item font-26">
                       <span class="item-name">第168话 1</span>

                       <div class="icon-lock"></div>

                   </div><div class="list-item font-26">
                       <span class="item-name">第168话  2</span>

                       <div class="icon-lock"></div>

                   </div><div class="list-item font-26">
                       <span class="item-name">第169话 01</span>

                       <div class="icon-lock"></div>

                   </div><div class="list-item font-26">
                       <span class="item-name">第169话 02</span>

                       <div class="icon-lock"></div>

                   </div><div class="list-item font-26">
                       <span class="item-name">第170话 1</span>

                       <div class="icon-lock"></div>

                   </div><div class="list-item font-26">
                       <span class="item-name">第170话 2</span>

                       <div class="icon-lock"></div>

                   </div><div class="list-item font-26">
                       <span class="item-name">第171话 1</span>

                       <div class="icon-lock"></div>

                   </div><div class="list-item font-26">
                       <span class="item-name">第171话 2</span>

                       <div class="icon-lock"></div>

                   </div><div class="list-item font-26">
                       <span class="item-name">第172话 1</span>

                       <div class="icon-lock"></div>

                   </div><div class="list-item font-26">
                       <span class="item-name">第172话 2</span>

                       <div class="icon-lock"></div>

                   </div><div class="list-item font-26">
                       <span class="item-name">第173话 1</span>

                       <div class="icon-lock"></div>

                   </div><div class="list-item font-26">
                       <span class="item-name">第173话 2</span>

                       <div class="icon-lock"></div>

                   </div><div class="list-item font-26">
                       <span class="item-name">第174话 1</span>

                       <div class="icon-lock"></div>

                   </div><div class="list-item font-26">
                       <span class="item-name">第174话  2</span>

                       <div class="icon-lock"></div>

                   </div><div class="list-item font-26">
                       <span class="item-name">第175话  1</span>

                       <div class="icon-lock"></div>

                   </div><div class="list-item font-26">
                       <span class="item-name">第175话  2</span>

                       <div class="icon-lock"></div>

                   </div><div class="list-item font-26">
                       <span class="item-name">第176话  1</span>

                       <div class="icon-lock"></div>

                   </div><div class="list-item font-26">
                       <span class="item-name">第176话 2</span>

                       <div class="icon-lock"></div>

                   </div><div class="list-item font-26">
                       <span class="item-name">第177话 1</span>

                       <div class="icon-lock"></div>

                   </div><div class="list-item font-26">
                       <span class="item-name">第177话 2</span>

                       <div class="icon-lock"></div>

                   </div><div class="list-item font-26">
                       <span class="item-name">第178话 1</span>

                       <div class="icon-lock"></div>

                   </div><div class="list-item font-26">
                       <span class="item-name">第178话 02</span>

                       <div class="icon-lock"></div>

                   </div><div class="list-item font-26">
                       <span class="item-name">第179话 1</span>

                       <div class="icon-lock"></div>

                   </div><div class="list-item font-26">
                       <span class="item-name">第179话 2</span>

                       <div class="icon-lock"></div>

                   </div><div class="list-item font-26">
                       <span class="item-name">第180话 1</span>

                       <div class="icon-lock"></div>

                   </div><div class="list-item font-26">
                       <span class="item-name">第180话 2</span>

                       <div class="icon-lock"></div>

                   </div><div class="list-item font-26">
                       <span class="item-name">第181话 1</span>

                       <div class="icon-lock"></div>

                   </div><div class="list-item font-26">
                       <span class="item-name">第181话 2</span>

                       <div class="icon-lock"></div>

                   </div><div class="list-item font-26">
                       <span class="item-name">第182话 1</span>

                       <div class="icon-lock"></div>

                   </div><div class="list-item font-26">
                       <span class="item-name">第182话 2</span>

                       <div class="icon-lock"></div>

                   </div><div class="list-item font-26">
                       <span class="item-name">第183话 1</span>

                       <div class="icon-lock"></div>

                   </div><div class="list-item font-26">
                       <span class="item-name">第183话 2</span>

                       <div class="icon-lock"></div>

                   </div><div class="list-item font-26">
                       <span class="item-name">第184话 1</span>

                       <div class="icon-lock"></div>

                   </div><div class="list-item font-26">
                       <span class="item-name">第184话 2</span>

                       <div class="icon-lock"></div>

                   </div><div class="list-item font-26">
                       <span class="item-name">第185话 1</span>

                       <div class="icon-lock"></div>

                   </div><div class="list-item font-26">
                       <span class="item-name">第185话 2</span>

                       <div class="icon-lock"></div>

                   </div><div class="list-item font-26">
                       <span class="item-name">第186话 1</span>

                       <div class="icon-lock"></div>

                   </div><div class="list-item font-26">
                       <span class="item-name">第186话 2</span>

                       <div class="icon-lock"></div>

                   </div><div class="list-item font-26">
                       <span class="item-name">第187话 1</span>

                       <div class="icon-lock"></div>

                   </div><div class="list-item font-26">
                       <span class="item-name">第187话 2</span>

                       <div class="icon-lock"></div>

                   </div><div class="list-item font-26">
                       <span class="item-name">第188话 </span>

                       <div class="icon-lock"></div>

                   </div><div class="list-item font-26">
                       <span class="item-name">第189话 1</span>

                       <div class="icon-lock"></div>

                   </div><div class="list-item font-26">
                       <span class="item-name">第189话 2</span>

                       <div class="icon-lock"></div>

                   </div><div class="list-item font-26">
                       <span class="item-name">第190话 1</span>

                       <div class="icon-lock"></div>

                   </div><div class="list-item font-26">
                       <span class="item-name">第190话 2</span>

                       <div class="icon-lock"></div>

                   </div><div class="list-item font-26">
                       <span class="item-name">第191话 1</span>

                       <div class="icon-lock"></div>

                   </div><div class="list-item font-26">
                       <span class="item-name">第191话 2</span>

                       <div class="icon-lock"></div>

                   </div><div class="list-item font-26">
                       <span class="item-name">第192话 1</span>

                       <div class="icon-lock"></div>

                   </div><div class="list-item font-26">
                       <span class="item-name">第192话 2</span>

                       <div class="icon-lock"></div>

                   </div><div class="list-item font-26">
                       <span class="item-name">第193话 1</span>

                       <div class="icon-lock"></div>

                   </div><div class="list-item font-26">
                       <span class="item-name">第193话 2</span>

                       <div class="icon-lock"></div>

                   </div><div class="list-item font-26">
                       <span class="item-name">第194话 1</span>

                       <div class="icon-lock"></div>

                   </div><div class="list-item font-26">
                       <span class="item-name">第194话 2</span>

                       <div class="icon-lock"></div>

                   </div><div class="list-item font-26">
                       <span class="item-name">第195话 1</span>

                       <div class="icon-lock"></div>

                   </div><div class="list-item font-26">
                       <span class="item-name">第195话 2</span>

                       <div class="icon-lock"></div>

                   </div><div class="list-item font-26">
                       <span class="item-name">第196话 1</span>

                       <div class="icon-lock"></div>

                   </div><div class="list-item font-26">
                       <span class="item-name">第196话 2</span>

                       <div class="icon-lock"></div>

                   </div><div class="list-item font-26">
                       <span class="item-name">第197话 殊死一搏 1</span>

                       <div class="icon-lock"></div>

                   </div><div class="list-item font-26">
                       <span class="item-name">第197话 殊死一搏 2</span>

                       <div class="icon-lock"></div>

                   </div><div class="list-item font-26">
                       <span class="item-name">第198话 最后的爆发 1</span>

                       <div class="icon-lock"></div>

                   </div><div class="list-item font-26">
                       <span class="item-name">第198话 最后的爆发 2</span>

                       <div class="icon-lock"></div>

                   </div><div class="list-item font-26">
                       <span class="item-name">第199话 紫珍珠岛 1</span>

                       <div class="icon-lock"></div>

                   </div><div class="list-item font-26">
                       <span class="item-name">第199话 紫珍珠岛 2</span>

                       <div class="icon-lock"></div>

                   </div><div class="list-item font-26">
                       <span class="item-name">第200话 娶亲 1</span>

                       <div class="icon-lock"></div>

                   </div><div class="list-item font-26">
                       <span class="item-name">第200话 娶亲 2</span>

                       <div class="icon-lock"></div>

                   </div><div class="list-item font-26">
                       <span class="item-name">第201话 灵魂祭祀 1</span>

                       <div class="icon-lock"></div>

                   </div><div class="list-item font-26">
                       <span class="item-name">第201话 灵魂祭祀 2</span>

                       <div class="icon-lock"></div>

                   </div><div class="list-item font-26">
                       <span class="item-name">第202话 海魔的复仇 1</span>

                       <div class="icon-lock"></div>

                   </div><div class="list-item font-26">
                       <span class="item-name">第202话 海魔的复仇 2</span>

                       <div class="icon-lock"></div>

                   </div><div class="list-item font-26">
                       <span class="item-name">第203话 勇斗海盗 1</span>

                       <div class="icon-lock"></div>

                   </div><div class="list-item font-26">
                       <span class="item-name">第203话 勇斗海盗 2</span>

                       <div class="icon-lock"></div>

                   </div><div class="list-item font-26">
                       <span class="item-name">第204话 唐三苏醒 1</span>

                       <div class="icon-lock"></div>

                   </div><div class="list-item font-26">
                       <span class="item-name">第204话 唐三苏醒 2</span>

                       <div class="icon-lock"></div>

                   </div><div class="list-item font-26">
                       <span class="item-name">第205话 史莱克重聚 1</span>

                       <div class="icon-lock"></div>

                   </div><div class="list-item font-26">
                       <span class="item-name">第205话 史莱克重聚 2</span>

                       <div class="icon-lock"></div>

                   </div><div class="list-item font-26">
                       <span class="item-name">第206话 回归！史莱克七怪！ 1</span>

                       <div class="icon-lock"></div>

                   </div><div class="list-item font-26">
                       <span class="item-name">第206话 回归！史莱克七怪！ 2</span>

                       <div class="icon-lock"></div>

                   </div><div class="list-item font-26">
                       <span class="item-name">第207话 异种的战斗 1</span>

                       <div class="icon-lock"></div>

                   </div><div class="list-item font-26">
                       <span class="item-name">第207话 异种的战斗 2</span>

                       <div class="icon-lock"></div>

                   </div><div class="list-item font-26">
                       <span class="item-name">第208话 对话紫珍珠 1</span>

                       <div class="icon-lock"></div>

                   </div><div class="list-item font-26">
                       <span class="item-name">第208话 对话紫珍珠 2</span>

                       <div class="icon-lock"></div>

                   </div><div class="list-item font-26">
                       <span class="item-name">第209话 紫珍珠的故事 1</span>

                       <div class="icon-lock"></div>

                   </div><div class="list-item font-26">
                       <span class="item-name">第209话 紫珍珠的故事 2</span>

                       <div class="icon-lock"></div>

                   </div><div class="list-item font-26">
                       <span class="item-name">第210话 海神岛,我来了 1</span>

                       <div class="icon-lock"></div>

                   </div><div class="list-item font-26">
                       <span class="item-name">第210话 海神岛,我来了 2</span>

                       <div class="icon-lock"></div>

                   </div><div class="list-item font-26">
                       <span class="item-name">第211话 海神九考 1</span>

                       <div class="icon-lock"></div>

                   </div><div class="list-item font-26">
                       <span class="item-name">第211话 海神九考 2</span>

                       <div class="icon-lock"></div>

                   </div><div class="list-item font-26">
                       <span class="item-name">第212话 海马斗罗 1</span>

                       <div class="icon-lock"></div>

                   </div><div class="list-item font-26">
                       <span class="item-name">第212话 海马斗罗 2</span>

                       <div class="icon-lock"></div>

                   </div><div class="list-item font-26">
                       <span class="item-name">第213话 顶级七考 1</span>

                       <div class="icon-lock"></div>

                   </div><div class="list-item font-26">
                       <span class="item-name">第213话 顶级七考 2</span>

                       <div class="icon-lock"></div>

                   </div><div class="list-item font-26">
                       <span class="item-name">第214话 海神之光 1</span>

                       <div class="icon-lock"></div>

                   </div><div class="list-item font-26">
                       <span class="item-name">第214话 海神之光 2</span>

                       <div class="icon-lock"></div>

                   </div><div class="list-item font-26">
                       <span class="item-name">第215话 传承！海神九考！ 1</span>

                       <div class="icon-lock"></div>

                   </div><div class="list-item font-26">
                       <span class="item-name">第215话 传承！海神九考！ 2</span>

                       <div class="icon-lock"></div>

                   </div><div class="list-item font-26">
                       <span class="item-name">第216话 红级一考 1</span>

                       <div class="icon-lock"></div>

                   </div><div class="list-item font-26">
                       <span class="item-name">第216话 红级一考 2</span>

                       <div class="icon-lock"></div>

                   </div><div class="list-item font-26">
                       <span class="item-name">第217话 穿越海神之光 1</span>

                       <div class="icon-lock"></div>

                   </div><div class="list-item font-26">
                       <span class="item-name">第217话 穿越海神之光 2</span>

                       <div class="icon-lock"></div>

                   </div><div class="list-item font-26">
                       <span class="item-name">第218话 尝试向上 1</span>

                       <div class="icon-lock"></div>

                   </div><div class="list-item font-26">
                       <span class="item-name">第218话 尝试向上 2</span>

                       <div class="icon-lock"></div>

                   </div><div class="list-item font-26">
                       <span class="item-name">第219话 拟态修炼 1</span>

                       <div class="icon-lock"></div>

                   </div><div class="list-item font-26">
                       <span class="item-name">第219话 拟态修炼 2</span>

                       <div class="icon-lock"></div>

                   </div><div class="list-item font-26">
                       <span class="item-name">第220话 婚约 1</span>

                       <div class="icon-lock"></div>

                   </div><div class="list-item font-26">
                       <span class="item-name">第220话 婚约 2</span>

                       <div class="icon-lock"></div>

                   </div><div class="list-item font-26">
                       <span class="item-name">第221话 传承 1</span>

                       <div class="icon-lock"></div>

                   </div><div class="list-item font-26">
                       <span class="item-name">第221话 传承 2</span>

                       <div class="icon-lock"></div>

                   </div><div class="list-item font-26">
                       <span class="item-name">第222话 绝世魂环 1</span>

                       <div class="icon-lock"></div>

                   </div><div class="list-item font-26">
                       <span class="item-name">第222话 绝世魂环 2</span>

                       <div class="icon-lock"></div>

                   </div><div class="list-item font-26">
                       <span class="item-name">第223话 简单的考验 1</span>

                       <div class="icon-lock"></div>

                   </div><div class="list-item font-26">
                       <span class="item-name">第223话 简单的考验 2</span>

                       <div class="icon-lock"></div>

                   </div><div class="list-item font-26">
                       <span class="item-name">第224话 御风而飞 1</span>

                       <div class="icon-lock"></div>

                   </div><div class="list-item font-26">
                       <span class="item-name">第224话 御风而飞 2</span>

                       <div class="icon-lock"></div>

                   </div><div class="list-item font-26">
                       <span class="item-name">第225话 初出茅庐 1</span>

                       <div class="icon-lock"></div>

                   </div><div class="list-item font-26">
                       <span class="item-name">第225话 初出茅庐 2</span>

                       <div class="icon-lock"></div>

                   </div><div class="list-item font-26">
                       <span class="item-name">第226话 凤凰 1</span>

                       <div class="icon-lock"></div>

                   </div><div class="list-item font-26">
                       <span class="item-name">第226话 凤凰 2</span>

                       <div class="icon-lock"></div>

                   </div><div class="list-item font-26">
                       <span class="item-name">第227话 告白 1</span>

                       <div class="icon-lock"></div>

                   </div><div class="list-item font-26">
                       <span class="item-name">第227话 告白 2</span>

                       <div class="icon-lock"></div>

                   </div><div class="list-item font-26">
                       <span class="item-name">第228话 史莱克冠军 1</span>

                       <div class="icon-lock"></div>

                   </div><div class="list-item font-26">
                       <span class="item-name">第228话 史莱克冠军 2</span>

                       <div class="icon-lock"></div>

                   </div><div class="list-item font-26">
                       <span class="item-name">第229话 输与赢 1</span>

                       <div class="icon-lock"></div>

                   </div><div class="list-item font-26">
                       <span class="item-name">第229话 输与赢 2</span>

                       <div class="icon-lock"></div>

                   </div><div class="list-item font-26">
                       <span class="item-name">第230话 换环 1</span>

                       <div class="icon-lock"></div>

                   </div><div class="list-item font-26">
                       <span class="item-name">第230话 换环 2</span>

                       <div class="icon-lock"></div>

                   </div><div class="list-item font-26">
                       <span class="item-name">第231话 命运 1</span>

                       <div class="icon-lock"></div>

                   </div><div class="list-item font-26">
                       <span class="item-name">第231话 命运 2</span>

                       <div class="icon-lock"></div>

                   </div><div class="list-item font-26">
                       <span class="item-name">第232话 九天霓凰 1</span>

                       <div class="icon-lock"></div>

                   </div><div class="list-item font-26">
                       <span class="item-name">第232话 九天霓凰 2</span>

                       <div class="icon-lock"></div>

                   </div><div class="list-item font-26">
                       <span class="item-name">第233话 海上生明月 1</span>

                       <div class="icon-lock"></div>

                   </div><div class="list-item font-26">
                       <span class="item-name">第233话 海上生明月 2</span>

                       <div class="icon-lock"></div>

                   </div><div class="list-item font-26">
                       <span class="item-name">第234话 魂圣啦！ 1</span>

                       <div class="icon-lock"></div>

                   </div><div class="list-item font-26">
                       <span class="item-name">第234话 魂圣啦！ 2</span>

                       <div class="icon-lock"></div>

                   </div><div class="list-item font-26">
                       <span class="item-name">第235话 十万年圣柱石 1</span>

                       <div class="icon-lock"></div>

                   </div><div class="list-item font-26">
                       <span class="item-name">第235话 十万年圣柱石 2</span>

                       <div class="icon-lock"></div>

                   </div><div class="list-item font-26">
                       <span class="item-name">第236话 开始修炼啦 1</span>

                       <div class="icon-lock"></div>

                   </div><div class="list-item font-26">
                       <span class="item-name">第236话 开始修炼啦 2</span>

                       <div class="icon-lock"></div>

                   </div><div class="list-item font-26">
                       <span class="item-name">第237话 十万年考验 1</span>

                       <div class="icon-lock"></div>

                   </div><div class="list-item font-26">
                       <span class="item-name">第237话 十万年考验 2</span>

                       <div class="icon-lock"></div>

                   </div><div class="list-item font-26">
                       <span class="item-name">第238话 九节鱼龙兽 1</span>

                       <div class="icon-lock"></div>

                   </div><div class="list-item font-26">
                       <span class="item-name">第238话 九节鱼龙兽 2</span>

                       <div class="icon-lock"></div>

                   </div><div class="list-item font-26">
                       <span class="item-name">第239话 斗环（1）</span>

                       <div class="icon-lock"></div>

                   </div><div class="list-item font-26">
                       <span class="item-name">第239话 斗环（2）</span>

                       <div class="icon-lock"></div>

                   </div><div class="list-item font-26">
                       <span class="item-name">第240话 仙草毒物（1）</span>

                       <div class="icon-lock"></div>

                   </div><div class="list-item font-26">
                       <span class="item-name">第240话 仙草毒物（2）</span>

                       <div class="icon-lock"></div>

                   </div><div class="list-item font-26">
                       <span class="item-name">第241话 森罗万象（1）</span>

                       <div class="icon-lock"></div>

                   </div><div class="list-item font-26">
                       <span class="item-name">第241话 森罗万象（2）</span>

                       <div class="icon-lock"></div>

                   </div><div class="list-item font-26">
                       <span class="item-name">第242话 死斗（1）</span>

                       <div class="icon-lock"></div>

                   </div><div class="list-item font-26">
                       <span class="item-name">第242话 死斗（2）</span>

                       <div class="icon-lock"></div>

                   </div><div class="list-item font-26">
                       <span class="item-name">第243话 深渊（1）</span>

                       <div class="icon-lock"></div>

                   </div><div class="list-item font-26">
                       <span class="item-name">第243话 深渊（2）</span>

                       <div class="icon-lock"></div>

                   </div><div class="list-item font-26">
                       <span class="item-name">第244话 化环与纳环（1）</span>

                       <div class="icon-lock"></div>

                   </div><div class="list-item font-26">
                       <span class="item-name">第244话 化环与纳环（2）</span>

                       <div class="icon-lock"></div>

                   </div><div class="list-item font-26">
                       <span class="item-name">第245话 第一考开始 1</span>

                       <div class="icon-lock"></div>

                   </div><div class="list-item font-26">
                       <span class="item-name">第245话 第一考开始 2</span>

                       <div class="icon-lock"></div>

                   </div><div class="list-item font-26">
                       <span class="item-name">第246话 向上！向前！ 1</span>

                       <div class="icon-lock"></div>

                   </div><div class="list-item font-26">
                       <span class="item-name">第246话 向上！向前！ 2</span>

                       <div class="icon-lock"></div>

                   </div><div class="list-item font-26">
                       <span class="item-name">第247话 冰阶（1）</span>

                       <div class="icon-lock"></div>

                   </div><div class="list-item font-26">
                       <span class="item-name">第247话 冰阶（2）</span>

                       <div class="icon-lock"></div>

                   </div><div class="list-item font-26">
                       <span class="item-name">第248话 勤奋的凤凰（1）</span>

                       <div class="icon-lock"></div>

                   </div><div class="list-item font-26">
                       <span class="item-name">第248话 勤奋的凤凰（2）</span>

                       <div class="icon-lock"></div>

                   </div><div class="list-item font-26">
                       <span class="item-name">第249话 幻阶（1）</span>

                       <div class="icon-lock"></div>

                   </div><div class="list-item font-26">
                       <span class="item-name">第249话 幻阶（2）</span>

                       <div class="icon-lock"></div>

                   </div><div class="list-item font-26">
                       <span class="item-name">番外：穆先生教你去航海</span>

                   </div><div class="list-item font-26">
                       <span class="item-name">第250话 圣王的考验（1）</span>

                       <div class="icon-lock"></div>

                   </div><div class="list-item font-26">
                       <span class="item-name">第250话 圣王的考验（2）</span>

                       <div class="icon-lock"></div>

                   </div><div class="list-item font-26">
                       <span class="item-name">第251话 圣王的血脉（1）</span>

                       <div class="icon-lock"></div>

                   </div><div class="list-item font-26">
                       <span class="item-name">第251话 圣王的血脉（2）</span>

                       <div class="icon-lock"></div>

                   </div><div class="list-item font-26">
                       <span class="item-name">第252话 海马斗罗的提示（1）</span>

                       <div class="icon-lock"></div>

                   </div>
               </section>

    <footer class="detail-footer">
        <div class="btn-fav">
            <div class="icon-love"></div>
            <span class="btn-text font-28">加入收藏</span>
        </div>

        <div class="btn-read">
            <div class="icon-book"></div>
            <span class="btn-text font-28">开始阅读</span>
        </div>
    </footer>
    </section>
  </section>
    <!-- 3. 评价  -->
  <section class="detail-comment" v-if="activeIndex === 2" :class="{'active': index === activeIndex}">
        <div class="item" v-for="item in Userevaluate" :key="item.id">
            <div class="item-user">
                <div class="user-pic" :style=" `background-image: url('${item.profileimageurl}');`"></div>
                <div class="user-info">
                    <p class="info-name font-24">{{ item.screenname }}</p>
                    <p class="info-time font-20">{{ item.createtime }}</p>
                </div>
            </div>
            <p class="item-content font-28">{{ item.content }}</p>
            <div class="item-btn font-20">
                <div class="btn-comment">
                    <div class="icon-chat"></div>
                    {{ item.replycount }}
                </div>
                <div class="btn-love">
                    <div class="icon-love-grey"></div>
                    {{ item.praisecount }}
                </div>
            </div>
        </div>
  </section>
  <!-- 底部 -->
  <footer class="detail-footern">
      <div class="btn-fav">
        <div class="icon-love">
        </div>
        <span class="btn-text font-28">加入收藏</span>
      </div>
      <div class="btn-readn">
        <div class="icon-book"><img class="icon-book" src="../../assets/icon/kaishiyuedu.png"/></div>
        <span class="btn-text font-28">继续阅读</span>
      </div>
  </footer>
  </div>
</template>
<script>
// import Bigbooknav from './components/Bigbooknav.vue'
import { unformat } from '../../utils/apiHeader.js'
import { getIntroduction, getUserevaluate, hotRecommend } from '../../api/cartoon.js'
export default {
  name: 'Bigbookid',
  components: {
    // Bigbooknav
  },
  data () {
    return {
      title: this.$route.query.keyword,
      bookstoreid: this.$route.query.bigbookid,
      Introduction: [],
      Userevaluate: [],
      userid: 206335792,
      mulu: [{ id: 1, name: '简介' }, { id: 2, name: '目录' }, { id: 3, name: '评价' }],
      activeIndex: 0,
      subjectname: '',
      authorname: '',
      hotlist: []
    }
  },
  methods: {
    // 获取详情首页的情况
    getIntroduction () {
      const bookstoreid = this.bookstoreid
      getIntroduction(bookstoreid)
        .then(res => {
          // console.log(666, JSON.parse(unformat(res.info.comicsdetail)))
          // if (res.code === 200) {
          this.Introduction = JSON.parse(unformat(res.info))
          // this.subjectname = this.Introduction.comicsdetail[0].subject_name
          // this.authorname = this.Introduction.comicsdetail[0].authoruserid
          // console.log(this.Introduction[0].bigbook_author)
          // }
        })
        // .catch(err => {
        //   console.log(err)
        // })
    },
    // 获取用户评价的消息
    getUserevaluate () {
      const bookstoreid = this.bookstoreid
      const userid = this.userid
      getUserevaluate(userid, bookstoreid)
        .then(res => {
          this.Userevaluate = res.info.list
          // console.log(res)
        })
        .catch(err => {
          console.log(err)
        })
    },
    // 获取热门推荐的 接口数据
    hotRecommend () {
      const bookstoreid = this.bookstoreid
      const subjectname = this.subjectname
      const authorname = this.authorname
      console.log(authorname, subjectname)
      hotRecommend(authorname, subjectname, bookstoreid)
        .then(res => {
          this.hotlist = res.info.list
          console.log(1)
        })
        .catch(err => {
          console.log(2)
          console.log(err)
        })
    },
    // 导航事件点击
    goback () { this.$router.go(-1) },
    gohome () { this.$router.push('/home') },
    handleClick (index) {
      // 当前点击的高亮
      // console.log(index)
      this.activeIndex = index
      // 通知父组件
      // payload 如何要传递多个参数，需要弄成对象的形式
      // this.$emit('click', { type, index })
    }
  },
  // 使用局部过滤器 对数字进行处理
  filters: {
    capitalize: function (value) {
      return `${(value / 100000000).toFixed(2)}亿`
    }
  },
  created (userid, bookstoreid, authorname, subjectname) {
    this.getIntroduction(userid, bookstoreid)
    this.getUserevaluate(userid, bookstoreid)
    this.hotRecommend(authorname, subjectname, bookstoreid)
  }
}

</script>
<style lang="scss" >
[v-cloak] {
    display: none
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

.detail-header-scroll {
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
    height: 1.06666667rem;
    text-align: center;
    position: fixed;
    z-index: 999;
    top: 0;
    left: 0;
    right: 0;
    margin: auto;
    // background-color: #E9E9E9;
    // opacity: 0.5
}

.detail-header-scroll .header-back, .header-back-img {
    width: .61333333rem;
    height: .34666667rem;
    position: absolute;
    left: 0.2rem;
    color: red;
}

.detail-header-scroll .header-title {
    max-width: 60%;
    color: #333;
    font-weight: 500;
    text-align: center;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap
}

.detail-header-scroll .header-index, .header-index-img {
    width: .56rem;
    height: .54666667rem;
    position: absolute;
    right: 0.8rem;
}

.detail-header-scroll .header-share, .icon-share {
    width: .49333333rem;
    height: .56rem;
    background-size: contain;
    position: absolute;
    right: .16666667rem
}

.detail-header-scroll .header-hide {
    opacity: .5
}

.detail-header-scrolling {
    background: #fff
}

.detail-header {
    width: 10rem;
    height: 5.98666667rem;
    margin: 0 auto;
    overflow: hidden;
    position: relative;
}

.detail-header .bg {
    background: #333;
    background-repeat: repeat;
    background-size: cover;
    /* -moz-filter: url(data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgICA8ZmlsdGVyIGlkPSJibHVyIj4KICAgICAgICA8ZmVHYXVzc2lhbkJsdXIgc3RkRGV2aWF0aW9uPSI1MCIvPgogICAgPC9maWx0ZXI+Cjwvc3ZnPg==#blur) */
}

.detail-header .bg,.detail-header .header-cover {
    width: 100%;
    height: 5.98666667rem;
    -webkit-filter: blur(50px);
    filter: blur(50px);
    -webkit-backdrop-filter: brightness(5) blur(50px);
    position: absolute;
    // display: flex;
    z-index: 0;
    left: 0;
    top: 0
}

.detail-header .header-cover {
    background-repeat: repeat;
    background-size: cover;
    filter: blur(189px);
    /* -moz-filter: url(data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgICA8ZmlsdGVyIGlkPSJibHVyIj4KICAgICAgICA8ZmVHYXVzc2lhbkJsdXIgc3RkRGV2aWF0aW9uPSI1MCIvPgogICAgPC9maWx0ZXI+Cjwvc3ZnPg==#blur) */
}
// 111111111111111111111111111111111111111111111111111111111111111111
.detail-header .header-group {
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
    margin: 1.06666667rem 0 0;
    z-index: 1;
    position: absolute;
    top: 0;
}
// 1111111111111111111111111111111111111111111111111111111111111111111111111111111111
.detail-header .header-group .header-box {
    width: 3.26666667rem;
    height: 4.33333333rem;
    margin: .05333333rem .53333333rem 0;
    box-shadow: 1px 1px 10px #727272;
    background-color: #e7d9b8
}

.detail-header .header-group .header-box .header-pic {
    width: 3.26666667rem;
    height: 4.33333333rem;
    margin: -.05333333rem 0 0 -.05333333rem;
    background-repeat: no-repeat;
    background-position: top;
    background-size: cover;
    box-shadow: -1px 0 5px #939393
}

.detail-header .header-group .header-info {
    max-width: 55%;
    height: 4.33333333rem
}

.detail-header .header-group .header-info .info-title,.detail-header .header-group .header-info .info-type {
    width: 100%;
    margin: .26666667rem 0 0;
    color: #fff;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap
}

.detail-header .header-group .header-info .info-star {
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
    -webkit-box-align: center;
    -webkit-align-items: center;
    align-items: center;
    margin: .66666667rem 0 0
}

.detail-header .header-group .header-info .info-star .star-red {
    width: .37333333rem;
    height: .34666667rem;
    margin: 0 .08rem 0 0;
    background-image: url(../../assets/icon/hongxing.png);
    background-size: contain
}

.detail-header .header-group .header-info .info-star .star-white {
    width: .37333333rem;
    height: .34666667rem;
    margin: 0 .08rem 0 0;
    background-image:url(../../assets/icon/baixing.png);
    background-size: contain
}

.detail-header .header-group .header-info .info-fans {
    margin: .26666667rem 0 0;
    color: #fff
}

.detail-header .no {
    width: 3.46666667rem;
    height: .8rem;
    position: relative;
    margin-left: 6.13333333rem;
    margin-top: -.4rem;
    /* background: url(../asset/detail/detail-vip.9f67ff7f.png) no-repeat; */
    background-size: contain
}

.detail-header .no div {
    width: 3.46666667rem;
    height: .53333333rem
}

.detail-header .yes {
    width: 3.46666667rem;
    height: .8rem;
    position: relative;
    margin-left: 6.13333333rem;
    margin-top: -.4rem;
    /* background: url(../asset/detail/detail-vip-copy.95e68aab.png) no-repeat; */
    background-size: contain
}

.detail-header1 {
    width: 10rem;
    height: 5.98666667rem;
    margin: 0 auto;
    overflow: hidden;
    position: relative
}

.detail-header1 .header-cover1 {
    width: 100%;
    height: 5.98666667rem;
    /* background: url(../asset/detail/img_@2x.2b638692.png); */
    background-repeat: repeat;
    background-size: cover;
    -webkit-filter: blur(50px);
    filter: blur(50px);
    position: absolute;
    z-index: -1;
    left: 0;
    top: 0
}

.detail-header1 .header-group1 {
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
    margin: 1.06666667rem 0 0
}

.detail-header1 .header-group1 .header-box1 {
    width: 3.26666667rem;
    height: 4.33333333rem;
    margin: .05333333rem .53333333rem 0;
    box-shadow: 1px 1px 10px #727272;
    background-color: #e7d9b8
}

.detail-header1 .header-group1 .header-box1 .header-pic1 {
    width: 3.26666667rem;
    height: 4.33333333rem;
    margin: -.05333333rem 0 0 -.05333333rem;
    /* background: url(../asset/detail/img_@2x.2b638692.png); */
    background-repeat: no-repeat;
    background-position: top;
    background-size: cover;
    box-shadow: -1px 0 5px #939393
}

.detail-header1 .header-group1 .header-info1 {
    max-width: 55%;
    height: 4.33333333rem
}

.detail-header1 .header-group1 .header-info1 .info-title1,.detail-header1 .header-group1 .header-info1 .info-type1 {
    width: 100%;
    margin: .26666667rem 0 0;
    color: #fff;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap
}

.detail-header1 .header-group1 .header-info1 .info-star1 {
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
    -webkit-box-align: center;
    -webkit-align-items: center;
    align-items: center;
    margin: .66666667rem 0 0
}

.detail-header1 .header-group1 .header-info1 .info-star1 .star-red1 {
    width: .37333333rem;
    height: .34666667rem;
    margin: 0 .08rem 0 0;
    /* background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAaCAMAAACTisy7AAAAdVBMVEUAAADnNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwyaicm3AAAAJnRSTlMAXVRKMBq3qpmBcU7b0KOSh313Z2FBKSQF78e+r5WOiDg1FRIOCnSKHPMAAACoSURBVCjPfdJXDoMwEEXRAVNCDxBKen/7X2JwMNJosLlfto7mw4V4YRKSsyswuswHULswwtTLbgfo7nbEXG+z1GC1pjHAkvrw06mmLMDLL4k/aAp2cOQRMZN9KcDGJCmHpebWbDU051msZhcnS9hRW2F7YvUCW47Z1mQqMOZYCSw4RgKPHHP8O3mx0bf8BGd/Wj1K6J7sRQFEiqaWN8zYZBd3bDfcjP0ADCA0VTgz3TwAAAAASUVORK5CYII=) no-repeat; */
    background-size: contain
}

.detail-header1 .header-group1 .header-info1 .info-star1 .star-white1 {
    width: .37333333rem;
    height: .34666667rem;
    margin: 0 .08rem 0 0;
    /* background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAaCAMAAACTisy7AAAAbFBMVEUAAAD///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////8+T+BWAAAAI3RSTlMAgKxLLdO2lpOIc2pgU09iQjcpJBoZFQwF8d7HvqWgjXpaSLLbMHUAAAClSURBVCjPfdJZEoMgEEXRFtQYpzhr5uHtf4+RkFR1kOZ+AafgA6C/xmgkqQXIRIwA1IJNWEsF3MNUeq2DzYvZF/MtzRq/4oWt91WkTuAl1/w1GDpAaBfTDIga2Il4PTcXTJPp4bWK3anb04CgpXOtvIJYhYMdBXZqjip0bOJgxvHoYMpsgk2VZ3xKGLYw3dp1WF3c71DbF7LpFMDA9d6zWaMaMr0BfKwwQAvWiXQAAAAASUVORK5CYII=) no-repeat; */
    background-size: contain
}

.detail-header1 .header-group1 .header-info1 .info-fans {
    margin: .26666667rem 0 0;
    color: #fff
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
    position: relative
}

.header-normal .header-back {
    width: .61333333rem;
    height: .34666667rem;
    /* background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAAaCAMAAAD/jJ6+AAAAS1BMVEUAAAAzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzNOfcgEAAAAGHRSTlMA+YTxaxvr3L+mCaqiUUYxJRHYmpKMd14rR8HRAAAAm0lEQVQ4y+2SyQ7CMAxE62xtQ1dW//+XYsURIEw7B8SNOeXNiyLFSfPMeiL3gsDcEjPpEpulY8lBAZnsSCoflJCZ2nJAVAIm9ixpp4rABC8VuayEzMDv8dcdQ2xb3f7RONMmHcOG0fscx8Zkw8zlIbq5IjZjGe8QlbDJIUlLoSI264V0Jhpslp7OD7Dmn5/F/kJyu9vJ/PCvTr8DD0sYr/4QOQEAAAAASUVORK5CYII=) no-repeat; */
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

.detail-tab {
    width: 10rem;
    border-bottom: 1px solid #dbd9dc;
    margin: 0 auto
}

.detail-tab,.detail-tab .tab-item {
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
    -webkit-box-align: center;
    -webkit-align-items: center;
    align-items: center;
    height: 1.01333333rem
}

.detail-tab .tab-item {
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
    width: 33%;
    position: relative
}

.detail-tab .tab-border:before {
    content: "";
    width: 0;
    height: .26666667rem;
    border-left: 1px solid #999;
    position: absolute;
    top: .37333333rem;
    right: 0
}

.detail-tab .active {
    color: #e7370c
}

.detail-tab .active:after {
    content: "";
    width: 2.05333333rem;
    height: .18666667rem;
    background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJoAAAAOCAMAAADg1vVwAAAANlBMVEUAAADnNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwxa9CyIAAAAEXRSTlMAvRz5Pu/i0qdvVSsGjYwQD3Xlkk0AAACLSURBVEjHzdNbDoMwDETRsfOAEKCd/W+2tBKy1B8HEChnCVczOEEl4pAoikfUzDDhgCkwVzwgJm4KmhVuUsR1foKfBY1Wflno2xTuxhkN5pG7glutNPKC6y00Cy7xE5hB4dCBxgnt8xOYXN0vGze0z09gUvS//B+6nUpgh4IohJ0SJHYq9Fyt3619AMjKPef4b6ECAAAAAElFTkSuQmCC) no-repeat;
    background-size: contain;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto
}

.detail-summary {
    box-sizing: border-box;
    width: 10rem;
    margin: 0 auto;
    padding: .4rem .33333333rem;
    color: #333;
    line-height: 1.6;
    word-break: break-all;
    border-bottom: 1px solid #ddd
}

.detail-introduce {
    width: 100%
}

.detail-introduce .author {
    width: 10rem;
    margin: 0 auto;
    line-height: 1.8;
    padding: .4rem .33333333rem
}

.introduce {
    box-sizing: border-box;
    width: 10rem;
    margin: 0 auto;
    height: 2.13333333rem;
    border-bottom: 1px solid #ddd
}

.introduce .btna {
    width: 100%;
    height: 1.06666667rem
}

.introduce .btna span {
    line-height: 1.06666667rem;
    color: #222;
    font-size: .37333333rem;
    text: center;
    margin-left: .37333333rem
}

.introduce .btnb {
    width: 100%;
    height: 1.06666667rem
}

.introduce .btnb span {
    line-height: 1.06666667rem;
    color: #222;
    font-size: .37333333rem;
    text: center;
    margin-left: .37333333rem
}

.detail-footern {
    -webkit-box-pack: justify;
    -webkit-justify-content: space-between;
    justify-content: space-between;
    width: 10rem;
    margin: auto;
    border-top: 1px solid #dbd9dc;
    background-color: #fff;
    position: fixed;
    z-index: 999;
    bottom: 0;
    left: 0;
    right: 0
}

.detail-footern,.detail-footern .btn-fav {
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
    -webkit-box-align: center;
    -webkit-align-items: center;
    align-items: center;
    height: 1.17333333rem
}

.detail-footern .btn-fav {
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
    margin: 0 0 0 auto;
    position: relative;
    left: -2rem
}

.detail-footern .btn-fav .icon-love {
    width: .48rem;
    height: .4rem;
    margin: 0 .13333333rem 0 0;
    background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAeCAMAAABzP0xhAAAAkFBMVEUAAADnNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwyBV7cFAAAAL3RSTlMAOmxHCfeo4Bzy59G+eBYGzsKsTiwR7LF1IAsD3NfJoIN8cmdDKLeQWCTDYTSUjUgQiGYAAAFSSURBVDjLfdJXcsMwDATQJSmq9y737sROsve/XeQyTmTLfF/82AGIAXDlbkOP9O2iwlVV2D7phVsXD1KzTrPTXDPYobcLqOenLK2pJW4sm7O2vDzUkdwAG/KoLABlNKNtoZfktB9VRUopmQrcuTbzBIDkEj3R/lyi8YJcxPhjUwKunlXAbtkqMUGv87wO/8Qz7UJy02e+9xbuigIDESUyv0Oy7PDWvg6hF4DaTvHeQoMhEAkYhAQz4PgFg4xwggTrEu9NAx9Lr0Ri+lJZ21BsYbSmQjJ3JjCwHMcCFFcwWFHdtmMYTjDHRez4Lt7oaifGleLBwqhJRoW7M/PR1LThGQ8bNslIJmc7vIfDBE+qkBEGJINPDOznlHjyQW9wbYXHD7wQDtfWY6w1HYERccPDvWUZsokxLqK+ttiSkWEJKfPPfcNUwKBa0fe5qmAmguClzC/qDRvJ5XE+EQAAAABJRU5ErkJggg==) no-repeat;
    background-size: contain
}

.detail-footern .btn-fav .icon-love-solid {
    background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAeCAMAAABzP0xhAAAAdVBMVEUAAADnNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwyaicm3AAAAJnRSTlMA0vPBOXRvaffs6adDHBAIrp1nW1BI4t3axqt+ZBkVCsuyoJiRQkohKG0AAADMSURBVDjLhdLXboQwEEDRCxjTO2wvqfz/J8YhBHnZNXPeRroayYVJcakPfuI1fcmk7Bsv8Q/1pWChd+PsmGN8H//nnebPPRstGrQ9Z3eMyjS2tn2cswqIRkEERSpFaWEWiVre5ahmL0d7fDnySeUo5U2OPL7k6JNcjnKqQGqCCnnVgNFsNx/8unmbR7sxGWJ3Ew/MOnfUsdCuJsQSyo3rf0as9Mk6STqeKG91dsUL15PdnK68FvrLPwtxUsH8pooN5Tk2t3wu2aaC5zU/Ayhuau7Co14AAAAASUVORK5CYII=) no-repeat;
    background-size: contain
}

.detail-footern .btn-fav .btn-text {
    color: #666
}

.detail-footern .btn-readn {
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
    -webkit-box-align: center;
    -webkit-align-items: center;
    align-items: center;
    width: 4rem;
    height: 1.17333333rem;
    background-color: #e7370c
}

.detail-footern .btn-readn .icon-book {
    width: .32rem;
    height: .4rem;
    background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAeBAMAAADEAMPWAAAALVBMVEUAAAD///////////////////////////////////////////////////////+hSKubAAAADnRSTlMA8a0SxG4nGbYl5+SRSkeBIjYAAABTSURBVBjTY+BUfAcFQhMYEt/BgRiDXjsDFFQ8YpArgHHYHzK8Y4CDd8OCYyMH9zcDECNxnhogKQxgQOIY+EEVPUHjyCEr00MyADl4XzGwKcI5ewHsqnKCMHrmgwAAAABJRU5ErkJggg==) no-repeat;
    background-size: contain;
    margin: 0 .18666667rem 0 0
}

.detail-footern .btn-readn .btn-text {
    color: #fff
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

.detail-list {
    box-sizing: border-box;
    -webkit-flex-wrap: wrap;
    flex-wrap: wrap;
    -webkit-box-pack: justify;
    -webkit-justify-content: space-between;
    justify-content: space-between;
    width: 10rem;
    margin: .45333333rem auto .2rem;
    padding: 0 .32rem
}

.detail-list,.detail-list .list-title {
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
    -webkit-box-align: center;
    -webkit-align-items: center;
    align-items: center
}

.detail-list .list-title {
    max-width: 86%
}

.detail-list .list-title .title-title {
    color: #333;
    font-weight: 500
}

.detail-list .list-title .title-sub {
    max-width: 90%;
    color: #8b8b8b;
    font-weight: 500;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap
}

.detail-list .list-btn {
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
    -webkit-box-align: center;
    -webkit-align-items: center;
    align-items: center
}

.detail-list .list-btn .icon-sort-down {
    width: .4rem;
    height: .4rem;
    margin: 0 .13333333rem 0 0;
    background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAMAAAAM7l6QAAAAb1BMVEUAAACLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4tvszYfAAAAJHRSTlMAGQXq+ZNVxkwQ49+ol3/xqwrVOp+MWTsj9Mu+armCMtitRDgVnmRHAAABS0lEQVQoz4VT15LDIAwUiGbce0m7ov//xguMISbOzO0DxTuzXqQVRHAjNQqBWhoO78gqJKI1z9fnhlWWsgpJFIq5I1OFIFQHkksi6blfybMMmLvzyDZkZ/BgBoz9fkBvqQm8pI4dtdRX2bKO5P5fsgwS8HFjzJLynlHM8I7r1s4Cnf+KSjhjLKGkCoCjeEmzS70t/tR2DyaQg6ECIi5XMHp3VEBBBiSpyLbWednt2UyRBE1Bm8+me276Z/YvHhQjDVhH5Vtzd5+b28Wbv0ONIPJAYxvag26dSsjFgR7DA4fKv6J39Euc68nvkw7VrvFgDRa7uDVfQhVIJw8zW/vUiHdFMi3LOPDoAFxZ0qLyYW3aWOEVeWzJCb4lvqH9J7YXmMU4nLDHIYYphQ/TK4qpfohiDLKQBwEmhQ9yxPQ+BtOnIarzvE6G6J8R/ANrOBNetqed8gAAAABJRU5ErkJggg==) no-repeat;
    background-size: contain
}

.detail-list .list-btn .icon-sort-up {
    width: .4rem;
    height: .4rem;
    margin: 0 .13333333rem 0 0;
    background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAMAAAAM7l6QAAAAZlBMVEUAAACLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uX6dTLAAAAIXRSTlMA6gQYVfiSEOOVgMYd8d6oS9SrPAmYyp9POMCMumpaK1fbvA6qAAABRklEQVQoz42T6ZKEIAyEEw4PvMXbufL+L7nADDDqVu1+f5BqjZ3QQIC1SYFSYpG0DM6kComoquvKLKjSoyqQZCO4feSikYQCIiwnyp22JixNgds9C2pPmQYHX2DJ+ifojHqvJ9SV37VENw5lR8nnv5Q5NcL2iZcZCecZScOZ+zRoQutf0QhX9hFGUqYQSg6eoZczez91K5fIoKUGAmPC5v3jqIGGWmNbxOFMzHy2vO1lqTDmCwq1y9p28Pz0MQtOBWAV2ikebn1MzJlXUCHI2stq9g5291YOtfySMfX+0c1XWzkW3279bIv0txs4bPFobdBtYZZu0QwcxtqhMbDlsyH0SclxLNsC981v7FiOQ31O1RZOzw0VFOXwKzmpcKBXVsI0xOGCjUMIEz+r3IYpRnE9VQ5RjEH2+CBHXudr8PrXJfrjCv4AY6QUTU3MWD4AAAAASUVORK5CYII=) no-repeat;
    background-size: contain
}

.detail-list .list-btn .btn-text {
    color: #8b8b8b;
    font-weight: 500
}

.detail-list .list-list {
    -webkit-flex-wrap: wrap;
    flex-wrap: wrap;
    width: 100%;
    margin: .32rem 0 0
}

.detail-list .list-list,.detail-list .list-list .list-item {
    box-sizing: border-box;
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
    -webkit-box-pack: justify;
    -webkit-justify-content: space-between;
    justify-content: space-between;
    -webkit-box-align: center;
    -webkit-align-items: center;
    align-items: center
}

.detail-list .list-list .list-item {
    width: 48%;
    height: .8rem;
    margin: 0 0 .21333333rem;
    padding: 0 .26666667rem;
    border: 1px solid #d8d8d8;
    border-radius: 4px
}

.detail-list .list-list .list-item .item-name {
    max-width: 86%;
    color: #333;
    font-weight: 500;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap
}

.detail-list .list-list .list-item .icon-vip {
    width: .49333333rem;
    height: .30666667rem;
    background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACUAAAAXCAMAAAC78naXAAABa1BMVEUAAABxOiRyOiRxOiT78JNxOiT78JNyOiRxOiRxOiRxOiRxOiRxOiRxOiRxOiRxOiRxOiRxOiRxOiT675L78JNxOiRxOiRxOiT78JNxOiRxOiRxOiT78JP78JNyOyRyOyRxOiRxOiT78JP16I778JNxOiRxOiRxOiSvi1VxOiRxOiRxOiR7SCxxOiRxOiRxOiRxOiTezX378JPezX378JP78JNxOiTt34j78JP78JNxOiRxOiRxOiT78JP78JP78JP78JP78JP5pSv78JNxOiTezX2+pmW7cyj2oyt4QCSwbCdyOiT//vz80pbFeyilYyeARiV8QyV1PST+5L70547l1oObd0n0qD3zoCrvnirhkimzbSeGSiXGr2u2m177ulyRakH4pzF8TC/smyrnlyrRhinLgSjAeCi5cii2cCeqZiegXyacXCaYWCaDSCX+9+v+7dX7yX/7w3HOuXH7v2n5qDLYiymQUyaLTyWR4X0OAAAAQnRSTlMAEe8I/S336g34xJSIU7B3a2gdCKuHg2FQSCb98evm4t3c17q5qZ+OgX1yXVtANiAZ/PDt5Ma2s6ygiYZ8al9HNilOsQ2LAAABxklEQVQoz12Sh1fiQBCHlySQAEYETuz1Tj29s1w/u86GFkAQFEWx997Ln+8MsK7key/vzbx8b7b8lrGWmUAg0M7eGW9AvrF6WrKbtm2XR0XvzsWRrEMzLwE5GhC9f4n6S9MxLLUBSHms2oWWE9gdpphzySuyjger3XScuosgc+KrDMtVDmAk17E+wFFOzBeylvxUD29SnR1hqov4qP19xj+J5RBjar6EZSmvTvR064qieH1NqrDaXgGJNzM2cg6Q2TkPsMnOTg/nns9fG3vdQhs4omFJl5o6gJ30Wl5d9Gg/uzSOfPquC220DMhZJHgBcFOwh9m/6Ir260c0uoqa2ScWHTxGaz2ZOoRMei1pLMSsqObtiMX2d1d4a2NTzRq7BsS+gr104SzC/pDVYXG+bW3xL22+ulxKG3CHo1zzGllWzfKoXplxAojMPR61n6PFLau6Ig8rhtCGToCga2vlNauyezkLGaeUHzNPJ0PhfmFxQu6LmDoFKNzu5drntDpLnpGYwJwpzfBvtB6Kq7xY5MR/s1dlkggFfe2e1bhA3r3EyJ/Gs/5wF5dQjn0ofSTU3BBkQUXRdaVb71EQ+Sac4Ksy6Kt7X2/CR3Vyl/QI5AAAAABJRU5ErkJggg==) no-repeat;
    background-size: contain
}

.detail-list .list-list .list-item .icon-vip-buy {
    width: .48rem;
    height: .30666667rem;
    background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAXCAMAAABUMB2pAAABDlBMVEUAAAAVW1FxOiQ3V0UVW1EVW1E+wm4+wm4VW1FxOiRxOiQ9wW0VW1FeQi8VW1EVW1EVW1E+wm5xOiQ+wm4VW1FxOiRxOiRxOiRxOiRxOiRxOiRxOiRxOiRxOiRxOiQ9wW4+wm5xOiQniV4+wm4YY1MVW1EVW1E+wm4+wm4+wm4+wm5xOiQ+wm75pSv///+6cyh6QSRzOyRMx3mvayeBRiWjYSb//vul47v805XsmyrFeyizbieaWibg9ej+5L561Zv0qD35pzHxnirhkinUiCmGSiX6/vz3/fnZ8+KS3a2E2KNx0pRXyoH7wW37ulznlyrLgSjAeCioZSeOUSX+9+vJ7tb+7dWt5cGa37P7yX+wxz3nAAAALHRSTlMAD4cG7+n37991ZLlrFvjFsKuSTi4rHqaZfVtPOCUNCde7gGRbU0Yv5MagQlNrEbMAAAGdSURBVCjPXZOHUsJAEIbXFEICWMACImCvdxdCaNIUBBWl29//Rby9XAjhm2Qmm/3nm9ztBcDKmKaZgyX7CucQQliVpuu6gyO/3ivbnEo4lW1RTv/Ar5MNrFvZsMp5wre+KlHEaupAGEuoZmmvUmysKhascSJU5T18zgvRvaOuhw4/sNFI4nOmKUQmqBvIqqqPneI+gOr0PFEiquuapm1uxX1nVqhsBcBcUFqfuCbcGkaEkEjsdDu6K1MHniqhOvd0Un101CtCDIMgO+e6TN0NMNRUrAqlnx03AzHeFqES2bmIqlI146Fe0ZnSevWxmL/CfoTfQzYkqe24Fzoqo8pt0W61YytwQzx+GXsgscst8Eg3cFVP9I+LEqlRrYSZGmNv3KhuLsdKBfUxFx3XWLskM5yCBhJljhmxXSlSarP26Ic9P2AmMEEO5zGud+dJ9Zgv6pW9yIz8pmCyne9uOXeGHUy9i4xcnX9GejjBdOGaiNSXzIh9ClRNcRZQJAnvuCDv2PYiWTCCQDC70B9gQVzTdJ1fUU0LnYIwG6uAxz8QQ1JHfy+bOgAAAABJRU5ErkJggg==) no-repeat;
    background-size: contain
}

.detail-list .list-list .list-item .icon-lock {
    width: .26666667rem;
    height: .32rem;
    background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAYCAMAAADNlS1EAAAAQlBMVEUAAAC/v7/d3d3d3d2/v7+/v7+/v7+/v7/d3d2/v7/d3d2/v7+/v7/d3d3d3d2/v7+/v7/d3d3d3d3d3d2/v7/Ozs69KzfkAAAAE3RSTlMAUuYYDvnx0UkU59rYtrWGgjw7CmMyvAAAAH1JREFUGNONz0sOwjAMRdGXxPn1D37sf6tUJQqVjGjvKDkDy8anuuYY81ZxyiUeJXcy9rrWRI5OxI1kqg03chLsyUSuDTPp+pzcMJKCIyFjQ5Iwz5tYvL702/7xBV5NHvqj/ziHMBsMQLiHC7AYVEAtPp4Wr/f01gaUwZxe3ootF/jy9Y/qAAAAAElFTkSuQmCC) no-repeat;
    background-size: contain
}

.detail-list .list-list .list-item .icon-unlock {
    width: .26666667rem;
    height: .34666667rem;
    background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAaCAMAAACAXYxPAAAAP1BMVEUAAADd3d3d3d2/v7+/v7+/v7+/v7+/v7+/v7+/v7/d3d2/v7/d3d3d3d2/v7+/v7/d3d3d3d3d3d3d3d2/v79sbRWSAAAAE3RSTlMA5xgO+fHZ0VNSSRS2tYaC5Dw79FAYcAAAAHxJREFUKM+tz8sOgyAQheEjgyLgpS3n/Z+1k0KM6Rh14b86+TILQC0vwfuwZuwae/7qx51xa9Osd0MUiYPe5oarmkAT1aVhIGNdkQwNPSl1CekbkoSZ2rOYuvJXl6BmFOWgc5ycmww6wN3DGZgNFqBYfH8un2Q7/mYy+kpfaF8YBeXrCXgAAAAASUVORK5CYII=) no-repeat;
    background-size: contain
}

.detail-list .list-list .item-ban {
    color: #c3c3c3;
    background-color: #efefef
}

.detail-list .list-list .item-ban .icon-vip {
    width: .49333333rem;
    height: .30666667rem;
    background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACUAAAAXCAMAAAC78naXAAAAgVBMVEUAAACSkpLHx8dKSkpKSkqurq5xcXFqampLS0tQUFBKSkpKSkpLS0uLi4tVVVVKSkpKSkrHx8dKSkpKSkphYWGZmZl5eXnExMRKSkrFxcVKSkpKSkr7+/tLS0tKSkrh4eGEhITExMTHx8dKSkq6urrHx8fHx8eBgYHHx8fHx8fKysrDrXtxAAAAK3RSTlMATU1MBU1NTUhNKSccTU0hCkk0Dk1NTUxCMy0WTUY7TU04FxJNQz4mHg5NwNkYmwAAAUJJREFUKM9tk+u2QzAQRsfkRlFCldJ7e3ou7/+AJ5M0CVb38iPDt7ZkBoAiN9QQqDeGApYUitg+fN1m0rBbxaZdYtg3vh4l1bsJlrAr3fayOqOqZLCicLLRVblTVbDm7GQtrXlUrWVbeiJHq1K0VhVwC8xorCyjbrDSqerhlBrYuQrJyck2AJVR/QmVw0HrHlHfvpuhDbK9lXFSiWPH+G+PWiNxKE7tUpZX5rjHC6lEj4Kg2LCQlcyo0KoSJpAxc3DV473xbXlYmbIqmcPLpRBL1uFtOoe5WNk1eR67jN9xntKcxRknFnyao75w/kYEFrqxkYkjq+/4Ttnde1ecskDq2pdPIeH3FWWXi1H94CIVzxjnvB9JhZ0UKCUSs36FQW9bUnli76OMSalG0BjpwxwjNf0UVZqe6BrS9zcBH+Fz4M0/9YkT/Ism4fgAAAAASUVORK5CYII=) no-repeat;
    background-size: contain
}

.detail-comment {
    width: 10rem;
    margin: 0 auto
}

.detail-comment .item {
    box-sizing: border-box;
    padding: .29333333rem .42666667rem .42666667rem .34666667rem;
    border-bottom: 1px solid #dbd9dc
}

.detail-comment .item:last-of-type {
    border: none!important
}

.detail-comment .item .item-user {
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
    -webkit-box-align: center;
    -webkit-align-items: center;
    align-items: center
}

.detail-comment .item .item-user .user-pic {
    width: .93333333rem;
    height: .93333333rem;
    background-repeat: repeat;
    background-position: 50%;
    background-size: cover;
    border: 1px solid #ccc;
    border-radius: 50%
}

.detail-comment .item .item-user .user-info {
    margin: 0 0 0 .26666667rem
}

.detail-comment .item .item-user .user-info .info-name {
    color: #666
}

.detail-comment .item .item-user .user-info .info-time {
    color: #999
}

.detail-comment .item .item-content {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 4;
    margin: .21333333rem 0 0 1.2rem;
    overflow: hidden;
    color: #333;
    word-break: break-all
}

.detail-comment .item .item-btn {
    -webkit-box-pack: end;
    -webkit-justify-content: flex-end;
    justify-content: flex-end;
    margin: .4rem 0 0
}

.detail-comment .item .item-btn,.detail-comment .item .item-btn .btn-comment {
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
    -webkit-box-align: center;
    -webkit-align-items: center;
    align-items: center
}

.detail-comment .item .item-btn .btn-comment {
    color: #9b9b9b
}

.detail-comment .item .item-btn .btn-comment .icon-chat {
    width: .32rem;
    height: .32rem;
    margin: 0 .13333333rem 0 0;
    background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAMAAADXqc3KAAAAb1BMVEUAAACbm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5tla/fKAAAAJHRSTlMA8LoOH/qbCI935FL0xLSopYdhKCISk1saFntubEg0MdnSsGkguJjqAAAA10lEQVQoz23SiY6DIBSF4QMFAfel2na6zXLe/xkHkMkY5U+M0U+uCQGps5Ol1qV0CttUx790f/1/f6kp7FMZM42SFBVSjrQnpN4N+Ujfs66wyZLxWdXhvm2hCP/paLGrYQGcKeY9vKivcF4PSd799TzCD79R8ubn9YPBrShmGNsr4M1PaMalfKAgF3yQLTBTeDARhgBtgC/g5KHkFEbJ0Y+SA4yVxQqSI/ZFcGzzoMhXFtCxyYOquWQBF3LIAu5kM+UAlSDbcTJbOBwGaqxbklLh+EQQ64pfmxYTbk/vFYwAAAAASUVORK5CYII=) no-repeat;
    background-size: contain
}

.detail-comment .item .item-btn .btn-love {
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
    -webkit-box-align: center;
    -webkit-align-items: center;
    align-items: center;
    margin: 0 0 0 .4rem;
    color: #9b9b9b
}

.detail-comment .item .item-btn .btn-love .icon-love-red {
    width: .34666667rem;
    height: .29333333rem;
    margin: 0 .13333333rem 0 0;
    background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAWCAMAAADpVnyHAAAAk1BMVEUAAADnNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwzvd1npRR3+8/DylHzpSiP96+f73NT62M/60sj0o5D0n4vtZ0boQRjzGs/1AAAAI3RSTlMA8N55sQsGto02FPfr0MrCpomGai0YEOfUvZqWgnJeVUtBHebndpAAAAC5SURBVCjPbdHZroIwFEbh1QIy6HHWM0/+zvP7P51Ugkjhu9hpspLdJsXJEisTpjj/oZEdZRTSnu4CYKy71xRnaqSyfZXH3hSIrB7C6mgjCNTuG17UsNzkYwDdZtqur5IBtVivpC7YloXHfLxB0ty3u+RzBAvjldXevcLMgF+vHE7K/eFM6hed3fyhEMg3oTT2SkDls1YSng1V+aCmE6o07OC1dxViv0DUlzOIaJq77+nPaTOLTZzxcAM6FjEwUZTKHAAAAABJRU5ErkJggg==) no-repeat;
    background-size: contain
}

.detail-comment .item .item-btn .btn-love .icon-love-grey {
    width: .34666667rem;
    height: .29333333rem;
    margin: 0 .13333333rem 0 0;
    background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAWCAMAAADpVnyHAAAAbFBMVEUAAACbm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5smjuotAAAAI3RSTlMABp8k+fWZKAtTRznt5sqs6NC7pHxO2pSIcVpCMBXCaS8cj4vR0agAAADfSURBVCjPbc/ZkoMgFIThRgEBd41xzzL9/u84EmYqxvhdtfWX1hFeHFWsohjedFOyHgUCK+mpDhAlX4oVXkdG8fYmZbeV7G6ELVgb/zVFDU9TNcwTP9cbSwAtIwQReU3CfOZMIRRj/DHOwLs4DPxBzCuO5gKODZKTFOeYt2QkzTENGqO/oKE+lLR6ioJ2G6TD3pI7lKxf95DLrjxyi5ZZ+IueKoxwuUXELEXQsl7xpinn/y369LN07yexKxM54ZQj7+cllbzgi7ECCTl8FzGqcsmocSKpSLYCZx5F1u/KLxTuD9L/k5YTAAAAAElFTkSuQmCC) no-repeat;
    background-size: contain
}

.detail-comment .comment-send {
    width: 10rem;
    height: 1.33333333rem;
    padding: 0 .4rem;
    background-color: #fff;
    border-top: 1px solid #dbd9dc;
    position: fixed;
    z-index: 999;
    bottom: 0
}

.detail-comment .comment-send,.detail-comment .comment-send .send-input {
    box-sizing: border-box;
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
    -webkit-box-align: center;
    -webkit-align-items: center;
    align-items: center
}

.detail-comment .comment-send .send-input {
    width: 100%;
    height: .93333333rem;
    padding: 0 .18666667rem;
    color: #e7370c;
    border: 1px solid #e7370c;
    border-radius: 6px
}

.detail-comment .comment-send .send-input .icon-chat-red {
    width: .32rem;
    height: .32rem;
    margin: 0 .16rem 0 0;
    background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAMAAADXqc3KAAAAaVBMVEUAAADnNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwwpx2zcAAAAInRSTlMAt6bzHgm6iXdwVyohEvnkAplhm5Lu1cbClY9ORjUfB24i/08i9AAAANhJREFUKM9tkgluxCAQBJvLxgZ8rffMHkn//5EBswlRcEkIDcU0QoA32jbjoE7CevxFS/4idVn/UDyud2+CWwSperzpyFv4KdyF7LDRpz2FqSW3Wqs8F65U6RzJW65Lz5kSePIY8I8H+YTligpBG8e9FgsFRnrAy9YgHA4BppWxdhwx8JVa2WEm53QnARgOUZhNXJMQSZxiFhmjHPAlm88Y1bQxqpmzaLigJgpLsS88+dgVkDxPu0IrrrsCPdlOtcgPdXG1yE9LsThTCWjJQox9baJ8nyxyxzdqvBQsxsL9EQAAAABJRU5ErkJggg==) no-repeat;
    background-size: contain
}

body {
    padding: 0 0 1.17333333rem
}

.detail-footer {
    -webkit-box-pack: justify;
    -webkit-justify-content: space-between;
    justify-content: space-between;
    width: 10rem;
    margin: auto;
    border-top: 1px solid #dbd9dc;
    background-color: #fff;
    position: fixed;
    z-index: 999;
    bottom: 0;
    left: 0;
    right: 0
}

.detail-footer,.detail-footer .btn-fav {
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
    -webkit-box-align: center;
    -webkit-align-items: center;
    align-items: center;
    height: 1.17333333rem
}

.detail-footer .btn-fav {
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
    margin: 0 0 0 auto;
    position: relative;
    left: -2rem
}

.detail-footer .btn-fav .icon-love {
    width: .48rem;
    height: .4rem;
    margin: 0 .13333333rem 0 0;
    background: url('../../assets/icon/jiarushoucang.png') no-repeat;
    background-size: contain
}

.detail-footer .btn-fav .icon-love-solid {
    background: url('../../assets/icon/shixin.png') no-repeat;
    background-size: contain
}

.detail-footer .btn-fav .btn-text {
    color: #666
}

.detail-footer .btn-add {
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
    -webkit-box-align: center;
    -webkit-align-items: center;
    align-items: center;
    height: 1.17333333rem
}

.detail-footer .btn-add .icon-add {
    width: .38666667rem;
    height: .38666667rem;
    margin: 0 .13333333rem 0 0;
    background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB0AAAAdCAMAAABhTZc9AAAAdVBMVEUAAADnNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwyaicm3AAAAJnRSTlMA+NPMBN5GuvXiL2ZLpI5fUUDGv1xODO7rtK2qo4JxUzQlFRGfGYj5K64AAADvSURBVCjPfdPrboMwDIZhO8Q5AKWl0PO2ru323f8lToWqBqLs/Rc9igJKTM/sZiUMnIbF/QiW1cbSq9IAHEWaYbXvJDJgvkesA7yzNM06D66HnYErSrI/QElEBdYptgZAQbSDT2zfANvW40ofcEu8GRx6IocLRbYLdAf43+fRHAmywApoxg0CgpnjF7inMaOqWNOr7rjQCsHpp9/nugO3NGmmZUBPOX0IPimrF5wpq2vER1ZvAe2cmpPqNjnUYKKdTRVCuQR6R0mWo95vksNZ30aSxzV9V/r7RfZNUsWh/P896yxIocl7FnSO3ukc/QGEABN6KeHqWAAAAABJRU5ErkJggg==) no-repeat;
    background-size: contain
}

.detail-footer .btn-add .btn-text {
    color: #666
}

.detail-footer .btn-read {
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
    -webkit-box-align: center;
    -webkit-align-items: center;
    align-items: center;
    width: 4rem;
    height: 1.17333333rem;
    background-color: #e7370c
}

.detail-footer .btn-read .icon-book {
    width: .32rem;
    height: .4rem;
    // background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAeBAMAAADEAMPWAAAALVBMVEUAAAD///////////////////////////////////////////////////////+hSKubAAAADnRSTlMA8a0SxG4nGbYl5+SRSkeBIjYAAABTSURBVBjTY+BUfAcFQhMYEt/BgRiDXjsDFFQ8YpArgHHYHzK8Y4CDd8OCYyMH9zcDECNxnhogKQxgQOIY+EEVPUHjyCEr00MyADl4XzGwKcI5ewHsqnKCMHrmgwAAAABJRU5ErkJggg==) no-repeat;
    background-size: contain;
    margin: 0 .18666667rem 0 0
}

.detail-footer .btn-read .btn-text {
    color: #fff
}

.tips-share {
    background-color: rgba(0,0,0,.6);
    top: 0;
    bottom: 0
}

.tips-share,.tips-share .share-main {
    position: fixed;
    z-index: 999;
    left: 0;
    right: 0
}

.tips-share .share-main {
    box-sizing: border-box;
    padding: 0 4%;
    bottom: .56rem
}

.tips-share .share-main .share-content {
    box-sizing: border-box;
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
    -webkit-flex-wrap: wrap;
    flex-wrap: wrap;
    -webkit-box-align: center;
    -webkit-align-items: center;
    align-items: center;
    width: 100%;
    height: 3.33333333rem;
    margin: 0 0 .4rem;
    padding: .42666667rem .42666667rem .13333333rem;
    background-color: #fff;
    color: #666;
    border-radius: 6px
}

.tips-share .share-main .share-content .share-title {
    width: 100%;
    margin: 0 0 .26666667rem;
    font-weight: 500
}

.tips-share .share-main .share-content .share-group {
    width: 1.41333333rem;
    height: 1.86666667rem;
    margin: 0 .42666667rem 0 0;
    text-align: center
}

.tips-share .share-main .share-content .share-group .share-pic {
    width: 1.33333333rem;
    height: 1.33333333rem;
    margin: 0 auto .13333333rem;
    background-repeat: no-repeat;
    background-size: contain
}

.tips-share .share-main .share-content .share-group .share-qzone {
    background-image: url(data:image/png;base64,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)
}

.tips-share .share-main .share-cancel {
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
    -webkit-box-align: center;
    -webkit-align-items: center;
    align-items: center;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
    width: 100%;
    height: 1.06666667rem;
    color: #333;
    font-weight: 500;
    background-color: #fff;
    border-radius: 6px
}

.tips-share .wechat-share {
    width: 4.92rem;
    height: 2.98666667rem;
    background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAXEAAADgCAMAAADCFKbEAAAAmVBMVEUAAAD////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////VHQRUAAAAMnRSTlMAQH+/EO+fL88gYN9wUAr8jwYCGq4nV0jr89OVhHz3ThSnOsVp55p23NewZQ644zSL7dobjjsAAArzSURBVHja7N3dbtpAEIbhISl/TWNjI2ODMQSC+QkhpO/9X1zlUCVRSc68I1X6nhOED1er0Xh2xmsSWHLTW5s4msM0M3GT1sAgMfHSoXFj4qWkEZ9NfKQ1b2aRiYsOsAB4NXFRAnuAWCmii7QGujT2iiseOkB3z5utSXhboHfLRW4SWlIA+QqogZcfJoHlQJGMgFEMrEwC2wJbq4D5HODeJKhLULENsE0GQDE2CekSVGwCrKy/AJ5MQupdcsL8stQ7gJ8m4SS/gc5lxU9m6SPQVVwJaA3U6eX30cyyqTZ5WOMYRvax4raBhY6DQlqeRpGZ9YGZNSZlxyS8DJiZ+BkCdyZ++trjzjJgYOInncHcxNHDL5WwRET+Z3mld3tXE5UMna2AiYmfR0AVLE8vwNDETRJDrJZ9R5lKh87ugZOJnwoYmfhZAUcTPzNA7fqOohjiZxM3HZ25OdsBPRM/T8DGxE3aBfombs5AYeJnp2kUZ3O9/zgb3jHQ7KyrJEtNRKQtmQ7xfZXEGvzxlAEHEz+vwK2Jm6hQb5CvI1Crb8JPekDDEa4mwELZoaOZPo4VwsNwHH3fGRSrcbxV493tFKB4Ol6venJQZbxl417Mu3pn/9hoi7dsWfDhOu/+USiKt2sT86a7f1nQqK4/nzpVotKeCY3DZtj8yaqCemifrWOgMmnNHoirxP6KzpF9lgyAg07bWjSDRW7fWqLZn5atD4erBZ+U74+Wan1zsPx0eUFaFk/qpw1tDpQmfnKgVqdEENFN72xXki6QmZ17lWriLRtB9/nrvuWjrae6pqN1A6D/zVBbv6thwobLik+AQYHONtt3AvKvW8V1p1gQPWBn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) no-repeat;
    background-size: contain;
    position: fixed;
    z-index: 999;
    top: .53333333rem;
    right: .53333333rem
}

.tips-download {
    background-color: rgba(0,0,0,.5);
    position: fixed;
    z-index: 999
}

.tips-download,.tips-download .tips-main {
    margin: auto;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0
}

.tips-download .tips-main {
    width: 8rem;
    height: 2.66666667rem;
    border-radius: 6px;
    background-color: #fff;
    position: absolute
}

.tips-download .tips-main:before {
    content: "";
    display: block;
    width: 2.33333333rem;
    height: 2.04rem;
    background: url(data:image/png;base64,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) no-repeat;
    background-size: contain;
    position: absolute;
    z-index: 999;
    left: .13333333rem;
    top: -1.6rem
}

.tips-download .tips-main .tips-title {
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
    -webkit-box-align: center;
    -webkit-align-items: center;
    align-items: center;
    height: 1.70666667rem;
    color: #333;
    border-bottom: 1px solid #9d9d9d
}

.tips-download .tips-main .tips-btn {
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
    -webkit-box-pack: justify;
    -webkit-justify-content: space-between;
    justify-content: space-between
}

.tips-download .tips-main .tips-btn .btn {
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
    -webkit-box-align: center;
    -webkit-align-items: center;
    align-items: center;
    width: 50%;
    height: .93333333rem;
    text-align: center;
    color: #333
}

.tips-download .tips-main .tips-btn .btn-ok {
    box-sizing: border-box;
    border-left: 1px solid #9d9d9d
}

@media (orientation: landscape) and (max-width:736px) {
    .comment-send,.detail-comment,.detail-footer,.detail-header,.detail-header-scroll,.detail-list,.detail-summary,.detail-tab,.header-normal,.hot-recommend {
        width:100%!important
    }
}

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

</style>
