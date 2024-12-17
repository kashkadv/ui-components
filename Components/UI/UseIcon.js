export default function UseIcon({
  id,
  w = "5",
  h = w,
  ...props
}) {
  const link = `/icons/${id}-icon.svg#${id}`

  return (
    <svg
      width={`${0.25 * Number(w)}rem`}
      height={`${0.25 * Number(h)}rem`}
      {...props}
    >
      <use xlinkHref={link} />
    </svg>
  )
}
