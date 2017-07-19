<template>
  <div>
    <h1>{{ params.Name }}</h1>
    <ul>
      <li v-for="(key, value) of stock">
        <dl>
          <dt>{{ key }}</dt>
          <dd>{{ value }}</dd>
        </dl>
      </li>
    </ul>
  </div>
</template>

<script>
  import { getStockReal } from '@/services/Stock'
  import { extractStocksReal } from '@/config/helpers'

  let reqParams = 'prod_name,trade_status,update_time,last_px,px_change,px_change_rate,preclose_px,open_px,high_px,low_px,amplitude,turnover_ratio,pe_rate,dyn_pb_rate,market_value,circulation_value,business_amount,business_balance,hq_type_code,securities_type'

  export default {
    props: ['params'],
    data() {
      return {
        stock: {}
      }
    },
    mounted() {
      getStockReal(this.params.Symbol, reqParams).then(res => {
        const real = extractStocksReal(res.data.data.snapshot)
        this.stock = real[this.params.Symbol]
      })
    }
  }
</script>