export const extractStocksReal = function (data) {
  const real = {}
  for(var i in data) {
    if(i !== 'fields') {
      real[i] = {}
      data.fields.forEach((field, idx) => {
        real[i][field] = data[i][idx]
      })
    }
  }
  return real
}