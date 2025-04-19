function getMax(nums1, nums2) {
  const arrs = []

  function _recurse(arr1, arr2, index, res=[]) {
    const cur = arr1[index]
    res.push(cur)
    if (index >= arr1.length-1) {
      return arrs.push(res)
    }
    const curIndex = arr2.findIndex(i => i == cur)
    if (curIndex != -1) {
      _recurse(arr2, arr1, curIndex+1, [...res])
    }
    _recurse(arr1, arr2, index+1, [...res])
  }

  nums1.length > nums2.length ? _recurse(nums1, nums2, 0) : _recurse(nums2, nums1, 0)

  arrs.push(nums1.length > nums2.length ? nums2 : nums1)

  const sumArr = arrs.reduce((acc, cur) => {
    const sum = cur.reduce((c, next) => c+next, 0)
    acc.push(sum)
    return acc
  }, [])

  return Math.max(...sumArr)
}

// const res = getMax([2,4,5,8,10], [4,6,8,9])
// const res = getMax([1,3,5,7,9], [3,5,100])
// const res = getMax([1,2,3,4,5], [6,7,8,9,10])
// const res = getMax([1,2,3,4,5], [])
// const res = getMax([1,2,3,4,5], [10, 11])

console.log(res);
