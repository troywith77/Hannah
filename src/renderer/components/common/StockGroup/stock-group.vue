<template>
	<ul class="stock-group">
		<template v-for="stock of stocks">
			<stock-item :stock="stock" :real="real[stock.Symbol]" />			
		</template>
	</ul>
</template>

<script>
	import StockItem from './stock-item.vue'

	import { getStockReal } from '@/services/Stock'

	export default {
		props: ['stocks'],
		data() {
			return {
				real: {}
			}
		},
		mounted() {
			const codes = this.stocks.map(stock => stock.Symbol).join(',')
			getStockReal(codes).then(res => {
				const temp = {}
				Object.keys(res.data.data.snapshot).forEach(item => {
					temp[item] = {}
					res.data.data.snapshot.fields.forEach((field, idx) => {
						temp[item][field] = res.data.data.snapshot[item][idx]
					})
				})
				this.real = temp
			})
		},
		components: {
			StockItem
		}
	}
</script>

<style lang='scss' scoped>
	.stock-group {
		font-size: 12px;
		flex-wrap: wrap;
	}
</style>