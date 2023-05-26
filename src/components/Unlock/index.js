// Write your code here
import {useState} from 'react'
import {
  Container,
  Image,
  Text,
  UnlockButton,
  LockButton,
} from './styledComponents'

const Unlock = () => {
  const [isLocked, setLock] = useState(true)

  const onClickLockButton = () => setLock(prevState => !prevState)

  return isLocked ? (
    <Container>
      <Image
        src="https://assets.ccbp.in/frontend/hooks/lock-img.png"
        className="lock-img"
        alt="lock"
      />
      <Text>Your Device is Locked</Text>
      <UnlockButton type="button" onClick={onClickLockButton}>
        Unlock
      </UnlockButton>
    </Container>
  ) : (
    <Container>
      <Image
        src="https://assets.ccbp.in/frontend/hooks/unlock-img.png"
        className="lock-img"
        alt="unlock"
      />
      <Text>Your Device is Unlocked</Text>
      <LockButton type="button" onClick={onClickLockButton}>
        Lock
      </LockButton>
    </Container>
  )
}

export default Unlock
