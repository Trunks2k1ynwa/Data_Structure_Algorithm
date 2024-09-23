interface Array<T> {
  groupBy(fn: (item: T) => string): Record<string, T[]>
}

Array.prototype.groupBy = function (fn) {
  const formatList = this.map(item=>[fn(item),item])
  const map = new Map(formatList);
  if(this.length === map.size){
      return Object.fromEntries(map);
  } else {
      for (let key of map.keys()) {
          const listItem = this.filter(item => fn(item) === key)
          map.set(key, listItem)
      }
      return Object.fromEntries(map)
  }
}