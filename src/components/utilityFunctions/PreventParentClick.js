const preventParentClick = (fn, defaultOnly) => (e, ...params) => {
  if (e) e.preventDefault()
  if (!defaultOnly && e) e.stopPropagation()
  fn(e, ...params)
}
export default preventParentClick;