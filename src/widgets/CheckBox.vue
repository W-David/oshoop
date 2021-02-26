<template>
  <span class="checkbox" 
        :class="{active: value}"
        @click="toggleChecked">
  </span>
</template>
<script>
    export default {
        name: 'Checkbox',
        props: {
            value: {
                type: Boolean,
                default: false
            }
        },
        methods: {
            toggleChecked () {
                this.$emit('input', !this.value) 
                this.$emit('change')
            }
        }
    }
</script>
<style lang="less" scoped>
    @majorColor: green;
    @boxSize: 12px;
    @contentSize: @boxSize * .5;
    @borderWidth: 2px;

    .checkbox {
        position: relative;
        display: inline-block;
        width: @boxSize;
        height: @boxSize;
        box-sizing: border-box;
        border: 1px solid black;
        cursor: pointer;

        &::after {
            content: '';
            display: block;
            position: absolute;
            width: @contentSize;
            height: @contentSize;
            top: (@contentSize - @borderWidth * 2) * 0.5;
            left: (@contentSize - @borderWidth * 2) * 0.5;
        }

        &:hover {
            border-color: @majorColor;
        }
    }

    .checkbox.active {
        border-width: @borderWidth;
        border-color: @majorColor;

        &::after {
            background-color: @majorColor;
        }
    }
</style>