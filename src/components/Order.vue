<template>
    <div class="content">
        <table class="table-goods" v-if="order.length">
            <colgroup>
                <col name='name' width='480'>
                <col name='price' width='160'>
                <col name='quantity' width='120'>
                <col name='amount' width='160'>
                <col name='action' width='200'>
            </colgroup>
            <thead>
                <tr>
                    <th class="name">商品</th>
                    <th class="price">单价</th>
                    <th class="quantity">数量</th>
                    <th class="amount">金额</th>
                    <th class="action">操作</th>
                </tr>
            </thead>
            <tbody>
                <tr
                    v-for="(item, index) in order" 
                    :key="index">
                    <td class="name single-line" :title="item.text">
                        <img class="thumbnail-goods" :src="item.cover">
                        &nbsp;{{ item.text }}
                    </td>
                    <td class="price">￥{{ item.price }}</td>
                    <td class="quantity">￥{{ item.quantity }}</td>
                    <td class="amount">￥{{ item.price * item.quantity }}</td>
                    <td class="action">
                        <span class="btn-text" @click="drop(index)">退款</span>
                    </td>
                </tr>
            </tbody>
        </table>
        <div class="placeholder" v-else>当前并无订单!快去下单吧~~</div>
    </div>
</template>

<script>
    import store from '@/util/store'
    export default {
        name: 'Order',
        mixins: [store], 
        mounted () {
            this.$nextTick(function () {
                this.getStore()
            })
        },
        methods: {
            drop (index) {
                this.order.splice(index, 1)
                this.setStore()
            }
        }
    }
</script>

<style lang="less" scoped>
@majorWidth: 1120px;

.content {
    width: @majorWidth;
    margin: 0 auto;

    .table-goods {
        width: 100%;
        margin-top: 15px;
        color: #555;
        table-layout: fixed;
        border-collapse: collapse;
        user-select: none;
        cursor: default;

        .single-line {
            white-space: nowrap;
            text-overflow: ellipsis;
            overflow: hidden;
        }

        th {
            line-height: 52px;
        }

        td {
            line-height: 120px;
        }

        th,
        td {
            text-align: left;
            font-size: 16px;
            padding-left: 12px;
        }

        tbody > tr {
            transition: background-color 200ms linear;
            border-top: 1px solid #ebeef5;

            .thumbnail-goods {
                width: 100px;
                vertical-align: middle;
            }

            &:last-child {
                border-bottom: 1px solid #ebeef5;
            }

            &:hover {
                background-color: rgba(149, 191, 103, 0.1);
            }

            .btn-text {
                color: #409eff;
                font-size: 14px;
                cursor: pointer;
            }
        }
    }

    .placeholder {
        color: #555;
        margin: 20px 0;
        text-align: center;
        line-height: 80px;
        font-size: 1.5em;
    }
}
</style>