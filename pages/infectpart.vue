<template>
    <div>
        <h3 class="is-3">部位選擇</h3>
        <div class="select is-multiple">
            <div class="control">
                <label class="radio">
                    <input type="radio" name="part" value="leaf" v-model="picked">
                    葉
                </label>
            </br>
                <label class="radio">
                    <input type="radio" name="part" value="leafbase" v-model="picked">
                    葉鞘
                </label>
            </br>
                <label class="radio">
                    <input type="radio" name="part" value="base" v-model="picked">
                    基部
                </label>
            </div>
            <div class="buttons">
                <NuxtLink :to="{name: 'infectimage-category', params: { category:picked } }">
                     <button class="button is-link">確認</button>
                </NuxtLink>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        layout: "infectpart",
        data() {
            return {
                picked:""
            }
        },
    };
</script>