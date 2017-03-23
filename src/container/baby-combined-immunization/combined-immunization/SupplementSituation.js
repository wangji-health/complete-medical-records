/**
 * Created by jiangyukun on 2017/3/23.
 */
import React from 'react'

import {Item, IconNav, ItemContent} from '../../../component/'

class SupplementSituation extends React.Component {
  render() {
    return (
      <Item className="item-padding">
        <IconNav iconClassName="supplement-icon"/>
        <ItemContent>
          <header>补充接种情况</header>
          <div className="content-item">
            <div className="mt-7">
              乙肝疫苗接种时间：2017-01-01 15:10
            </div>
            <div className="flex mt-7">
              <div className="flex1">
                <span>接种剂量：200 IU</span>
              </div>
              <div className="flex1">
                <span>接种部位：臀部</span>
              </div>
            </div>
          </div>
          <div className="content-item">
            <div className="mt-7">
              HBIG接种时间：2017-01-01 15:10
            </div>
            <div className="flex mt-7">
              <div className="flex1">
                <span>接种剂量：200 IU</span>
              </div>
              <div className="flex1">
                <span>接种部位：臀部</span>
              </div>
            </div>
          </div>
          <div className="content-item">
            <div className="mt-7">
              HBIG接种时间：2017-01-01 15:10
            </div>
            <div className="flex mt-7">
              <div className="flex1">
                <span>接种剂量：200 IU</span>
              </div>
              <div className="flex1">
                <span>接种部位：臀部</span>
              </div>
            </div>
          </div>
        </ItemContent>
      </Item>
    )
  }
}

export default SupplementSituation