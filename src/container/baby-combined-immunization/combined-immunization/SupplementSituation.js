/**
 * Created by jiangyukun on 2017/3/23.
 */
import React from 'react'

import {Item, IconNav, ItemContent} from '../../../component/'
import {getText} from '../../../helper/utils'

class SupplementSituation extends React.Component {
  render() {
    const supplementSituation = this.props.supplementSituation || []

    if (supplementSituation.length == 0) {
      return null
    }

    return (
      <Item className="item-padding">
        <IconNav iconClassName="supplement-icon"/>
        <ItemContent>
          <header>补充接种情况</header>
          {
            supplementSituation.map((item, index) => {
              return (
                <div key={index} className="content-item">
                  <div>
                    {item['inoculated_Vero'] == 'HBV' ? '乙肝疫苗接种时间' : 'HBIG接种时间'}：{getText(item['inoculated_Day'])}
                  </div>
                  <div className="flex mt-7">
                    <div className="flex1">
                      <span>接种剂量：{getText(item['inoculated_Dose'])}</span>
                    </div>
                    <div className="flex1">
                      <span>接种部位：{getText(item['inoculated_Place'])}</span>
                    </div>
                  </div>
                </div>
              )
            })
          }
        </ItemContent>
      </Item>
    )
  }
}

export default SupplementSituation
