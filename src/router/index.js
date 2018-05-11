import Vue from 'vue'
import Router from 'vue-router'
import Index from '../page/index'
import Survey from '../page/survey'
import Outpatient from '../page/outpatient'
import Desc from '../page/desc'
import DescDetail from '../page/desc-detail'
import DescList from '../page/desc-list'
import Guide from '../page/guide'
import Stop from '../page/stop'
import StopDetail from '../page/stop-detail'
import Lecture from '../page/lecture'
import LectureDetail from '../page/lecture-detail'
import Recruit from '../page/recruit'
import RecruitDetail from '../page/recruit-detail'
import Media from '../page/media'
import MediaDetail from '../page/media-detail'
import Feature from '../page/feature'
import FeatureDetail from '../page/feature-detail'
import Map from '../page/map'
import News from '../page/news'
import NewsDetail from '../page/news-detail'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/index',
      meta: {
        title: '首页'
      }
    },
    {
      path: '/index',
      component: Index,
      meta: {
        title: '首页'
      }
    },
    {
      path: '/survey',
      component: Survey,
      meta: {
        title: '医院概况'
      }
    },
    {
      path: '/outpatient',
      component: Outpatient,
      meta: {
        title: '门诊信息'
      }
    },
    {
      path: '/desc',
      component: Desc,
      meta: {
        title: '专家介绍'
      }
    },
    {
  		path: '/desc-detail',
  		component: DescDetail,
  		meta: {
        title: '专家介绍'
      }
  	},
  	{
  		path: '/desc-list',
  		component: DescList
  	},
  	{
  		path: '/guide',
  		component: Guide,
  		meta: {
        title: '就医指南'
      }
  	},
  	{
  		path: '/stop',
  		component: Stop,
  		meta: {
        title: '停诊信息'
      }
  	},
  	{
  		path: '/stop-detail',
  		component: StopDetail,
  		meta: {
        title: '停诊信息'
      }
  	},
  	{
  		path: '/lecture',
  		component: Lecture,
  		meta: {
        title: '名医讲堂'
      }
  	},
  	{
  		path: '/lecture-detail',
  		component: LectureDetail,
  		meta: {
        title: '名医讲堂详情'
      }
  	},
  	{
  		path: '/recruit',
  		component: Recruit,
  		meta: {
        title: '招聘启示'
      }
  	},
  	{
  		path: '/recruit-detail',
  		component: RecruitDetail,
  		meta: {
        title: '招聘启示详情'
      }
  	},
  	{
  		path: '/media',
  		component: Media,
  		meta: {
        title: '媒体视角'
      }
  	},
  	{
  		path: '/media-detail',
  		component: MediaDetail,
  		meta: {
        title: '媒体视角详情'
      }
  	},
  	{
  		path: '/feature',
  		component:Feature,
  		meta: {
        title: '科室特色'
      }
  	},
  	{
  		path: '/feature-detail',
  		component: FeatureDetail
  	},
  	{
  		path: '/map',
  		component:Map,
  		meta: {
        title: '交通路线'
      }
  	},
  	{
  		path: '/news',
  		component: News,
  		meta: {
        title: '新闻中心'
      }
  	},
  	{
  		path: '/news-detail',
  		component: NewsDetail,
  		meta: {
        title: '新闻中心详情'
      }
  	}
  ]
})
