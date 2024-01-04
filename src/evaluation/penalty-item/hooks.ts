import { useRouter } from 'uni-mini-router'

export const usePenaltyItem = () => {
  const router = useRouter()

  const handleNavbarRightClick = () => router.push({ name: 'bonus-item-form' })
  return { handleNavbarRightClick }
}
