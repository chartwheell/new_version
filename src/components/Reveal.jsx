import { useReveal } from '../hooks/useReveal'

/**
 * Wraps a block in the site's scroll reveal. `step` (0-5) reproduces the
 * original's `i % 6` stagger; all timing lives in interactions.css.
 */
export default function Reveal({ as: Tag = 'div', step = 0, className = '', children, ...rest }) {
  const ref = useReveal()
  return (
    <Tag
      ref={ref}
      className={`will-reveal ${className}`.trim()}
      data-step={step || undefined}
      {...rest}
    >
      {children}
    </Tag>
  )
}
