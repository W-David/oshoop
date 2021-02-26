<template>
    <div class="swiper-container">
        <div class="swiper-img"
             :style="{backgroundImage: 'url(' + curUrl + ')'}">
        </div>
        <div class="swiper-paginator">
            <span v-for="(item, index) in slides"
                  :key="index"
                  class="paginator-item"
                  :class="{'paginator-current': index === value}"
                  @mouseenter="toggleIndex(index)"
                  @mouseleave="initTimer">
            </span>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Swiper',
        data () {
            return {
                timer: null
            }
        },
        props: {
            slides: {
                type: Array,
                validator (arr) {
                    return arr.every(
                        (item) => Object.prototype.toString.call(item) === '[object String]'
                    )
                }
            },
            interval: {
                type: Number,
                default: 5
            },
            value: {
                type: Number,
                default: 0
            }
        },
        methods: {
            initTimer () {
                this.timer = setInterval(() => {
                    this.$emit('input', (this.value + 1) % this.slides.length)
                }, this.interval * 1000)
            },
            toggleIndex (index) {
                this.$emit('input', index)
                clearInterval(this.timer)
            }
        },
        computed: {
            curUrl () {
                return this.slides[this.value]
            }
        },
        mounted () {
            this.$nextTick(function () {
                this.initTimer()
            })
        }
    }
</script>

<style lang="less" scoped>
@listMajorSize: 16px;

.swiper-container {
    position: relative;
    width: 100%;
    height: 100%;

    .swiper-img {
        width: 100%;
        height: 100%;
        background-size: cover;
        background-repeat: no-repeat;
    }

    .swiper-paginator {
        position: absolute;
        bottom: @listMajorSize * 2;
        right: @listMajorSize * 2;
        list-style: none;

        .paginator-item {
            display: inline-block;
            width: @listMajorSize;
            height: @listMajorSize;
            border-radius: 50%;
            background-color: black;
            margin: 0 @listMajorSize * 0.5;
            opacity: 0.3;

            &:hover {
                opacity: 0.65;
            }
        }

        .paginator-current {
            opacity: 0.65;
        }
    }
}
</style>