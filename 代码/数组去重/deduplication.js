/*
* 数组去重
* 去重表示为key
* */
function dedup (arr, key) {
  let ret = []
  arr.forEach((item, index, self) => {
        let compare = []
        ret.forEach((retitem, retindex, retself) => {
        compare.push(retitem[key])
    })
    if (compare.indexOf(item[key]) === -1) {
      ret.push(item)
    }
  })
  return ret
}

let data = [
  {
    key_id: '001',
    key_name: '1号'
  },
  {
    key_id: '001',
    key_name: '1号'
  },
  {
    key_id: '002',
    key_name: '2号'
  },
  {
    key_id: '002',
    key_name: '2号'
  },
  {
    key_id: '003',
    key_name: '3号'
  },
  {
    key_id: '003',
    key_name: '3号'
  }
]

var res = dedup(data, 'key_id')
console.log(res)