import React from 'react'
import pureRender from 'pure-render-decorator'
import classNames from 'classnames/bind'
import styles from './index.css'

let cx = classNames.bind(styles)
@pureRender
class RoleIntro extends React.Component {
  render () {
    let {roleIntro, sceneInfo} = this.props
    let currentRoleIntro = roleIntro.find(v => v.roleId === sceneInfo.selectRoleId)
    if (!currentRoleIntro) {
      currentRoleIntro = roleIntro[0]
    }
    let {imgUrl} = currentRoleIntro
    let stylesObj = {
      backgroundImage: `url(${imgUrl})`
    }
    return (
      <div className={cx('role-intro')} style={stylesObj}>
        <div className={cx('role-intro_descs')}>
          {
            currentRoleIntro.descs.map((v, i) => {
              return (
                <p className={cx('role-intro_desc')} key={i}>{v}</p>
              )
            })
          }
        </div>
      </div>
    )
  }
}

export default RoleIntro
