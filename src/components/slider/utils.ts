export const getRandomAnimationType = () => {
  const animations = ['leftRight', 'upDown'] as const
  return animations[Math.floor(Math.random() * animations.length)]
}
