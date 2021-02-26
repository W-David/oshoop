<template>
    <div class="index-container">
        <div class="swiper-bg"
             :style="{backgroundColor: slidesColor[index]}">
        </div>
        <div class="stage">
            <ul class="category-nav">
                <li v-for="(item,index) in navbars"
                    :key="index"
                    class="cate-nav-item">
                    <i class="cate-nav-icon"
                       :class="item.icon"></i>
                    &nbsp;&nbsp;{{item.text}}
                </li>
            </ul>
            <div class="swiper">
                <Swiper :slides="slidesImage"
                        v-model="index"></Swiper>
            </div>
        </div>
        <div class="goods-banner">
            <h1 class="banner-title">今日推荐</h1>
            <ul class="goods-list">
                <li class="goods-card"
                    v-for="(item,index) in goods"
                    :key="index"
                    @click="togglePage(item)">
                    <img :title="item.text"
                         class="goods-cover"
                         :src="item.cover">
                    <div class="goods-profile">
                        <p>{{item.text}}</p>
                        <p class="goods-params">
                            原价：<span class="raw-price">￥{{item.price}}</span>
                            促销价：<span class="online-price">￥{{item.onlinePrice}}</span>
                        </p>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    import Swiper from '@/widgets/Swiper.vue'
    import config from '@/config/config'
    export default {
        name: 'Index',
        components: { Swiper },
        data () {
            return {
                index: 0
            }
        },
        computed: {
            navbars () {
                return config.navbars
            },
            goods () {
                return config.goods
            },
            slidesColor () {
                return config.goods.map((item) => item.color)
            },
            slidesImage () {
                return config.goods.map((item) => item.poster)
            }
        },
        methods: {
            togglePage (item) {
                this.$router.push({ path: 'goods', query: { name: item.name } })
            }
        }
    }
</script>

<style lang="less" scoped>
    @majorHeight: 500px;
    @majorWidth: 1120px;

    .index-container {
        position: relative;
        background-color: #f3f3f3;
        border-bottom: 1px solid yellowgreen;

        .swiper-bg {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: @majorHeight;
        }

        .stage {
            width: @majorWidth;
            height: @majorHeight;
            margin: 0 auto 20px;
            background-color: #888;

            .category-nav {
                display: inline-block;
                position: absolute;
                width: @majorWidth * 0.2;
                height: @majorHeight;
                list-style: none;
                z-index: 1;
                background-color: rgba(0, 0, 0, 0.6);

                .cate-nav-icon {
                    opacity: 0.55;
                }

                .cate-nav-item {
                    padding-left: 12px;
                    line-height: 35.7143px;
                    color: white;
                    cursor: pointer;

                    &:hover {
                        color: #787878;
                        background-color: rgba(0, 0, 0, 0.85);
                    }
                }
            }

            .swiper {
                height: @majorHeight;
                background-color: #e8e8e8;
            }
        }

        .goods-banner {
            margin: 25px auto;
            width: @majorWidth;
            padding: 10px;
            background-color: #f3f3f3;

            .banner-title {
                padding: 10px;
                text-align: center;
            }

            .goods-list {
                list-style-type: none;
                padding: 5px;

                .goods-card {
                    display: inline-block;
                    width: 23.5%;
                    text-align: center;
                    text-overflow: ellipsis;
                    cursor: pointer;
                    padding: 12px;
                    background-color: rgba(0, 0, 0, 0.1);

                    &:hover {
                        background-color: rgba(0, 0, 0, 0.35);
                    }

                    .goods-cover {
                        width: 88%;
                        border-radius: 4px;
                    }

                    .goods-profile {
                        display: inline-block;
                        width: 88%;

                        p:first-child {
                            font-size: 1.5em;
                            color: white;
                        }

                        .goods-params {
                            font-size: 0.85em;
                            color: #555;
                            font-family: Arial, Helvetica, sans-serif;

                            .raw-price {
                                text-decoration: line-through;
                                font-size: 0.7em;
                            }

                            .online-price {
                                color: rgb(222, 10, 0);
                                font-size: 1em;
                            }
                        }
                    }
                }
            }
        }
    }
</style>