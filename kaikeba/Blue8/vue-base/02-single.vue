<template>
    <div>
        {{message}}
    </div>
</template>

<script>
    export default {
        // 单个组件中数据都是函数，而不是html中的对象。
        data() {
            return {
                message: "Hello Message"
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>