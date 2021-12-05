import React, { useState, ReactElement } from 'react'
import Draggable from 'react-draggable'

import { useWindowDimensions } from '../lib/utils'

import styles from '../styles/Dialog.module.scss'

type Props = {
  title?: string
  shown: boolean
  children: any
  titleBarControls?: ReactElement
}

type State = {
  isInactive: boolean
}

const Dialog = (props: Props) => {
  const [state, setState] = useState<State>({
    isInactive: false,
  })

  const veilClick = () => {
    // Flash status bar
    setState({ isInactive: true })
    setTimeout(() => setState({ isInactive: false }), 100)
    setTimeout(() => setState({ isInactive: true }), 200)
    setTimeout(() => setState({ isInactive: false }), 300)
  }

  const { width, height } = useWindowDimensions()

  if (!props.shown) return null

  return (
    <>
      <div className={styles.veil} onClick={veilClick}></div>
      <Draggable
        handle=".title-bar"
        positionOffset={{ x: '-50%', y: '-50%' }}
        disabled={width < 576} // FIXME: Reset dialog to center
      >
        <div className={styles.dialog}>
          <div className="window">
            <div className={"title-bar" + (state.isInactive ? ' inactive' : '')}>
              <div className="title-bar-text">{props.title ? props.title : 'Dialog'}</div>
              <div className="title-bar-controls">
                {props.titleBarControls}
              </div>
            </div>
            <div className="window-body">
              {props.children}
            </div>
          </div>
        </div>
      </Draggable>
    </>
  )
}

export default Dialog
