<template>
	<li class="stock-group-item" :class="type" @click="clickStock">
		<i class="iconfont icon-gupiaozhang"></i>
		<span>{{ stock.Name }}</span>
		<span v-if="real && real.px_change_rate">{{ real.px_change_rate.toFixed(2) + '%' }}</span>
	</li>
</template>

<script>
	export default {
		props: ['stock', 'real'],
		computed: {
			type: function() {
				const rate = this.real && this.real.px_change_rate
				if(!rate) return null
				if(rate > 0) {
					return 'stock-up'
				} else if(rate < 0) {
					return 'stock-down'
				} else {
					return 'fair'
				}
			}
		},
		methods: {
			clickStock() {
				this.$store.dispatch('addTab', {
          label: this.stock.Name,
          key: `Stock-${this.stock.Symbol}`,
          component: 'Stock',
          params: {
            ...this.stock
          }
        })
			}
		}
	}
</script>

<style lang='scss' scoped>
	.stock-group-item {
		display: inline-block;
		min-width: 50%;
	}
</style>