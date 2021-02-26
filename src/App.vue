<template>
    <div>
        <div class="menu-bg"></div>
        <div class="header">
            <div class="quick-menu">
                <div class="profile"> 
                    <span>你好啊</span>
                </div>
                <ul class="navbar">
                    <li class="nav-item"> 
                        <router-link class="link" to="/order">我的订单</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="link" to="/cart">
                            <i class="fa fa-shopping-cart"></i>&nbsp;购物车
                        </router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="link" to="/favorite">收藏夹</router-link>
                    </li>
                    <li class="nav-item">
                        <span class="link">商家入口</span>
                    </li>
                </ul>
            </div>
            <div class="search-bar">
                <div class="logo" @click="toHomepage"></div>
                <div class="search-box">
                    <input class="search-input"
                        type="text"
                        placeholder="请输入 商品/店铺">
                    <span class="search-btn">搜&nbsp;&nbsp;索</span>
                </div>
            </div>
        </div>
        <div class="dividor"></div>
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        name: 'App',
        methods: {
            toHomepage () {
                this.$router.push('/')
            }
        }
    }
</script>

<style lang="less" scoped>
    @majorWidth: 1120px;
    .menu-bg {
        position: absolute;
        width: 100%;
        height: 30px;
        background-color: #f2f2f2;
        border-bottom: 1px solid #e5e5e5;
        z-index: -1;
    }
    .header {
        width: @majorWidth;
        margin: 0 auto;
        .quick-menu {
            position: relative;
            font-size: 12px;
            color: #999;
            background-color: #f2f2f2;
            .profile {
                display: inline-block;
                line-height: 30px;
                cursor: pointer;
            }
            .navbar {
                position: absolute;
                right: 0;
                display: inline-block;
                line-height: 30px;
                list-style: none;
                .nav-item {
                    margin-left: 12px;
                    display: inline-block;
                    .link {
                        text-decoration: none;
                        color: #999;
                        outline: none;
                    }
                }
            }
        }
        .search-bar {
            .logo {
                display: inline-block;
                width: 188px;
                height: 75px;
                cursor: pointer;
                background-image: url(./assets/images/logo.png);
                background-repeat: no-repeat;
                background-size: cover;
            }
            .search-box {
                display: block;
                line-height: 100px;
                float: right;
                .search-input {
                    box-sizing: border-box;
                    width: 240px;
                    line-height: 32px;
                    padding-left: 5px;
                    outline: none;
                    border: 2px solid #95bf47;
                    vertical-align: middle;
                }
                .search-btn {
                    display: inline-block;
                    line-height: 36px;
                    padding: 0 16px;
                    color: #fff;
                    font-weight: 600;
                    background-color: #95bf47;
                    vertical-align: middle;
                    cursor: pointer;
                    user-select: none;
                }
            }
        }
    }
    .dividor {
        height: 2px;
        background: #95bf47;
    }
</style>