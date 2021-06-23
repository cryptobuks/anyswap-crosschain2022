import React, { useEffect, useState } from 'react'
import Farming from '../../components/Farming'
// import { getQueryParam } from '../../utils'
import config from '../../config'
import {VERSION} from '../../config/constant'
import Title from '../../components/Title'
import AppBody from '../AppBody'

import {getPrice} from '../../utils/tools/getPrice'

import farmlist from '../../config/farmlist'

export default function MATICfaring({initialTrade}: {initialTrade?:string}) {
  const [price, setPrice] = useState()
  // console.log(initialTrade)
  useEffect(() => {
    getPrice('ANY').then((res:any) => {
      // console.log(res)
      setPrice(res)
    })
  }, [])
  return (
    <>
      <AppBody>
        <Title title='Stake LP tokens to earn ANY'></Title>
        <Farming
          // initLpToken = {initLpToken}
          initialTrade = {initialTrade}
          CHAINID = {farmlist['MATIC'].chainId}
          FARMTOKEN = {farmlist['MATIC'].farmToken}
          FARMURL = {config.farmUrl + 'farm/matic'}
          // initPairs = {['ANY', 'anyBTC', 'anyETH', 'anyUSDT', 'anyBNB', 'anyFSN']}
          poolCoin = 'ANY'
          blockNumber = {41143}
          price={price}
          version={VERSION.V2}
        />
      </AppBody>
    </>
  )
}