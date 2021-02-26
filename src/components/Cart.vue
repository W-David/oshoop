<template>
    <div class="cart-container" >
        <table class="table-goods" v-if="cart.length">
            <colgroup>
                <col width="480">
                <col width="160">
                <col width="120">
                <col width="160">
                <col width="200">
            </colgroup>
            <thead>
                <tr>
                    <th>
                        <Checkbox 
                            class="checkbox"
                            v-model="isAllChecked"
                            @change="onAllCheckChanged">
                        </Checkbox>
                        宝贝
                    </th>
                    <th>单价</th>
                    <th>数量</th>
                    <th>总价</th>
                    <th>操作</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(item,index) in cart"
                    :key="index">
                    <td class="order-name single-line"
                        :title="item.text">
                        <Checkbox class="checkbox" 
                                v-model="checkedList[index]"
                                @change="onCheckChanged">
                        </Checkbox>
                        <img class="thumbnail-goods" :src="item.cover"/>
                        {{ item.text }}
                    </td>
                    <td class="order-single-price">￥&nbsp;{{ item.price }}</td>
                    <td class="order-quantity">
                        <input class="input-quantity"
                            type="number"
                            v-model="item.quantity"
                            @change="toggleQuantity"
                            min=1/>
                    </td>
                    <td class="order-total-price">￥{{ item.price * item.quantity }}</td>
                    <td class="order-user-action">
                        <span class="btn-action" @click="drop(index)">删除</span>
                    </td>
                </tr>
            </tbody>
        </table>
        <div class="placeholder" v-else>购物车里空空如也吖，快去淘点好东西吧...</div>
        <div class="banner-pay" v-if="cart.length">
            <span class="price-need-pay">￥&nbsp;{{ getTotalPrice() }}</span>
            <span class="btn-pay" @click="payAll">结&nbsp;算</span>
        </div>
    </div>
</template>

<script>
    import Checkbox from '@/widgets/CheckBox'
    import store from '@/util/store'
    export default {
        name: 'Cart',
        components: { Checkbox },
        data () {
            return {
                isAllChecked: false, 
                checkedList: []
            }
        },
        mixins: [store],
        mounted () {
            this.$nextTick(function () {
                this.getStore(),
                this.setCheckedList()
            })
        },
        methods: {
            setCheckedList () {
                this.checkedList = this.cart.map(() => false)
            },
            getTotalPrice () {
                let checkedOrderList = this.cart.filter((item, index) => this.checkedList[index])
                return checkedOrderList.reduce((sum, curItem) => sum + curItem.price * curItem.quantity, 0)
            },
            onCheckChanged () {
                this.isAllChecked = this.checkedList.every(item => item)
            },
            onAllCheckChanged () {
                this.checkedList.fill(this.isAllChecked)
            },
            toggleQuantity () {
                this.setStore()
            },
            drop (index) {
                this.checkedList.splice(index, 1)
                this.cart.splice(index, 1)
                this.setStore()
            },
            payAll () {
                let tempCart = []
                this.checkedList.forEach((isChecked, index) => {
                    isChecked 
                        ? this.order.push(this.cart[index])
                        : tempCart.push(this.cart[index])
                })
                this.cart = tempCart
                this.setCheckedList()
                this.setStore()
            }
        }
    }
</script>

<style lang="less" scoped>
    .cart-container {
        width: 1120px;
        margin: 0 auto;

        .table-goods {
            .checkbox {
                margin-right: 8px;
                vertical-align: middle;
            }

            table-layout: fixed;
            width: 100%;
            margin: 18px 20px;
            color: #1a1a1a;
            border-collapse: collapse;
            text-align: left;

            thead > tr > th {
                height: 50px;
                font-size: 1.2em;
                color: #3f3f3f;
                line-height: 50px;
            }

            tbody > tr {
                &:last-child {
                    border-bottom: 1.5px solid #2f2f2f;
                }

                .sinple-line {
                    white-space: nowrap;
                    text-overflow: ellipsis;
                    overflow: hidden;
                }

                td {
                    height: 120px;
                    line-height: 120px;

                    .thumbnail-goods {
                        width: 50px;
                        vertical-align: middle;
                        user-select: none;
                    }

                    .input-quantity {
                        width: 65px;
                        outline: none;
                        padding: 5px;
                        border: 1px solid #333;
                    }

                    .btn-action {
                        font-size: 1em;
                        color: #409eff;
                        cursor: pointer;

                        &:hover {
                            color: brown;
                        }
                    }
                }

                transition: background-color 250ms linear;
                border-top: 1px solid #2f2f2f;

                &:hover {
                    background-color: rgba(150, 190, 100, 0.2);
                }
            }
        }

        .placeholder {
            color: #4f4f4f;
            font-size: 1.5em;
            margin-top: 50px;
            text-align: center;
        }

        .banner-pay {
            text-align: right;
            padding: 18px 5px;

            .btn-pay {
                display: inline-block;
                margin-left: 10px;
                width: 125px;
                padding: 8px;
                background-color: #95bf47;
                text-align: center;
                color: white;
                border-radius: 5px;
                cursor: pointer;

                &:hover {
                    background-color: yellowgreen;
                }
            }
        }
    }
</style>>