import React, { useEffect, useRef, useState } from 'react'
import { View, Video, Image } from '@tarojs/components'
import Taro, { getCurrentInstance } from '@tarojs/taro'
import "./index.less"

export default () => {
  const [state, setState] = useState({
    name: '',
    photos: [],
    videoUrl: '',
    merchantName: '',
    adBanner: '',
    adUrl: '',
  })

  const q = getCurrentInstance().router?.params
  const id = q?.id

  useEffect(() => {
    Taro.request({
      url: 'http://118.25.49.37:8082/share/guest/' + id
      // url: 'http://localhost:8082/share/guest/' + id
    }).then((res: any) => {
      if (res.data.success) {
        let data = res.data.data;
        if (data) {
          setState({ ...data })
        }
        Taro.setNavigationBarTitle({ title: data?.merchantName || '用户不存在' })
      }

    })
  }, [])

  const jump = (url: string) => {
    console.log('jump')
    window.location.href = url
  }

  const ref = useRef()
  return (
    <View className='box'>
      <View>12</View>
      {state.videoUrl &&
      <View className='videoView'>
        <Video
          src={state.videoUrl}
          controls={true}
          showMuteBtn={true}
          enablePlayGesture={true}
          autoplay={true}
          ref={ref}
          showFullscreenBtn={true}
          poster='https://zy46.oss-cn-shanghai.aliyuncs.com/mall/1612502514370-147.png'
          objectFit='contain'
          className='myVideo'
          // direction={90}
          // webkit-playsinline='true'
          // playsinline='true'
          // x5-playsinline
          // x5-video-player-type='h5'
          x5-video-player-type='h5-page'
          // x-webkit-airplay='deny'
          x5-video-player-fullscreen='true'
          // x5-video-orientation='landscape'
          onLoadedMetaData={() => {
          }}
        />
        <Video
          src={state.videoUrl}
          controls={true}
          showMuteBtn={true}
          enablePlayGesture={true}
          autoplay={true}
          ref={ref}
          showFullscreenBtn={true}
          poster='https://zy46.oss-cn-shanghai.aliyuncs.com/mall/1612502514370-147.png'
          objectFit='contain'
          className='myVideo'
          // direction={90}
          // webkit-playsinline='true'
          // playsinline='true'
          x5-playsinline
          // x5-video-player-type='h5'
          // x5-video-player-type='h5-page'
          // x-webkit-airplay='deny'
          x5-video-player-fullscreen='true'
          // x5-video-orientation='landscape'
          onLoadedMetaData={() => {
          }}
        />
        <Video
          src={state.videoUrl}
          controls={true}
          showMuteBtn={true}
          enablePlayGesture={true}
          autoplay={true}
          ref={ref}
          showFullscreenBtn={true}
          poster='https://zy46.oss-cn-shanghai.aliyuncs.com/mall/1612502514370-147.png'
          objectFit='contain'
          className='myVideo'
          // direction={90}
          // webkit-playsinline='true'
          // playsinline='true'
          // x5-playsinline
          // x5-video-player-type='h5'
          // x5-video-player-type='h5-page'
          // x-webkit-airplay='deny'
          // x5-video-player-fullscreen='true'
          // x5-video-orientation='landscape'
          onLoadedMetaData={() => {
          }}
        />
      </View>
      }

      <View>1</View>
      <View className='box'>
        {state.adBanner &&
        <Image src={state.adBanner} className='img' mode='widthFix' onClick={() => jump(state.adUrl)} />
        }
      </View>
      <View className='box'>
        {state.photos.map((it, i) => (<Image key={i} src={it} className='img' mode='widthFix' />))
        }
      </View>


    </View>
  )
}
